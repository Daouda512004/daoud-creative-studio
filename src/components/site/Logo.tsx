import { cn } from "@/lib/utils";

export function Logo({ className, tagline = false }: { className?: string; tagline?: boolean }) {
  return (
    <span className={cn("inline-flex flex-col items-start", className)}>
      <span className="inline-flex items-center gap-1.5 font-display font-bold leading-none tracking-tight">
        <span className="rounded-[0.35em] bg-primary px-[0.3em] py-[0.18em] text-primary-foreground">
          Daoud
        </span>
        <span className="text-foreground">
          Creative<span className="text-primary">.</span>
        </span>
      </span>
      {tagline && (
        <span className="tagline mt-2 text-[0.42em] text-foreground/80">
          Capturer. Créer. Inspirer.
        </span>
      )}
    </span>
  );
}
