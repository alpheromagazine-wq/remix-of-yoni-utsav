import { useState } from "react";
import { CountdownTimer } from "@/components/countdown-timer";
import { LeadForm } from "@/components/lead-form";
import { PRODUCT_DETAILS } from "@/constants/product";

export function OrderBlock() {
  const [phone, setPhone] = useState<string>();
  return (
    <section id="pricing" className="py-16 md:py-24 bg-white custom-mobile-spacing">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-destructive/10 text-destructive rounded-full px-4 py-2 text-sm font-medium mb-6 animate-pulse">🔥 Limited Time Offer — {PRODUCT_DETAILS.discountPercent}% OFF</div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 leading-[1.3]">
            आज ही&nbsp;
            <span className="text-gradient inline-block pr-[5px]">ऑर्डर करें</span>
          </h2>
          <p className="text-lg text-muted-foreground">विशेष छूट — सीमित समय के लिए</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start max-w-6xl mx-auto">
          <div className="w-full lg:w-1/2">
            <div className="bg-card rounded-3xl shadow-card border-2 border-primary overflow-hidden">
              <div className="bg-gradient-cta text-primary-foreground p-6 text-center">
                <p className="text-sm opacity-90 mb-1">Special Offer Price</p>
                <div className="flex items-center justify-center gap-3">
                  <span className="text-2xl line-through opacity-70">{PRODUCT_DETAILS.currencySymbol}{PRODUCT_DETAILS.mrp}</span>
                  <span className="text-5xl font-bold">{PRODUCT_DETAILS.currencySymbol}{PRODUCT_DETAILS.price}</span>
                </div>
                <p className="text-sm opacity-90 mt-2">You Save: {PRODUCT_DETAILS.currencySymbol}{PRODUCT_DETAILS.mrp - PRODUCT_DETAILS.price} ({PRODUCT_DETAILS.discountPercent}% OFF)</p>
              </div>
              <div className="p-8">
                <div className="flex justify-center">
                  <video controls className="w-full rounded-lg overflow-hidden">
                    <source src="/video/ad-video.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border/50 shadow-soft sticky top-24">
              <div className="text-center mb-6">
                <div className="bg-primary/5 rounded-xl p-4 mb-6 border border-primary/20">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-clock w-4 h-4 text-primary"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span className="font-bold text-primary text-sm uppercase tracking-wide animate-pulse">Offer Expires Soon:</span>
                  </div>
                  <CountdownTimer />
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-2">अपना ऑर्डर पूरा करें</h3>
                <p className="text-muted-foreground text-sm">फॉर्म भरें और नीचे दिए गए बटन पर क्लिक करें</p>
              </div>

              <LeadForm />
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-12 bg-gold/10 border border-gold/30 rounded-2xl p-6 text-center">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="bg-gold/20 p-3 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-gift h-8 w-8 text-gold"
              >
                <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                <path d="M12 8v13"></path>
                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
              </svg>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-foreground text-lg">🎁 मुफ्त बोनस: इंटिमेट केयर गाइड</h3>
              <p className="text-sm text-muted-foreground">₹499 मूल्य — आज order करने पर बिल्कुल FREE!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
