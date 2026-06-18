import karjat from "@/assets/property-karjat.jpg";
import villaInt from "@/assets/villa-interior.jpg";
import landPlot from "@/assets/land-plot.jpg";
import hero from "@/assets/hero-villa.jpg";
import type { Property } from "@/components/site/PropertyCard";

export const villas: Property[] = [
  {
    title: "3BHK Luxury Bungalow",
    location: "Karjat – Murbad Highway",
    price: "₹2.4 Cr",
    tag: "Featured",
    image: karjat,
    features: [
      "Breathtaking valley & mountain views",
      "Private swimming pool & landscaped greenery",
      "Peaceful, stress-free surroundings",
      "Right on Karjat–Murbad highway",
    ],
  },
  {
    title: "4BHK Hillside Villa",
    location: "Karjat – Valley View",
    price: "₹3.8 Cr",
    tag: "New",
    image: hero,
    features: [
      "Infinity pool with valley vista",
      "Double-height living with skylights",
      "Smart-home automation included",
    ],
  },
  {
    title: "Modern Glass Villa",
    location: "Karjat – Pristine Estates",
    price: "₹4.5 Cr",
    image: villaInt,
    features: [
      "Floor-to-ceiling glass façade",
      "Premium interiors by award-winning studio",
      "Private deck & outdoor lounge",
    ],
  },
];

export const lands: Property[] = [
  {
    title: "Premium Investment Plot",
    location: "Karjat Valley",
    price: "₹85 L",
    tag: "High ROI",
    image: landPlot,
    features: [
      "Clear title with 7/12 verified",
      "Gated layout with internal roads",
      "5-min drive to Karjat railway station",
    ],
  },
  {
    title: "Riverside Land Parcel",
    location: "Karjat – Ulhas Riverside",
    price: "₹1.2 Cr",
    image: landPlot,
    features: [
      "Direct river frontage",
      "Approved NA – residential zoning",
      "Suited for boutique villa development",
    ],
  },
  {
    title: "Highway-Front Strategic Plot",
    location: "Karjat – Murbad Highway",
    price: "₹65 L",
    tag: "Limited",
    image: landPlot,
    features: [
      "Commercial / residential dual-use potential",
      "Rapid appreciation corridor",
      "Vetted land with secure documentation",
    ],
  },
];

export const featured: Property[] = [villas[0], lands[0], villas[1]];
