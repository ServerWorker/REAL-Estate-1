import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLead } from "./lead-context";

const nav = [
  { to: "/", label: "Home" },
  { to: "/villas", label: "Villas" },
  { to: "/land", label: "Land" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const { open: openLead } = useLead();
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-obsidian/70 backdrop-blur-xl">
      <div className="container-luxury flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="font-display text-xl tracking-wide">Usama Shareef</span>
          <span className="hidden sm:inline text-[10px] uppercase tracking-[0.25em] text-gold border-l border-border/60 pl-2">Estates</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: n.to === "/" }}
              className="text-muted-foreground hover:text-foreground transition"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={() => openLead("general")}
            className="hidden md:inline-flex rounded-md bg-gold px-4 py-2 text-xs font-semibold tracking-wide text-gold-foreground hover:opacity-90 transition"
          >
            Enquire
          </button>
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-border/60 bg-obsidian/95">
          <div className="container-luxury py-4 flex flex-col gap-3 text-sm">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
                className="text-muted-foreground py-1"
              >
                {n.label}
              </Link>
            ))}
            <button
              onClick={() => { setOpen(false); openLead("general"); }}
              className="mt-2 rounded-md bg-gold px-4 py-2.5 text-xs font-semibold text-gold-foreground"
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
