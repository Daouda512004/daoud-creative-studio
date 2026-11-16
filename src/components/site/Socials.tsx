import { Facebook, Instagram, Send, Youtube } from "lucide-react";
import { contact } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const items = [
  { href: contact.youtube, label: "YouTube", Icon: Youtube },
  { href: contact.facebook, label: "Facebook", Icon: Facebook },
  { href: contact.instagram, label: "Instagram", Icon: Instagram },
  { href: contact.telegram, label: "Telegram", Icon: Send },
];

export function Socials({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface text-foreground/80 transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}
