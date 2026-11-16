import { cn } from "@/lib/utils";

/**
 * Daoud Creative wordmark (white). Rendered as text so it never depends on an
 * external image host. Only place it on dark surfaces.
 */
export function Logo({ className, tagline = false }: { className?: string; tagline?: boolean }) {
  return (
    <span
      role="img"
      aria-label="Daoud Creative"
      className={cn("inline-flex flex-col leading-none text-white", className)}
    >
      <span className="font-display text-xl font-bold tracking-tight">
        Daoud<span className="font-semibold"> Creative</span>
      </span>
      {tagline && (
        <span className="mt-1 text-[0.6rem] font-medium uppercase tracking-[0.2em] text-white/70">
          Studio créatif &amp; digital
        </span>
      )}
    </span>
  );
}
