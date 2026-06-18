import { createContext, useContext, useState, type ReactNode } from "react";
import { LeadModal, type LeadIntent } from "./LeadModal";

type Ctx = { open: (intent?: LeadIntent) => void };
const LeadCtx = createContext<Ctx>({ open: () => {} });

export function LeadProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false);
  const [intent, setIntent] = useState<LeadIntent>("general");
  return (
    <LeadCtx.Provider value={{ open: (i = "general") => { setIntent(i); setOpen(true); } }}>
      {children}
      <LeadModal open={isOpen} intent={intent} onClose={() => setOpen(false)} />
    </LeadCtx.Provider>
  );
}

export const useLead = () => useContext(LeadCtx);
