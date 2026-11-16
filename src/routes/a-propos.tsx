import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Eye, Target, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { Highlight } from "@/components/site/Highlight";
import { Logo } from "@/components/site/Logo";
import { PageHero } from "@/components/site/PageHero";
import { SectionHeading } from "@/components/site/SectionHeading";
import reunionHero from "@/assets/reunion-client.jpg";
import { values } from "@/lib/site-data";
import studio from "@/assets/studio-photographe.jpg";
import video from "@/assets/videographie.jpg";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À propos — Daoud Creative | Studio créatif à Dakar" },
      {
        name: "description",
        content:
          "Mission, vision et valeurs de Daoud Creative, marque créative et digitale qui accompagne entreprises, associations et particuliers.",
      },
      { property: "og:title", content: "À propos de Daoud Creative" },
      {
        property: "og:description",
        content: "Notre mission : transformer les idées en créations visuelles et en solutions numériques modernes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const pillars = [
  {
    Icon: Target,
    title: "Notre mission",
    text: "Accompagner les entreprises, associations, organisations et particuliers dans la création, la valorisation et le développement de leur identité visuelle et de leur présence numérique.",
  },
  {
    Icon: Eye,
    title: "Notre vision",
    text: "Faire de Daoud Creative un studio créatif et digital reconnu pour son professionnalisme, son innovation, sa créativité et la qualité de ses réalisations.",
  },
  {
    Icon: Rocket,
    title: "Notre objectif",
    text: "Transformer les idées en créations visuelles et en solutions numériques modernes, efficaces et professionnelles.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        image={reunionHero}
        eyebrow="À propos"
        title={
          <>
            Une marque <Highlight>créative</Highlight>
            <br />
            et digitale.
          </>
        }
        text="Daoud Creative est spécialisée dans le design graphique, le développement web, la photographie, la vidéographie, le montage vidéo et la communication digitale."
      />

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img src={studio} alt="Séance photo en studio" width={1280} height={1600} className="aspect-[3/4] w-full rounded-3xl object-cover" />
          <div className="flex flex-col gap-4 pt-12">
            <img src={video} alt="Tournage vidéo au coucher du soleil" width={1280} height={960} loading="lazy" className="aspect-square w-full rounded-3xl object-cover" />
            <div className="glass grid flex-1 place-items-center rounded-3xl p-5">
              <Logo tagline className="text-xl" />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {pillars.map(({ Icon, title, text }) => (
            <div key={title} className="glass flex gap-5 rounded-3xl p-6">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <Icon className="h-5 w-5" />
              </span>
              <div>
                <h2 className="font-display text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          align="center"
          eyebrow="Nos valeurs"
          title="Ce qui guide chacun de nos projets."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <div key={v.title} className="glass rounded-3xl p-6">
              <span className="font-display text-5xl font-bold text-primary/25">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-6 font-display text-xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button asChild variant="hero" size="xl">
            <Link to="/contact">
              Travailler avec nous <ArrowUpRight />
            </Link>
          </Button>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
