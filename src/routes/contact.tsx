import { createFileRoute } from "@tanstack/react-router";
import { PageHero, Section } from "@/components/site/Section";
import { Phone, MessageCircle, Instagram, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import hero from "@/assets/hero-villa.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Usama Shareef | Schedule a Site Visit" },
      { name: "description", content: "Talk to Usama Shareef directly. Schedule a site visit, request the catalog, or speak with our investment advisors." },
      { property: "og:title", content: "Contact Usama Shareef Estates" },
      { property: "og:description", content: "Schedule a site visit or speak with our advisors." },
      { property: "og:url", content: "/contact" },
      { property: "og:image", content: hero },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", interest: "Luxury Villa", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your next investment."
        sub="Private consultations, site visits, and curated catalogs — at your convenience."
        image={hero}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-5">
            <a href="tel:+917304366736" className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-gold/60 transition">
              <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold"><Phone size={18} /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Call directly</div>
                <div className="font-display text-xl">+91 7304 366 736</div>
              </div>
            </a>
            <a href="tel:+918591147758" className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-gold/60 transition">
              <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold"><Phone size={18} /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Alternate line</div>
                <div className="font-display text-xl">+91 85911 47758</div>
              </div>
            </a>
            <a href="https://wa.me/917304366736" target="_blank" rel="noreferrer" className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-emerald/60 transition">
              <div className="h-12 w-12 rounded-xl bg-emerald/15 flex items-center justify-center text-emerald"><MessageCircle size={18} /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">WhatsApp</div>
                <div className="font-display text-xl">Chat instantly</div>
              </div>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="glass-card rounded-2xl p-6 flex items-center gap-4 hover:border-gold/60 transition">
              <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold"><Instagram size={18} /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Instagram</div>
                <div className="font-display text-xl">@usamashareef</div>
              </div>
            </a>
            <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold"><MapPin size={18} /></div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Serving</div>
                <div className="font-display text-xl">Karjat & Maharashtra</div>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-3 glass-card rounded-3xl p-8 md:p-10">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto h-14 w-14 rounded-full bg-emerald/15 flex items-center justify-center text-emerald text-3xl">✓</div>
                <h3 className="mt-4 font-display text-3xl">Enquiry received.</h3>
                <p className="mt-2 text-muted-foreground">Usama will personally reach out within 24 hours.</p>
              </div>
            ) : (
              <>
                <p className="text-xs uppercase tracking-[0.25em] text-gold">Private Enquiry Form</p>
                <h3 className="mt-3 font-display text-3xl">Schedule your consultation</h3>
                <div className="mt-7 grid gap-4 md:grid-cols-2">
                  <Field label="Full Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
                  <Field label="Phone Number" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
                  <Field label="Email Address" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} className="md:col-span-2" />
                  <div className="md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">I'm interested in</label>
                    <select
                      value={form.interest}
                      onChange={(e) => setForm({ ...form, interest: e.target.value })}
                      className="mt-2 w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm outline-none focus:border-gold transition"
                    >
                      <option>Luxury Villa</option>
                      <option>Strategic Land</option>
                      <option>Site Visit</option>
                      <option>General Enquiry</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-2 w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm outline-none focus:border-gold transition"
                      placeholder="Tell us about your investment goals…"
                    />
                  </div>
                </div>
                <button type="submit" className="mt-6 w-full md:w-auto inline-flex justify-center rounded-lg bg-gold px-8 py-3.5 text-sm font-semibold text-gold-foreground hover:opacity-95 transition shadow-[var(--shadow-gold)]">
                  Send Enquiry
                </button>
                <p className="mt-3 text-[11px] flex items-center gap-1 text-muted-foreground"><Mail size={11}/> Your details are strictly confidential.</p>
              </>
            )}
          </form>
        </div>
      </Section>
    </>
  );
}

function Field({ label, value, onChange, type = "text", className = "" }: { label: string; value: string; onChange: (v: string) => void; type?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        required
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg bg-input/60 border border-border px-4 py-3 text-sm outline-none focus:border-gold transition"
      />
    </div>
  );
}
