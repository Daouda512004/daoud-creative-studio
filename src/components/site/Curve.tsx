import { cn } from "@/lib/utils";

/** Soft wave that melts a dark photo section into the light section below. */
export function Curve({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "theme-light pointer-events-none absolute inset-x-0 -bottom-px text-background",
        className,
      )}
    >
      <svg viewBox="0 0 1440 110" preserveAspectRatio="none" className="block h-14 w-full md:h-24">
        <path
          d="M0,70 C220,112 420,30 760,52 C1060,72 1250,18 1440,0 L1440,110 L0,110 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
}
