import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section, SectionHeader } from "@/components/site/Section";
import { Award, Users, Building2 } from "lucide-react";
import portrait from "@/assets/usama-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Usama Shareef | Premium Real Estate Advisor" },
      { name: "description", content: "Usama Shareef helps high-net-worth investors secure smart, safe, ROI-focused real estate across Karjat and prime Maharashtra corridors." },
      { property: "og:title", content: "About Usama Shareef" },
      { property: "og:description", content: "Smart, safe and ROI-focused real estate advisory for discerning investors." },
      { property: "og:url", content: "/about" },
      { property: "og:image", content: portrait },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A trusted advisor in premium real estate."
        sub="Helping discerning investors transition from city stress to private, mountain-view sanctuaries — backed by data and clear titles."
        image={portrait}
      />
      <Section>
        <div className="grid gap-12 md:grid-cols-2 items-center">
          <div className="glass-card rounded-3xl overflow-hidden">
            <img src={portrait} alt="Usama Shareef" loading="lazy" className="w-full h-auto object-cover" />
          </div>
          <div>
            <SectionHeader eyebrow="Usama Shareef" title="Built on trust. Measured in ROI." />
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Usama Shareef is a premium real estate advisor specialising in
                land and luxury bungalow investments across Karjat and Maharashtra's
                most promising growth corridors.
              </p>
              <p>
                His practice is built on a single principle — every recommendation
                must be <span className="text-gold">smart</span>,{" "}
                <span className="text-gold">safe</span>, and{" "}
                <span className="text-gold">ROI-focused</span>. From vetted titles to
                infrastructure-mapped appreciation forecasts, every property in
                the portfolio is engineered to protect capital and grow it.
              </p>
              <p>
                Whether you're a city dweller searching for a private sanctuary or
                a long-term investor scaling a portfolio, Usama's team curates
                opportunities that are both lifestyle-led and financially sound.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid gap-7 md:grid-cols-3">
          {[
            { icon: Building2, t: "50+", d: "Premium properties advised across Karjat & Maharashtra." },
            { icon: Users, t: "200+", d: "Investors guided into smart, safe, ROI-focused decisions." },
            { icon: Award, t: "100%", d: "Vetted titles and transparent transactions — without exception." },
          ].map((s) => (
            <div key={s.t} className="glass-card rounded-2xl p-8">
              <s.icon className="text-gold" size={24} />
              <div className="mt-4 font-display text-4xl text-gold">{s.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
