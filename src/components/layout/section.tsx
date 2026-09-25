import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("px-4 py-12 sm:px-6 sm:py-16", className)}>
      <div className="mx-auto w-full max-w-5xl">{children}</div>
    </section>
  );
}
