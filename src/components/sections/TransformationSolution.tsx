import { Card } from "@/components/ui/card";
import { Sparkles, Heart, Clock, CheckCircle2 } from "lucide-react";

export const TransformationSolution = () => {
  return (
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
                योनि की मांसपेशियों को मजबूत बनाए, intimacy बढ़ाए। पार्टनर खुश, आप confident!
              </p>
              <div className="flex items-center justify-center gap-1 text-primary">
                <Heart className="w-5 h-5" />
                <span className="font-semibold">Relationship में सुधार</span>
              </div>
            </Card>

            <Card className="card-elevated text-center space-y-4 hover:shadow-glow transition-all duration-300">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Clock className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">24 घंटे Freshness</h3>
              <p className="text-muted-foreground leading-relaxed">
                बैड स्मेल और खुजली को कहें अलविदा। पूरे दिन रहो fresh और खुशबूदार!
              </p>
              <div className="flex items-center justify-center gap-1 text-primary">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">24 घंटे Protection</span>
              </div>
            </Card>
          </div>

          <div className="text-center pt-4">
            <a href="#lead-form" className="btn-primary inline-flex items-center gap-2">
              अभी शुरू करें - ₹2490
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
