import { Camera, Clapperboard, Globe, Layers, Megaphone, PenTool, Scissors, Share2 } from "lucide-react";
import type { ServiceIcon as IconName } from "@/lib/site-data";

const map = {
  pen: PenTool,
  megaphone: Megaphone,
  globe: Globe,
  layers: Layers,
  camera: Camera,
  film: Clapperboard,
  scissors: Scissors,
  share: Share2,
} as const;

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} strokeWidth={1.8} />;
}
