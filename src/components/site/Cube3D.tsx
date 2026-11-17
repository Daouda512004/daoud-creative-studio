import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

const faces = ["front", "back", "right", "left", "top", "bottom"] as const;

/** Rotating CSS 3D cube echoing the yellow "Daoud" box of the logo. */
export function Cube3D({
  size = 120,
  tone = "brand",
  reverse = false,
  className,
}: {
  size?: number;
  tone?: "brand" | "ink";
  reverse?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("cube-scene pointer-events-none", className)}
      style={{ "--s": `${size}px` } as CSSProperties}
    >
      <div className={cn("cube", tone === "ink" && "cube-ink", reverse && "cube-reverse")}>
        {faces.map((f) => (
          <span key={f} className={`cube-face cube-${f}`} />
        ))}
      </div>
    </div>
  );
}
