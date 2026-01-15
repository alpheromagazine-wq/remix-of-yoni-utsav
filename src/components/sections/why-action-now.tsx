import { AlertTriangle, XCircle } from "lucide-react";
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

  return (
    <section aria-labelledby="why-action-now" className="section-padding">
      <div className="container-custom">
        <header className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-sm font-semibold text-foreground shadow-sm">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            <span>अब नहीं तो कब?</span>
          </div>

          <h2 id="why-action-now" className="text-3xl font-bold leading-tight md:text-4xl">
            💥 क्यों जरूरी है अभी एक्शन लेना?
          </h2>

          <p className="mt-4 text-base text-muted-foreground md:text-lg">
            अगर ये बातें आपकी life में आ रही हैं, तो ये “normal” नहीं—ये एक clear signal है कि अब
            बदलाव का समय है।
          </p>
        </header>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {points.map((text) => (
            <div
              key={text}
              className="card-elevated flex items-start gap-3 rounded-xl p-5"
            >
              <div className="mt-0.5 rounded-lg border bg-card p-2">
                <XCircle className="h-5 w-5 text-destructive" aria-hidden="true" />
              </div>
              <p className="text-base font-semibold leading-snug text-foreground">{text}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border bg-card p-6 text-center shadow-sm md:p-8">
          <p className="text-lg font-bold md:text-xl">
            बस करो इंतजार! अब है वक्त बदलाव का।
          </p>

          <div className="mt-5">
            <Button
              type="button"
              className="btn-primary w-full md:w-auto"
              onClick={openOrderDialog}
            >
              हाँ, मैं आज ही शुरू करना चाहती हूँ
            </Button>
            <p className="mt-2 text-xs font-semibold text-foreground/80 md:text-sm">
              आज का ऑफर: लिमिटेड स्टॉक — देरी न करें
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span>100% प्राइवेट</span>
            <span className="hidden md:inline">•</span>
            <span>सेफ & डिस्क्रीट डिलीवरी</span>
            <span className="hidden md:inline">•</span>
            <span>महिलाओं का भरोसा</span>
          </div>
        </div>
      </div>
    </section>
  );
}
