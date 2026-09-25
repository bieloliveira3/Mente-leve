import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { legalDocuments } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Termos de uso — Mente Leve",
  robots: { index: false },
};

export default function TermosPage() {
  return <LegalPage document={legalDocuments.termos} />;
}
