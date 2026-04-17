import { permanentRedirect } from "next/navigation";

export default function AgbRedirectPage() {
  permanentRedirect("/legal/agb");
}
