import { useState } from "react";
import { Droplets, Clock, Moon, Sparkles, Check } from "lucide-react";
import { PRODUCT_DETAILS } from "@/constants/product";

import { useOrderDialog } from "@/contexts/order-dialog-context";

export const HowToUse = () => {
    const { openOrderDialog } = useOrderDialog();
    const [activeStep, setActiveStep] = useState(1);

    const steps = [
        {
            id: 1,
            icon: Droplets,
            title: "Cleanse",
            description: "Intimate area को पानी से अच्छी तरह clean करें",
        },
        {
            id: 2,
            icon: Clock,
            title: "Apply",
            description: "Take a small amount of ReYoni Cream and Gently apply",
        },
        {
            id: 3,
            icon: Moon,
            title: "Massage",
            description: "2-3 minutes तक circular motion में massage करें",
        },
        {
            id: 4,
            icon: Sparkles,
            title: "Feel Fresh",
            description: "Dry होने दें और freshness enjoy करें",
        },
    ];

    return (
        <section className="py-16 md:py-24 bg-cream custom-mobile-spacing">
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
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                onClick={() => setActiveStep(step.id)}
                                className={`relative bg-white rounded-3xl p-8 shadow-soft border-2 transition-all duration-500 cursor-pointer ${
                                    activeStep === step.id
                                        ? "border-primary shadow-glow scale-105 z-10"
                                        : "border-border/50 hover:border-primary/30"
                                }`}
                            >
                                <div
                                    className={`absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${
                                        activeStep === step.id
                                            ? "bg-primary text-primary-foreground"
                                            : "bg-muted text-muted-foreground"
                                    }`}
                                >
                                    {step.id}
                                </div>
                                <div className="text-center">
                                    <div className="flex justify-center my-4">
                                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                            <step.icon className="w-8 h-8" strokeWidth={2} />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="flex justify-center gap-2 mt-12">
                        {steps.map((step) => (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(step.id)}
                                className={`h-3 rounded-full transition-all duration-300 ${
                                    activeStep === step.id
                                        ? "bg-primary w-8"
                                        : "bg-muted hover:bg-primary/50 w-3"
                                }`}
                                aria-label={`Go to step ${step.id}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Best Results Section */}
                <div className="max-w-6xl mx-auto rounded-3xl bg-linear-to-br from-primary/5 to-white border border-primary/10 p-6 md:p-10 shadow-lg relative overflow-hidden group mt-16">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    
                    <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
                        <div>
                            <div className="inline-block px-3 py-1 bg-white border border-primary/20 rounded-full text-xs font-bold text-primary mb-4 shadow-xs">
                                RECOMMENDED
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">
                                <span className="text-gradient">Best Results</span> के लिए
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-primary/5">
                                    <span className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm text-primary-foreground font-bold shadow-md shrink-0">
                                        <Check className="w-4 h-4" strokeWidth={3} />
                                    </span>
                                    <span className="font-medium text-foreground/90">रोज़ाना रात को use करें</span>
                                </li>
                                <li className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-primary/5">
                                    <span className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm text-primary-foreground font-bold shadow-md shrink-0">
                                        <Check className="w-4 h-4" strokeWidth={3} />
                                    </span>
                                    <span className="font-medium text-foreground/90">Minimum 2 weeks continue करें</span>
                                </li>
                                <li className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-primary/5">
                                    <span className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm text-primary-foreground font-bold shadow-md shrink-0">
                                        <Check className="w-4 h-4" strokeWidth={3} />
                                    </span>
                                    <span className="font-medium text-foreground/90">Intimacy से 30 min पहले apply करें</span>
                                </li>
                                <li className="flex items-center gap-4 bg-white/60 p-3 rounded-xl border border-primary/5">
                                    <span className="w-8 h-8 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center text-sm text-primary-foreground font-bold shadow-md shrink-0">
                                        <Check className="w-4 h-4" strokeWidth={3} />
                                    </span>
                                    <span className="font-medium text-foreground/90">Partner को surprise होने दें! 😉</span>
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
};