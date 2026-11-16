import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site-data";
import { Highlight } from "./Highlight";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-16 text-center md:px-16 md:py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-grid" />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-72 w-[40rem] -translate-x-1/2 -translate-y-1/2 bg-halo blur-3xl"
        />
        <div className="relative">
          <h2 className="text-4xl font-bold leading-[1.15] sm:text-5xl md:text-6xl">
            Une idée en tête ?
            <br />
            <Highlight className="mt-3">Parlons-en.</Highlight>
          </h2>
          <p className="mx-auto mt-10 max-w-xl text-muted-foreground md:text-lg">
            Logo, site web, shooting ou vidéo : dites-nous ce dont vous avez besoin, nous revenons
            vers vous rapidement.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Demander un devis <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
