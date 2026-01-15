import { Award, CircleCheckBig } from "lucide-react";
import { Card } from "../ui/card";
import doctorImage from "@/assets/doctor.webp";
import { Badge } from "../ui/badge";

import { useOrderDialog } from "@/contexts/order-dialog-context";

export function DrRecomendation() {
  const { openOrderDialog } = useOrderDialog();
  return (
    <section className="section-padding bg-linear-to-b from-secondary/10 to-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Card */}
          <div className="relative">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent rounded-3xl blur-2xl" />

            <Card className="relative card-elevated p-4 md:p-8 shadow-glow">
              {/* Doctor Profile */}
              <div className="flex items-start gap-6 mb-6">
                <div className="size-28 bg-linear-to-br from-primary to-accent rounded-2xl flex items-center justify-center shrink-0 p-2">
                  <img src={doctorImage} alt="Dr. Meera Sharma - Gynecologist" className="w-full h-full object-cover rounded-sm" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Dr. Meera Sharma</h3>
                  <p className="text-primary font-medium">MBBS, MD - Obstetrics &amp; Gynaecology</p>
                  <p className="text-sm text-muted-foreground mt-1">20+ Years Experience</p>
                  <div className="flex items-center gap-2 mt-2">
                    <Award className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-medium">Best Gynecologist Award 2023</span>
                  </div>
                </div>
              </div>

              {/* Doctor Quote */}
              <div className="bg-primary/5 rounded-xl p-6 border-l-4 border-primary">
                <p className="text-lg italic leading-relaxed">
                  "ReYoni में use होने वाले <span className="font-semibold">natural ingredients</span> intimate health के लिए{" "}
                  <span className="text-primary font-semibold">clinically proven</span> हैं। यह product women की intimate concerns को safely और effectively address करता है।"
                </p>
              </div>

              {/* Doctor Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-3 bg-background rounded-xl">
                  <p className="text-xl font-bold text-primary">20+</p>
                  <p className="text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-3 bg-background rounded-xl">
                  <p className="text-xl font-bold text-primary">1L+</p>
                  <p className="text-xs text-muted-foreground">Patients Treated</p>
                </div>
                <div className="text-center p-3 bg-background rounded-xl">
                  <p className="text-xl font-bold text-primary">4.9</p>
                  <p className="text-xs text-muted-foreground">Rating</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Benefits List */}
          <div className="space-y-6">
            <Badge className="bg-primary/10 text-primary hover:bg-primary/10 px-4 py-2 rounded-full">👩‍⚕️ Doctor Recommended</Badge>

            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-gradient">Gynecologists</span> भी
              <br />
              Recommend करती हैं
            </h2>

            <p className="text-lg text-muted-foreground">
              ReYoni को develop करने में <span className="font-semibold text-foreground">top gynecologists</span> की team ने help की है। यह product:
            </p>

            <div className="space-y-4">
              {[
                "Dermatologically Tested & Approved",
                "pH Balanced Formula (4.5-5.5)",
                "100% Natural Ayurvedic Herbs",
                "No Harmful Chemicals",
                "Safe for Daily Use",
                "No Side Effects Reported",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-linear-to-br from-primary to-accent rounded-full flex items-center justify-center shrink-0">
                    <CircleCheckBig className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-4 mx-auto w-full flex justify-center">
          <button onClick={openOrderDialog} className="btn-primary text-sm md:text-lg cursor-pointer">
            Doctor Approved Product लें →
          </button>
        </div>
      </div>
    </section>
  );
}
