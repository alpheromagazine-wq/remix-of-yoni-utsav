import ingredientsImage from "@/assets/ingredients.webp";

export const Ingredients = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">प्राकृतिक सामग्री</span>
            <h2 className="mb-6 font-heading text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">शुद्ध आयुर्वेदिक फॉर्मूला</h2>
            <p className="mb-8 text-lg text-muted-foregrofund">
              <span className="text-gradient">ReYoni</span> में केवल प्राकृतिक और आयुर्वेदिक जड़ी-बूटियां हैं जो सदियों से महिलाओं की इंटिमेट वेलनेस के लिए उपयोग की जाती रही हैं।
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-card p-4 transition-all duration-300 hover:shadow-soft">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">1</span>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">मंजिष्ठा</h4>
                  <p className="text-sm text-muted-foreground">रक्त शुद्धि और त्वचा के स्वास्थ्य के लिए</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-card p-4 transition-all duration-300 hover:shadow-soft">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">2</span>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">लोध्रा</h4>
                  <p className="text-sm text-muted-foreground">योनि की मांसपेशियों को मजबूत बनाता है</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-card p-4 transition-all duration-300 hover:shadow-soft">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">3</span>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">एलोवेरा</h4>
                  <p className="text-sm text-muted-foreground">प्राकृतिक नमी और हीलिंग गुण</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-card p-4 transition-all duration-300 hover:shadow-soft">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">4</span>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">गुलाब जल</h4>
                  <p className="text-sm text-muted-foreground">सुगंध और एंटी-बैक्टीरियल गुण</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-card p-4 transition-all duration-300 hover:shadow-soft">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">5</span>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">शतावरी</h4>
                  <p className="text-sm text-muted-foreground">हार्मोनल बैलेंस और टोनिंग</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-card p-4 transition-all duration-300 hover:shadow-soft">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">6</span>
                <div>
                  <h4 className="font-heading font-semibold text-foreground">हल्दी</h4>
                  <p className="text-sm text-muted-foreground">एंटी-इंफ्लेमेटरी और हीलिंग</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative mx-auto max-w-lg">
            <div className="absolute -inset-4 rounded-3xl bg-linear-to-br from-primary/10 to-accent/10 blur-2xl"></div>
            <img src={ingredientsImage} alt="Natural Ayurvedic Ingredients" width="500" height="500" loading="lazy" decoding="async" className="relative rounded-3xl shadow-card" />
          </div>
        </div>
        <div className="mt-16 rounded-2xl bg-red-50 border-red-200 border p-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-100">
            <span className="text-3xl text-red-500">✓</span>
          </div>
          <h3 className="mb-2 font-heading text-2xl font-bold text-foreground">100% सुरक्षित - कोई साइड इफेक्ट नहीं</h3>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            <span className="text-gradient font-bold">ReYoni</span> पूरी तरह से प्राकृतिक है। इसमें कोई हानिकारक केमिकल, पैराबेन, या सल्फेट नहीं है। यह सभी स्किन टाइप के लिए सुरक्षित
            है और किसी भी तरह की जलन या एलर्जी नहीं करता।
          </p>
        </div>
      </div>
    </section>
  );
};
