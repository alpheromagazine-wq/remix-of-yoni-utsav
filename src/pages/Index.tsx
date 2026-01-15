import { useState } from "react";
import { LeadForm } from "@/components/LeadForm";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import doctorImage from "@/assets/doctor.webp";
import mainHeroImage from "@/assets/main-hero.webp";
import womanAvatar1 from "@/assets/woman-avatar-1.webp";
import womanAvatar2 from "@/assets/woman-avatar-2.webp";
import womanAvatar3 from "@/assets/woman-avatar-3.webp";
import womanAvatar4 from "@/assets/woman-avatar-4.webp";
import womanAvatar5 from "@/assets/woman-avatar-5.webp";
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
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Sparkles, Shield, Clock, Heart, Star, Phone, CheckCircle2, XCircle, Lock,
  Package, Eye, CreditCard, Users, TrendingUp, Baby, Gift, Award, Quote,
  MessageSquareQuote, CircleCheckBig, Smile, Check, X, CircleX, ArrowRight,
  Droplets, Moon, Headphones, AlertCircle, TriangleAlert, Leaf, ShieldCheck, Truck
} from "lucide-react";

const Index = () => {
  // State management
  const [showMobileCTA, setShowMobileCTA] = useState(true);
  const [activeStep, setActiveStep] = useState(1);

  const whatsappNumber = "919876543210";
  const whatsappMessage = encodeURIComponent("मुझे इंटिमेट वेलनेस ट्रीटमेंट के बारे में जानकारी चाहिए");

  const testimonials = [
    {
      name: "प्रिया शर्मा",
      initial: "P",
      city: "28 साल, मुंबई",
      text: '"मेरी शादी 3 महीने बाद थी और मैं बहुत परेशान थी। <span class="font-bold text-foreground">बिकिनी एरिया का कालापन</span> मुझे रात भर सोने नहीं देता था। ReYoni का इस्तेमाल करने के बाद <span class="font-bold text-primary">सिर्फ 15 दिनों में</span> मुझे फर्क दिखने लगा। आज मैं पूरी तरह <span class="font-bold">confident</span> हूं!"',
      rating: 5,
      icon: "heart"
    },
    {
      name: "अनीता वर्मा",
      initial: "A",
      city: "32 साल, दिल्ली",
      text: '"डिलीवरी के बाद मुझे <span class="font-bold text-foreground">vaginal looseness</span> की बहुत परेशानी थी। पार्टनर के साथ <span class="font-bold text-foreground">intimacy</span> में कमी आ गई थी और मैं बहुत depressed थी। ReYoni ने मेरी ज़िंदगी बदल दी! <span class="font-bold text-primary">3 हफ्तों में ही</span> मुझे और मेरे पार्टनर को बहुत फर्क महसूस हुआ। Thank you so much!"',
      rating: 5,
      icon: "sparkles"
    },
    {
      name: "रीना पटेल",
      initial: "R",
      city: "26 साल, बैंगलोर",
      text: '"मैं बीच पर <span class="font-bold text-foreground">bikini</span> पहनने से डरती थी क्योंकि <span class="font-bold text-foreground">प्राइवेट पार्ट्स का कालापन</span> बहुत ज्यादा था। मैंने बहुत सारे products try किए लेकिन कुछ काम नहीं आया। ReYoni के साथ <span class="font-bold text-primary">2 हफ्तों में</span> मुझे असली फर्क दिखा! अब मैं हर तरह के कपड़े पहनने में confident हूं। इससे बेहतर कुछ नहीं!"',
      rating: 5,
      icon: "heart"
    },
    {
      name: "नेहा गुप्ता",
      initial: "N",
      city: "30 साल, पुणे",
      text: '"शादी के 5 साल बाद मेरा <span class="font-bold text-foreground">relationship</span> अच्छा नहीं चल रहा था। <span class="font-bold text-foreground">Intimacy issues</span> की वजह से मैं और मेरे पति में दूरी बढ़ती जा रही थी। ReYoni ने हमारी शादी बचा ली! <span class="font-bold text-primary">अब हम पहले से ज्यादा खुश हैं।</span> यह product वाकई जादू है। Every married woman should try this!"',
      rating: 5,
      icon: "heart"
    },
    {
      name: "सिमरन कौर",
      initial: "S",
      city: "24 साल, चंडीगढ़",
      text: '"मैं <span class="font-bold text-foreground">gym</span> जाती हूं और अक्सर <span class="font-bold text-foreground">tight clothes</span> पहनती हूं। लेकिन बिकिनी एरिया की <span class="font-bold text-foreground">darkness</span> मुझे बहुत uncomfortable feel करवाती थी। मैंने ReYoni try किया और <span class="font-bold text-primary">10 दिनों में ही</span> फर्क देखने को मिला! अब मैं किसी भी तरह के कपड़े पहनने में confident हूं। Highly recommended!"',
      rating: 5,
      icon: "heart"
    },
    {
      name: "मीरा देसाई",
      initial: "M",
      city: "35 साल, अहमदाबाद",
      text: '"दो बच्चों के बाद मुझे लगता था कि अब मैं कभी पहले जैसी नहीं हो सकती। लेकिन ReYoni ने मुझे गलत साबित कर दिया! <span class="font-bold text-primary">महीने में</span> मुझे ऐसा लगा जैसे मैं फिर से young हूं। मेरा confidence वापस आ गया है और मेरी personal life भी बहुत improve हुई है। हर महिला को यह try करना चाहिए!"',
      rating: 5,
      icon: "smile"
    }
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Top Bar */}
      <section className="bg-primary py-3 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-primary-foreground">
            <TriangleAlert className="h-5 w-5 animate-pulse flex-shrink-0" />
            <p className="text-sm md:text-base font-medium text-center max-w-full w-[75%] md:w-fit">
              <span className="font-bold">ध्यान दें:</span> 78% भारतीय महिलाएं इस समस्या से चुपचाप जूझ रही हैं — आज ही समाधान पाएं!
            </p>
            <TriangleAlert className="h-5 w-5 animate-pulse flex-shrink-0" />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-hero-gradient min-h-screen relative overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl" />
        
        <div className="container-custom section-padding">
          <div className="text-center mb-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full shadow-md shadow-red-500/20 bg-white">
              <div className="flex -space-x-3">
                <img src={womanAvatar1} className="w-8 h-8 rounded-full border-2 border-card object-cover flex-shrink-0" alt="Woman Avatar 1" />
                <img src={womanAvatar2} className="w-8 h-8 rounded-full border-2 border-card object-cover flex-shrink-0" alt="Woman Avatar 2" />
                <img src={womanAvatar3} className="w-8 h-8 rounded-full border-2 border-card object-cover flex-shrink-0" alt="Woman Avatar 3" />
                <img src={womanAvatar4} className="w-8 h-8 rounded-full border-2 border-card object-cover flex-shrink-0" alt="Woman Avatar 4" />
                <img src={womanAvatar5} className="w-8 h-8 rounded-full border-2 border-card object-cover flex-shrink-0" alt="Woman Avatar 5" />
              </div>
              <span className="text-sm font-medium text-foreground">
                <span className="text-primary font-bold">50,000+</span> खुश महिलाएं
              </span>
              <div className="flex items-center gap-0.5 ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center justify-center">
            <div className="text-center lg:text-left space-y-6">
              <div className="inline-block">
                <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
                  🌸 #1 Intimate Care Brand
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-gradient">क्या आपकी</span> शादी करीब है? <br className="hidden md:block" />
                या फिर <span className="text-gradient">पार्टनर से</span> रिश्ते में <br className="hidden md:block" />
                <span className="relative inline-block">
                  <span className="text-gradient">खुशियां चाहिए?</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                    <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--primary))" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
                  </svg>
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                <span className="text-gradient font-bold">बिकिनी एरिया</span> का कालापन, <span className="text-gradient font-bold">ढीली योनि</span> और <br className="hidden md:block" />
                <span className="text-gradient font-bold">प्राइवेट पार्ट</span> की डार्कनेस खत्म करो – <br className="hidden md:block" />
                <span className="text-gradient font-bold">सिर्फ 15 दिनों में!</span>
              </p>

              {/* Product Image - Mobile */}
              <div className="relative z-10 animate-float w-full max-w-[480px] mx-auto lg:hidden">
                <div className="aspect-[4/5] sm:aspect-square bg-white rounded-[2.5rem] p-4 shadow-xl shadow-red-500/20 relative overflow-hidden group border border-primary/5">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-inner bg-cream/10">
                    <img 
                      src={mainHeroImage}
                      className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                      alt="ReYoni Premium Product"
                    />

                    {/* Premium Badge (Top Left) */}
                    <div className="absolute top-5 left-5 z-20">
                      <div className="bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 border border-white/20">
                        <div className="size-4 rounded-full bg-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-primary" strokeWidth={4} />
                        </div>
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Premium Choice</span>
                      </div>
                    </div>

                    {/* Quality Badge (Top Right) */}
                    <div className="absolute top-4 md:top-5 right-0 md:right-5 z-20">
                      <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-primary/10 flex items-center gap-2 transform transition-transform duration-500 group-hover:translate-x-1">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Derma Tested</span>
                      </div>
                    </div>

                    {/* Natural Heritage Badge (Bottom Left) */}
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

                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>
              </div>

              {/* Price Container */}
              <div className="bg-white relative z-[10] rounded-3xl p-6 shadow-xl shadow-red-500/20 max-w-md mx-auto lg:mx-0">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground line-through">MRP: ₹4,980</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">₹2,490</span>
                      <span className="bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full flex-shrink-0">50% OFF</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">Limited Time Offer</p>
                    <p className="text-sm font-medium text-primary">Free Shipping</p>
                  </div>
                </div>
                <a href="#lead-form" className="btn-primary w-full">
                  अभी ऑर्डर करें - ₹2490
                  <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </a>
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
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-red-200/20 rounded-[3rem] blur-3xl scale-95 opacity-50" />
              
              <div className="relative z-10 animate-float w-full max-w-[480px]">
                <div className="aspect-[4/5] sm:aspect-square bg-white rounded-[2.5rem] p-4 shadow-xl shadow-red-500/20 relative overflow-hidden group border border-primary/5">
                  <div className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-inner bg-cream/10">
                    <img 
                      src={mainHeroImage}
                      className="w-full h-full object-cover transform transition-transform duration-1000 group-hover:scale-110"
                      alt="ReYoni Premium Product"
                    />

                    {/* Premium Badge (Top Left) */}
                    <div className="absolute top-5 left-5 z-20">
                      <div className="bg-primary/90 backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg flex items-center gap-2 border border-white/20">
                        <div className="size-4 rounded-full bg-white flex items-center justify-center">
                          <Check className="w-2.5 h-2.5 text-primary" strokeWidth={4} />
                        </div>
                        <span className="text-[10px] font-bold text-white uppercase tracking-widest">Premium Choice</span>
                      </div>
                    </div>

                    {/* Quality Badge (Top Right) */}
                    <div className="absolute top-4 md:top-5 right-0 md:right-5 z-20">
                      <div className="bg-white/95 backdrop-blur-md px-4 py-2 rounded-2xl shadow-xl border border-primary/10 flex items-center gap-2 transform transition-transform duration-500 group-hover:translate-x-1">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <ShieldCheck className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[11px] font-bold text-foreground uppercase tracking-wider">Derma Tested</span>
                      </div>
                    </div>

                    {/* Natural Heritage Badge (Bottom Left) */}
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

                    <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  </div>
                </div>

                {/* Extra Trust Badge (Floating Outside) */}
                <div className="absolute -bottom-8 -right-8 bg-white px-6 py-5 rounded-[2rem] shadow-lg shadow-red-500/20 animate-bounce-soft border border-primary/10 z-30 hidden md:flex items-center gap-4">
                  <div className="size-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary rotate-3 group-hover:rotate-0 transition-transform">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-[10px] text-muted-foreground font-extrabold uppercase tracking-widest leading-none mb-1.5">Certification</p>
                    <p className="text-sm font-bold text-foreground">Premium Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After Results Section - HIGH CRO */}
      <section className="section-padding bg-gradient-to-b from-primary/5 via-background to-primary/5 relative overflow-hidden">
        {/* Decorative Elements */}
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

          {/* Before/After Comparison Grid - All 6 Results */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Result 1 */}
            <div className="space-y-4 animate-fade-in">
              <BeforeAfterSlider 
                beforeImage={before1}
                afterImage={after1}
              />
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
                <p className="text-xs text-muted-foreground">
                  - प्रिया, 28 साल, मुंबई
                </p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium">सिर्फ 2 हफ्तों में परिणाम</span>
                </div>
              </div>
            </div>

            {/* Result 2 */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <BeforeAfterSlider 
                beforeImage={before2}
                afterImage={after2}
              />
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
                <p className="text-xs text-muted-foreground">
                  - अनीता, 32 साल, दिल्ली
                </p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-medium">Dermatologically Tested</span>
                </div>
              </div>
            </div>

            {/* Result 3 */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <BeforeAfterSlider 
                beforeImage={before3}
                afterImage={after3}
              />
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
                <p className="text-xs text-muted-foreground">
                  - रीना, 26 साल, बैंगलोर
                </p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                  <Heart className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium">Confidence Boost Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Result 4 */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <BeforeAfterSlider 
                beforeImage={before4}
                afterImage={after4}
              />
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
                <p className="text-xs text-muted-foreground">
                  - सोनिया, 29 साल, हैदराबाद
                </p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium">Amazing Results</span>
                </div>
              </div>
            </div>

            {/* Result 5 */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <BeforeAfterSlider 
                beforeImage={before5}
                afterImage={after5}
              />
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
                <p className="text-xs text-muted-foreground">
                  - कविता, 31 साल, कोलकाता
                </p>
                <div className="flex items-center gap-2 mt-3 pt-3 border-t">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-xs font-medium">Safe & Effective</span>
                </div>
              </div>
            </div>

            {/* Result 6 */}
            <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
              <BeforeAfterSlider 
                beforeImage={before6}
                afterImage={after6}
              />
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
                <p className="text-xs text-muted-foreground">
                  - दिव्या, 27 साल, जयपुर
                </p>
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

      {/* Real Customer Stories Section */}
      <section className="section-padding bg-gradient-to-b from-background via-secondary/10 to-background">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full mb-6">
              <MessageSquareQuote className="w-5 h-5" />
              <span className="text-sm font-bold uppercase tracking-wider">असली कहानियां</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold mb-6">
              <span className="text-gradient">महिलाओं की</span> अपनी जुबानी<br />
              <span className="relative inline-block">
                उनकी सच्ची कहानी
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="hsl(var(--primary))" strokeWidth="6" strokeLinecap="round" opacity="0.4" />
                </svg>
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              जो महिलाएं पहले शर्मिंदा थीं, आज <span className="text-gradient font-bold">confident</span> हैं।<br />
              पढ़िए उनकी अपनी कहानी, अपनी जुबानी...
            </p>
          </div>

          {/* Social Proof Banner */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                आप अकेली नहीं हैं - <span className="text-gradient">हजारों महिलाएं</span> बदलाव ला चुकी हैं!
              </h3>
              <p className="text-muted-foreground mb-6 text-lg">
                हर दिन <span className="font-bold text-foreground">500+ महिलाएं</span> ReYoni से अपनी ज़िंदगी बदल रही हैं।
                <br />
                अब आपकी बारी है!
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">4.9/5</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">50K+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">97%</div>
                  <div className="text-sm text-muted-foreground">Success Rate</div>
                </div>
                
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2">15 दिन</div>
                  <div className="text-sm text-muted-foreground">Average Results</div>
                </div>
              </div>

              <button className="btn-primary group">
                मैं भी बदलाव चाहती हूं!
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shocking Truth Section */}
      <section className="section-padding bg-foreground text-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-extrabold flex items-center justify-center gap-3">
              ⚠️ सच्चाई जो कोई नहीं बताता
            </h2>
            
            <div className="space-y-4 text-lg md:text-xl leading-relaxed">
              <p className="font-semibold">
                क्या आप भी शर्मिंदगी महसूस करती हैं? <br />
                क्या आपका आत्मविश्वास टूट चुका है?
              </p>
              
              <p className="text-background/90">
                हजारों महिलाएं इस समस्या से परेशान हैं लेकिन बोल नहीं पातीं।
                यह सिर्फ आप नहीं हैं - यह एक आम समस्या है जिसका समाधान है!
              </p>
              
              <p className="text-2xl md:text-3xl font-bold text-primary pt-4">
                अब नहीं चलेगा यह सब! <br />
                आपकी खूबसूरती, आपका हक है।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost of Delay Section */}
      <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center">
              💥 क्यों जरूरी है अभी एक्शन लेना?
            </h2>
            
            <div className="grid gap-4 md:gap-6">
              <Card className="card-elevated p-6 border-l-4 border-destructive">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">हर दिन की देरी = बढ़ती शर्मिंदगी</h3>
                    <p className="text-muted-foreground">
                      हर गुजरता दिन आपके आत्मविश्वास को और कम करता है। आज की देरी कल की पछतावे में बदल सकती है।
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-elevated p-6 border-l-4 border-destructive">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">पार्टनर के साथ रिश्तों में दूरी</h3>
                    <p className="text-muted-foreground">
                      इंटिमेसी में कमी रिश्तों को कमजोर बनाती है। आपका पार्टनर खुश नहीं, तो रिश्ता कैसे मजबूत होगा?
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-elevated p-6 border-l-4 border-destructive">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">खुद पर विश्वास की कमी</h3>
                    <p className="text-muted-foreground">
                      जब आप खुद को अट्रैक्टिव नहीं मानतीं, तो यह हर चीज में दिखता है। आपकी खूबसूरती वापस लाने का समय आ गया है।
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="card-elevated p-6 border-l-4 border-destructive">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold mb-2">बिकिनी या टाइट कपड़े पहनने का डर</h3>
                    <p className="text-muted-foreground">
                      कालापन और ढीलापन आपको अपनी पसंद के कपड़े पहनने से रोकता है। अब कोई रोक नहीं!
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="text-center pt-4">
              <p className="text-2xl md:text-3xl font-bold text-primary">
                बस करो इंतजार! अब है वक्त बदलाव का।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Solution Section */}
      <section className="section-padding bg-section-gradient">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-extrabold">
                ✨ हमारे ट्रीटमेंट से मिलेगा:
              </h2>
              <p className="text-xl text-muted-foreground">
                100% सेफ, डॉक्टर अप्रूव्ड, तेज रिजल्ट!
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="card-elevated text-center space-y-4 hover:shadow-glow transition-all duration-300">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">योनि व्हाइटनिंग</h3>
                <p className="text-muted-foreground leading-relaxed">
                  15 दिनों में दिखेगा फर्क, गोरापन जो चमकाए। प्राइवेट पार्ट की डार्कनेस को कहें अलविदा!
                </p>
                <div className="flex items-center justify-center gap-1 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">15 दिनों में परिणाम</span>
                </div>
              </Card>

              <Card className="card-elevated text-center space-y-4 hover:shadow-glow transition-all duration-300">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Heart className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">वजाइनल टाइटनिंग</h3>
                <p className="text-muted-foreground leading-relaxed">
                  ढीलापन खत्म, पार्टनर खुश, जिंदगी खुशहाल। आपकी इंटिमेसी को फिर से जवां बनाएं!
                </p>
                <div className="flex items-center justify-center gap-1 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">पार्टनर संतुष्टि गारंटीड</span>
                </div>
              </Card>

              <Card className="card-elevated text-center space-y-4 hover:shadow-glow transition-all duration-300">
                <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold">बिकिनी एरिया ब्राइटनिंग</h3>
                <p className="text-muted-foreground leading-relaxed">
                  कालापन दूर, स्किन सॉफ्ट और ग्लोइंग। अब किसी भी ड्रेस में कॉन्फिडेंट रहें!
                </p>
                <div className="flex items-center justify-center gap-1 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-semibold">वर्ल्ड क्लास फॉर्मूला</span>
                </div>
              </Card>
            </div>

            <div className="text-center">
              <Badge className="bg-gold-gradient text-white px-8 py-3 text-lg font-bold">
                <Award className="w-5 h-5 mr-2" />
                डॉक्टर प्रेरित फॉर्मूला • 10,000+ संतुष्ट महिलाएं
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs This Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto space-y-10">
            <h2 className="text-3xl md:text-5xl font-extrabold text-center">
              🎯 किसके लिए है यह ट्रीटमेंट?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="card-elevated space-y-4 hover:border-primary transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">शादी से पहले की दुल्हनें</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  शादी की रात के लिए खुद को परफेक्ट बनाएं। कोई शर्मिंदगी नहीं, सिर्फ कॉन्फिडेंस!
                </p>
              </Card>

              <Card className="card-elevated space-y-4 hover:border-primary transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Baby className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">नई माँ बनी महिलाएं</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  डिलीवरी के बाद योनि ढीली हो गई है? अब 15 दिनों में टाइट बनाएं!
                </p>
              </Card>

              <Card className="card-elevated space-y-4 hover:border-primary transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">पार्टनर को खुश रखना चाहती हैं</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  इंटिमेसी में सुधार लाएं और अपने रिश्ते को मजबूत बनाएं!
                </p>
              </Card>

              <Card className="card-elevated space-y-4 hover:border-primary transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">प्राइवेट एरिया की डार्कनेस</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  बिकिनी एरिया का कालापन खत्म करें और अपनी खूबसूरती बढ़ाएं!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Real Stories / Testimonials Section */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 flex items-center gap-2 w-fit mx-auto">
              <MessageSquareQuote className="w-4 h-4" />
              Real Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
              <span className="text-gradient">50,000+</span> महिलाओं की<br />ज़िन्दगी बदली
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto flex items-center justify-center gap-2">
              Real women, real results, real happiness
              <Heart className="w-5 h-5 text-primary fill-primary" />
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elevated space-y-4 relative hover:shadow-glow transition-all duration-300 border-primary/20">
                <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <div 
                  className="text-foreground leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: testimonial.text }}
                />
                {testimonial.icon === "heart" && <Heart className="w-4 h-4 text-primary fill-primary inline-block ml-1" />}
                {testimonial.icon === "sparkles" && <Sparkles className="w-4 h-4 text-primary fill-primary inline-block ml-1" />}
                {testimonial.icon === "smile" && <Smile className="w-4 h-4 text-primary inline-block ml-1" />}
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground font-bold">{testimonial.initial}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">{testimonial.name}</span>
                      <CircleCheckBig className="w-4 h-4 text-green-500" />
                    </div>
                    <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gradient">50,000+</p>
                <p className="text-sm text-muted-foreground mt-1">Happy Customers</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gradient">4.9/5</p>
                <p className="text-sm text-muted-foreground mt-1">Average Rating</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gradient">98%</p>
                <p className="text-sm text-muted-foreground mt-1">Would Recommend</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-bold text-gradient">2 Weeks</p>
                <p className="text-sm text-muted-foreground mt-1">Visible Results</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="#lead-form" className="btn-primary text-sm md:text-lg">
              Join 50,000+ Happy Women →
            </a>
          </div>
        </div>
      </section>

      {/* Doctor Recommendation Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/10 to-background">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />
              
              <Card className="relative card-elevated p-4 md:p-8 shadow-glow">
                {/* Doctor Profile */}
                <div className="flex items-start gap-6 mb-6">
                  <div className="size-28 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shrink-0 p-2">
                    <img 
                      src={doctorImage} 
                      alt="Dr. Meera Sharma - Gynecologist" 
                      className="w-full h-full object-cover rounded-sm"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Dr. Meera Sharma</h3>
                    <p className="text-primary font-medium">MBBS, MD - Obstetrics &amp; Gynaecology</p>
                    <p className="text-sm text-muted-foreground mt-1">20+ Years Experience</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-medium">Best Gynecologist Award 2023</span>
                    </div>
                  </div>
                </div>

                {/* Doctor Quote */}
                <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                  <p className="text-lg italic leading-relaxed">
                    "ReYoni में use होने वाले <span className="font-semibold">natural ingredients</span> intimate health के लिए <span className="text-primary font-semibold">clinically proven</span> हैं। यह product women की intimate concerns को safely और effectively address करता है।"
                  </p>
                </div>

                {/* Doctor Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-3 bg-background rounded-xl">
                    <p className="text-xl font-bold text-primary">20+</p>
                    <p className="text-xs text-muted-foreground">Years Experience</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-xl">
                    <p className="text-xl font-bold text-primary">1L+</p>
                    <p className="text-xs text-muted-foreground">Patients Treated</p>
                  </div>
                  <div className="text-center p-3 bg-background rounded-xl">
                    <p className="text-xl font-bold text-primary">4.9</p>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Benefits List */}
            <div className="space-y-6">
              <Badge className="bg-primary/10 text-primary px-4 py-2 rounded-full">
                👩‍⚕️ Doctor Recommended
              </Badge>
              
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-gradient">Gynecologists</span> भी<br />
                Recommend करती हैं
              </h2>
              
              <p className="text-lg text-muted-foreground">
                ReYoni को develop करने में <span className="font-semibold text-foreground">top gynecologists</span> की team ने help की है। यह product:
              </p>

              <div className="space-y-4">
                {[
                  "Dermatologically Tested & Approved",
                  "pH Balanced Formula (4.5-5.5)",
                  "100% Natural Ayurvedic Herbs",
                  "No Harmful Chemicals",
                  "Safe for Daily Use",
                  "No Side Effects Reported"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center shrink-0">
                      <CircleCheckBig className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-10 pt-4 mx-auto w-full flex justify-center">
            <a href="#lead-form" className="btn-primary text-sm md:text-lg">
              Doctor Approved Product लें →
            </a>
          </div>
        </div>
      </section>

      {/* Comparison Section - Why ReYoni is Better */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
              क्यों <span className="text-gradient">ReYoni</span> बेहतर है
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              देखें ReYoni बाकी विकल्पों से कैसे अलग और बेहतर है
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {/* ReYoni Column - Highlighted */}
            <Card className="card-elevated bg-primary text-primary-foreground ring-4 ring-primary/20">
              <h3 className="text-xl font-bold mb-4 text-center">ReYoni</h3>
              <ul className="space-y-3">
                {[
                  "Visible whitening results",
                  "Natural tightening effect",
                  "24-hour freshness",
                  "Clinically tested",
                  "pH-balanced formula",
                  "Use at home"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Local Creams */}
            <Card className="card-elevated border-border/50">
              <h3 className="text-xl font-bold mb-4 text-center text-foreground">Local Creams</h3>
              <ul className="space-y-3">
                {[
                  "Temporary effects only",
                  "No tightening benefit",
                  "Short-lasting freshness",
                  "Often untested",
                  "May disrupt pH",
                  "Risk of irritation"
                ].map((issue, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{issue}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Home Remedies */}
            <Card className="card-elevated border-border/50">
              <h3 className="text-xl font-bold mb-4 text-center text-foreground">Home Remedies</h3>
              <ul className="space-y-3">
                {[
                  "Unpredictable results",
                  "No proven tightening",
                  "Minimal odour control",
                  "No clinical backing",
                  "Can cause reactions",
                  "Time-consuming"
                ].map((issue, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{issue}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Parlour Treatments */}
            <Card className="card-elevated border-border/50">
              <h3 className="text-xl font-bold mb-4 text-center text-foreground">Parlour Treatments</h3>
              <ul className="space-y-3">
                {[
                  "Expensive sessions",
                  "Temporary results",
                  "Requires multiple visits",
                  "Privacy concerns",
                  "Inconvenient",
                  "Often painful"
                ].map((issue, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm">
                    <X className="w-5 h-5 text-destructive flex-shrink-0" />
                    <span className="text-muted-foreground">{issue}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-10 max-w-6xl mx-auto space-y-4">
            {/* Surgery/Laser Treatment */}
            <Card className="overflow-hidden shadow-elegant">
              <div className="grid md:grid-cols-3">
                <div className="p-6 bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">सामान्य समाधान</p>
                  <h3 className="font-semibold text-foreground">सर्जरी / लेजर ट्रीटमेंट</h3>
                </div>
                <div className="p-6 border-y md:border-y-0 md:border-x border-border/50">
                  <div className="flex items-start gap-3">
                    <CircleX className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">समस्या</p>
                      <p className="text-foreground">महंगा, दर्दनाक, और रिकवरी में समय</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-primary mb-1 font-medium">
                        <span className="text-gradient">ReYoni</span>
                      </p>
                      <p className="text-foreground">बिना चीर-फाड़, दर्द रहित, घर पर उपयोग</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* General Creams */}
            <Card className="overflow-hidden shadow-elegant">
              <div className="grid md:grid-cols-3">
                <div className="p-6 bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">सामान्य समाधान</p>
                  <h3 className="font-semibold text-foreground">सामान्य क्रीम</h3>
                </div>
                <div className="p-6 border-y md:border-y-0 md:border-x border-border/50">
                  <div className="flex items-start gap-3">
                    <CircleX className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">समस्या</p>
                      <p className="text-foreground">कैमिकल से जलन, अस्थायी परिणाम</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-primary mb-1 font-medium">
                        <span className="text-gradient">ReYoni</span>
                      </p>
                      <p className="text-foreground">100% प्राकृतिक, स्थायी परिणाम</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Exercise */}
            <Card className="overflow-hidden shadow-elegant">
              <div className="grid md:grid-cols-3">
                <div className="p-6 bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">सामान्य समाधान</p>
                  <h3 className="font-semibold text-foreground">व्यायाम</h3>
                </div>
                <div className="p-6 border-y md:border-y-0 md:border-x border-border/50">
                  <div className="flex items-start gap-3">
                    <CircleX className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">समस्या</p>
                      <p className="text-foreground">समय लगता है, नियमितता मुश्किल</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-primary mb-1 font-medium">
                        <span className="text-gradient">ReYoni</span>
                      </p>
                      <p className="text-foreground">तुरंत असर, उपयोग में आसान</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Doing Nothing */}
            <Card className="overflow-hidden shadow-elegant">
              <div className="grid md:grid-cols-3">
                <div className="p-6 bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">सामान्य समाधान</p>
                  <h3 className="font-semibold text-foreground">कुछ नहीं करना</h3>
                </div>
                <div className="p-6 border-y md:border-y-0 md:border-x border-border/50">
                  <div className="flex items-start gap-3">
                    <CircleX className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">समस्या</p>
                      <p className="text-foreground">समस्या बढ़ती जाती है</p>
                    </div>
                  </div>
                </div>
                <div className="p-6 bg-primary/5">
                  <div className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-primary mb-1 font-medium">
                        <span className="text-gradient">ReYoni</span>
                      </p>
                      <p className="text-foreground">आज से ही सुधार शुरू</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4">
              सही विकल्प है <span className="text-gradient">ReYoni</span> — प्राकृतिक, सुरक्षित, प्रभावी
            </p>
            <a 
              href="#lead-form" 
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              परिवर्तन अभी शुरू करें
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-10 md:py-16 bg-background relative">
        {/* Subtle background effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-10 md:mb-14">
              <span className="text-primary text-sm font-medium uppercase tracking-wider">
                <span className="text-gradient">ReYoni</span> के पीछे का विज्ञान
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3 mb-4 leading-tight">
                <span className="text-gradient inline-block">कैसे कार्य</span> करता है?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                एक सरल, सुरक्षित और विज्ञान-आधारित प्रक्रिया जो वास्तविक परिणाम देती है।
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {/* Step 1 */}
              <Card className="relative card-elevated hover:border-primary/30 transition-all duration-300">
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-glow">
                  01
                </span>
                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">गहरा अवशोषण</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    <span className="text-gradient">ReYoni</span> का उन्नत फॉर्मूला त्वचा के भीतर तुरंत समा जाता है — केवल सतही नहीं, बल्कि गहराई तक असर करता है।
                  </p>
                </div>
              </Card>

              {/* Step 2 */}
              <Card className="relative card-elevated hover:border-primary/30 transition-all duration-300">
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-glow">
                  02
                </span>
                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">कोलेजन में वृद्धि</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    प्राकृतिक तत्व कोलेजन उत्पादन को उत्तेजित करते हैं — जो मांसपेशियों की दृढ़ता और लचीलेपन को पुनर्जीवित करने में मदद करते हैं।
                  </p>
                </div>
              </Card>

              {/* Step 3 */}
              <Card className="relative card-elevated hover:border-primary/30 transition-all duration-300">
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-glow">
                  03
                </span>
                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">नमी का संतुलन</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    पीएच-संतुलित हाइड्रेशन जो प्राकृतिक लुब्रिकेशन बनाए रखता है — सूखापन और बेचैनी को दूर करता है।
                  </p>
                </div>
              </Card>

              {/* Step 4 */}
              <Card className="relative card-elevated hover:border-primary/30 transition-all duration-300">
                <span className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-glow">
                  04
                </span>
                <div className="pt-4">
                  <h3 className="font-semibold text-lg text-foreground mb-2">दीर्घाकालिक परिणाम</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    नियमित उपयोग से स्थायी सुधार — आपका आत्मविश्वास और सुविधा दोनों वापस लौटते हैं।
                  </p>
                </div>
              </Card>
            </div>

            {/* Science Note */}
            <Card className="mt-10 bg-primary/5 border-primary/20">
              <p className="text-center text-foreground p-4">
                <strong className="text-primary">कोई जादू नहीं, विशुद्ध विज्ञान:</strong>{" "}
                <span className="text-gradient">ReYoni</span> प्रमाणित सामग्रियों का उपयोग करता है जो{" "}
                <em>गहरे ऊतक स्तर पर परिवर्तन</em> लाते हैं — केवल अस्थायी प्रभाव नहीं।
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Changes You Will Feel Section */}
      <section className="py-10 md:py-16 bg-background relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full mb-4 flex items-center gap-2 w-fit mx-auto">
              <Sparkles className="w-4 h-4" />
              Results You'll Love
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-[1.3]">
              क्या-क्या <span className="text-gradient">बदलाव</span> महसूस होंगे?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              सिर्फ <span className="text-primary font-semibold">2 हफ्ते</span> में देखें ये amazing results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1: Tightness & Firmness */}
            <div className="group bg-card rounded-2xl p-6 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-1">Tightness & Firmness</h3>
              <p className="text-primary font-medium text-sm mb-2">टाइटनेस और फर्मनेस</p>
              <p className="text-muted-foreground">पहले जैसी natural tightness वापस पाएं</p>
            </div>

            {/* Card 2: Deep Hydration */}
            <div className="group bg-card rounded-2xl p-6 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Droplets className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-1">Deep Hydration</h3>
              <p className="text-primary font-medium text-sm mb-2">गहरी नमी</p>
              <p className="text-muted-foreground">Dryness को करें bye-bye</p>
            </div>

            {/* Card 3: Romantic Confidence */}
            <div className="group bg-card rounded-2xl p-6 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-1">Romantic Confidence</h3>
              <p className="text-primary font-medium text-sm mb-2">रोमांटिक कॉन्फिडेंस</p>
              <p className="text-muted-foreground">Partner के साथ intimacy में नई spark</p>
            </div>

            {/* Card 4: Fresh Feel */}
            <div className="group bg-card rounded-2xl p-6 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Moon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-1">Fresh Feel</h3>
              <p className="text-primary font-medium text-sm mb-2">ताज़गी का एहसास</p>
              <p className="text-muted-foreground">24 घंटे freshness और no odour</p>
            </div>

            {/* Card 5: pH Balance */}
            <div className="group bg-card rounded-2xl p-6 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-1">pH Balance</h3>
              <p className="text-primary font-medium text-sm mb-2">संतुलित pH</p>
              <p className="text-muted-foreground">Infections से natural protection</p>
            </div>

            {/* Card 6: Youthful Glow */}
            <div className="group bg-card rounded-2xl p-6 shadow-lg shadow-primary/10 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 border border-border/50">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Star className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-1">Youthful Glow</h3>
              <p className="text-primary font-medium text-sm mb-2">जवां निखार</p>
              <p className="text-muted-foreground">Darkening कम, natural glow ज़्यादा</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-4 flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-primary fill-primary" />
              <span className="font-semibold">50,000+</span> महिलाओं को ये results मिले!
            </p>
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gradient-to-r from-primary to-accent text-primary-foreground shadow-lg hover:shadow-xl hover:scale-[1.03] active:scale-[0.98] font-bold tracking-wide py-6 h-14 rounded-xl px-10 text-lg group"
            >
              मुझे भी ये Results चाहिए →
            </a>
          </div>
        </div>
      </section>

      {/* How to Use Section */}
      <section className="py-10 md:py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.3]">
              कैसे <span className="text-gradient inline-block pr-[5px]">उपयोग करें</span>?
            </h2>
            <p className="text-lg text-muted-foreground mt-4">
              बस 4 आसान steps में पाएं complete intimate wellness
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1 - Cleanse */}
              <div
                onClick={() => setActiveStep(1)}
                className={`relative bg-background rounded-3xl p-8 shadow-soft border-2 transition-all duration-500 cursor-pointer ${
                  activeStep === 1
                    ? 'border-primary shadow-glow scale-105'
                    : 'border-border/50 hover:border-primary/30'
                }`}
              >
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                    1 < activeStep ? 'bg-primary text-primary-foreground' : activeStep === 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {1 < activeStep ? <Check className="w-5 h-5" /> : 1}
                </div>
                <div className="text-center">
                  <div className="flex justify-center my-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      <Droplets className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Cleanse</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Intimate area को पानी से अच्छी तरह clean करें
                  </p>
                </div>
              </div>

              {/* Step 2 - Apply */}
              <div
                onClick={() => setActiveStep(2)}
                className={`relative bg-background rounded-3xl p-8 shadow-soft border-2 transition-all duration-500 cursor-pointer ${
                  activeStep === 2
                    ? 'border-primary shadow-glow scale-105'
                    : 'border-border/50 hover:border-primary/30'
                }`}
              >
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                    2 < activeStep ? 'bg-primary text-primary-foreground' : activeStep === 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {2 < activeStep ? <Check className="w-5 h-5" /> : 2}
                </div>
                <div className="text-center">
                  <div className="flex justify-center my-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      <Clock className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Apply</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Take a small amount of ReYoni Cream and Gently apply
                  </p>
                </div>
              </div>

              {/* Step 3 - Massage */}
              <div
                onClick={() => setActiveStep(3)}
                className={`relative bg-background rounded-3xl p-8 shadow-soft border-2 transition-all duration-500 cursor-pointer ${
                  activeStep === 3
                    ? 'border-primary shadow-glow scale-105'
                    : 'border-border/50 hover:border-primary/30'
                }`}
              >
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                    3 < activeStep ? 'bg-primary text-primary-foreground' : activeStep === 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {3 < activeStep ? <Check className="w-5 h-5" /> : 3}
                </div>
                <div className="text-center">
                  <div className="flex justify-center my-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      <Moon className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Massage</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    2-3 minutes तक circular motion में massage करें
                  </p>
                </div>
              </div>

              {/* Step 4 - Feel Fresh */}
              <div
                onClick={() => setActiveStep(4)}
                className={`relative bg-background rounded-3xl p-8 shadow-soft border-2 transition-all duration-500 cursor-pointer ${
                  activeStep === 4
                    ? 'border-primary shadow-glow scale-105'
                    : 'border-border/50 hover:border-primary/30'
                }`}
              >
                <div
                  className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                    4 < activeStep ? 'bg-primary text-primary-foreground' : activeStep === 4 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {4 < activeStep ? <Check className="w-5 h-5" /> : 4}
                </div>
                <div className="text-center">
                  <div className="flex justify-center my-4">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                      <Sparkles className="w-8 h-8" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Feel Fresh</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Dry होने दें और freshness enjoy करें
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-12">
              {[1, 2, 3, 4].map((step) => (
                <button
                  key={step}
                  onClick={() => setActiveStep(step)}
                  className={`h-3 rounded-full transition-all duration-300 ${
                    activeStep === step ? 'bg-primary w-8' : 'bg-muted hover:bg-primary/50 w-3'
                  }`}
                  aria-label={`Go to step ${step}`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Results Timeline Section */}
      <section className="py-12 md:py-20 bg-background relative">
        {/* Subtle background effect */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
          <div className="absolute top-20 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10 md:mb-14">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-4">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-primary font-medium text-sm">परिणाम समयरेखा</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3 mb-4 leading-[1.3]">
                परिणाम <span className="text-gradient">कब दिखेंगे?</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                यथार्थवादी उम्मीदें — यह जादू नहीं, विज्ञान है। इसमें समय लगता है।
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-1/2"></div>
              
              <div className="space-y-8">
                {/* Week 1 */}
                <div className="relative flex gap-6 md:gap-0 md:flex-row">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -mt-1 z-10 shadow-glow"></div>
                  <div className="ml-10 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                        सप्ताह 1
                      </span>
                      <h3 className="font-semibold text-lg text-foreground mb-2">शुरुआती बदलाव</h3>
                      <p className="text-muted-foreground text-sm">
                        हाइड्रेशन (नमी) में सुधार होगा, सूखापन कम महसूस होगा। आराम का स्तर बढ़ेगा।
                      </p>
                    </div>
                  </div>
                </div>

                {/* Week 2-3 */}
                <div className="relative flex gap-6 md:gap-0 md:flex-row-reverse">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1 z-10 shadow-glow"></div>
                  <div className="ml-10 md:ml-0 md:w-1/2 md:pl-12">
                    <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                        सप्ताह 2-3
                      </span>
                      <h3 className="font-semibold text-lg text-foreground mb-2">दिखाई देने वाले बदलाव</h3>
                      <p className="text-muted-foreground text-sm">
                        कसावट महसूस होने लगेगी। संवेदना में सुधार होगा।
                      </p>
                    </div>
                  </div>
                </div>

                {/* Week 4+ */}
                <div className="relative flex gap-6 md:gap-0 md:flex-row">
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1 z-10 shadow-glow"></div>
                  <div className="ml-10 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                        सप्ताह 4+
                      </span>
                      <h3 className="font-semibold text-lg text-foreground mb-2">पूर्ण परिणाम</h3>
                      <p className="text-muted-foreground text-sm">
                        महत्वपूर्ण कसावट, आत्मविश्वास की वापसी। आपके पार्टनर भी बदलाव महसूस करेंगे।
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-primary/5 rounded-2xl p-6 md:p-8 border border-primary/20">
              <p className="text-center text-foreground">
                <strong className="text-primary">नोट:</strong> हर महिला का शरीर अलग होता है। कुछ को जल्दी परिणाम मिलते हैं, कुछ को थोड़ा समय लगता है।
                <em> धैर्य और नियमितता से ही सर्वोत्तम परिणाम मिलते हैं।</em>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="section-padding bg-card">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                प्राकृतिक सामग्री
              </span>
              <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                शुद्ध आयुर्वेदिक फॉर्मूला
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                <span className="text-gradient">ReYoni</span> में केवल प्राकृतिक और आयुर्वेदिक जड़ी-बूटियां हैं जो सदियों से महिलाओं की इंटिमेट वेलनेस के लिए उपयोग की जाती रही हैं।
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex items-start gap-3 rounded-xl bg-background p-4 transition-all duration-300 hover:shadow-soft">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    1
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">मंजिष्ठा</h4>
                    <p className="text-sm text-muted-foreground">रक्त शुद्धि और त्वचा के स्वास्थ्य के लिए</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-background p-4 transition-all duration-300 hover:shadow-soft">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    2
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">लोध्रा</h4>
                    <p className="text-sm text-muted-foreground">योनि की मांसपेशियों को मजबूत बनाता है</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-background p-4 transition-all duration-300 hover:shadow-soft">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    3
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">एलोवेरा</h4>
                    <p className="text-sm text-muted-foreground">प्राकृतिक नमी और हीलिंग गुण</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-background p-4 transition-all duration-300 hover:shadow-soft">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    4
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">गुलाब जल</h4>
                    <p className="text-sm text-muted-foreground">सुगंध और एंटी-बैक्टीरियल गुण</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-background p-4 transition-all duration-300 hover:shadow-soft">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    5
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">शतावरी</h4>
                    <p className="text-sm text-muted-foreground">हार्मोनल बैलेंस और टोनिंग</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl bg-background p-4 transition-all duration-300 hover:shadow-soft">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                    6
                  </span>
                  <div>
                    <h4 className="font-heading font-semibold text-foreground">हल्दी</h4>
                    <p className="text-sm text-muted-foreground">एंटी-इंफ्लेमेटरी और हीलिंग</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mx-auto max-w-lg">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 blur-2xl"></div>
              <img 
                src={doctorImage} 
                alt="Natural Ayurvedic Ingredients" 
                className="relative rounded-3xl shadow-card" 
              />
            </div>
          </div>

          <div className="mt-16 rounded-2xl bg-primary/5 border-primary/20 border p-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
              <span className="text-3xl text-primary">✓</span>
            </div>
            <h3 className="mb-2 font-heading text-2xl font-bold text-foreground">
              100% सुरक्षित - कोई साइड इफेक्ट नहीं
            </h3>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              <span className="text-gradient font-bold">ReYoni</span> पूरी तरह से प्राकृतिक है। इसमें कोई हानिकारक केमिकल, पैराबेन, या सल्फेट नहीं है। यह सभी स्किन टाइप के लिए सुरक्षित है और किसी भी तरह की जलन या एलर्जी नहीं करता।
            </p>
          </div>
        </div>
      </section>

      {/* Customer Privacy Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-[1.3]">
              100% गोपनीयता की गारंटी
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              हम समझते हैं कि यह एक निजी मामला है। हर कदम आपकी गोपनीयता को ध्यान में रखकर उठाया गया है।
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12">
            {/* Discreet Packaging */}
            <Card className="text-center border-border/50 p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Package className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">प्लेन पैकेजिंग में डिलीवरी</h3>
              <p className="text-sm text-muted-foreground">
                कोई प्रोडक्ट नाम या लोगो नहीं। बिल्कुल सुरक्षित और गोपनीय।
              </p>
            </Card>

            {/* No One Will Know */}
            <Card className="text-center border-border/50 p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Eye className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">कोई नहीं जानेगा</h3>
              <p className="text-sm text-muted-foreground">
                क्या है अंदर। आपका राज सिर्फ आपके पास रहेगा।
              </p>
            </Card>

            {/* Secret Billing */}
            <Card className="text-center border-border/50 p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <CreditCard className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">सीक्रेट बिलिंग</h3>
              <p className="text-sm text-muted-foreground">
                बैंक स्टेटमेंट में भी कोई प्रोडक्ट डिटेल नहीं आएगी।
              </p>
            </Card>

            {/* Confidential Consultation */}
            <Card className="text-center border-border/50 p-6">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Lock className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">कॉन्फिडेंशियल कंसल्टेशन</h3>
              <p className="text-sm text-muted-foreground">
                डॉक्टर से प्राइवेट बातचीत। कोई तीसरा व्यक्ति नहीं।
              </p>
            </Card>
          </div>

          {/* Best Results Card */}
          <Card className="max-w-6xl mx-auto shadow-lg shadow-primary/20">
            <div className="grid md:grid-cols-2 gap-8 items-center p-6 md:p-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  💡 <span className="text-gradient">Best Results</span> के लिए
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">
                      ✓
                    </span>
                    <span>रोज़ाना रात को use करें</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">
                      ✓
                    </span>
                    <span>Minimum 2 weeks continue करें</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">
                      ✓
                    </span>
                    <span>Intimacy से 30 min पहले apply करें</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-6 h-6 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-xs text-primary-foreground font-bold">
                      ✓
                    </span>
                    <span>Partner को surprise होने दें! 😉</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <p className="text-lg text-muted-foreground mb-4">
                  <span className="font-semibold">50% OFF</span> + Free Shipping
                </p>
                <a
                  href="#order"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-glow w-full md:w-auto"
                >
                  अभी Order करें →
                </a>
                <p className="text-sm text-muted-foreground mt-3">COD Available | Discreet Packaging</p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding bg-background">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <Badge className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">
              ❓ Common Questions
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-[1.3]">
              <span className="text-gradient">अक्सर पूछे जाने वाले</span>
              <br />
              सवाल
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="faq-1" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                ReYoni कब तक use करना होगा results देखने के लिए?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                बेहतरीन परिणामों के लिए हम 3 महीने तक नियमित उपयोग की सलाह देते हैं, हालाँकि 2-4 सप्ताह में ही सुधार दिखने लगता है।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-2" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                क्या इसके कोई side effects हैं?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                नहीं, इसके कोई दुष्प्रभाव नहीं हैं। ReYoni 100% प्राकृतिक जड़ी-बूटियों से बना है और संवेदनशील त्वचा के लिए सुरक्षित है।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-3" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                क्या ये सच में काम करता है?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                हाँ, यह पूर्णतः प्रभावी है। 50,000+ से अधिक महिलाओं ने इसे अपनाया है और इसके परिणामों से बहुत खुश हैं।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-4" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                क्या मैं pregnancy में use कर सकती हूं?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                हम गर्भावस्था के दौरान इसके उपयोग की सलाह नहीं देते। डिलीवरी के 3 महीने बाद इसका उपयोग करना पूरी तरह सुरक्षित है।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-5" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                Delivery कैसे होगी? Privacy का ध्यान रखा जाएगा?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                उत्पाद को एक सादे बॉक्स में पैक किया जाता है। डिलीवरी बॉय या किसी और को पता नहीं चलेगा कि बॉक्स के अंदर क्या है।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-6" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                क्या ये intimate skin के लिए safe है?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                हाँ, यह इंटिमेट एरिया के pH बैलेंस को ध्यान में रखकर बनाया गया है और हर प्रकार की स्किन के लिए सुरक्षित है।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-7" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                क्या husband/partner को बताना ज़रूरी है?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                यह क्रीम लगाने के बाद पूरी तरह गायब हो जाती है। आप इसे बिना किसी को बताए भी आसानी से उपयोग कर सकती हैं।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-8" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                Return/Refund policy क्या है?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                अगर आप उत्पाद से संतुष्ट नहीं हैं, तो हम 7 दिनों के भीतर नो-क्वालिटी-आरगुमेंट रिफंड पॉलिसी प्रदान करते हैं।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-9" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                क्या यह ट्रीटमेंट पूरी तरह सुरक्षित है?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                <p className="mb-4">
                  हाँ, बिल्कुल सुरक्षित! हमारा ट्रीटमेंट 100% डॉक्टर अप्रूव्ड है और हजारों महिलाओं ने इसे बिना किसी साइड इफेक्ट के इस्तेमाल किया है।
                </p>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CircleX className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>क्लिनिकली टेस्टेड</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CircleX className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>नेचुरल इंग्रेडिएंट्स</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CircleX className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>कोई हार्मफुल केमिकल नहीं</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CircleX className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>मेडिकल स्किन के लिए भी सेफ</span>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-10" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                कितने दिनों में रिजल्ट दिखने लगेगा?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                <p className="mb-4">
                  आपको <span className="font-bold text-primary">पहले ही हफ्ते से फर्क</span> दिखना शुरू हो जाएगा!
                </p>
                <div className="bg-primary/5 rounded-lg p-4 space-y-3 mb-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-primary">7 दिन:</span> स्किन टोन में सुधार, ताज़गी एवं महसूस होगी
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-primary">15 दिन:</span> टाइटनिंग और टाइटलिंग में साफ फर्क
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-primary">30 दिन:</span> कम्प्लीट ट्रांसफॉर्मेशन – गोरापन, टाइटनेस, कॉन्फिडेंस!
                    </div>
                  </div>
                </div>
                <p className="font-semibold text-primary text-sm">
                  लेकिन पिलानों जल्दी शुरू करेंगी, उतनी जल्दी रिजल्ट मिलेगा। अभी एक्शन लें!
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-11" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                पेमेंट कैसे करें? क्या COD उपलब्ध है?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                हाँ, हम Cash on Delivery (COD) की सुविधा प्रदान करते हैं। आप डिलीवरी के समय पेमेंट कर सकती हैं। ऑनलाइन पेमेंट के विकल्प भी उपलब्ध हैं।
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-12" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                क्या मनी-बैक गारंटी सच में मिलती है?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                <p className="mb-4">बिल्कुल! हम अपने प्रोडक्ट पर पूरा भरोसा रखते हैं।</p>
                <div className="bg-primary/5 rounded-lg p-4 mb-4">
                  <p className="text-foreground">
                    अगर आपको <span className="font-bold text-primary text-lg">30 दिनों में रिजल्ट नहीं दिखा</span>, तो हम <span className="font-bold text-primary text-lg">100% पैसे वापस</span> कर देंगे। कोई सवाल नहीं, कोई झंझट नहीं।
                  </p>
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <Star className="w-5 h-5 fill-primary" />
                  <span className="ml-2 text-foreground text-sm">लेकिन हमारी महिलाओं को रिजल्ट मिले हैं – आप भी उन्हीं में से एक बनो</span>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="faq-13" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
              <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">
                डिलीवरी कितने दिन में होगी?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                आपका ऑर्डर 3-5 कार्य दिवसों में डिलीवर किया जाएगा। आपको ट्रैकिंग डिटेल्स भी मिलेगी जिससे आप अपने पार्सल को ट्रैक कर सकती हैं।
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl">
            <p className="text-lg text-muted-foreground mb-2">और कोई सवाल है?</p>
            <p className="text-sm text-muted-foreground mb-6">WhatsApp पर हमसे बात करें या अभी order करें!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#lead-form"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-glow"
              >
                अभी Order करें →
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-background text-foreground border-2 border-border px-8 py-4 rounded-full font-semibold text-lg hover:border-primary hover:bg-card transition-all"
              >
                WhatsApp करें 💬
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Disclaimers */}
      <footer className="bg-muted/30 border-t border-border py-12 mb-20 md:mb-0">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <div className="space-y-4 text-xs text-muted-foreground">
              <p>
                <strong className="text-foreground">Disclaimer:</strong> ReYoni is an external use product only. Do not apply internally. For external intimate areas only. Discontinue use if irritation occurs.
              </p>
              <p>
                <strong className="text-foreground">Individual Results:</strong> Results may vary from person to person depending on skin type, consistency of use, and individual physiology. The testimonials shown represent individual experiences and may not reflect typical results.
              </p>
              <p>
                <strong className="text-foreground">Medical Advice:</strong> This product is not intended to diagnose, treat, cure, or prevent any disease. If you have any medical conditions or concerns, please consult with a healthcare professional before use. Not suitable for use during pregnancy or breastfeeding without medical consultation.
              </p>
            </div>
            <div className="pt-6 border-t border-border text-xs text-muted-foreground">
              <p>
                © 2025 ReYoni. All rights reserved. | For inquiries: <a href="mailto:support@reyoni.com" className="text-primary hover:underline">support@reyoni.com</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg z-50 py-3 px-4 md:hidden">
        <div className="flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground line-through">₹4,980</span>
              <span className="text-xl font-bold text-primary">₹2,490</span>
            </div>
            <p className="text-xs text-muted-foreground">मुफ्त शिपिंग • COD</p>
          </div>
          <a
            href="#lead-form"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] h-12 rounded-xl px-8 text-base shrink-0"
            onClick={() => setShowMobileCTA(false)}
          >
            <Sparkles className="w-4 h-4" />
            अभी ऑर्डर करें
          </a>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:flex fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50 animate-pulse-soft"
      >
        <Phone className="w-8 h-8 text-white" />
      </a>
    </div>
  );
};

export default Index;