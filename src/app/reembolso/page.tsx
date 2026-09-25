import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalDocuments } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Política de reembolso — Mente Leve",
  robots: { index: false },
};

export default function ReembolsoPage() {
  return <LegalPage document={legalDocuments.reembolso} />;
}
