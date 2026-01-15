import { BadgeCheck, CreditCard, FlaskConical, Truck } from "lucide-react";

const FSSAI_LICENSE = "10012011002340";

const badges = [
  {
    title: "FSSAI अनुमोदित",
    subtitle: `Lic: ${FSSAI_LICENSE}`,
    Icon: BadgeCheck,
  },
  {
    title: "लैब टेस्टेड",
    subtitle: "Every Batch",
    Icon: FlaskConical,
  },
  {
    title: "फ्री शिपिंग",
    subtitle: "All India",
    Icon: Truck,
  },
  {
    title: "COD उपलब्ध",
    subtitle: "Pay on Delivery",
    Icon: CreditCard,
  },
] as const;

export function TrustBadgesStrip() {
  return (
    <section aria-label="Trust badges" className="bg-background">
      <div className="container-custom py-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {badges.map(({ title, subtitle, Icon }) => (
            <div
              key={title}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-4 py-4 shadow-soft backdrop-blur"
            >
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-primary/10 bg-primary/5">
                <Icon className="h-5 w-5 text-primary" aria-hidden="true" />
              </span>

              <div className="min-w-0">
                <p className="text-sm font-semibold leading-tight text-foreground">{title}</p>
                <p className="mt-1 text-xs leading-tight text-muted-foreground">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
