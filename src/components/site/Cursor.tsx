import { cn } from "@/lib/utils";

export function Cursor({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={cn("drop-shadow-[0_6px_10px_oklch(0_0_0/0.5)]", className)}
    >
      <path
        d="M6 4 L42 18 L25 23 L19 42 Z"
        className="fill-ink stroke-paper"
        strokeWidth="3"
        strokeLinejoin="round"
      />
    </svg>
  );
}
