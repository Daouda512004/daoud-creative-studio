import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { CtaBand } from "@/components/site/CtaBand";
import { Highlight } from "@/components/site/Highlight";
import { PageHero } from "@/components/site/PageHero";
import equipeHero from "@/assets/equipe-developpeurs.jpg";
import { projects, type ProjectCategory } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — Daoud Creative | Portfolio" },
      {
        name: "description",
        content:
          "Identités visuelles, sites web, photographies, vidéos et campagnes réseaux sociaux réalisés par Daoud Creative.",
      },
      { property: "og:title", content: "Le portfolio de Daoud Creative" },
      {
        property: "og:description",
        content: "Découvrez nos projets en design, web, photo, vidéo et réseaux sociaux.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RealisationsPage,
});

const filters: ("Tout" | ProjectCategory)[] = ["Tout", "Web", "Mobile", "Design", "Photo", "Vidéo"];

function RealisationsPage() {
  const [active, setActive] = useState<(typeof filters)[number]>("Tout");
  const list = active === "Tout" ? projects : projects.filter((p) => p.category === active);

  return (
    <>
      <PageHero
        image={equipeHero}
        eyebrow="Réalisations"
        title={
          <>
            Capturer. Créer.
            <br />
            <Highlight className="mt-3">Inspirer.</Highlight>
          </>
        }
        text="Une sélection de projets qui reflètent notre exigence : des visuels forts, des solutions utiles, un soin du détail constant."
      />

      <section className="mx-auto max-w-7xl px-5 md:px-8">
        <div
          className="flex flex-wrap justify-center gap-2"
          role="tablist"
          aria-label="Filtrer les réalisations"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              role="tab"
              aria-selected={active === f}
              onClick={() => setActive(f)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-all",
                active === f
                  ? "pill-glow border-transparent"
                  : "border-border bg-surface text-muted-foreground hover:text-foreground",
              )}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {list.map((p) => (
            <figure
              key={p.title}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-3xl"
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className={cn(
                  "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                  "aspect-[4/3]",
                )}
              />
              <div className="absolute inset-0 bg-fade opacity-90" />
              <figcaption className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {p.category}
                  </span>
                  <p className="mt-1 font-display text-xl font-semibold">{p.title}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <div className="mt-24">
        <CtaBand />
      </div>
    </>
  );
}
