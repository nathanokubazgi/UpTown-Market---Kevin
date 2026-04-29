import { CreditCard } from "lucide-react";

export function SnapEbtBanner() {
  return (
    <div className="scroll-reveal rounded-lg border border-primary/20 bg-primary/10 p-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground">
          <CreditCard className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-sm font-bold text-primary sm:text-base">SNAP / EBT Accepted</p>
          <p className="mt-1 text-sm leading-relaxed text-foreground">
            We proudly accept SNAP / EBT cards on all eligible grocery items.
          </p>
        </div>
      </div>
    </div>
  );
}
