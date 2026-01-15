import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { Star, Sparkles, Shield, Clock, Heart, CheckCircle2, Users, TrendingUp, Smile, ArrowRight, Truck } from "lucide-react";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";
import before3 from "@/assets/before-3.jpg";
import after3 from "@/assets/after-3.jpg";
import before4 from "@/assets/before-4.jpg";
import after4 from "@/assets/after-4.jpg";
import before5 from "@/assets/before-5.jpg";
import after5 from "@/assets/after-5.jpg";
import before6 from "@/assets/before-6.jpg";
import after6 from "@/assets/after-6.jpg";

export const BeforeAfterResults = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/15 rounded-full blur-3xl" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-bold uppercase tracking-wider">सिद्ध परिणाम</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            <span className="text-gradient">असली महिलाओं के</span><br />
            <span className="relative inline-block">
              जादुई बदलाव
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--primary))" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
              </svg>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            <span className="text-gradient font-bold">50,000+</span> से ज्यादा महिलाओं ने पहले ही अपनी 
            <span className="font-bold text-foreground"> Confidence</span> वापस पा ली है। 
            <span className="font-bold text-foreground"> खुद देखिए</span> असली नतीजे!
          </p>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">100% Real Results</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">50,000+ खुश ग्राहक</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold">97% Success Rate</span>
            </div>
          </div>
        </div>

        {/* Before/After Comparison Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Result 1 */}
          <div className="space-y-4 animate-fade-in">
            <BeforeAfterSlider beforeImage={before1} afterImage={after1} />
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-muted-foreground">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-bold text-foreground">"15 दिनों में फर्क दिखा!"</span>
              </p>
              <p className="text-xs text-muted-foreground">- प्रिया, 28 साल, मुंबई</p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium">सिर्फ 2 हफ्तों में परिणाम</span>
              </div>
            </div>
          </div>

          {/* Result 2 */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <BeforeAfterSlider beforeImage={before2} afterImage={after2} />
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-muted-foreground">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-bold text-foreground">"कालापन पूरी तरह गया!"</span>
              </p>
              <p className="text-xs text-muted-foreground">- अनीता, 32 साल, दिल्ली</p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                <span className="text-xs font-medium">Dermatologically Tested</span>
              </div>
            </div>
          </div>

          {/* Result 3 */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <BeforeAfterSlider beforeImage={before3} afterImage={after3} />
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-muted-foreground">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-bold text-foreground">"पार्टनर भी खुश!"</span>
              </p>
              <p className="text-xs text-muted-foreground">- रीना, 26 साल, बैंगलोर</p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                <Heart className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium">Confidence Boost Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Result 4 */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <BeforeAfterSlider beforeImage={before4} afterImage={after4} />
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-muted-foreground">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-bold text-foreground">"Complete transformation!"</span>
              </p>
              <p className="text-xs text-muted-foreground">- सोनिया, 29 साल, हैदराबाद</p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium">Amazing Results</span>
              </div>
            </div>
          </div>

          {/* Result 5 */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <BeforeAfterSlider beforeImage={before5} afterImage={after5} />
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-muted-foreground">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-bold text-foreground">"Life-changing product!"</span>
              </p>
              <p className="text-xs text-muted-foreground">- कविता, 31 साल, कोलकाता</p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                <Shield className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium">Safe & Effective</span>
              </div>
            </div>
          </div>

          {/* Result 6 */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <BeforeAfterSlider beforeImage={before6} afterImage={after6} />
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-muted-foreground">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground mb-2">
                <span className="font-bold text-foreground">"Confidence restored!"</span>
              </p>
              <p className="text-xs text-muted-foreground">- दिव्या, 27 साल, जयपुर</p>
              <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                <Smile className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium">Feel Beautiful Again</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 shadow-2xl text-white mb-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">50K+</div>
              <div className="text-sm md:text-base opacity-90">खुश ग्राहक</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">15 दिन</div>
              <div className="text-sm md:text-base opacity-90">में दिखे परिणाम</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-extrabold mb-2">97%</div>
              <div className="text-sm md:text-base opacity-90">सफलता दर</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              आप भी बनें <span className="text-gradient">Success Story!</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              लाखों महिलाओं ने पहले ही अपनी ज़िंदगी बदल ली है। अब आपकी बारी है!
            </p>
            
            <div className="bg-primary/5 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-muted-foreground line-through">MRP: ₹4,980</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">₹2,490</span>
                    <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full">50% OFF</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-muted-foreground">Limited Time</p>
                  <p className="text-sm font-medium text-primary">Free Shipping</p>
                </div>
              </div>
              
              <button className="btn-primary w-full group">
                अभी ऑर्डर करें - ₹2490
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1">
                <Shield className="w-4 h-4 text-primary" />
                Safe Payment
              </span>
              <span className="flex items-center gap-1">
                <Truck className="w-4 h-4 text-primary" />
                Free Delivery
              </span>
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-primary" />
                100% Original
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
