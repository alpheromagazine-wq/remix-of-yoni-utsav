import { Star, Check, ShieldCheck, Leaf, Shield, Truck } from "lucide-react";
import { PRODUCT_DETAILS } from "@/constants/product";
import mainHeroImage from "@/assets/main-hero.webp";
import womanAvatar1 from "@/assets/woman-avatar-1.webp";
import womanAvatar2 from "@/assets/woman-avatar-2.webp";
import womanAvatar3 from "@/assets/woman-avatar-3.webp";
import womanAvatar4 from "@/assets/woman-avatar-4.webp";
import womanAvatar5 from "@/assets/woman-avatar-5.webp";

import { useOrderDialog } from "@/contexts/order-dialog-context";

export const Hero = () => {
  const { openOrderDialog } = useOrderDialog();

  return (
    <section className="bg-hero-gradient min-h-screen relative overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-8 pb-16 md:pt-12 md:pb-24 max-w-7xl">
        <div className="text-center mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full shadow-md shadow-red-500/20 bg-white scale-90 md:scale-100">
            <div className="flex -space-x-3">
              <img src={womanAvatar1} className="w-8 h-8 rounded-full border-2 border-card object-cover shrink-0" alt="Woman Avatar 1" />
              <img src={womanAvatar2} className="w-8 h-8 rounded-full border-2 border-card object-cover shrink-0" alt="Woman Avatar 2" />
              <img src={womanAvatar3} className="w-8 h-8 rounded-full border-2 border-card object-cover shrink-0" alt="Woman Avatar 3" />
              <img src={womanAvatar4} className="w-8 h-8 rounded-full border-2 border-card object-cover shrink-0" alt="Woman Avatar 4" />
              <img src={womanAvatar5} className="w-8 h-8 rounded-full border-2 border-card object-cover shrink-0" alt="Woman Avatar 5" />
            </div>
            <span className="text-xs sm:text-sm font-medium text-foreground">
              <span className="text-primary font-bold">50,000+</span> खुश महिलाएं
            </span>
            <div className="flex items-center gap-0.5 ml-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-center">
          <div className="text-center lg:text-left space-y-4 md:space-y-6">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary text-xs md:text-sm font-semibold px-3 py-1.5 rounded-full">🌸 #1 Intimate Care Brand</span>
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight md:leading-snug mb-2">
              <span className="text-gradient">क्या आपकी</span> शादी करीब है? <br className="hidden md:block" />
              या फिर <span className="text-gradient">पार्टनर से</span> रिश्ते में <br className="hidden md:block" />
              <span className="relative inline-block mt-1 md:mt-0">
                <span className="text-gradient">खुशियां चाहिए?</span>
                <svg className="absolute -bottom-1 md:-bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--primary))" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
              <span className="text-gradient font-bold">बिकिनी एरिया</span> का कालापन, <span className="text-gradient font-bold">ढीली योनि</span> और{" "}
              <br className="hidden md:block" />
              <span className="text-gradient font-bold">प्राइवेट पार्ट</span> की डार्कनेस खत्म करो – <br className="hidden md:block" />
              <span className="text-gradient font-bold text-lg md:text-xl mt-1 inline-block">सिर्फ 15 दिनों में!</span>
            </p>

            <p className="text-sm md:text-base font-medium text-foreground/80 max-w-lg mx-auto lg:mx-0">
              15 दिनों में राहत महसूस करें, confidence वापस लाएं — और खुद को बिना शर्म के अपनाएं।
            </p>

            {/* Product Image - Mobile */}
            <div className="relative z-10 animate-float w-full max-w-[480px] mx-auto lg:hidden">
              <div className="aspect-4/5 sm:aspect-square bg-white rounded-[2.5rem] p-4 shadow-xl shadow-red-500/20 relative overflow-hidden group border border-primary/5">
                <div className="w-full h-full rounded-4xl overflow-hidden relative shadow-inner bg-cream/10">
                  <img src={mainHeroImage} className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" alt="ReYoni Premium Product" />

                  <div className="absolute top-5 left-5 z-20">
                    <div className="bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 border border-white/20">
                      <div className="size-4 rounded-full bg-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-primary" strokeWidth={4} />
                      </div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">Premium Choice</span>
                    </div>
                  </div>

                  <div className="absolute top-4 md:top-5 right-0 md:right-5 z-20">
                    <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-primary/10 flex items-center gap-2 transform transition-transform duration-500 group-hover:translate-x-1">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Derma Tested</span>
                    </div>
                  </div>

                  <div className="absolute bottom-2 md:bottom-6 left-4 md:left-6 z-20">
                    <div className="bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-2.5 transform transition-transform duration-500 group-hover:-translate-x-1">
                      <div className="p-1 rounded-lg bg-green-500/20">
                        <Leaf className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-medium text-white/70 uppercase tracking-tighter leading-none">Formulated with</span>
                        <span className="text-[12px] font-bold text-white uppercase tracking-wide">100% Ayurvedic</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </div>

            {/* Price Container */}
            <div className="bg-white relative z-10 rounded-3xl p-6 shadow-xl shadow-red-500/20 max-w-md mx-auto lg:mx-0">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground line-through">
                    MRP: {PRODUCT_DETAILS.currencySymbol}
                    {PRODUCT_DETAILS.mrp.toLocaleString()}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">
                      {PRODUCT_DETAILS.currencySymbol}
                      {PRODUCT_DETAILS.price.toLocaleString()}
                    </span>
                    <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full shrink-0">{PRODUCT_DETAILS.discountPercent}% OFF</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Limited Time Offer</p>
                  <p className="text-sm font-medium text-primary">Free Shipping</p>
                </div>
              </div>
              <button onClick={openOrderDialog} className="btn-primary w-full cursor-pointer">
                अभी ऑर्डर करें - {PRODUCT_DETAILS.currencySymbol}
                {PRODUCT_DETAILS.price}
                <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
              </button>
              <p className="mt-2 text-xs md:text-sm font-semibold text-center text-primary">आज का ऑफर: लिमिटेड स्टॉक — देरी न करें</p>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Shield className="w-4 h-4 text-primary" />
                  Safe Payment
                </span>
                <span className="flex items-center gap-1">
                  <Truck className="w-4 h-4 text-primary" />
                  Free Delivery
                </span>
              </div>
            </div>
          </div>

          {/* Right Section - Product Image Desktop */}
          <div className="relative hidden lg:flex justify-center items-center lg:justify-end">
            <div className="absolute inset-0 bg-linear-to-br from-primary/30 to-red-200/20 rounded-[3rem] blur-3xl scale-95 opacity-50" />

            <div className="relative z-10 animate-float w-full max-w-[480px]">
              <div className="aspect-4/5 sm:aspect-square bg-white rounded-[2.5rem] p-4 shadow-xl shadow-red-500/20 relative overflow-hidden group border border-primary/5">
                <div className="w-full h-full rounded-4xl overflow-hidden relative shadow-inner bg-cream/10">
                  <img src={mainHeroImage} className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110" alt="ReYoni Premium Product" />

                  <div className="absolute top-5 left-5 z-20">
                    <div className="bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 border border-white/20">
                      <div className="size-4 rounded-full bg-white flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-primary" strokeWidth={4} />
                      </div>
                      <span className="text-[10px] font-bold text-white uppercase tracking-widest">Premium Choice</span>
                    </div>
                  </div>

                  <div className="absolute top-4 md:top-5 right-0 md:right-5 z-20">
                    <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-primary/10 flex items-center gap-2 transform transition-transform duration-500 group-hover:translate-x-1">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Derma Tested</span>
                    </div>
                  </div>

                  <div className="absolute bottom-2 md:bottom-6 left-4 md:left-6 z-20">
                    <div className="bg-black/60 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-2xl border border-white/20 flex items-center gap-2.5 transform transition-transform duration-500 group-hover:-translate-x-1">
                      <div className="p-1 rounded-lg bg-green-500/20">
                        <Leaf className="w-4 h-4 text-green-400" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[9px] font-medium text-white/70 uppercase tracking-tighter leading-none">Formulated with</span>
                        <span className="text-[12px] font-bold text-white uppercase tracking-wide">100% Ayurvedic</span>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 pointer-events-none bg-linear-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
