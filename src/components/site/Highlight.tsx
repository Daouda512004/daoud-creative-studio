import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Solid yellow box, echoing the "Daoud" box of the logo. */
export function Highlight({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "box-decoration-clone rounded-[0.16em] bg-primary px-[0.16em] text-primary-foreground",
        className,
      )}
    >
      {children}
    </span>
  );
}
