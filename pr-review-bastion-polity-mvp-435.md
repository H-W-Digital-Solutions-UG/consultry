# PR Review Report: `bastion-coop/Polity_MVP#435`

- Source PR: [https://github.com/bastion-coop/Polity_MVP/pull/435](https://github.com/bastion-coop/Polity_MVP/pull/435)
- Reviewed locally against `origin/feat/AB-01/address-book-integration...HEAD`
- Scope: static code review only. I did not post any remote comments.
- Confidence note: I only kept findings that I could validate directly from the changed code paths. I intentionally left out lower-confidence concerns.
- Test note: I did not run the application or automated tests as part of this review.

## Findings

### 1. High - `VITE_USE_MOCK_SERVER=false` never reaches the real MS-backed APIs

- Traceability: `frontend/src/packages/shared/api/mockBaseQueryWrapper.ts` lines `5-58`; `frontend/src/packages/shared/api/lukkaSubscriptionApi.ts` lines `36-63`; `frontend/src/apps/superapp/features/api/hub.ts` lines `36-40` and `266-277`
- What I checked: `withMockCondition()` sets `useMock` from `import.meta.env.VITE_USE_MOCK_SERVER !== 'false'`. When that evaluates to `false`, the wrapper does not call `baseQuery()` at all. Instead it returns hard-coded empty arrays, `{}`, or `{ status: 'mock_success' }`.
- Why this matters: in any environment that sets `VITE_USE_MOCK_SERVER=false`, the new Lukka flows do not talk to the real backend. `getLukkaPlans` resolves to `[]`, and mutations such as `purchaseLukkaPlan` and `createLukkaReport` resolve with synthetic data instead of a real server response.
- Context: the variable name and README text imply that `false` should disable the mock server, but the implementation currently disables the real API path instead.
- Suggestion: make the `false` branch delegate to `baseQuery()` and keep synthetic responses only on the explicit mock path, or rename the flag if the current behavior is intentional.
- Suggested regression test: add a unit test around `withMockCondition()` that proves `VITE_USE_MOCK_SERVER=false` calls `baseQuery()` for both a query endpoint and a mutation endpoint.

### 2. High - Generate report success is shown even when report creation fails

- Traceability: `frontend/src/apps/superapp/components/GenerateReportModal/GenerateReportModal.tsx` lines `124-160`; `frontend/src/apps/superapp/pages/LukkaReports/LukkaReports.tsx` lines `38-46`
- What I checked: `handleGenerate()` calls `onGenerate(newReport)` without awaiting it, then immediately shows a success toast and closes the modal. In the parent page, `handleGenerateReport()` catches `createReport(...).unwrap()` failures and only logs them, so the modal never receives a failure signal.
- Why this matters: a network or backend error still produces a success toast and closes the dialog, which tells the user the report was initiated even though the mutation failed.
- Context: both pieces contribute to the bug. The child always proceeds optimistically, and the parent swallows the mutation failure instead of surfacing it.
- Suggestion: make `onGenerate` return a promise, await it in the modal, only show success/close on resolve, and rethrow or return an error result from the parent mutation handler.
- Suggested regression test: add a component test where `createLukkaReport` rejects and assert that the modal stays open and the success toast is not shown.

### 3. High - Lukka checkout can advance to completed without purchasing anything

- Traceability: `frontend/src/packages/shared/components/SubscriptionFlow/LukkaReportSubscriptionFlow/index.tsx` lines `133-152`; `frontend/src/packages/shared/components/SubscriptionFlow/PaymentMethod/PaymentMethod.tsx` lines `389-396`
- What I checked: on the confirm step, the code only calls `purchasePlan()` if both `selectedPlan` and `selectedMethod` exist. Otherwise it falls through to `handleContinueClick()`, which advances the modal to the loading/completed flow. The payment step's Continue button is always enabled, so there is no guard that forces a wallet/network selection first.
- Why this matters: a user can reach the success/completed state without `purchaseLukkaPlan` ever executing.
- Context: this is not just missing validation copy. It changes behavior by treating "missing payment selection" as a successful purchase path.
- Suggestion: block progression until the payment method is valid, and on confirm refuse to advance when `selectedPlan` or `selectedMethod` is missing.
- Suggested regression test: add a flow test that attempts to confirm a Lukka purchase without selecting a payment method and assert that the screen does not advance to completed.

### 4. High - Wallet subscription review screens are now driven by stale default payment state

- Traceability: `frontend/src/packages/shared/components/SubscriptionFlow/WalletSubscriptionFlow/index.tsx` lines `36-38`, `61-77`, and `97-105`; `frontend/src/packages/shared/components/SubscriptionFlow/PaymentMethod/PaymentMethod.tsx` lines `46-63`, `65-83`, and `161-190`
- What I checked: `WalletSubscriptionFlow` still builds its confirm/success summaries from parent state initialized as `Main Wallet` / `ETH` / `USDT`. But it no longer passes `onWalletChange`, `onNetworkChange`, or `onAssetChange` into `PaymentMethod`. Inside `PaymentMethod`, `selectedWallet` and `selectedNetwork` props are no longer consumed; the component now manages its own local state and only exposes changes through `onPaymentMethodChange`, which the wallet flow does not use.
- Why this matters: the user can change wallet/network inside the payment step, but the review and confirmation data can still show the original default values instead of the actual selection.
- Context: this looks like a refactor regression. The child component was converted to local state, but the parent confirmation model was left on the old lifted-state contract.
- Suggestion: either restore the lifted-state callbacks, or switch `WalletSubscriptionFlow` to consume `onPaymentMethodChange` and render the confirm/success views from the selected payment method object.
- Suggested regression test: add a component test that changes wallet/network in the payment step and asserts that the same selection appears in the confirm screen.

### 5. High - Contact-detail "Remove address" is wired to the favourite-address API instead of a contact-address delete

- Traceability: `frontend/src/apps/uniapp/pages/ContactDetail/ContactDetail.tsx` lines `120-131` and `339-363`; `frontend/src/apps/superapp/pages/ContactDetail/ContactDetail.tsx` lines `119-130` and `338-362`; `frontend/src/packages/shared/api/addressbookApi.ts` lines `114-125`; `frontend/src/packages/shared/api/addressbookMsApi.ts` lines `77-105`
- What I checked: the edit modal's Remove action opens `ViewAddressModal` in delete mode, but confirm calls `deleteFavouriteAddress({ address, asset_symbol })`. That mutation only targets `favourites/address` and only invalidates `GetFavouriteAddresses`. There is no corresponding delete-address mutation in `addressbookMsApi`, and the contact-detail query is not invalidated or updated.
- Why this matters: from the contact-detail page, "Remove address" does not actually remove the address from the contact record. At best it removes a favourite entry; at worst it fails for non-favourited addresses. The success toast still says the address was removed.
- Context: I explicitly searched the address-book API layer for a contact-address delete mutation and did not find one in this branch, which makes the current wiring especially risky.
- Suggestion: introduce or use a real contact-address delete endpoint for contact detail, and invalidate/update `getContactById` after success. If the intended action is only "remove from favourites", the UI text and modal copy should be renamed to match.
- Suggested regression test: add a contact-detail test where Remove deletes an address and the refreshed `getContactById` data no longer contains that row.

### 6. Low - Lukka subscription pages look up provider branding from the wrong provider list

- Traceability: `frontend/src/packages/shared/components/SubscriptionFlow/LukkaReportSubscriptionFlow/index.tsx` lines `74-87` and `156`; `frontend/src/packages/shared/components/Hub/config/hubWalletProviders.ts` lines `142-175` and `342-352`; `frontend/src/packages/shared/components/SubscriptionFlow/FeaturesDetail/index.tsx` lines `131-140`
- What I checked: `LukkaReportSubscriptionFlow` calls `getHubWalletProviders()` and searches for a card with `id === SubscriptionPaymentProviders.Lukka`. That list only contains `DFNS`, `Fireblocks`, and `Safeheron`. The only Lukka entry is in `getHubAnalyticsProviders()`, and that entry gets a random `uuid()` id instead of the stable enum value.
- Why this matters: `provider` resolves to `undefined`, so `headerImg` becomes an empty string on the Lukka feature/confirm screens. `FeaturesDetail` then renders an `<img>` from that empty value instead of the intended Lukka branding.
- Context: this is a smaller UI issue than the flow bugs above, but it is a concrete regression introduced by the new Lukka integration path.
- Suggestion: either add a stable Lukka card keyed by `SubscriptionPaymentProviders.Lukka`, or source Lukka metadata from the analytics-provider list instead of the wallet-provider list.
- Suggested regression test: add a rendering test that verifies the Lukka subscription flow receives a non-empty logo URL.
