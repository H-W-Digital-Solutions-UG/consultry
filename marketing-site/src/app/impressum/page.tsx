import { permanentRedirect } from "next/navigation";

export default function ImpressumRedirectPage() {
  permanentRedirect("/legal/impressum");
}
