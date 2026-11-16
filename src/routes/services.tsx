import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { Highlight } from "@/components/site/Highlight";
import { PageHero } from "@/components/site/PageHero";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { services } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Daoud Creative | Design, web, photo & vidéo" },
      {
        name: "description",
        content:
          "Logos, identités visuelles, affiches, sites web, plateformes numériques, photographie, production audiovisuelle, montage vidéo et contenus réseaux sociaux.",
      },
      { property: "og:title", content: "Les services de Daoud Creative" },
      {
        property: "og:description",
        content: "Design graphique, développement web, photo, vidéo et communication digitale à Dakar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Nos services"
        title={
          <>
            Solutions digitales
            <br />
            <Highlight className="mt-3" cursor={false}>& création visuelle</Highlight>
          </>
        }
        text="Huit expertises complémentaires pour construire, valoriser et faire grandir votre image — en ligne comme hors ligne."
      />

      <section className="mx-auto max-w-7xl space-y-6 px-5 md:px-8">
        {services.map((s, i) => (
          <article
            id={s.slug}
            key={s.slug}
            className="glass grid scroll-mt-28 items-center gap-8 overflow-hidden rounded-[2rem] p-4 md:grid-cols-2 md:p-6"
          >
            <div className={cn("overflow-hidden rounded-3xl", i % 2 === 1 && "md:order-2")}>
              <img
                src={s.image}
                alt={s.title}
                loading={i === 0 ? undefined : "lazy"}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="px-2 pb-4 md:px-6 md:pb-0">
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <ServiceIcon name={s.icon} className="h-5 w-5" />
                </span>
                <span className="font-display text-sm font-semibold text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
              </div>
              <h2 className="mt-6 text-3xl font-bold md:text-4xl">{s.title}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{s.long}</p>
              <ul className="mt-6 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="lg" className="mt-8">
                <Link to="/contact" search={{ service: s.title }}>
                  Demander un devis <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </article>
        ))}
      </section>

      <div className="mt-24">
        <CtaBand />
      </div>
    </>
  );
}
