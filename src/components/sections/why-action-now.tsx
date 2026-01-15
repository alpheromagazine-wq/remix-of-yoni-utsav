import { AlertTriangle, ShieldCheck, Truck, Users, XCircle } from "lucide-react";
import { useOrderDialog } from "@/contexts/order-dialog-context";
import { Button } from "@/components/ui/button";

export function WhyActionNow() {
  const { openOrderDialog } = useOrderDialog();

  const points = [
    "हर दिन की देरी = बढ़ती शर्मिंदगी",
    "पार्टनर के साथ रिश्तों में दूरी",
    "खुद पर विश्वास की कमी",
    "बिकिनी या टाइट कपड़े पहनने का डर",
  ];

  const trustItems = [
    { icon: ShieldCheck, label: "100% प्राइवेट" },
    { icon: Truck, label: "सेफ & डिस्क्रीट डिलीवरी" },
    { icon: Users, label: "महिलाओं का भरोसा" },
  ] as const;

  return (
    <section
      aria-labelledby="why-action-now"
      className="section-padding bg-section-gradient relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-20%] top-[-30%] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-35%] right-[-20%] h-[520px] w-[520px] rounded-full bg-accent/15 blur-3xl"
      />

      <div className="container-custom relative">
        <header className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-foreground shadow-sm ring-1 ring-primary/10">
            <AlertTriangle className="h-4 w-4 text-primary" aria-hidden="true" />
            <span>अब नहीं तो कब?</span>
          </div>

          <h2 id="why-action-now" className="text-3xl font-extrabold leading-tight md:text-4xl">
            क्यों जरूरी है अभी एक्शन लेना?
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-hero-gradient" aria-hidden="true" />

          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            अगर ये signals आपकी life में दिख रहे हैं, तो ये “normal” नहीं—ये एक clear संकेत है कि अब बदलाव
            का समय है।
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {points.map((text, index) => (
            <div
              key={text}
              className="group relative overflow-hidden rounded-2xl border bg-card/70 p-5 shadow-sm backdrop-blur transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div aria-hidden="true" className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="absolute -left-20 -top-20 h-52 w-52 rounded-full bg-primary/10 blur-2xl" />
              </div>

              <div className="relative flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/5">
                  <XCircle className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>

                <div className="min-w-0">
                  <div className="mb-1 inline-flex items-center gap-2">
                    <span className="rounded-full border border-primary/10 bg-primary/5 px-2 py-0.5 text-xs font-bold text-primary">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-base font-semibold leading-snug text-foreground">{text}</p>
                </div>
              </div>

              <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1 bg-primary/30" />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-3xl bg-cta-gradient p-[1px] shadow-md">
          <div className="rounded-3xl border bg-card p-6 text-center md:p-8">
            <p className="text-lg font-extrabold md:text-xl">बस करो इंतजार! अब है वक्त बदलाव का।</p>

            <div className="mt-5">
              <Button type="button" className="btn-primary w-full md:w-auto" onClick={openOrderDialog}>
                हाँ, मैं आज ही शुरू करना चाहती हूँ
              </Button>

              <div className="mt-3">
                <span className="inline-flex items-center rounded-full border border-primary/10 bg-primary/5 px-3 py-1 text-xs font-bold text-primary">
                  आज का ऑफर: लिमिटेड स्टॉक — देरी न करें
                </span>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {trustItems.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center justify-center gap-2 rounded-2xl border bg-card/60 px-4 py-3 text-sm">
                  <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                  <span className="font-semibold text-foreground">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
