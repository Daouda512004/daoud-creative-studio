import { Link } from "@tanstack/react-router";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact } from "@/lib/site-data";
import { Cube3D } from "./Cube3D";

export function CtaBand() {
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8">
      <div className="reveal-3d relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 text-center text-primary-foreground shadow-glow md:px-16 md:py-24">
        <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-70" />
        <Cube3D
          size={110}
          tone="ink"
          className="absolute -left-6 top-10 hidden opacity-90 md:block"
        />
        <Cube3D
          size={70}
          tone="ink"
          reverse
          className="absolute bottom-10 right-10 hidden md:block"
        />
        <div className="relative">
          <h2 className="text-4xl font-bold leading-[1.15] sm:text-5xl md:text-6xl">
            Une idée en tête ?
            <br />
            <span className="mt-3 inline-block rounded-[0.16em] bg-ink px-[0.16em] text-primary">
              Parlons-en.
            </span>
          </h2>
          <p className="mx-auto mt-10 max-w-xl text-primary-foreground/80 md:text-lg">
            Site web, application mobile, logo ou vidéo : dites-nous ce dont vous avez besoin, nous
            revenons vers vous rapidement.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="ink" size="xl">
              <Link to="/contact">
                Demander un devis <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="line" size="xl">
              <a href={contact.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle /> WhatsApp · {contact.phone}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
