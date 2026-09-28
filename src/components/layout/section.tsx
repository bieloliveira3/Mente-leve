import { cn } from "@/lib/utils";
import { sections, type SectionKey } from "@/lib/analytics/definitions";

export function Section({
  id,
  className,
  analyticsSection,
  children,
}: {
  id?: string;
  className?: string;
  analyticsSection?: SectionKey;
  children: React.ReactNode;
}) {
  const tracking = sections[(analyticsSection ?? id) as SectionKey];
  return (
    <section
      id={id}
      data-analytics-section={tracking?.id}
      data-analytics-section-name={tracking?.name}
      data-analytics-section-order={tracking?.order}
      className={cn("px-4 py-12 sm:px-6 sm:py-16", className)}
    >
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
