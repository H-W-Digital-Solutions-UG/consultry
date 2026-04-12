# Suggested Review Comments

Local review notes for:

- `bastion-coop/Polity_MVP#439`
- `bastion-coop/Polity_MVP#440`
- `bastion-coop/Polity_MVP#441`
- `bastion-coop/Polity_MVP#447`

I kept these to high-confidence or clearly actionable comments. Each item includes the file, approximate lines, suggested wording, context, and a likely fix direction.

## PR 439

### 1. Missing `return` after destination wallet lookup failure can panic the Safeheron webhook path

- File: `wallet-infrastructure-service/internal/rest/api/api.go`
- Lines: `2108-2116`
- Suggested comment:

> `GetPolityWallet()` failure now writes a 500 response but does not return, so the next line still dereferences `destinationWallet.RequestID`. If `GetPolityWallet()` returns `(nil, err)`, this path will panic after already writing the error response. Could you restore the early `return` here?

- Context:
  The new error handling block was expanded in this PR, but it dropped the old early return. The current flow is:
  1. `GetPolityWallet(...)` returns an error
  2. the code logs and writes a 500
  3. execution continues into `payload.DestinationAccount = destinationWallet.RequestID`

  That turns a recoverable failure into a nil-pointer crash in the webhook path.

- Potential fix:
  Add `return` immediately after `w.JsonResponse(ctx, resp, fasthttp.StatusInternalServerError)`.

### 2. The new Safeheron dedupe state is process-local, so duplicate protection is lost across restarts or multi-replica deployments

- File: `wallet-infrastructure-service/internal/service/wallets/safeheron/callback/callback.go`
- Lines: `64-70`, `152-165`, `260-317`
- Suggested comment:

> The replay/idempotency map is now stored only in `safeheronCallbackService.deliveryMap`, so duplicate protection is limited to a single process lifetime. If this service runs multiple replicas, or restarts while the provider retries, the same `transaction_id + status` can be processed again. Is that deployment model ruled out for this endpoint? If not, this probably needs shared state (DB/Redis) rather than in-memory dedupe.

- Context:
  The new logic does dedupe correctly inside one process, but it does not survive process boundaries. That means the PR's duplicate/no-op guarantee depends on runtime topology, not just code.

- Potential fix:
  Move the reservation/processed state into a shared store, or explicitly document and enforce single-replica behavior for this webhook.

### 3. The new controller test file does not cover the failing `GetPolityWallet()` branch that was changed here

- File: `wallet-infrastructure-service/internal/rest/api/api_safeheron_notification_test.go`
- Lines: `52-105`
- Suggested comment:

> This new test covers invalid signature rejection, but it does not exercise the changed destination-wallet lookup/error branch in `ProcessSafeheronNotification()`. Please add a regression test for `GetPolityWallet()` returning an error so the 500 path is covered and we do not miss nil-deref regressions here.

- Context:
  This would have caught the missing `return` above.

- Potential fix:
  Add a controller-level test where `ProcessNotification()` yields a payload and `GetPolityWallet()` fails, then assert 500 and no panic.

## PR 440

### 1. Tokens with no mapped authorities still become "authenticated" and can reach `.authenticated()` routes

- File: `user-infrastructure/src/main/kotlin/com/dcs/userinfrastructure/security/JwtAuthenticationFilter.kt`
- Lines: `37-58`
- Supporting config: `user-infrastructure/src/main/kotlin/com/dcs/userinfrastructure/config/SecurityConfiguration.kt` lines `37-42`
- Suggested comment:

> `RoleModel132.authoritiesForJwtRoleClaim()` returns an empty list for blank/unknown roles, but the filter still creates a 3-arg `UsernamePasswordAuthenticationToken` and puts it in the security context. In Spring Security that token is still authenticated, so any route that falls through to `.anyRequest().authenticated()` can be accessed with a valid JWT that has no usable role mapping. Was that intended?

- Context:
  This is especially relevant because not all `/api/v1/**` routes were moved to `hasRole(...)`; some still rely on `.authenticated()`. So the new filter can accidentally widen access for tokens whose `role` claim is missing or unsupported.

- Potential fix:
  Only populate `SecurityContextHolder` when at least one mapped authority exists, or explicitly role-protect the remaining routes that currently depend on `.authenticated()` only.

### 2. Role-based routing is incomplete; some APIs still rely on authentication only

- File: `user-infrastructure/src/main/kotlin/com/dcs/userinfrastructure/config/SecurityConfiguration.kt`
- Lines: `37-42`
- Suggested comment:

> This PR introduces route-level `hasRole(...)` checks, but everything not matched here still falls through to `.anyRequest().authenticated()`. Please confirm that endpoints like `/api/v1/key-exchange/**` and `/api/v1/auction/**` are intentionally excluded from the RBAC model, because otherwise the filter behavior above leaves them weaker than the adviser/avatar/internal routes.

- Context:
  The PR description frames this as a role-hardening change, so the routes still protected by authentication-only stand out as likely gaps.

- Potential fix:
  Add explicit matchers for the remaining `/api/v1/...` controller prefixes, or switch to a deny-by-default model with explicit allowlists.

### 3. The new tests do not cover the empty/unknown-role case that drives the authz gap above

- Files:
  - `user-infrastructure/src/test/kotlin/com/dcs/userinfrastructure/config/JwtAuthenticationFilterTest.kt`
  - `user-infrastructure/src/test/kotlin/com/dcs/userinfrastructure/config/SecurityConfigurationTest.kt`
- Lines:
  - `JwtAuthenticationFilterTest.kt`: `58-120`
  - `SecurityConfigurationTest.kt`: `59-147`
- Suggested comment:

> The new tests cover happy-path `INVESTOR` claims and invalid/expired tokens, but they do not cover the case where JWT parsing succeeds and `role` is blank or unmapped. Please add a regression test for that case, plus one request against an `.authenticated()`-only route, so the intended policy is locked in.

- Context:
  Without this, the current filter/config interaction can regress unnoticed.

- Potential fix:
  Add one filter test with `role = ""` or an unknown role, and one MVC test against a non-`hasRole(...)` endpoint.

## PR 441

### 1. Middleware now converts every auth decoding failure and unexpected bug into `insufficient_role`

- File: `polity_vault/custom_auth/middleware.py`
- Lines: `37-45`, plus `56-71`
- Suggested comment:

> `process_view()` now catches every exception and always returns `insufficient_role_403()`. That means a missing token, malformed JWT, decode failure,  or even an accidental bug inside `get_jwt_user()` all look identical to a real permission failure. Could we narrow this to known auth exceptions and avoid collapsing unexpected errors into `insufficient_role`?

- Context:
  This makes monitoring and debugging harder because invalid authentication and internal failures are now indistinguishable at the HTTP layer.

- Potential fix:
  Catch expected JWT/auth exceptions explicitly and map them intentionally; let unexpected exceptions bubble so they still surface as 500s during development and observability.

### 2. The new security test file only covers `GET` detail ownership; `PUT` and `DELETE` use the same ownership path but are untested

- File: `polity_vault/wallet_credentials/tests/test_wallet_idor_and_security.py`
- Lines: `195-252`, `276-336`
- Related implementation: `polity_vault/wallet_credentials/views.py` lines `209-237`
- Suggested comment:

> The new tests lock in 404 behavior for non-owned `GET` detail requests, but `WalletCreationRequestDetailsView.put()` and `.delete()` now use the same ownership gate and are not covered. Please add one non-owner `PUT` and one non-owner `DELETE` test so the 404 + `trace_id` contract cannot regress on mutating methods.

- Context:
  The read path is protected, but the mutation paths are equally sensitive and were changed in the same PR.

- Potential fix:
  Mirror the existing detail tests with `client.put(...)` and `client.delete(...)` using another user's resource.

## PR 447

### 1. `readNotifications()` now returns `200 []` before authenticating the caller

- File: `user-infrastructure/src/main/kotlin/com/dcs/userinfrastructure/controller/NotificationController.kt`
- Lines: `54-64`
- Suggested comment:

> The new empty-list fast path runs before JWT parsing. That means `POST /api/v1/notifications` with body `[]` now returns `200 OK` even if the caller has no valid `Authorization` header. On `master`, this route always parsed the JWT first. Could you move the auth/JWT extraction above the empty-list shortcut so the endpoint keeps consistent auth behavior?

- Context:
  This is a real behavior regression introduced by the validation cleanup: an authenticated endpoint now has an unauthenticated success path.

- Potential fix:
  Parse and validate the JWT first, then return `ok(emptyList())` if the body is empty.

### 2. `ApiException.path` silently changed from `servletPath` to `requestURI`

- File: `user-infrastructure/src/main/kotlin/com/dcs/userinfrastructure/exception/ApiExceptionHandler.kt`
- Lines: `178-190`
- Suggested comment:

> `buildErrorResponse()` now uses `requestURI` instead of `servletPath` for `ApiException.path`. That is a client-visible contract change that is not called out in the PR description or tests. If this is intentional, can we document it and update downstream expectations? If not, keeping `servletPath` would preserve backward compatibility.

- Context:
  This PR is framed as validation/error-shape hardening, so changing the path field semantics at the same time can surprise clients or tests that already consume the old value.

- Potential fix:
  Restore `servletPath`, or document the contract change and add explicit tests for the new behavior.

### 3. The PR adds notification ownership/auth behavior but only ships a validation-handler test

- Files:
  - `user-infrastructure/src/main/kotlin/com/dcs/userinfrastructure/controller/NotificationController.kt`
  - `user-infrastructure/src/main/kotlin/com/dcs/userinfrastructure/service/NotificationServiceImpl.kt`
  - `user-infrastructure/src/test/kotlin/com/dcs/userinfrastructure/exception/ApiExceptionHandlerValidationTest.kt`
- Lines:
  - `NotificationController.kt`: `53-71`, `98-110`
  - `NotificationServiceImpl.kt`: `80-108`
  - `ApiExceptionHandlerValidationTest.kt`: `31-49`
- Suggested comment:

> This PR changes more than DTO validation: it also adds owner checks to `getNotificationById()` and strict 404 behavior to `readNotification()`, but the only new automated coverage is `ApiExceptionHandlerValidationTest`. Please add focused tests for the new notification authz behavior so these security-sensitive changes are locked in too.

- Context:
  The ownership checks are good changes, but they are currently untested in this PR even though they alter controller/service behavior.

- Potential fix:
  Add service or MVC tests for:
  - another user's notification id -> 404
  - mixed-owned ids in `readNotification()` -> 404
  - authenticated empty list still requires auth after the controller fix above
