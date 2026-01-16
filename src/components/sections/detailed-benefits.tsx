import benefitLightning from "@/assets/benefit-lightning.jpg";
import benefitOdour from "@/assets/benefit-odour.webp";
import productHolding from "@/assets/product-holding.webp";
import { Check, Sparkles, ShieldCheck, Heart } from "lucide-react";

interface BenefitCardProps {
  title: string;
  description: string;
  badge: string;
  points: string[];
  image: string;
  imageAlt: string;
  reverse?: boolean;
  theme: "gold" | "white" | "red";
}

const BenefitCard = ({ title, description, badge, points, image, imageAlt, reverse, theme }: BenefitCardProps) => {
  const themeStyles = {
    gold: {
      wrapper: "hover:shadow-orange-500/10 hover:border-orange-200/60",
      card: "bg-linear-to-br from-[#FFF8F0] to-white border-[#FFE5D0]",
      badge: "bg-[#FFF0E0] text-[#B96B00] border-[#FFD6A5]",
      icon: "text-[#B96B00]",
      imageBox: "border-[#FFE5D0] shadow-orange-500/5",
      overlay: "from-[#B96B00]/10",
    },
    white: {
      wrapper: "hover:shadow-primary/10 hover:border-primary/20",
      card: "bg-white border-slate-100",
      badge: "bg-primary/5 text-primary border-primary/10",
      icon: "text-primary",
      imageBox: "border-slate-100 shadow-slate-200/50",
      overlay: "from-primary/10",
    },
    red: {
      wrapper: "hover:shadow-rose-500/10 hover:border-rose-200/60",
      card: "bg-linear-to-br from-rose-50/60 to-white border-rose-100",
      badge: "bg-rose-100 text-rose-700 border-rose-200",
      icon: "text-rose-600",
      imageBox: "border-rose-100 shadow-rose-500/5",
      overlay: "from-rose-600/10",
    },
  };

  const styles = themeStyles[theme];

  return (
    <div
      className={`group/card flex flex-col md:flex-row items-center gap-8 md:gap-16 rounded-4xl p-8 md:p-12 border transition-all duration-500 ${styles.card} ${styles.wrapper}`}
    >
      <div className={`w-full md:w-1/2 ${reverse ? "order-2 md:order-1" : "order-2"}`}>
        <div className="flex flex-col items-start">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-bold mb-6 border transition-colors ${styles.badge}`}>
            <Sparkles className="w-4 h-4" />
            {badge}
          </div>
          <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{title}</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed text-lg">{description}</p>
          <ul className="space-y-4 w-full">
            {points.map((point, index) => (
              <li key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-white/50 transition-colors">
                <div className={`p-1 rounded-full bg-white shadow-sm shrink-0 mt-0.5 ${styles.icon}`}>
                  <Check className="w-4 h-4" strokeWidth={3} />
                </div>
                <span className="text-foreground/80 font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`w-full md:w-1/2 flex justify-center ${reverse ? "order-1 md:order-2" : "order-1"}`}>
        <div
          className={`relative w-full max-w-md aspect-square bg-white rounded-4xl overflow-hidden flex items-center justify-center border shadow-2xl transition-transform duration-500 group-hover/card:scale-[1.02] ${styles.imageBox}`}
        >
          <img
            src={image}
            alt={imageAlt}
            width="400"
            height="400"
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
          />
          <div className={`absolute inset-0 bg-linear-to-t ${styles.overlay} to-transparent opacity-60`}></div>
        </div>
      </div>
    </div>
  );
};

import { useOrderDialog } from "@/contexts/order-dialog-context";

export function DetailedBenefits() {
  const { openOrderDialog } = useOrderDialog();
  const benefits: BenefitCardProps[] = [
    {
      title: "प्राकृतिक निखार और बेदाग त्वचा",
      description:
        "ReYoni में मौजूद मंजिष्ठा और मुलेठी (Licorice) मेलेनिन उत्पादन को नियंत्रित करते हैं। यह हार्मोनल बदलावों या घर्षण के कारण आए कालेपन को कम करके त्वचा की प्राकृतिक रंगत (Pink Glow) को वापस लाता है।",
      badge: "Skin Whitening",
      points: ["काले धब्बों और हाइपरपिग्मेंटेशन को हटाता है", "त्वचा को कोमल और एकसमान बनाता है"],
      image: benefitLightning,
      imageAlt: "Skin Whitening",
      reverse: true, // Text first on desktop
      theme: "gold",
    },
    {
      title: "युवा कसाव और लोच (Elasticity)",
      description:
        "लोध्रा और माजूफल जैसे कसैले (astringent) गुण वाले तत्व योनि की दीवारों को कसने और मांसपेशियों को टोन करने में मदद करते हैं। यह कोलेजन बढ़ाता है जिससे ढीलापन दूर होता है।",
      badge: "Vaginal Tightening",
      points: ["पहले इस्तेमाल से ही कसाव का अनुभव", "ब्लड सर्कुलेशन बढ़ाकर संवेदनशीलता (Sensation) वापस लाता है"],
      image: productHolding,
      imageAlt: "Vaginal Tightening",
      reverse: false, // Image first on desktop
      theme: "white",
    },
    {
      title: "दिन भर महकती ताजगी",
      description:
        "नीम और गुलाब अर्क के एंटी-बैक्टीरियल गुण दुर्गंध पैदा करने वाले बैक्टीरिया को खत्म करते हैं। यह pH बैलेंस (3.5 - 4.5) बनाए रखता है, जिससे इन्फेक्शन और बदबू दूर रहती है।",
      badge: "Pleasant Odour",
      points: ["सफेद पानी (White Discharge) की समस्या में राहत", "हल्की, भीनी प्राकृतिक खुशबू जो आत्मविश्वास बढ़ाए"],
      image: benefitOdour,
      imageAlt: "Fresh Odour",
      reverse: true, // Text first on desktop
      theme: "red",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden detailed-benefits-section">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-200 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative z-10 custom-mobile-spacing">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-primary text-sm font-medium uppercase tracking-wider">संपूर्ण समाधान</span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mt-2 mb-4 leading-[1.3]">
            3 बड़े बदलाव जो आप <span className="text-gradient">महसूस करेंगी</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">ReYoni के साथ पाएं विज्ञान और आयुर्वेद का अनोखा संगम।</p>
        </div>

        <div className="md:space-y-10 space-y-6">
          {benefits.map((benefit, index) => (
            <BenefitCard key={index} {...benefit} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={openOrderDialog}
            className="inline-flex items-center justify-center gap-3 px-12 py-5 bg-linear-to-r from-primary to-red-600 text-white text-lg md:text-xl font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-soft cursor-pointer"
          >
            हाँ, मुझे यह 3-in-1 फायदे चाहिए — अभी आर्डर करें
          </button>
        </div>
      </div>
    </section>
  );
}
