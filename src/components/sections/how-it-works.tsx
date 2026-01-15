export function HowItWorks() {
  return (
    <section className="py-12 md:py-20 bg-white relative custom-mobile-spacing">
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-200 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-gold-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10 md:mb-14">
            <span className="text-primary text-sm font-medium uppercase tracking-wider">
              <span className="text-gradient">ReYoni</span> के पीछे का विज्ञान
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-foreground mt-3 mb-4 leading-[1.3]">
              <span className="text-gradient inline-block">कैसे कार्य</span> करता है?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">एक सरल, सुरक्षित और विज्ञान-आधारित प्रक्रिया जो वास्तविक परिणाम देती है।</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
              <span className="absolute -top-3 -left-3 w-10 h-10 bg-cta-gradient text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-glow">
                01
              </span>
              <div className="pt-4">
                <h3 className="font-semibold text-lg text-foreground mb-2">गहरा अवशोषण</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <span className="text-gradient">ReYoni</span> का उन्नत फॉर्मूला त्वचा के भीतर तुरंत समा जाता है — केवल सतही नहीं, बल्कि गहराई तक असर करता है।
                </p>
              </div>
            </div>
            <div className="relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
              <span className="absolute -top-3 -left-3 w-10 h-10 bg-cta-gradient text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-glow">
                02
              </span>
              <div className="pt-4">
                <h3 className="font-semibold text-lg text-foreground mb-2">कोलेजन में वृद्धि</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  प्राकृतिक तत्व कोलेजन उत्पादन को उत्तेजित करते हैं — जो मांसपेशियों की दृढ़ता और लचीलेपन को पुनर्जीवित करने में मदद करते हैं।
                </p>
              </div>
            </div>
            <div className="relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
              <span className="absolute -top-3 -left-3 w-10 h-10 bg-cta-gradient text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-glow">
                03
              </span>
              <div className="pt-4">
                <h3 className="font-semibold text-lg text-foreground mb-2">नमी का संतुलन</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">पीएच-संतुलित हाइड्रेशन जो प्राकृतिक लुब्रिकेशन बनाए रखता है — सूखापन और बेचैनी को दूर करता है।</p>
              </div>
            </div>
            <div className="relative bg-card rounded-2xl p-6 border border-border/50 hover:border-primary/30 hover:shadow-soft transition-all duration-300">
              <span className="absolute -top-3 -left-3 w-10 h-10 bg-cta-gradient text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold shadow-glow">
                04
              </span>
              <div className="pt-4">
                <h3 className="font-semibold text-lg text-foreground mb-2">दीर्घाकालिक परिणाम</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">नियमित उपयोग से स्थायी सुधार — आपका आत्मविश्वास और सुविधा दोनों वापस लौटते हैं।</p>
              </div>
            </div>
          </div>
          <div className="mt-10 bg-red-soft/50 rounded-2xl p-6 md:p-8 border border-red-medium/20">
            <p className="text-center text-foreground">
              <strong className="text-primary">कोई जादू नहीं, विशुद्ध विज्ञान:</strong> <span className="text-gradient">ReYoni</span> प्रमाणित सामग्रियों का उपयोग करता है जो
              <em>गहरे ऊतक स्तर पर परिवर्तन</em> लाते हैं — केवल अस्थायी प्रभाव नहीं।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
