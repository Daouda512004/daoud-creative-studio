import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { navItems } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b border-border/0 bg-background/80 backdrop-blur-xl transition-all duration-300",
        scrolled || open ? "border-border bg-background/90 shadow-[0_14px_40px_rgba(23,20,18,0.06)]" : "shadow-none",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8">
        <Link to="/" aria-label="Daoud Creative — accueil" onClick={() => setOpen(false)}>
          <Logo className="text-xl md:text-2xl" />
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-border bg-surface/85 p-1 shadow-sm backdrop-blur lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="rounded-full px-4 py-2 text-sm font-medium text-foreground/75 transition-all duration-200 hover:bg-accent hover:text-foreground"
              activeProps={{ className: "bg-primary !text-primary-foreground shadow-sm" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">
              Démarrer un projet <ArrowUpRight />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface text-foreground shadow-sm lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: item.to === "/" }}
                className="border-b border-border py-4 font-display text-2xl font-semibold text-foreground/80"
                activeProps={{ className: "!text-primary-foreground bg-primary" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild variant="hero" size="xl" className="mt-6 w-full">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Démarrer un projet <ArrowUpRight />
            </Link>
          </Button>
        </div>
      )}
    </header>
  );
}
