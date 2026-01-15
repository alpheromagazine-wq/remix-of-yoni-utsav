import { Button } from "@/components/ui/button";
import { useOrderDialog } from "@/contexts/order-dialog-context";
import { Baby, Heart, Moon, Sparkles } from "lucide-react";

type Persona = {
  title: string;
  lines: [string, string?];
  Icon: typeof Sparkles;
};

const personas: Persona[] = [
  {
    title: "ब्राइड्स-टू-बी",
    lines: [
      "शादी से पहले डर, शर्म और झिझक मन में बैठ जाती है।",
      "आप wedding night पर confident महसूस करना चाहती हैं—बिना किसी embarrassment के।",
    ],
    Icon: Sparkles,
  },
  {
    title: "नई माँ (Post-Delivery)",
    lines: [
      "डिलीवरी के बाद looseness और खुद पर भरोसा टूटने लगता है।",
      "आप फिर से ‘खुद जैसी’ महसूस करना चाहती हैं—tightness और self-esteem के साथ।",
    ],
    Icon: Baby,
  },
  {
    title: "जो पार्टनर के करीब आना चाहती हैं",
    lines: [
      "इंटिमेसी में दूरी रिश्ते को चुपचाप तोड़ती है।",
      "आप closeness, खुशी और खुद को desirable महसूस करना चाहती हैं—फिर से।",
    ],
    Icon: Heart,
  },
  {
    title: "जो प्राइवेट एरिया डार्कनेस से परेशान हैं",
    lines: [
      "टाइट कपड़े या बिकिनी सोचकर शर्मिंदगी और डर बढ़ जाता है।",
      "आप clear, even-toned skin चाहती हैं—बिना छुपाए, बिना झिझके।",
    ],
    Icon: Moon,
  },
];

export function WhoIsThisFor() {
  const { openOrderDialog } = useOrderDialog();

  return (
    <section
      aria-labelledby="who-is-this-for"
      className="section-padding bg-section-gradient relative overflow-hidden"
    >
      <div className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent/15 blur-3xl" />

      <div className="container-custom relative px-0">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary ring-1 ring-primary/10">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
              <Heart className="h-4 w-4 text-primary" />
            </span>
            <span>आप अकेली नहीं हैं</span>
          </div>

          <h2
            id="who-is-this-for"
            className="mt-5 text-3xl font-extrabold tracking-tight md:text-4xl"
          >
            किसके लिए है यह ट्रीटमेंट?
          </h2>

          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-hero-gradient" />

          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            अगर नीचे की कोई बात आपके अंदर चुभती है, तो समझिए—आपका डर real है, और
            आपका solution भी real हो सकता है।
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {personas.map(({ title, lines, Icon }, idx) => (
            <div
              key={title}
              className="group rounded-2xl border border-border bg-card/70 backdrop-blur shadow-soft transition-all hover:-translate-y-0.5 hover:shadow-medium"
            >
              <div className="h-full rounded-2xl border-l-4 border-l-primary p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/10 bg-primary/5">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold text-foreground md:text-lg">
                        {title}
                      </h3>
                      <span className="rounded-full border border-primary/10 bg-primary/5 px-2.5 py-1 text-xs font-bold text-primary">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <div className="mt-3 space-y-2">
                      <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                        {lines[0]}
                      </p>
                      {lines[1] ? (
                        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
                          {lines[1]}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-3xl text-center">
          <p className="text-base font-semibold md:text-lg">
            यह ट्रीटमेंट real women की real concerns के लिए बनाया गया है।
          </p>
          <p className="mt-2 text-sm text-muted-foreground md:text-base">
            अगर आप खुद को इनमें से किसी से जोड़ पा रही हैं — यह आपके लिए है।
          </p>

          <div className="mt-6 flex justify-center">
            <Button
              className="btn-primary"
              onClick={openOrderDialog}
              aria-label="Order now"
            >
              हाँ, यह मेरे लिए है — अभी शुरू करें
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
