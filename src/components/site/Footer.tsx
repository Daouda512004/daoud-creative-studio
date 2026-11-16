import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, navItems, services } from "@/lib/site-data";
import { Logo } from "./Logo";
import { Socials } from "./Socials";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-surface text-foreground">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-25" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-12 md:px-8">
        <div className="md:col-span-4">
          <Logo tagline className="text-3xl" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-foreground/75">
            Studio créatif & digital basé à Dakar. Nous transformons vos idées en créations
            visuelles et en solutions numériques modernes.
          </p>
          <Socials className="mt-6" />
        </div>

        <div className="md:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Navigation</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navItems.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="text-foreground/75 transition-colors hover:text-brand">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Services</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {services.slice(0, 6).map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services"
                  hash={s.slug}
                  className="text-foreground/75 transition-colors hover:text-brand"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">Contact</h3>
          <ul className="mt-5 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-foreground/75">
              <MapPin className="h-4 w-4 text-brand" /> {contact.city}
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center gap-3 text-foreground/75 transition-colors hover:text-brand"
              >
                <Mail className="h-4 w-4 text-brand" /> {contact.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:+${contact.phoneIntl}`}
                className="flex items-center gap-3 text-foreground/75 transition-colors hover:text-brand"
              >
                <Phone className="h-4 w-4 text-brand" /> {contact.phone}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="relative border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-foreground/70 md:flex-row md:px-8">
          <span>© {new Date().getFullYear()} Daoud Creative. Tous droits réservés.</span>
          <span className="tagline text-[0.65rem] text-foreground/80">Capturer. Créer. Inspirer.</span>
        </div>
      </div>
    </footer>
  );
}
