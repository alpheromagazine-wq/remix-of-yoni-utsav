import { Check, Clock, ShieldCheck, Truck, XCircle } from "lucide-react";

import { CountdownTimer } from "@/components/countdown-timer";
import { Button } from "@/components/ui/button";
import { PRODUCT_DETAILS } from "@/constants/product";
import { useOrderDialog } from "@/contexts/order-dialog-context";

const traditionalPoints = [
  "बार-बार appointments और awkward visits",
  "खर्च बढ़ता जाता है",
  "results का भरोसा नहीं",
  "stress, शर्म और hesitation",
];

const reyoniPoints = [
  "घर पर — privacy के साथ",
  "simple routine, no awkwardness",
  "confidence-first care",
  "आज का limited-time offer",
];

export function WhyReYoniVsTraditional() {
  const { openOrderDialog } = useOrderDialog();

  return (
    <section className="bg-section-gradient relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-custom relative py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-card/60 px-4 py-2 text-sm text-foreground/80 backdrop-blur">
              <Clock className="h-4 w-4 text-primary" />
              <span className="font-medium tracking-wide">सीमित समय का ऑफर</span>
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              क्यों ReYoni चुनना ज़्यादा समझदारी है?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              महंगे और awkward solutions छोड़िए — घर पर, अपने comfort में, confidence वापस पाइए।
            </p>
          </div>

          {/* Comparison */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-primary/10 bg-card/70 shadow-soft backdrop-blur">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Traditional */}
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">Traditional तरीके</h3>
                </div>

                <ul className="mt-5 space-y-3">
                  {traditionalPoints.map((text) => (
                    <li key={text} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                        <XCircle className="h-4 w-4 text-primary" />
                      </span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-border bg-background/50 p-4">
                  <p className="text-xs text-muted-foreground">Typical monthly spend</p>
                  <p className="mt-1 text-base font-semibold text-foreground">₹6,000+ (approx.)</p>
                </div>
              </div>

              {/* ReYoni */}
              <div className="border-t border-primary/10 bg-primary/5 p-6 md:border-l md:border-t-0 md:p-8">
                <div className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold text-foreground">ReYoni at-home care</h3>
                </div>

                <ul className="mt-5 space-y-3">
                  {reyoniPoints.map((text) => (
                    <li key={text} className="flex items-start gap-3 text-sm text-foreground/80">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                        <Check className="h-4 w-4 text-primary" />
                      </span>
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-primary/15 bg-card/70 p-4">
                  <p className="text-xs text-muted-foreground">आज का ऑफर</p>
                  <div className="mt-1 flex flex-wrap items-baseline gap-x-2">
                    <p className="text-2xl font-bold text-foreground">
                      {PRODUCT_DETAILS.currencySymbol}
                      {PRODUCT_DETAILS.price}
                    </p>
                    <p className="text-sm text-muted-foreground line-through">
                      {PRODUCT_DETAILS.currencySymbol}
                      {PRODUCT_DETAILS.mrp}
                    </p>
                    <span className="text-xs font-medium text-primary">
                      {PRODUCT_DETAILS.discountPercent}% OFF
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timer + CTA */}
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl border border-primary/10 bg-card/70 p-6 shadow-soft backdrop-blur md:p-8">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <p className="text-sm font-medium text-foreground">Offer ends in</p>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">इस price पर order करने का time limited है।</p>
                </div>

                <div className="shrink-0">
                  <CountdownTimer initialMinutes={29} initialSeconds={59} />
                </div>
              </div>

              <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-primary/10">
                <div className="h-full w-2/3 rounded-full bg-primary/40" />
              </div>
            </div>

            <div className="rounded-3xl border border-primary/10 bg-primary/5 p-6 shadow-soft backdrop-blur md:p-8">
              <h3 className="text-lg font-semibold text-foreground">आज का ऑर्डर</h3>

              <div className="mt-4 grid gap-3 text-sm">
                <div className="flex items-center gap-2 text-foreground/80">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span>Discreet & secure packaging</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Truck className="h-4 w-4 text-primary" />
                  <span>Fast delivery</span>
                </div>
                <div className="flex items-center gap-2 text-foreground/80">
                  <Check className="h-4 w-4 text-primary" />
                  <span>Limited-time offer</span>
                </div>
              </div>

              <Button
                className="mt-6 w-full"
                size="lg"
                onClick={openOrderDialog}
              >
                Order Now — {PRODUCT_DETAILS.currencySymbol}
                {PRODUCT_DETAILS.price}
              </Button>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-primary/15 bg-card/60 px-3 py-1 text-xs text-foreground/80">
                  Privacy First
                </span>
                <span className="rounded-full border border-primary/15 bg-card/60 px-3 py-1 text-xs text-foreground/80">
                  Limited Offer
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
