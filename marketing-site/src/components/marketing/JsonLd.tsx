import type { JsonLdRecord } from "@/lib/structured-data";

type JsonLdProps = {
  data: JsonLdRecord | JsonLdRecord[];
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      type="application/ld+json"
    />
  );
}
