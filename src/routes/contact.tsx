import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/site/Highlight";
import { PageHero } from "@/components/site/PageHero";
import { Socials } from "@/components/site/Socials";
import bureauNuit from "@/assets/bureau-nuit.jpg";
import { contact, services } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): { service?: string } =>
    typeof search["service"] === "string" ? { service: search["service"] } : {},
  head: () => ({
    meta: [
      { title: "Contact — Daoud Creative | Démarrons votre projet" },
      {
        name: "description",
        content:
          "Contactez Daoud Creative à Dakar : daoudcreative@gmail.com, 77 186 29 86 ou sur WhatsApp. Devis rapide pour vos projets.",
      },
      { property: "og:title", content: "Contactez Daoud Creative" },
      {
        property: "og:description",
        content: "Parlez-nous de votre projet de design, site web, photo ou vidéo.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClass =
  "w-full rounded-2xl border border-input bg-surface px-4 py-3.5 text-sm text-foreground placeholder:text-muted-foreground/70 outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30";

function buildMessage(f: { name: string; reach: string; service: string; message: string }) {
  return [
    `Bonjour Daoud Creative, je suis ${f.name}.`,
    f.service ? `Service souhaité : ${f.service}` : "",
    f.message,
    f.reach ? `Me recontacter : ${f.reach}` : "",
  ]
    .filter(Boolean)
    .join("\n\n");
}

function ContactPage() {
  const { service } = Route.useSearch();
  const [form, setForm] = useState({ name: "", reach: "", service: service ?? "", message: "" });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const onWhatsapp = (e: FormEvent) => {
    e.preventDefault();
    const url = `${contact.whatsapp}?text=${encodeURIComponent(buildMessage(form))}`;
    window.open(url, "_blank", "noopener");
  };

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    `Projet${form.service ? ` — ${form.service}` : ""}`,
  )}&body=${encodeURIComponent(buildMessage(form))}`;

  const cards = [
    { Icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { Icon: Phone, label: "Téléphone", value: contact.phone, href: `tel:+${contact.phoneIntl}` },
    { Icon: MessageCircle, label: "WhatsApp", value: contact.phone, href: contact.whatsapp },
    { Icon: MapPin, label: "Adresse", value: contact.city },
  ];

  return (
    <>
      <PageHero
        image={bureauNuit}
        eyebrow="Contact"
        title={
          <>
            Démarrons votre
            <br />
            <Highlight className="mt-3">projet.</Highlight>
          </>
        }
        text="Racontez-nous votre idée. Nous vous répondons avec une proposition adaptée à vos besoins."
      />

      <section className="mx-auto grid max-w-7xl gap-6 px-5 md:px-8 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-2">
          {cards.map(({ Icon, label, value, href }) => {
            const inner = (
              <>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
                  <p className="mt-1 truncate font-display text-lg font-semibold">{value}</p>
                </div>
              </>
            );
            return href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="glass flex items-center gap-4 rounded-3xl p-5 transition-colors hover:border-primary/50"
              >
                {inner}
              </a>
            ) : (
              <div key={label} className="glass flex items-center gap-4 rounded-3xl p-5">
                {inner}
              </div>
            );
          })}
          <div className="glass rounded-3xl p-5">
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Suivez-nous</p>
            <div className="mt-3 flex items-center justify-between gap-3">
              <Socials />
              <span className="text-sm font-medium">{contact.handle}</span>
            </div>
          </div>
        </div>

        <form onSubmit={onWhatsapp} className="glass rounded-[2rem] p-6 md:p-10 lg:col-span-3">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Parlez-nous de votre projet
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Votre message s'ouvre directement dans WhatsApp ou dans votre messagerie.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <label className="flex flex-col gap-2 text-sm font-medium">
              Nom complet
              <input
                required
                value={form.name}
                onChange={set("name")}
                className={fieldClass}
                placeholder="Votre nom"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium">
              Email ou téléphone
              <input
                value={form.reach}
                onChange={set("reach")}
                className={fieldClass}
                placeholder="Pour vous recontacter"
              />
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium sm:col-span-2">
              Service souhaité
              <select value={form.service} onChange={set("service")} className={fieldClass}>
                <option value="">Choisir un service</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Autre">Autre</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm font-medium sm:col-span-2">
              Votre message
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={set("message")}
                className={fieldClass}
                placeholder="Décrivez votre projet, vos délais, votre budget…"
              />
            </label>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button type="submit" variant="hero" size="xl" className="w-full sm:w-auto">
              <MessageCircle /> Envoyer sur WhatsApp
            </Button>
            <Button asChild variant="glass" size="xl" className="w-full sm:w-auto">
              <a href={mailto}>
                <Send /> Envoyer par email
              </a>
            </Button>
          </div>
        </form>
      </section>
    </>
  );
}
