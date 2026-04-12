"use client";

import { useSyncExternalStore } from "react";
import { X } from "lucide-react";
import { announcement } from "@/lib/content/shared";

const storageKey = "consultry:announcement-dismissed:v1";
const announcementEvent = "consultry:announcement-changed";

function subscribe(callback: () => void) {
  if (typeof window === "undefined") {
    return () => undefined;
  }

  const handler = () => callback();

  window.addEventListener("storage", handler);
  window.addEventListener(announcementEvent, handler);

  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(announcementEvent, handler);
  };
}

function getSnapshot() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(storageKey) === "true";
}

export function AnnouncementBar() {
  const dismissed = useSyncExternalStore(subscribe, getSnapshot, () => false);

  if (dismissed) {
    return null;
  }

  return (
    <div className="relative z-50 border-b border-[var(--consultry-border-soft)] bg-[var(--consultry-surface-dark)] shadow-[var(--consultry-shadow-sm)]">
      <div className="content-shell flex min-h-10 items-center justify-center gap-3 px-4 py-2 text-center text-sm text-[var(--consultry-text-secondary)]">
        <a
          className="inline-flex items-center gap-2 hover:text-[var(--consultry-text-primary)]"
          href={announcement.href}
        >
          <span>{announcement.text}</span>
          <span className="font-semibold text-white">{announcement.ctaLabel} →</span>
        </a>
        <button
          aria-label="Hinweis schließen"
          className="absolute right-4 top-1/2 hidden -translate-y-1/2 rounded-full border border-transparent p-1 text-[var(--consultry-text-faint)] transition hover:border-[var(--consultry-border-soft)] hover:text-[var(--consultry-text-primary)] sm:inline-flex"
          onClick={() => {
            window.localStorage.setItem(storageKey, "true");
            window.dispatchEvent(new Event(announcementEvent));
          }}
          type="button"
        >
          <X className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
