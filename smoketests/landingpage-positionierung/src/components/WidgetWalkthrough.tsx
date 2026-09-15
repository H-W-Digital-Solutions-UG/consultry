import type { CSSProperties, ReactNode } from "react";
import type { WalkthroughController } from "@/lib/useAutoplay";

/** Shared playback chrome; the real mock controls always keep their own focus. */
export function WidgetWalkthrough({ demo, children, observeContent = true }: { demo: WalkthroughController; children: ReactNode; observeContent?: boolean }) {
  const { status } = demo;
  const button = status === "playing" ? "Pause" : status === "paused" ? "Fortsetzen" : status === "complete" ? "Wiederholen" : "Abspielen";
  return (
    <div className="widget-demo" data-status={status} data-step={demo.index + 1} data-running={demo.running}>
      <div className="widget-demo-header">
        <div className="widget-demo-toolbar">
          <p className="widget-demo-status">
            <span className="widget-demo-dot" aria-hidden="true" />
            {status === "manual" ? "Du steuerst" : status === "complete" ? "Ablauf gezeigt" : status === "paused" ? "Ablauf pausiert" : "Beispielablauf"}
            <span className="widget-demo-count">{String(demo.index + 1).padStart(2, "0")} / {String(demo.count).padStart(2, "0")}</span>
          </p>
          <button type="button" className="widget-demo-toggle" onClick={demo.toggle} aria-label={`Beispielablauf: ${button}`}>
            <svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" fill="currentColor">
              {status === "playing" ? <path d="M4 2h3v12H4zM10 2h3v12h-3z" /> : <path d="m4 2 9 6-9 6z" />}
            </svg>
            {button}
          </button>
        </div>
        <p className="widget-demo-caption">
          {status === "manual" ? "Entdeckt die Schritte in eurem Tempo." : demo.label}
        </p>
        <div className="widget-demo-progress" key={`progress-${demo.cycle}-${demo.index}`} aria-hidden="true">
          <span data-complete={status === "complete"} data-current="true">
            <i style={{ "--step-duration": `${demo.duration}ms` } as CSSProperties} />
          </span>
        </div>
      </div>
      <div className="widget-demo-content" onPointerDownCapture={demo.stop} onFocusCapture={demo.stop}>
        {observeContent && <div ref={demo.focusRef} className="widget-demo-focus" aria-hidden="true" />}
        {children}
      </div>
    </div>
  );
}

/** Stack all small sample states in one grid cell to reserve their natural height. */
export function DemoPanels({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`widget-demo-panels ${className}`}>{children}</div>;
}
