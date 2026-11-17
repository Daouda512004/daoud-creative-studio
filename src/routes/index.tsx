import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand } from "@/components/site/CtaBand";
import { Highlight } from "@/components/site/Highlight";
import { Eyebrow, SectionHeading } from "@/components/site/SectionHeading";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { Socials } from "@/components/site/Socials";
import { Tilt } from "@/components/site/Tilt";
import { HeroScene } from "@/components/three/HeroScene";
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
          "Sites web, applications mobiles, logos et identités visuelles à Dakar. Daoud Creative transforme vos idées en solutions numériques modernes.",
      },
      { property: "og:title", content: "Daoud Creative — Votre partenaire créatif & digital" },
      {
        property: "og:description",
        content:
          "Studio créatif & digital à Dakar : design, web, photo, vidéo et communication digitale.",
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
      <section className="relative overflow-hidden pt-28 md:pt-32">
        <div aria-hidden="true" className="absolute inset-0 bg-grid" />
        <div
          aria-hidden="true"
          className="absolute -right-40 top-10 h-[34rem] w-[44rem] bg-halo opacity-70 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-4 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="text-center lg:text-left">
            <span className="font-display text-sm font-semibold text-brand">
              Studio créatif & digital · Dakar
            </span>
            <h1 className="mt-6 text-[clamp(2.4rem,4.7vw,4.3rem)] font-bold leading-[1.05]">
              Votre partenaire
              <br />
              <Highlight className="mt-2 md:mt-3">Créatif & Digital.</Highlight>
            </h1>
            <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg lg:mx-0">
              Sites web, applications mobiles et identités visuelles pour les entreprises,
              associations, organisations et particuliers qui veulent une présence numérique
              moderne.
            </p>
            <div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start">
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
          </div>
          <HeroScene className="h-[340px] sm:h-[440px] lg:h-[560px]" />
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 md:px-8">
          {/* Info strip, as on the brand cover */}
          <div className="glass reveal-3d mt-10 grid w-full max-w-5xl grid-cols-1 divide-y divide-border rounded-2xl text-sm md:grid-cols-3 md:divide-x md:divide-y-0">
            <div className="flex flex-col items-center justify-center gap-2 p-5 md:flex-row md:gap-3">
              <Socials />
              <span className="font-medium text-foreground/90">{contact.handle}</span>
            </div>
            <div className="flex items-center justify-center gap-2 p-5 text-foreground/90">
              <MapPin className="h-4 w-4 text-brand" /> {contact.city}
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
          <div className="reveal-3d relative col-span-2 overflow-hidden rounded-3xl md:col-span-5 md:row-span-2">
            <img
              src={studio}
              alt="Photographe de Daoud Creative en studio"
              width={1280}
              height={1600}
              className="h-full max-h-[34rem] w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 glass rounded-2xl p-4">
              <p className="tagline text-[0.6rem] text-brand">Capturer</p>
              <p className="mt-1 font-display text-lg font-semibold">Photographie & vidéographie</p>
            </div>
          </div>
          <div className="glass reveal-3d col-span-2 flex flex-col justify-between rounded-3xl p-6 md:col-span-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Créer</span>
              <Sparkles className="h-5 w-5 text-brand" />
            </div>
            <p className="mt-8 font-display text-3xl font-bold leading-tight md:text-4xl">
              Des idées transformées en <span className="text-brand">créations</span> qui marquent.
            </p>
          </div>
          <div className="reveal-3d relative col-span-1 overflow-hidden rounded-3xl md:col-span-3">
            <img
              src={portrait}
              alt="Portrait éditorial en studio"
              width={1024}
              height={1280}
              loading="lazy"
              className="h-full max-h-72 w-full object-cover"
            />
          </div>
          <div className="reveal-3d relative col-span-1 overflow-hidden rounded-3xl md:col-span-3">
            <img
              src={montage}
              alt="Poste de montage vidéo"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full max-h-72 w-full object-cover"
            />
          </div>
          <div className="reveal-3d relative col-span-2 overflow-hidden rounded-3xl md:col-span-4">
            <img
              src={social}
              alt="Contenus pour réseaux sociaux"
              width={1280}
              height={960}
              loading="lazy"
              className="h-full max-h-72 w-full object-cover"
            />
            <span className="pill-glow absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold">
              Inspirer
            </span>
          </div>
        </div>

        {/* Marquee */}
        <div className="relative mt-20 overflow-hidden border-y border-border bg-surface py-5">
          <div className="flex w-max animate-marquee gap-10">
            {[...marquee, ...marquee].map((m, i) => (
              <span
                key={i}
                className="flex items-center gap-10 font-display text-2xl font-semibold text-foreground/80 md:text-3xl"
              >
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
            title={
              <>
                Tout ce qu'il faut pour <span className="text-brand">briller</span>, au même
                endroit.
              </>
            }
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
              <div key={s.slug} className="reveal-3d">
                <Tilt className="h-full">
                  <Link
                    to="/services"
                    hash={s.slug}
                    className={cn(
                      "group preserve-3d flex h-full flex-col rounded-3xl p-6 transition-colors duration-300",
                      featured ? "pill-glow" : "glass hover:border-primary/40",
                    )}
                  >
                    <span
                      className={cn(
                        "pop-z grid h-12 w-12 place-items-center rounded-2xl",
                        featured ? "bg-ink text-primary" : "bg-primary/10 text-brand",
                      )}
                    >
                      <ServiceIcon name={s.icon} className="h-5 w-5" />
                    </span>
                    <h3 className="mt-8 font-display text-xl font-semibold">{s.title}</h3>
                    <p
                      className={cn(
                        "mt-2 text-sm leading-relaxed",
                        featured ? "text-primary-foreground/75" : "text-muted-foreground",
                      )}
                    >
                      {s.short}
                    </p>
                    <span
                      className={cn(
                        "mt-6 inline-flex items-center gap-1.5 text-sm font-semibold",
                        featured ? "" : "text-brand",
                      )}
                    >
                      En savoir plus{" "}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                </Tilt>
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT SPLIT */}
      <section className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:px-8 lg:grid-cols-2">
        <div className="reveal-3d relative">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src={montage}
              alt="Studio de création de Daoud Creative"
              width={1280}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="glass absolute -bottom-8 right-4 max-w-[15rem] rounded-2xl p-5 md:-right-6">
            <p className="font-display text-4xl font-bold text-brand">360°</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Un accompagnement complet, de l'idée à la diffusion.
            </p>
          </div>
        </div>
        <div className="mt-6 lg:mt-0">
          <Eyebrow>Qui sommes-nous</Eyebrow>
          <h2 className="mt-5 text-3xl font-bold leading-[1.1] sm:text-4xl md:text-5xl">
            Transformer les idées en créations <span className="text-brand">modernes</span> et
            efficaces.
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg font-semibold">Notre mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Accompagner chaque client dans la création, la valorisation et le développement de
                son identité visuelle et de sa présence numérique.
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold">Notre vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Devenir un studio créatif reconnu pour son professionnalisme, son innovation et la
                qualité de ses réalisations.
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
              <span className="text-brand">.</span>
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
            <div key={s.n} className="reveal-3d">
              <Tilt className="h-full">
                <div className="glass preserve-3d h-full rounded-3xl p-6 transition-colors hover:border-primary/60">
                  <span className="pop-z grid h-11 w-11 place-items-center rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
                    {s.n}
                  </span>
                  <h3 className="mt-8 font-display text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </Tilt>
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
            <Tilt key={p.title} className="reveal-3d" max={7}>
              <Link
                to="/realisations"
                className="group relative block overflow-hidden rounded-3xl shadow-soft"
              >
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-fade" />
                <div className="absolute inset-x-5 bottom-5">
                  <span className="text-xs font-semibold uppercase tracking-widest text-brand">
                    {p.category}
                  </span>
                  <p className="mt-1 font-display text-lg font-semibold">{p.title}</p>
                </div>
              </Link>
            </Tilt>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
