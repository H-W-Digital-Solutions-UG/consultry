import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const PRIMARY_HOST = "consultry.de";
const REDIRECT_HOSTS = new Set(["www.consultry.de", "consultry.vercel.app"]);

export function proxy(request: NextRequest) {
  const { nextUrl } = request;
  const hostname = nextUrl.hostname.toLowerCase();

  if (REDIRECT_HOSTS.has(hostname)) {
    const redirectUrl = nextUrl.clone();
    redirectUrl.protocol = "https:";
    redirectUrl.hostname = PRIMARY_HOST;

    return NextResponse.redirect(redirectUrl, 308);
  }

  const response = NextResponse.next();
  const isPreviewHost = hostname.endsWith(".vercel.app") && hostname !== "consultry.vercel.app";

  if (isPreviewHost || process.env.VERCEL_ENV === "preview") {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|icon.png|manifest.webmanifest).*)"],
};
