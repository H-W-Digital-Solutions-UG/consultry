import Image from "next/image";

type TeamCardProps = {
  name: string;
  role: string;
  focus?: string;
  image: {
    src: string;
    alt: string;
  };
};

export function TeamCard({ name, role, image }: TeamCardProps) {
  return (
    <article className="surface-panel group rounded-[var(--consultry-radius-lg)] p-5 text-center transition-transform duration-300 hover:-translate-y-1.5">
      <div className="mx-auto flex w-full max-w-[180px] flex-col items-center">
        <div className="relative h-[76px] w-[76px] overflow-hidden rounded-full border border-[rgba(255,255,255,0.08)] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] transition-transform duration-500 group-hover:scale-[1.02]">
          <Image
            alt={image.alt}
            className="object-cover"
            fill
            sizes="76px"
            src={image.src}
          />
        </div>
        <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[var(--consultry-text-primary)]">
          {name}
        </h3>
        <p className="mt-2 text-sm text-[var(--consultry-text-muted)]">{role}</p>
        <div className="mt-4 flex items-center gap-2">
          <span
            aria-hidden="true"
            className="inline-flex h-[20px] min-w-[20px] items-center justify-center rounded-md border border-[rgba(255,255,255,0.15)] bg-[#0a66c2] px-1.5 text-[10px] font-bold text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
          >
            in
          </span>
          <span
            aria-hidden="true"
            className="inline-flex h-[20px] min-w-[20px] items-center justify-center rounded-md border border-[rgba(255,255,255,0.15)] bg-[rgba(255,255,255,0.08)] px-1.5 text-[10px] font-bold text-white shadow-[0_1px_3px_rgba(0,0,0,0.2)]"
          >
            X
          </span>
        </div>
      </div>
    </article>
  );
}
