import { MessageSquareQuote, Star, ArrowRight } from "lucide-react";

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

export const CustomerStories = () => {
  return (
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
  );
};
