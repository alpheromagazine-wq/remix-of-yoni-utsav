import { ShieldCheck, PackageCheck, Truck, Stethoscope } from "lucide-react";

import doctorImage from "@/assets/doctor.webp";
import { Card } from "@/components/ui/card";

const privacyBadges = [
  {
    title: "डिस्क्रीट पैकिंग",
    description: "बाहर से प्रोडक्ट का कोई संकेत नहीं होता",
    Icon: PackageCheck,
  },
  {
    title: "100% प्राइवेसी",
    description: "आपकी जानकारी पूरी तरह सुरक्षित और गोपनीय रहती है",
    Icon: ShieldCheck,
  },
];

const deliverySteps = [
  { title: "ऑर्डर कन्फर्म", description: "आपका ऑर्डर तुरंत कन्फर्म किया जाता है" },
  { title: "डिस्क्रीट पैकिंग", description: "सादा बाहरी बॉक्स में सुरक्षित पैकिंग" },
  { title: "फास्ट डिलीवरी", description: "जल्दी डिलीवरी आपके पते तक" },
];

export function TrustSection() {
  return (
    <section className="bg-section-gradient relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-custom relative py-14">
        <div className="mx-auto max-w-5xl">
          <header className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              भरोसा, प्राइवेसी और डिलीवरी
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              आप बस ऑर्डर करें—बाकी हम संभाल लेते हैं: पूरी प्राइवेसी, डिस्क्रीट पैकिंग और सुरक्षित डिलीवरी।
            </p>
          </header>

          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Doctor note */}
            <Card className="rounded-3xl border-primary/10 bg-card/70 p-6 shadow-soft backdrop-blur">
              <div className="flex items-start gap-4">
                <img
                  src={doctorImage}
                  alt="डॉक्टर की सलाह"
                  className="h-14 w-14 rounded-2xl object-cover"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <Stethoscope className="h-4 w-4 text-primary" />
                    <p className="text-sm font-semibold text-foreground">डॉक्टर की छोटी-सी सलाह</p>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/80">
                    “अगर routine simple और consistent रहे, तो घर पर care ज़्यादा comfortable लगता है—बिना तनाव, बिना झिझक।”
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">कम्फर्ट-फर्स्ट guidance—आपके confidence के लिए।</p>
            </Card>

            {/* Privacy badges */}
            <Card className="rounded-3xl border-primary/10 bg-card/70 p-6 shadow-soft backdrop-blur">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold text-foreground">प्राइवेसी की गारंटी</p>
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

            {/* Delivery timeline */}
            <Card className="rounded-3xl border-primary/10 bg-card/70 p-6 shadow-soft backdrop-blur">
              <div className="flex items-center gap-2">
                <Truck className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold text-foreground">डिलीवरी टाइमलाइन</p>
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
                <p className="text-xs font-medium text-foreground">बिना असहज कॉल, बिना उलझन</p>
                <p className="mt-1 text-xs text-muted-foreground">सरल प्रक्रिया—पूरी प्राइवेसी के साथ, शुरू से अंत तक।</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
