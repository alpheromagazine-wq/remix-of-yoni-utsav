import { Clock } from "lucide-react";

export const ResultTimeline = () => {
  return (
    <section className="py-12 md:py-20 bg-white relative custom-mobile-spacing">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-20 -left-24 w-96 h-96 bg-red-200 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-light rounded-full blur-3xl"></div>
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
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">यथार्थवादी उम्मीदें — यह जादू नहीं, विज्ञान है। इसमें समय लगता है।</p>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20 md:-translate-x-1/2"></div>
            <div className="space-y-8">
              <div className="relative flex gap-6 md:gap-0 md:flex-row">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 -mt-1 z-10 shadow-glow"></div>
                <div className="ml-10 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">सप्ताह 1</span>
                    <h3 className="font-semibold text-lg text-foreground mb-2">शुरुआती बदलाव</h3>
                    <p className="text-muted-foreground text-sm">हाइड्रेशन (नमी) में सुधार होगा, सूखापन कम महसूस होगा। आराम का स्तर बढ़ेगा।</p>
                  </div>
                </div>
              </div>
              <div className="relative flex gap-6 md:gap-0 md:flex-row-reverse">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1 z-10 shadow-glow"></div>
                <div className="ml-10 md:ml-0 md:w-1/2 md:pl-12">
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">सप्ताह 2-3</span>
                    <h3 className="font-semibold text-lg text-foreground mb-2">दिखाई देने वाले बदलाव</h3>
                    <p className="text-muted-foreground text-sm">कसावट महसूस होने लगेगी। संवेदना में सुधार होगा।</p>
                  </div>
                </div>
              </div>
              <div className="relative flex gap-6 md:gap-0 md:flex-row">
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full -translate-x-1/2 mt-1 z-10 shadow-glow"></div>
                <div className="ml-10 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                  <div className="bg-card rounded-2xl p-6 shadow-soft border border-border/50">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">सप्ताह 4+</span>
                    <h3 className="font-semibold text-lg text-foreground mb-2">पूर्ण परिणाम</h3>
                    <p className="text-muted-foreground text-sm">महत्वपूर्ण कसावट, आत्मविश्वास की वापसी। आपके पार्टनर भी बदलाव महसूस करेंगे।</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 bg-red-soft/50 rounded-2xl p-6 md:p-8 border border-red-medium/20">
            <p className="text-center text-foreground">
              <strong className="text-primary">नोट:</strong> हर महिला का शरीर अलग होता है। कुछ को जल्दी परिणाम मिलते हैं, कुछ को थोड़ा समय लगता है।
              <em>धैर्य और नियमितता से ही सर्वोत्तम परिणाम मिलते हैं।</em>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
