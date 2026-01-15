import { Package, Shield, FileText, UserCheck } from "lucide-react";
import { Card } from "../ui/card";
import { PRODUCT_DETAILS } from "@/constants/product";

import { useOrderDialog } from "@/contexts/order-dialog-context";

const features = [
  {
    icon: Package,
    title: "प्लेन पैकेजिंग में डिलीवरी",
    description: "कोई प्रोडक्ट नाम या लोगो नहीं। बिल्कुल सुरक्षित और गोपनीय।",
  },
  {
    icon: Shield,
    title: "कोई नहीं जानेगा",
    description: "क्या है अंदर। आपका राज सिर्फ आपके पास रहेगा।",
  },
  {
    icon: FileText,
    title: "सीक्रेट बिलिंग",
    description: "बैंक स्टेटमेंट में भी कोई प्रोडक्ट डिटेल नहीं आएगी।",
  },
  {
    icon: UserCheck,
    title: "कॉन्फिडेंशियल कंसल्टेशन",
    description: "डॉक्टर से प्राइवेट बातचीत। कोई तीसरा व्यक्ति नहीं।",
  },
];

export function CustomerPrivacy() {
  const { openOrderDialog } = useOrderDialog();

  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 custom-mobile-spacing">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-[1.3]">100% गोपनीयता की गारंटी</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">हम समझते हैं कि यह एक निजी मामला है। हर कदम आपकी गोपनीयता को ध्यान में रखकर उठाया गया है।</p>
        </div>
        <div className="grid grid-cols-2 gap-2  md:grid-cols-2 lg:grid-cols-4 md:gap-6 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-2xl p-3 md:p-6 text-center border border-primary/20 hover:border-primary transition-all duration-300 shadow-soft">
              <div className="w-16 h-16 rounded-full bg-primary/5 flex items-center justify-center mx-auto mb-5">
                <feature.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-sm md:text-lg text-foreground mb-3">{feature.title}</h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-6xl mx-auto rounded-3xl bg-linear-to-br from-primary/5 to-white border border-primary/10 p-6 md:p-10 shadow-lg relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <div className="inline-block px-3 py-1 bg-white border border-primary/20 rounded-full text-xs font-bold text-primary mb-4 shadow-xs">RECOMMENDED</div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                <span className="text-gradient">Best Results</span> के लिए टिप
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-primary/5">
                  <span className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm text-primary-foreground font-bold shadow-md shrink-0">
                    1
                  </span>
                  <span className="font-medium text-foreground/90">रोज़ाना रात को use करें</span>
                </li>
                <li className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-primary/5">
                  <span className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm text-primary-foreground font-bold shadow-md shrink-0">
                    2
                  </span>
                  <span className="font-medium text-foreground/90">Minimum 2 weeks continue करें</span>
                </li>
                <li className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-primary/5">
                  <span className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm text-primary-foreground font-bold shadow-md shrink-0">
                    3
                  </span>
                  <span className="font-medium text-foreground/90">Intimacy से 30 min पहले apply करें</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 text-center border border-primary/10 shadow-soft">
              <p className="text-lg text-muted-foreground mb-1">Limited Time Offer</p>
              <div className="flex justify-center items-center gap-2 mb-6">
                <span className="text-4xl font-bold text-primary">{PRODUCT_DETAILS.discountPercent}% OFF</span>
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-full">+ Free Shipping</span>
              </div>

              <button
                onClick={openOrderDialog}
                className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-accent text-primary-foreground w-full py-4 rounded-xl font-bold text-lg hover:shadow-glow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 animate-pulse-soft cursor-pointer"
              >
                अभी Order करें पैक
                <span className="bg-white/20 rounded-full p-1">→</span>
              </button>
              <p className="text-xs text-muted-foreground mt-4 flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                COD Available | Discreet Packaging
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
