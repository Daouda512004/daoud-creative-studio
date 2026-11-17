import logo from "@/assets/logo-daoud-creative.png";
import logoSlogan from "@/assets/logo-daoud-creative-slogan.png";
import { cn } from "@/lib/utils";

/** Official Daoud Creative logo (black text, yellow box). Use it on light surfaces. */
export function Logo({ className, tagline = false }: { className?: string; tagline?: boolean }) {
  return (
    <img
      src={tagline ? logoSlogan : logo}
      alt="Daoud Creative"
      width={1349}
      height={tagline ? 302 : 226}
      className={cn("h-9 w-auto", className)}
    />
  );
}
