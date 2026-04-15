import {
  consultingFocusOptions,
  pilotInterestOptions,
  primaryPainOptions,
  teamSizeOptions,
  type ConsultingFocusValue,
  type PilotInterestValue,
  type PrimaryPainValue,
  type TeamSizeValue,
} from "@/lib/waitlist";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const loopsHeaders = (apiKey: string) => ({
  Authorization: `Bearer ${apiKey}`,
  "Content-Type": "application/json",
});

type WaitlistQualifyBody = {
  email?: unknown;
  companyName?: unknown;
  teamSize?: unknown;
  consultingFocus?: unknown;
  primaryPain?: unknown;
  pilotInterest?: unknown;
};

type LoopsFindResponse = Array<{ email?: string }>;

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isAllowedValue<T extends readonly { value: string }[]>(
  value: unknown,
  options: T,
): value is T[number]["value"] {
  return typeof value === "string" && options.some((option) => option.value === value);
}

async function readLoopsError(response: Response) {
  const raw = await response.text().catch(() => "");

  if (!raw) {
    return "loops_request_failed";
  }

  try {
    const parsed = JSON.parse(raw) as { message?: string; error?: string };
    return parsed.message ?? parsed.error ?? raw;
  } catch {
    return raw;
  }
}

export async function POST(request: Request) {
  const apiKey = process.env.LOOPS_API_KEY?.trim();

  if (!apiKey) {
    return Response.json({ error: "waitlist_not_configured" }, { status: 500 });
  }

  let body: WaitlistQualifyBody;

  try {
    body = (await request.json()) as WaitlistQualifyBody;
  } catch {
    return Response.json({ error: "invalid_json" }, { status: 400 });
  }

  const email = isNonEmptyString(body.email) ? body.email.trim().toLowerCase() : "";

  if (!emailPattern.test(email)) {
    return Response.json({ error: "invalid_email" }, { status: 400 });
  }

  const updates: Record<string, string | boolean> = {};

  if (isNonEmptyString(body.companyName)) {
    updates.companyName = body.companyName.trim().slice(0, 160);
  }

  if (body.teamSize !== undefined) {
    if (!isAllowedValue(body.teamSize, teamSizeOptions)) {
      return Response.json({ error: "invalid_team_size" }, { status: 400 });
    }

    updates.teamSize = body.teamSize as TeamSizeValue;
  }

  if (body.consultingFocus !== undefined) {
    if (!isAllowedValue(body.consultingFocus, consultingFocusOptions)) {
      return Response.json({ error: "invalid_consulting_focus" }, { status: 400 });
    }

    updates.consultingFocus = body.consultingFocus as ConsultingFocusValue;
  }

  if (body.primaryPain !== undefined) {
    if (!isAllowedValue(body.primaryPain, primaryPainOptions)) {
      return Response.json({ error: "invalid_primary_pain" }, { status: 400 });
    }

    updates.primaryPain = body.primaryPain as PrimaryPainValue;
  }

  if (body.pilotInterest !== undefined) {
    if (!isAllowedValue(body.pilotInterest, pilotInterestOptions)) {
      return Response.json({ error: "invalid_pilot_interest" }, { status: 400 });
    }

    updates.pilotInterest = body.pilotInterest as PilotInterestValue;
  }

  if (Object.keys(updates).length === 0) {
    return Response.json({ success: true, skipped: true });
  }

  const findResponse = await fetch(
    `https://app.loops.so/api/v1/contacts/find?email=${encodeURIComponent(email)}`,
    {
      headers: loopsHeaders(apiKey),
      cache: "no-store",
    },
  );

  if (!findResponse.ok) {
    return Response.json(
      { error: await readLoopsError(findResponse) },
      { status: findResponse.status },
    );
  }

  const existingContacts = (await findResponse.json().catch(() => [])) as LoopsFindResponse;

  if (!Array.isArray(existingContacts) || existingContacts.length === 0) {
    return Response.json({ error: "contact_not_found" }, { status: 404 });
  }

  const updateResponse = await fetch("https://app.loops.so/api/v1/contacts/update", {
    method: "PUT",
    headers: loopsHeaders(apiKey),
    body: JSON.stringify({
      email,
      ...updates,
    }),
  });

  if (!updateResponse.ok) {
    return Response.json(
      { error: await readLoopsError(updateResponse) },
      { status: updateResponse.status },
    );
  }

  return Response.json({ success: true });
}
