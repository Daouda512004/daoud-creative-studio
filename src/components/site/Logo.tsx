import logo from "@/assets/daoud-creative-logo-blanc.png.asset.json";
import logoSlogan from "@/assets/daoud-creative-logo-blanc-slogan.png.asset.json";
import { cn } from "@/lib/utils";

/** The official white Daoud Creative logo. Only place it on dark surfaces. */
export function Logo({ className, tagline = false }: { className?: string; tagline?: boolean }) {
  return (
    <img
      src={tagline ? logoSlogan.url : logo.url}
      alt="Daoud Creative"
      width={828}
      height={tagline ? 184 : 140}
      className={cn("h-8 w-auto", className)}
    />
  );
}
