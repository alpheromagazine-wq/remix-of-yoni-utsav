import { CircleCheckBig, Heart, MessageSquareQuote, Quote, Smile, Sparkles, Star } from "lucide-react";
import { Badge } from "../ui/badge";
import { Card } from "../ui/card";
import { useOrderDialog } from "@/contexts/order-dialog-context";

const testimonials = [
  {
    name: "प्रिया शर्मा",
    initial: "P",
    city: "28 साल, मुंबई",
    text: '"मेरी शादी 3 महीने बाद थी और मैं बहुत परेशान थी। <span class="font-bold text-foreground">बिकिनी एरिया का कालापन</span> मुझे रात भर सोने नहीं देता था। ReYoni का इस्तेमाल करने के बाद <span class="font-bold text-primary">सिर्फ 15 दिनों में</span> मुझे फर्क दिखने लगा। आज मैं पूरी तरह <span class="font-bold">confident</span> हूं!"',
    rating: 5,
    icon: "heart",
  },
  {
    name: "अनीता वर्मा",
    initial: "A",
    city: "32 साल, दिल्ली",
    text: '"डिलीवरी के बाद मुझे <span class="font-bold text-foreground">vaginal looseness</span> की बहुत परेशानी थी। पार्टनर के साथ <span class="font-bold text-foreground">intimacy</span> में कमी आ गई थी और मैं बहुत depressed थी। ReYoni ने मेरी ज़िंदगी बदल दी! <span class="font-bold text-primary">3 हफ्तों में ही</span> मुझे और मेरे पार्टनर को बहुत फर्क महसूस हुआ। Thank you so much!"',
    rating: 5,
    icon: "sparkles",
  },
  {
    name: "रीना पटेल",
    initial: "R",
    city: "26 साल, बैंगलोर",
    text: '"मैं बीच पर <span class="font-bold text-foreground">bikini</span> पहनने से डरती थी क्योंकि <span class="font-bold text-foreground">प्राइवेट पार्ट्स का कालापन</span> बहुत ज्यादा था। मैंने बहुत सारे products try किए लेकिन कुछ काम नहीं आया। ReYoni के साथ <span class="font-bold text-primary">2 हफ्तों में</span> मुझे असली फर्क दिखा! अब मैं हर तरह के कपड़े पहनने में confident हूं। इससे बेहतर कुछ नहीं!"',
    rating: 5,
    icon: "heart",
  },
  {
    name: "नेहा गुप्ता",
    initial: "N",
    city: "30 साल, पुणे",
    text: '"शादी के 5 साल बाद मेरा <span class="font-bold text-foreground">relationship</span> अच्छा नहीं चल रहा था। <span class="font-bold text-foreground">Intimacy issues</span> की वजह से मैं और मेरे पति में दूरी बढ़ती जा रही थी। ReYoni ने हमारी शादी बचा ली! <span class="font-bold text-primary">अब हम पहले से ज्यादा खुश हैं।</span> यह product वाकई जादू है। Every married woman should try this!"',
    rating: 5,
    icon: "heart",
  },
  {
    name: "सिमरन कौर",
    initial: "S",
    city: "24 साल, चंडीगढ़",
    text: '"मैं <span class="font-bold text-foreground">gym</span> जाती हूं और अक्सर <span class="font-bold text-foreground">tight clothes</span> पहनती हूं। लेकिन बिकिनी एरिया की <span class="font-bold text-foreground">darkness</span> मुझे बहुत uncomfortable feel करवाती थी। मैंने ReYoni try किया और <span class="font-bold text-primary">10 दिनों में ही</span> फर्क देखने को मिला! अब मैं किसी भी तरह के कपड़े पहनने में confident हूं। Highly recommended!"',
    rating: 5,
    icon: "heart",
  },
  {
    name: "मीरा देसाई",
    initial: "M",
    city: "35 साल, अहमदाबाद",
    text: '"दो बच्चों के बाद मुझे लगता था कि अब मैं कभी पहले जैसी नहीं हो सकती। लेकिन ReYoni ने मुझे गलत साबित कर दिया! <span class="font-bold text-primary">महीने में</span> मुझे ऐसा लगा जैसे मैं फिर से young हूं। मेरा confidence वापस आ गया है और मेरी personal life भी बहुत improve हुई है। हर महिला को यह try करना चाहिए!"',
    rating: 5,
    icon: "smile",
  },
];

export function RealStories() {
  const { openOrderDialog } = useOrderDialog();
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 px-0">
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-4 py-2 rounded-full mb-4 flex items-center gap-2 w-fit mx-auto">
            <MessageSquareQuote className="w-4 h-4" />
            Real Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
            <span className="text-gradient">50,000+</span> महिलाओं की
            <br />
            ज़िन्दगी बदली
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

              <div className="text-foreground leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: testimonial.text }} />
                {testimonial.icon === "heart" && <Heart className="w-4 h-4 text-primary fill-primary inline-block shrink-0 align-middle ml-1.5 -translate-y-0.5" />}
                {testimonial.icon === "sparkles" && <Sparkles className="w-4 h-4 text-primary fill-primary inline-block shrink-0 align-middle ml-1.5 -translate-y-0.5" />}
                {testimonial.icon === "smile" && <Smile className="w-4 h-4 text-primary inline-block shrink-0 align-middle ml-1.5 -translate-y-0.5" />}
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center">
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
        <div className="mt-16 bg-linear-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8">
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
          <button onClick={openOrderDialog} className="btn-primary text-sm md:text-lg cursor-pointer">
            Join 50,000+ Happy Women →
          </button>
        </div>
      </div>
    </section>
  );
}
