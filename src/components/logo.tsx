import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/brand/logo.webp"
      alt="Mente Leve"
      width={1268}
      height={506}
      priority
      className={cn("h-10 w-auto sm:h-12", className)}
    />
  );
}
