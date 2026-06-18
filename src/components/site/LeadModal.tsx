import { useEffect, useState } from "react";
import { X } from "lucide-react";

export type LeadIntent = "villa" | "land" | "visit" | "general";

interface Props {
  open: boolean;
  intent: LeadIntent;
  onClose: () => void;
}

const titles: Record<LeadIntent, { h: string; sub: string; cta: string }> = {
  villa: { h: "Unlock the Villa Catalog", sub: "Curated luxury bungalows with mountain views and ROI potential.", cta: "Send Me the Catalog" },
  land: { h: "Unlock the Land Portfolio", sub: "Strategically located plots vetted for appreciation and clear titles.", cta: "Send Me the Portfolio" },
  visit: { h: "Schedule a Site Visit", sub: "Walk the property with our team. Complimentary pickup available.", cta: "Request Visit" },
  general: { h: "Speak With Our Advisor", sub: "A private consultation tailored to your investment goals.", cta: "Request Callback" },
};

export function LeadModal({ open, intent, onClose }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  useEffect(() => {
    if (!open) return;
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onEsc);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;
  const meta = titles[intent];

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Lead capture hook — integrate with Zapier/CRM via webhook here.
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", phone: "", email: "" });
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in" onClick={onClose}>
      <div className="absolute inset-0 bg-obsidian/80 backdrop-blur-md" />
      <div
        onClick={(e) => e.stopPropagation()}
        className="glass-card relative w-full max-w-md rounded-2xl p-8 shadow-[var(--shadow-luxury)] animate-in zoom-in-95"
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-muted-foreground hover:text-foreground transition"
          aria-label="Close"
        >
          <X size={18} />
        </button>
        {submitted ? (
          <div className="py-10 text-center">
            <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-emerald/15 flex items-center justify-center text-emerald text-2xl">✓</div>
            <h3 className="font-display text-2xl">Thank you.</h3>
            <p className="mt-2 text-sm text-muted-foreground">Usama's team will reach out within 24 hours.</p>
          </div>
        ) : (
          <>
            <p className="text-xs uppercase tracking-[0.2em] text-gold">Private Enquiry</p>
            <h3 className="mt-2 font-display text-3xl leading-tight">{meta.h}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{meta.sub}</p>
            <form onSubmit={submit} className="mt-6 space-y-3">
              <input
                required
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm outline-none focus:border-gold transition"
              />
              <input
                required
                type="tel"
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm outline-none focus:border-gold transition"
              />
              <input
                required
                type="email"
                placeholder="Email Address"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm outline-none focus:border-gold transition"
              />
              <button
                type="submit"
                className="mt-2 w-full rounded-lg bg-gold py-3 text-sm font-semibold tracking-wide text-gold-foreground hover:opacity-90 transition shadow-[var(--shadow-gold)]"
              >
                {meta.cta}
              </button>
              <p className="text-[11px] text-center text-muted-foreground pt-1">
                Your information stays confidential. No spam — ever.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
