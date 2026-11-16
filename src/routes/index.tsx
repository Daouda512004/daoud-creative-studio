import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { Highlight } from "@/components/site/Highlight";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { Socials } from "@/components/site/Socials";
import { contact, projects, services, steps } from "@/lib/site-data";
import { cn } from "@/lib/utils";
import studio from "@/assets/studio-photographe.jpg";
import portrait from "@/assets/photographie-portrait.jpg";
import montage from "@/assets/montage-video.jpg";
import social from "@/assets/reseaux-sociaux.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Daoud Creative — Votre partenaire créatif & digital à Dakar" },
      {
        name: "description",
        content:
          "Logos, identités visuelles, sites web, photographie, vidéo et contenus réseaux sociaux. Daoud Creative transforme vos idées en créations qui inspirent.",
      },
      { property: "og:title", content: "Daoud Creative — Votre partenaire créatif & digital" },
      {
        property: "og:description",
        content: "Studio créatif & digital à Dakar : design, web, photo, vidéo et communication digitale.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const marquee = [
  "Identité visuelle",
  "Sites web",
  "Photographie",
  "Vidéographie",
  "Montage vidéo",
  "Réseaux sociaux",
  "Affiches",
  "Plateformes numériques",
];

const stats = [
  { value: "8", label: "expertises réunies sous un même toit" },
  { value: "360°", label: "de l'idée à la diffusion de votre projet" },
  { value: "100%", label: "de créations pensées sur mesure" },
  { value: "1", label: "interlocuteur unique pour tout votre projet" },
];

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-32 md:pt-40">
        <div aria-hidden="true" className="absolute inset-0 bg-grid" />
        <div className="relative mx-auto flex max-w-6xl flex-col items-center px-5 text-center md:px-8">
          <span className="font-display text-sm font-medium text-primary">Studio créatif & digital · Dakar</span>
          <h1 className="mt-6 text-[clamp(2rem,8.6vw,6.5rem)] font-bold leading-[1.05]">
            Votre partenaire
            <br />
            <Highlight className="mt-2 md:mt-4">Créatif & Digital.</Highlight>
          </h1>
          <p className="mt-12 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Nous accompagnons entreprises, associations, organisations et particuliers dans la création
            et la valorisation de leur identité visuelle et de leur présence numérique.
          </p>
          <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <Link to="/contact">
                Démarrer un projet <ArrowUpRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
              <Link to="/realisations">
                Voir nos réalisations <ArrowRight />
              </Link>
            </Button>
          </div>

          {/* Info strip, as on the brand cover */}
          <div className="glass mt-16 grid w-full max-w-5xl grid-cols-1 divide-y divide-border rounded-2xl text-sm md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex flex-col items-center justify-center gap-2 p-5 md:flex-row md:gap-3">
              <Socials />
              <span className="font-medium text-foreground/90">{contact.handle}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-5 text-foreground/90">
              <MapPin className="h-4 w-4 text-primary" /> {contact.city}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 p-5 text-foreground/90">
              {["Web", "Design", "Photo & Vidéo", "IA"].map((t, i) => (
                <span key={t} className="flex items-center gap-2">
                  {i > 0 && <span className="h-1.5 w-1.5 rounded-full bg-primary" />}
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Showcase bento */}
        <div className="relative mx-auto mt-16 grid max-w-7xl grid-cols-2 gap-4 px-5 md:mt-20 md:grid-cols-12 md:px-8">
          <div className="relative col-span-2 overflow-hidden rounded-3xl md:col-span-5 md:row-span-2">
            <img src={studio} alt="Photographe de Daoud Creative en studio" width={1280} height={1600} className="h-full max-h-[34rem] w-full object-cover" />
            <div className="absolute inset-x-4 bottom-4 glass rounded-2xl p-4">
              <p className="tagline text-[0.6rem] text-primary">Capturer</p>
              <p className="mt-1 font-display text-lg font-semibold">Photographie & vidéographie</p>
            </div>
          </div>
          <div className="glass col-span-2 flex flex-col justify-between rounded-3xl p-6 md:col-span-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Créer</span>
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <p className="mt-8 font-display text-3xl font-bold leading-tight md:text-4xl">
              Des idées transformées en <span className="text-primary">créations</span> qui marquent.
            </p>
          </div>
          <div className="relative col-span-1 overflow-hidden rounded-3xl md:col-span-3">
            <img src={portrait} alt="Portrait éditorial en studio" width={1024} height={1280} loading="lazy" className="h-full max-h-72 w-full object-cover" />
          </div>
          <div className="relative col-span-1 overflow-hidden rounded-3xl md:col-span-3">
            <img src={montage} alt="Poste de montage vidéo" width={1280} height={960} loading="lazy" className="h-full max-h-72 w-full object-cover" />
          </div>
          <div className="relative col-span-2 overflow-hidden rounded-3xl md:col-span-4">
            <img src={social} alt="Contenus pour réseaux sociaux" width={1280} height={960} loading="lazy" className="h-full max-h-72 w-full object-cover" />
            <span className="pill-glow absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold">Inspirer</span>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative mt-20 overflow-hidden border-y border-border bg-surface py-5">
          <div className="flex w-max animate-marquee gap-10">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="flex items-center gap-10 font-display text-2xl font-semibold text-foreground/80 md:text-3xl">
                {m}
                <span className="h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Nos services"
            title={<>Tout ce qu'il faut pour <span className="text-primary">briller</span>, au même endroit.</>}
          />
          <Button asChild variant="glass" size="lg" className="self-start md:self-auto">
            <Link to="/services">
              Tous les services <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const featured = i === 0;
            return (
              <Link
                key={s.slug}
                to="/services"
                hash={s.slug}
                className={cn(
                  "group flex flex-col rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1",
                  featured ? "pill-glow" : "glass hover:border-primary/40",
                )}
              >
                <span
                  className={cn(
                    "grid h-12 w-12 place-items-center rounded-2xl",
                    featured ? "bg-ink text-primary" : "bg-primary/10 text-primary",
                  )}
                >
                  <ServiceIcon name={s.icon} className="h-5 w-5" />
                </span>
                <h3 className="mt-8 font-display text-xl font-semibold">{s.title}</h3>
                <p className={cn("mt-2 text-sm leading-relaxed", featured ? "text-primary-foreground/75" : "text-muted-foreground")}>
                  {s.short}
                </p>
                <span className={cn("mt-6 inline-flex items-center gap-1.5 text-sm font-semibold", featured ? "" : "text-primary")}>
                  En savoir plus <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div className="relative">
          <div className="overflow-hidden rounded-3xl">
            <img src={montage} alt="Studio de création de Daoud Creative" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </div>
          <div className="glass absolute -bottom-8 right-4 max-w-[15rem] rounded-2xl p-5 md:-right-6">
            <p className="font-display text-4xl font-bold text-primary">360°</p>
            <p className="mt-1 text-sm text-muted-foreground">Un accompagnement complet, de l'idée à la diffusion.</p>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <Eyebrow>Qui sommes-nous</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
            Transformer les idées en créations <span className="text-primary">modernes</span> et efficaces.
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-semibold">Notre mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Accompagner chaque client dans la création, la valorisation et le développement de son
                identité visuelle et de sa présence numérique.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">Notre vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Devenir un studio créatif reconnu pour son professionnalisme, son innovation et la qualité
                de ses réalisations.
              </p>
            </div>
          </div>
          <Button asChild variant="hero" size="xl" className="mt-10">
            <Link to="/a-propos">
              Découvrir le studio <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto mt-28 grid max-w-7xl grid-cols-2 gap-x-6 gap-y-10 px-5 md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <div key={s.label} className="border-t border-border pt-6">
            <span className="block h-0.5 w-10 -translate-y-[1.6rem] bg-primary" />
            <p className="font-display text-5xl font-bold md:text-6xl">
              {s.value}
              <span className="text-primary">.</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <SectionHeading
          align="center"
          eyebrow="Notre méthode"
          title="Simple, transparent, efficace."
          text="L'écoute de vos besoins, des solutions adaptées et le souci du détail à chaque étape."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="glass group rounded-3xl p-6 transition-colors hover:border-primary/40">
              <span className="font-display text-sm font-semibold text-primary">{s.n}</span>
              <h3 className="mt-10 font-display text-2xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORK PREVIEW */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading eyebrow="Réalisations" title="Un aperçu de notre univers." />
          <Button asChild variant="glass" size="lg" className="self-start md:self-auto">
            <Link to="/realisations">
              Voir tout <ArrowRight />
            </Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {projects.slice(0, 4).map((p) => (
            <Link key={p.title} to="/realisations" className="group relative overflow-hidden rounded-3xl">
              <img src={p.image} alt={p.title} loading="lazy" className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-fade" />
              <div className="absolute inset-x-5 bottom-5">
                <span className="text-xs font-semibold uppercase tracking-widest text-primary">{p.category}</span>
                <p className="mt-1 font-display text-lg font-semibold">{p.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand />

    </>
  );
}
