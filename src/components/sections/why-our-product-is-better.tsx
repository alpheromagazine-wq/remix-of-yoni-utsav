import { ArrowRight, Check, CircleX, X } from "lucide-react";
import { Card } from "../ui/card";

import { useOrderDialog } from "@/contexts/order-dialog-context";

export function WhyOurProductIsBetter() {
  const { openOrderDialog } = useOrderDialog();
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">
            क्यों <span className="text-gradient">ReYoni</span> बेहतर है
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">देखें ReYoni बाकी विकल्पों से कैसे अलग और बेहतर है</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {/* ReYoni Column - Highlighted */}
          <Card className="card-elevated bg-primary text-primary-foreground ring-4 ring-primary/20">
            <h3 className="text-xl font-bold mb-4 text-center">ReYoni</h3>
            <ul className="space-y-3">
              {["Visible whitening results", "Natural tightening effect", "24-hour freshness", "Clinically tested", "pH-balanced formula", "Use at home"].map((feature, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <Check className="w-5 h-5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Local Creams */}
          <Card className="card-elevated border-border/50">
            <h3 className="text-xl font-bold mb-4 text-center text-foreground">Local Creams</h3>
            <ul className="space-y-3">
              {["Temporary effects only", "No tightening benefit", "Short-lasting freshness", "Often untested", "May disrupt pH", "Risk of irritation"].map((issue, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <X className="w-5 h-5 text-destructive shrink-0" />
                  <span className="text-muted-foreground">{issue}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Home Remedies */}
          <Card className="card-elevated border-border/50">
            <h3 className="text-xl font-bold mb-4 text-center text-foreground">Home Remedies</h3>
            <ul className="space-y-3">
              {["Unpredictable results", "No proven tightening", "Minimal odour control", "No clinical backing", "Can cause reactions", "Time-consuming"].map((issue, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <X className="w-5 h-5 text-destructive shrink-0" />
                  <span className="text-muted-foreground">{issue}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Parlour Treatments */}
          <Card className="card-elevated border-border/50">
            <h3 className="text-xl font-bold mb-4 text-center text-foreground">Parlour Treatments</h3>
            <ul className="space-y-3">
              {["Expensive sessions", "Temporary results", "Requires multiple visits", "Privacy concerns", "Inconvenient", "Often painful"].map((issue, index) => (
                <li key={index} className="flex items-center gap-2 text-sm">
                  <X className="w-5 h-5 text-destructive shrink-0" />
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
                  <CircleX className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">समस्या</p>
                    <p className="text-foreground">महंगा, दर्दनाक, और रिकवरी में समय</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  <CircleX className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">समस्या</p>
                    <p className="text-foreground">कैमिकल से जलन, अस्थायी परिणाम</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  <CircleX className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">समस्या</p>
                    <p className="text-foreground">समय लगता है, नियमितता मुश्किल</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
                  <CircleX className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">समस्या</p>
                    <p className="text-foreground">समस्या बढ़ती जाती है</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-primary/5">
                <div className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
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
          <button onClick={openOrderDialog} className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer">
            परिवर्तन अभी शुरू करें
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
