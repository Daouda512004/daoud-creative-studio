import type { ReactNode } from "react";
import { Eyebrow } from "./SectionHeading";

export function PageHero({ eyebrow, title, text }: { eyebrow: string; title: ReactNode; text: ReactNode }) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
      <div aria-hidden="true" className="absolute inset-0 bg-grid" />
      <div aria-hidden="true" className="absolute left-1/2 top-24 h-64 w-[44rem] -translate-x-1/2 bg-halo blur-3xl opacity-70" />
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-5 text-center md:px-8">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="mt-6 text-4xl font-bold leading-[1.1] sm:text-5xl md:text-7xl">{title}</h1>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">{text}</p>
      </div>
    </section>
  );
}
