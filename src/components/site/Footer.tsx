import { Link } from "@tanstack/react-router";
import { Phone, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border/60 bg-obsidian/80">
      <div className="container-luxury py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl">Usama Shareef Estates</div>
          <p className="mt-3 text-sm text-muted-foreground max-w-md">
            Smart, safe and ROI-focused real estate. Curating premium land and luxury bungalow investments across Karjat and Maharashtra's most promising corridors.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="tel:+917304366736" className="glass-card rounded-full p-3 hover:text-gold transition" aria-label="Call"><Phone size={16} /></a>
            <a href="https://wa.me/917304366736" target="_blank" rel="noreferrer" className="glass-card rounded-full p-3 hover:text-emerald transition" aria-label="WhatsApp"><MessageCircle size={16} /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="glass-card rounded-full p-3 hover:text-gold transition" aria-label="Instagram"><Instagram size={16} /></a>
          </div>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold">Explore</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><Link to="/villas" className="hover:text-foreground">Luxury Villas</Link></li>
            <li><Link to="/land" className="hover:text-foreground">Strategic Land</Link></li>
            <li><Link to="/properties" className="hover:text-foreground">All Properties</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About Usama</Link></li>
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-[0.2em] text-gold">Contact</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="tel:+917304366736" className="hover:text-foreground">+91 7304 366 736</a></li>
            <li><a href="tel:+918591147758" className="hover:text-foreground">+91 85911 47758</a></li>
            <li><Link to="/contact" className="hover:text-foreground">Schedule Site Visit</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container-luxury py-5 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} Usama Shareef Estates. All rights reserved.</p>
          <p>SMART · SAFE · ROI-FOCUSED</p>
        </div>
      </div>
    </footer>
  );
}
