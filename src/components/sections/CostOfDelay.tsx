import { Card } from "@/components/ui/card";
import { XCircle } from "lucide-react";

export const CostOfDelay = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/20">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-5xl font-extrabold text-center">
            💥 क्यों जरूरी है अभी एक्शन लेना?
          </h2>
          
          <div className="grid gap-4 md:gap-6">
            <Card className="card-elevated p-6 border-l-4 border-destructive">
              <div className="flex items-start gap-4">
                <XCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">हर दिन की देरी = बढ़ती शर्मिंदगी</h3>
                  <p className="text-muted-foreground">
                    हर गुजरता दिन आपके आत्मविश्वास को और कम करता है। आज की देरी कल की पछतावे में बदल सकती है।
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-elevated p-6 border-l-4 border-destructive">
              <div className="flex items-start gap-4">
                <XCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">पार्टनर के साथ रिश्तों में दूरी</h3>
                  <p className="text-muted-foreground">
                    इंटिमेसी में कमी रिश्तों को कमजोर बनाती है। आपका पार्टनर खुश नहीं, तो रिश्ता कैसे मजबूत होगा?
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-elevated p-6 border-l-4 border-destructive">
              <div className="flex items-start gap-4">
                <XCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">खुद पर विश्वास की कमी</h3>
                  <p className="text-muted-foreground">
                    जब आप खुद को अट्रैक्टिव नहीं मानतीं, तो यह हर चीज में दिखता है। आपकी खूबसूरती वापस लाने का समय आ गया है।
                  </p>
                </div>
              </div>
            </Card>

            <Card className="card-elevated p-6 border-l-4 border-destructive">
              <div className="flex items-start gap-4">
                <XCircle className="w-8 h-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">बिकिनी या टाइट कपड़े पहनने का डर</h3>
                  <p className="text-muted-foreground">
                    कालापन और ढीलापन आपको अपनी पसंद के कपड़े पहनने से रोकता है। अब कोई रोक नहीं!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          <div className="text-center pt-4">
            <p className="text-2xl md:text-3xl font-bold text-primary">
              बस करो इंतजार! अब है वक्त बदलाव का।
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
