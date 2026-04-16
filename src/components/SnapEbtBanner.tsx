import { CreditCard } from "lucide-react";

export function SnapEbtBanner() {
  return (
    <div className="bg-primary/10 border border-primary/20 rounded-lg p-3 flex items-center gap-3">
      <CreditCard className="h-5 w-5 text-primary shrink-0" />
      <p className="text-sm font-medium text-primary">
        We proudly accept <span className="font-bold">SNAP / EBT</span> cards on all eligible grocery items
      </p>
    </div>
  );
}
