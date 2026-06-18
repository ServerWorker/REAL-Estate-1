import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { PropertyCard } from "@/components/site/PropertyCard";
import { lands } from "@/lib/properties";
import landPlot from "@/assets/land-plot.jpg";

export const Route = createFileRoute("/land")({
  head: () => ({
    meta: [
      { title: "Strategic Land Investments | Usama Shareef Estates" },
      { name: "description", content: "Vetted, high-ROI land parcels in Karjat with clear titles and proven appreciation corridors." },
      { property: "og:title", content: "Strategic Land Investments in Karjat" },
      { property: "og:description", content: "Vetted, high-ROI land parcels with clear titles and proven appreciation corridors." },
      { property: "og:url", content: "/land" },
      { property: "og:image", content: landPlot },
    ],
    links: [{ rel: "canonical", href: "/land" }],
  }),
  component: LandPage,
});

function LandPage() {
  return (
    <>
      <PageHero
        eyebrow="Strategic Land"
        title="Buy the corridor, not just the plot."
        sub="Vetted parcels in Karjat's fastest-appreciating growth corridors — every title verified, every map studied."
        image={landPlot}
      />
      <Section>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {lands.map((p) => <PropertyCard key={p.title} p={p} />)}
        </div>
      </Section>
    </>
  );
}
