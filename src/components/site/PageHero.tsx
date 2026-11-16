import type { ReactNode } from "react";
import { Curve } from "./Curve";
import { Eyebrow } from "./SectionHeading";

export function PageHero({
  eyebrow,
  title,
  text,
  image,
}: {
  eyebrow: string;
  title: ReactNode;
  text: ReactNode;
  image: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pb-28 pt-40 md:pb-40 md:pt-52">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-photo-overlay" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
            {text}
          </p>
        </div>
      </div>
      <Curve />
    </section>
  );
}
