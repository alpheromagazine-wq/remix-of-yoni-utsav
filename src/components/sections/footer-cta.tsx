import { Heart, Shield, Sparkles } from "lucide-react";

import { useOrderDialog } from "@/contexts/order-dialog-context";

export function FooterCta() {
  const { openOrderDialog } = useOrderDialog();
  return (
    <section className="py-16 lg:py-24 bg-linear-to-br from-accent/10 via-white/50 to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            आज ही अपने आत्मविश्वास को बदलें
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-[1.3]">
            आप&nbsp;
            <span className="text-primary">खूबसूरत</span>,&nbsp;<span className="text-primary">आत्मविश्वासी&nbsp;</span>
            और&nbsp;
            <span className="text-primary">सहज महसूस करने के हकदार हैं।</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            निजी चिंताओं को अपनी भावनाओं को खुलकर व्यक्त करने से रोकने न दें। रेयोनी की मदद से आत्मविश्वास वापस पाने वाली हजारों महिलाओं में शामिल हों।
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-foreground">
              <Heart className="w-5 h-5 text-primary" />
              <span>अधिक आत्मविश्वास महसूस करें</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Shield className="w-5 h-5 text-primary" />
              <span>100% निजी</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Sparkles className="w-5 h-5 text-primary" />
              <span>स्पष्ट परिणाम</span>
            </div>
          </div>
          <button type="button" onClick={openOrderDialog} className="btn-primary cursor-pointer">
            अपना परिवर्तन अभी शुरू करें
          </button>
          <p className="mt-4 text-sm text-muted-foreground">मुफ़्त शिपिंग • गोपनीय पैकेजिंग • सुरक्षित भुगतान</p>
        </div>
      </div>
    </section>
  );
}
