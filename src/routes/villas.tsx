import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { PropertyCard } from "@/components/site/PropertyCard";
import { villas } from "@/lib/properties";
import villaInt from "@/assets/villa-interior.jpg";

export const Route = createFileRoute("/villas")({
  head: () => ({
    meta: [
      { title: "Luxury Villas in Karjat | Usama Shareef Estates" },
      { name: "description", content: "Private, mountain-view 3BHK & 4BHK luxury bungalows in Karjat — curated for serenity and ROI." },
      { property: "og:title", content: "Luxury Villas in Karjat" },
      { property: "og:description", content: "Private, mountain-view luxury bungalows in Karjat — curated for serenity and ROI." },
      { property: "og:url", content: "/villas" },
      { property: "og:image", content: villaInt },
    ],
    links: [{ rel: "canonical", href: "/villas" }],
  }),
  component: VillasPage,
});

function VillasPage() {
  return (
    <>
      <PageHero
        eyebrow="Luxury Bungalows"
        title="Where stillness meets architecture."
        sub="A private collection of mountain-view villas with infinity pools, smart-home interiors, and the calm of Karjat at your doorstep."
        image={villaInt}
      />
      <Section>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {villas.map((p) => <PropertyCard key={p.title} p={p} />)}
        </div>
      </Section>
    </>
  );
}
