import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { PropertyCard } from "@/components/site/PropertyCard";
import { villas, lands } from "@/lib/properties";
import hero from "@/assets/hero-villa.jpg";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "All Properties | Usama Shareef Estates" },
      { name: "description", content: "Browse the full collection — luxury bungalows and strategic land investments in Karjat." },
      { property: "og:title", content: "All Properties — Usama Shareef Estates" },
      { property: "og:description", content: "Luxury bungalows and strategic land investments in Karjat." },
      { property: "og:url", content: "/properties" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/properties" }],
  }),
  component: AllProperties,
});

function AllProperties() {
  const all = [...villas, ...lands];
  return (
    <>
      <PageHero
        eyebrow="The Collection"
        title="Every opportunity, in one place."
        sub="From mountain-view bungalows to high-ROI land — curated, vetted, and ready for private viewing."
        image={hero}
      />
      <Section>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {all.map((p) => <PropertyCard key={p.title} p={p} />)}
        </div>
      </Section>
    </>
  );
}
