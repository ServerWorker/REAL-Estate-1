import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, TrendingUp, Sparkles, Phone, MessageCircle } from "lucide-react";
import hero from "@/assets/hero-villa.jpg";
import { PropertyCard } from "@/components/site/PropertyCard";
import { Section, SectionHeader } from "@/components/site/Section";
import { featured } from "@/lib/properties";
import { useLead } from "@/components/site/lead-context";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Usama Shareef | Premium Real Estate Investments & Luxury Bungalows" },
      { name: "description", content: "Explore ROI-focused land and luxury 3BHK bungalow investments in Karjat. Smart. Safe. ROI-Focused." },
      { property: "og:title", content: "Usama Shareef | Premium Real Estate Investments" },
      { property: "og:description", content: "ROI-focused land and luxury bungalow investments in Karjat & prime locations." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const { open } = useLead();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Luxury bungalow in Karjat" width={1920} height={1080} className="h-full w-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        </div>
        <div className="container-luxury relative min-h-[92vh] flex flex-col justify-end pb-20 pt-32 md:pt-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full glass-card px-4 py-1.5 text-[11px] uppercase tracking-[0.25em] text-gold">
              <Sparkles size={12} /> Smart · Safe · ROI-Focused
            </div>
            <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl leading-[0.98]">
              Unlock Your Next
              <span className="block italic text-gold">Smart, Safe & ROI-Focused</span>
              Property Investment.
            </h1>
            <p className="mt-6 max-w-xl text-base md:text-lg text-foreground/80">
              Premium land and luxury bungalow investments — tailored for growth, serenity, and the discerning few.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/villas"
                className="group inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-4 text-sm font-semibold tracking-wide text-gold-foreground shadow-[var(--shadow-gold)] hover:opacity-95 transition"
              >
                Invest in VILLAS
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
              <Link
                to="/land"
                className="group inline-flex items-center gap-2 rounded-lg border border-gold/40 bg-obsidian/40 backdrop-blur px-6 py-4 text-sm font-semibold tracking-wide text-foreground hover:bg-gold/10 transition"
              >
                Invest in LAND
                <ArrowRight size={16} className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <Section>
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="Curated Opportunities"
            title="Featured Investments"
            sub="Hand-picked properties combining lifestyle, location and proven appreciation."
          />
          <Link to="/properties" className="text-sm text-gold inline-flex items-center gap-1 hover:gap-2 transition-all">
            View all properties <ArrowRight size={14} />
          </Link>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => <PropertyCard key={p.title} p={p} />)}
        </div>
      </Section>

      {/* VALUE PROPS */}
      <Section className="!pt-0">
        <div className="rounded-3xl border border-border/60 bg-gradient-to-b from-surface to-obsidian p-10 md:p-16">
          <SectionHeader
            eyebrow="Why Invest With Us"
            title="Three pillars. Zero compromises."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: Sparkles, t: "SMART", d: "Data-driven location selection. Every plot is mapped against infrastructure pipelines and development corridors." },
              { icon: ShieldCheck, t: "SAFE", d: "Clear titles, vetted lands, and transparent investment structures. Your capital — protected by process." },
              { icon: TrendingUp, t: "ROI-FOCUSED", d: "High-yielding rental potential and robust capital appreciation, modelled before you commit." },
            ].map((v) => (
              <div key={v.t} className="group">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold/10 text-gold border border-gold/30">
                  <v.icon size={22} />
                </div>
                <h3 className="mt-5 font-display text-2xl tracking-wide">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* LEAD MAGNETS */}
      <Section className="!pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glass-card rounded-2xl p-10 md:p-12 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-gold/10 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.25em] text-gold">For Lifestyle Buyers</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">Looking for a Luxury Villa?</h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">Get our private catalog of curated luxury bungalows — including price, ROI projections and exclusive listings.</p>
            <button onClick={() => open("villa")} className="mt-7 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3.5 text-sm font-semibold text-gold-foreground hover:opacity-95 transition">
              Unlock Villa Catalog <ArrowRight size={15} />
            </button>
          </div>
          <div className="glass-card rounded-2xl p-10 md:p-12 relative overflow-hidden">
            <div className="absolute -right-10 -top-10 h-44 w-44 rounded-full bg-emerald/15 blur-3xl" />
            <p className="text-xs uppercase tracking-[0.25em] text-emerald">For Strategic Investors</p>
            <h3 className="mt-3 font-display text-3xl md:text-4xl">Looking for Strategic Land?</h3>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">Access our vetted land portfolio with clear titles, growth corridor mapping, and appreciation forecasts.</p>
            <button onClick={() => open("land")} className="mt-7 inline-flex items-center gap-2 rounded-lg border border-emerald/60 bg-emerald/10 px-6 py-3.5 text-sm font-semibold text-emerald hover:bg-emerald hover:text-emerald-foreground transition">
              Unlock Land Portfolio <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </Section>

      {/* QUICK CONTACT */}
      <Section className="!pt-0">
        <div className="rounded-3xl border border-gold/30 bg-gradient-to-r from-obsidian via-surface to-obsidian p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-gold">Speak Directly</p>
            <h3 className="mt-2 font-display text-3xl md:text-4xl">Private consultation, on your time.</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="tel:+917304366736" className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-5 py-3 text-sm hover:border-gold transition">
              <Phone size={15} className="text-gold" /> +91 7304 366 736
            </a>
            <a href="https://wa.me/917304366736" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-emerald px-5 py-3 text-sm font-semibold text-emerald-foreground hover:opacity-95 transition">
              <MessageCircle size={15} /> WhatsApp Now
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
