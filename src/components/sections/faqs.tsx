import { AlertCircle, CircleX, Star } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Badge } from "../ui/badge";
import { useOrderDialog } from "@/contexts/order-dialog-context";

export function Faqs() {
  const { openOrderDialog } = useOrderDialog();
  return (
    <section className="section-padding bg-background">
      <div className="container-custom max-w-3xl">
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary text-sm font-semibold px-4 py-2 mb-4">❓ Common Questions</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-[1.3]">
            <span className="text-gradient">अक्सर पूछे जाने वाले</span>
            <br />
            सवाल
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem value="faq-1" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">ReYoni कब तक use करना होगा results देखने के लिए?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              बेहतरीन परिणामों के लिए हम 3 महीने तक नियमित उपयोग की सलाह देते हैं, हालाँकि 2-4 सप्ताह में ही सुधार दिखने लगता है।
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-2" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">क्या इसके कोई side effects हैं?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              नहीं, इसके कोई दुष्प्रभाव नहीं हैं। ReYoni 100% प्राकृतिक जड़ी-बूटियों से बना है और संवेदनशील त्वचा के लिए सुरक्षित है।
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-3" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">क्या ये सच में काम करता है?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              हाँ, यह पूर्णतः प्रभावी है। 50,000+ से अधिक महिलाओं ने इसे अपनाया है और इसके परिणामों से बहुत खुश हैं।
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-4" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">क्या मैं pregnancy में use कर सकती हूं?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              हम गर्भावस्था के दौरान इसके उपयोग की सलाह नहीं देते। डिलीवरी के 3 महीने बाद इसका उपयोग करना पूरी तरह सुरक्षित है।
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-5" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">Delivery कैसे होगी? Privacy का ध्यान रखा जाएगा?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              उत्पाद को एक सादे बॉक्स में पैक किया जाता है। डिलीवरी बॉय या किसी और को पता नहीं चलेगा कि बॉक्स के अंदर क्या है।
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-6" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">क्या ये intimate skin के लिए safe है?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              हाँ, यह इंटिमेट एरिया के pH बैलेंस को ध्यान में रखकर बनाया गया है और हर प्रकार की स्किन के लिए सुरक्षित है।
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-7" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">क्या husband/partner को बताना ज़रूरी है?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              यह क्रीम लगाने के बाद पूरी तरह गायब हो जाती है। आप इसे बिना किसी को बताए भी आसानी से उपयोग कर सकती हैं।
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-8" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">Return/Refund policy क्या है?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              अगर आप उत्पाद से संतुष्ट नहीं हैं, तो हम 7 दिनों के भीतर नो-क्वालिटी-आरगुमेंट रिफंड पॉलिसी प्रदान करते हैं।
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-9" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">क्या यह ट्रीटमेंट पूरी तरह सुरक्षित है?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              <p className="mb-4">हाँ, बिल्कुल सुरक्षित! हमारा ट्रीटमेंट 100% डॉक्टर अप्रूव्ड है और हजारों महिलाओं ने इसे बिना किसी साइड इफेक्ट के इस्तेमाल किया है।</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <CircleX className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>क्लिनिकली टेस्टेड</span>
                </div>
                <div className="flex items-start gap-2">
                  <CircleX className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>नेचुरल इंग्रेडिएंट्स</span>
                </div>
                <div className="flex items-start gap-2">
                  <CircleX className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>कोई हार्मफुल केमिकल नहीं</span>
                </div>
                <div className="flex items-start gap-2">
                  <CircleX className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span>मेडिकल स्किन के लिए भी सेफ</span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-10" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">कितने दिनों में रिजल्ट दिखने लगेगा?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              <p className="mb-4">
                आपको <span className="font-bold text-primary">पहले ही हफ्ते से फर्क</span> दिखना शुरू हो जाएगा!
              </p>
              <div className="bg-primary/5 rounded-lg p-4 space-y-3 mb-4">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-primary">7 दिन:</span> स्किन टोन में सुधार, ताज़गी एवं महसूस होगी
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-primary">15 दिन:</span> टाइटनिंग और टाइटलिंग में साफ फर्क
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-primary">30 दिन:</span> कम्प्लीट ट्रांसफॉर्मेशन – गोरापन, टाइटनेस, कॉन्फिडेंस!
                  </div>
                </div>
              </div>
              <p className="font-semibold text-primary text-sm">लेकिन पिलानों जल्दी शुरू करेंगी, उतनी जल्दी रिजल्ट मिलेगा। अभी एक्शन लें!</p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-11" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">पेमेंट कैसे करें? क्या COD उपलब्ध है?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              हाँ, हम Cash on Delivery (COD) की सुविधा प्रदान करते हैं। आप डिलीवरी के समय पेमेंट कर सकती हैं। ऑनलाइन पेमेंट के विकल्प भी उपलब्ध हैं।
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="faq-12" className="bg-card rounded-xl border border-border/50 hover:border-primary px-6 transition-all">
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">क्या मनी-बैक गारंटी सच में मिलती है?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              <p className="mb-4">बिल्कुल! हम अपने प्रोडक्ट पर पूरा भरोसा रखते हैं।</p>
              <div className="bg-primary/5 rounded-lg p-4 mb-4">
                <p className="text-foreground">
                  अगर आपको <span className="font-bold text-primary text-lg">30 दिनों में रिजल्ट नहीं दिखा</span>, तो हम{" "}
                  <span className="font-bold text-primary text-lg">100% पैसे वापस</span> कर देंगे। कोई सवाल नहीं, कोई झंझट नहीं।
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
            <AccordionTrigger className="text-left font-semibold hover:text-primary hover:no-underline py-5">डिलीवरी कितने दिन में होगी?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5">
              आपका ऑर्डर 3-5 कार्य दिवसों में डिलीवर किया जाएगा। आपको ट्रैकिंग डिटेल्स भी मिलेगी जिससे आप अपने पार्सल को ट्रैक कर सकती हैं।
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center mt-12 p-8 bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl">
          <p className="text-lg text-muted-foreground mb-2">और कोई सवाल है?</p>
          <p className="text-sm text-muted-foreground mb-6">WhatsApp पर हमसे बात करें या अभी order करें!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openOrderDialog}
              className="inline-flex items-center justify-center gap-2 bg-linear-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-glow cursor-pointer"
            >
              अभी Order करें →
            </button>
            <a
              href={`#`}
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
  );
}
