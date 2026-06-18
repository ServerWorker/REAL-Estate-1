import type { ReactNode } from "react";

export function SectionHeader({ eyebrow, title, sub }: { eyebrow?: string; title: string; sub?: string }) {
  return (
    <div className="max-w-2xl">
      {eyebrow && <p className="text-xs uppercase tracking-[0.25em] text-gold">{eyebrow}</p>}
      <h2 className="mt-3 font-display text-4xl md:text-5xl leading-[1.05]">{title}</h2>
      {sub && <p className="mt-4 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function Section({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <section className={`container-luxury py-20 md:py-28 ${className}`}>{children}</section>;
}

export function PageHero({ eyebrow, title, sub, image }: { eyebrow: string; title: string; sub: string; image: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border/60">
      <div className="absolute inset-0">
        <img src={image} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-obsidian/60 via-obsidian/80 to-background" />
      </div>
      <div className="container-luxury relative py-28 md:py-36">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl leading-[1.02] max-w-3xl">{title}</h1>
        <p className="mt-5 max-w-xl text-muted-foreground">{sub}</p>
      </div>
    </section>
  );
}
