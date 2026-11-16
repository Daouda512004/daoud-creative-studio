import {
  Camera,
  Clapperboard,
  Globe,
  Layers,
  LayoutTemplate,
  Megaphone,
  PenTool,
  Scissors,
  Server,
  Share2,
  ShoppingBag,
  Smartphone,
} from "lucide-react";
import type { ServiceIcon as IconName } from "@/lib/site-data";

const map = {
  globe: Globe,
  smartphone: Smartphone,
  layers: Layers,
  cart: ShoppingBag,
  layout: LayoutTemplate,
  server: Server,
  pen: PenTool,
  megaphone: Megaphone,
  camera: Camera,
  film: Clapperboard,
  scissors: Scissors,
  share: Share2,
} as const;

export function ServiceIcon({ name, className }: { name: IconName; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} strokeWidth={1.7} />;
}
