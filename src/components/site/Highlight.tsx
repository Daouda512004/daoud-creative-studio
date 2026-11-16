import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Cursor } from "./Cursor";

/** The signature glowing yellow pill from the brand covers, with a pointer cursor. */
export function Highlight({
  children,
  className,
  cursor = true,
}: {
  children: ReactNode;
  className?: string;
  cursor?: boolean;
}) {
  return (
    <span className={cn("relative inline-block", className)}>
      <span
        aria-hidden="true"
        className="absolute -inset-x-16 inset-y-0 -z-10 bg-halo blur-2xl animate-glow"
      />
      <span className="pill-glow inline-block rounded-[0.35em] px-[0.35em] pb-[0.08em]">
        {children}
      </span>
      {cursor && (
        <Cursor className="absolute -bottom-[0.55em] -right-[0.3em] h-[0.75em] w-[0.75em] animate-float" />
      )}
    </span>
  );
}
