import { MapPin, ArrowUpRight } from "lucide-react";
import { useLead } from "./lead-context";

export interface Property {
  title: string;
  location: string;
  price: string;
  tag?: string;
  image: string;
  features: string[];
}

export function PropertyCard({ p }: { p: Property }) {
  const { open } = useLead();
  return (
    <article className="group glass-card overflow-hidden rounded-2xl flex flex-col transition hover:-translate-y-1 hover:shadow-[var(--shadow-luxury)] duration-500">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={p.image}
          alt={p.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-obsidian/20 to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          {p.tag && (
            <span className="rounded-full bg-emerald/90 px-3 py-1 text-[10px] uppercase tracking-widest text-emerald-foreground">{p.tag}</span>
          )}
        </div>
        <div className="absolute top-4 right-4 rounded-full bg-gold px-3 py-1.5 text-xs font-bold tracking-wide text-gold-foreground shadow-[var(--shadow-gold)]">
          {p.price}
        </div>
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs text-foreground/90">
          <MapPin size={12} className="text-gold" />
          {p.location}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-2xl leading-tight">{p.title}</h3>
        <ul className="mt-4 space-y-2 text-sm text-muted-foreground flex-1">
          {p.features.map((f) => (
            <li key={f} className="flex gap-2 items-start">
              <span className="mt-1.5 inline-block h-1 w-1 rounded-full bg-gold flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <button
          onClick={() => open("visit")}
          className="mt-6 inline-flex items-center justify-between rounded-lg border border-gold/40 bg-gold/5 px-4 py-3 text-sm font-medium text-gold hover:bg-gold hover:text-gold-foreground transition"
        >
          Schedule a Site Visit
          <ArrowUpRight size={16} />
        </button>
      </div>
    </article>
  );
}
