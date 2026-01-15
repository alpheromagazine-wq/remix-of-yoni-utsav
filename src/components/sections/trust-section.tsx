import { ShieldCheck, PackageCheck, Truck, Stethoscope } from "lucide-react";

import doctorImage from "@/assets/doctor.webp";
import guaranteeImage from "@/assets/cert-guarantee.webp";
import { Card } from "@/components/ui/card";

const privacyBadges = [
  {
    title: "Discreet Packaging",
    description: "बाहर से product का कोई mention नहीं",
    Icon: PackageCheck,
  },
  {
    title: "Privacy First",
    description: "आपकी details confidential रहती हैं",
    Icon: ShieldCheck,
  },
];

const deliverySteps = [
  { title: "Order confirm", description: "Call/WhatsApp verification (optional)" },
  { title: "Packed discreetly", description: "Secure, plain outer box" },
  { title: "Delivered", description: "Fast delivery to your address" },
];

export function TrustSection() {
  return (
    <section className="bg-section-gradient relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-custom relative py-14">
        <div className="mx-auto max-w-5xl">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Trust, Privacy & Delivery</h2>
            <p className="mt-4 text-base text-muted-foreground">
              आप order करें—बाकी care हम करते हैं: privacy, packing, और delivery तक।
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Doctor note */}
            <Card className="rounded-3xl border-primary/10 bg-card/70 p-6 shadow-soft backdrop-blur">
              <div className="flex items-start gap-4">
                <img
                  src={doctorImage}
                  alt="Doctor recommendation"
                  className="h-14 w-14 rounded-2xl object-cover"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-primary" />
                    <p className="text-sm font-semibold text-foreground">Doctor note</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    “Gentle at-home care works best when it’s consistent and stress-free. Keep it simple, keep it private.”
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">For reassurance & comfort-focused guidance.</p>
            </Card>

            {/* Privacy badges */}
            <Card className="rounded-3xl border-primary/10 bg-card/70 p-6 shadow-soft backdrop-blur">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold text-foreground">Privacy badges</p>
              </div>

              <div className="mt-4 grid gap-3">
                {privacyBadges.map(({ title, description, Icon }) => (
                  <div key={title} className="rounded-2xl border border-border bg-background/50 p-4">
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-primary/10">
                        <Icon className="h-4 w-4 text-primary" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-foreground">{title}</p>
                        <p className="mt-1 text-xs text-muted-foreground">{description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Delivery timeline + guarantee */}
            <Card className="rounded-3xl border-primary/10 bg-card/70 p-6 shadow-soft backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-primary" />
                  <p className="text-sm font-semibold text-foreground">Delivery timeline</p>
                </div>
                <img
                  src={guaranteeImage}
                  alt="Satisfaction guarantee certificate"
                  className="h-10 w-auto rounded-md"
                  loading="lazy"
                />
              </div>

              <ol className="mt-4 space-y-3">
                {deliverySteps.map((s, idx) => (
                  <li key={s.title} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                      {idx + 1}
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{s.title}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">{s.description}</p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-4 rounded-2xl border border-primary/15 bg-primary/5 p-4">
                <p className="text-xs font-medium text-foreground">100% Satisfaction Guarantee</p>
                <p className="mt-1 text-xs text-muted-foreground">Peace of mind—your experience matters.</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
