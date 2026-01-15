import { useState } from "react";
import { CustomPhoneInput } from "@/components/ui/custom-phone-input";
import { PRODUCT_DETAILS } from "@/constants/product";
import { Check, CheckCircle2, Lock, ShieldCheck } from "lucide-react";

interface LeadFormProps {
  showFeatures?: boolean;
  showSecurityNote?: boolean;
}

export function LeadForm({ showFeatures = true, showSecurityNote = true }: LeadFormProps) {
  const [phone, setPhone] = useState<string>();

  return (
    <form className="space-y-5" method="post" action={PRODUCT_DETAILS.formAction}>
      <input type="hidden" name="lp_name" value={PRODUCT_DETAILS.lpName} />
      <input type="hidden" name="lp_lang" value={PRODUCT_DETAILS.lpLang} />
      <input type="hidden" name="product_name" value={PRODUCT_DETAILS.name} />
      <input type="hidden" name="package_price" value={PRODUCT_DETAILS.packagePriceId} />

      <div className="space-y-2 text-left">
        <label className="block text-foreground font-semibold text-sm">
          पूरा नाम <span className="text-destructive">*</span>
        </label>
        <input
          type="text"
          required
          className="w-full px-4 py-3 bg-white border border-input rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm"
          placeholder="अपना पूरा नाम भरें"
          name="name"
          minLength={3}
          title="अपना पूरा नाम लिखें"
        />
      </div>

      <div className="space-y-2 text-left">
        <label className="block text-foreground font-semibold text-sm">
          फ़ोन नंबर <span className="text-destructive">*</span>
        </label>
        <CustomPhoneInput
          defaultCountry="IN"
          countries={["IN"]}
          limitMaxLength={true}
          placeholder="Enter phone number"
          value={phone}
          onChange={setPhone}
          required
          numberInputProps={{
            pattern: "^(\\+?\\d[\\d\\s]{10,16})$",
          }}
        />
        <input type="hidden" name="phone" value={phone || ""} />
      </div>

      <div className="bg-primary/5 border border-primary/20 p-3 sm:p-5 rounded-xl mt-4">
        <div className="flex justify-between items-center">
          <div className="space-y-1 text-left">
            <div className="text-base sm:text-lg font-bold text-foreground mb-1.5 sm:mb-2 text-left">
              कुल राशि:
            </div>
            <div className="space-y-1 mt-2">
              <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground font-medium whitespace-nowrap">
                <CheckCircle2 className="text-green-600 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                कैश ऑन डिलीवरी उपलब्ध
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground font-medium whitespace-nowrap">
                <CheckCircle2 className="text-green-600 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                फ्री एक्सप्रेस शिपिंग शामिल
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-muted-foreground font-medium whitespace-nowrap">
                <ShieldCheck className="text-green-600 w-3 h-3 sm:w-3.5 sm:h-3.5" />
                100% सुरक्षित भुगतान
              </div>
            </div>
          </div>

          <div className="text-right leading-none self-center pl-2">
            <span className="text-muted-foreground/60 text-sm sm:text-lg line-through decoration-destructive/50 decoration-2 font-medium block mb-0.5 sm:mb-1">
              {PRODUCT_DETAILS.currencySymbol}
              {PRODUCT_DETAILS.mrp.toLocaleString()}
            </span>
            <span className="text-primary font-bold text-3xl sm:text-4xl">
              {PRODUCT_DETAILS.currencySymbol}
              {PRODUCT_DETAILS.price.toLocaleString()}
            </span>
          </div>
        </div>
      </div>

      <button
        className="w-full submit-form pulse bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-4 rounded-xl font-bold text-lg mt-0 cursor-pointer"
        type="submit"
      >
        अभी ऑर्डर करें - कैश ऑन डिलीवरी
      </button>

      {showFeatures && (
        <div className="space-y-3 mb-8 mt-8 text-left">
          <div className="flex items-center gap-3">
            <Check className="h-5 w-5 text-primary shrink-0" />
            <span className="text-foreground">
              <span className="text-gradient">{PRODUCT_DETAILS.brandName}&nbsp;</span>
              इंटिमेट वेलनेस क्रीम ({PRODUCT_DETAILS.weight})
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Check className="h-5 w-5 text-primary shrink-0" />
            <span className="text-foreground">गोपनीय पैकेजिंग</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="h-5 w-5 text-primary shrink-0" />
            <span className="text-foreground">उपयोग गाइड शामिल</span>
          </div>
          <div className="flex items-center gap-3">
            <Check className="h-5 w-5 text-primary shrink-0" />
            <span className="text-foreground">24/7 ग्राहक सहायता</span>
          </div>
        </div>
      )}

      {showSecurityNote && (
        <div className="flex justify-center gap-6 mt-6 pt-6 border-t border-border/50">
          <p className="text-center text-muted-foreground mt-4 text-sm flex items-center justify-center gap-1">
            <Lock className="w-3 h-3" />
            आपकी जानकारी 100% सुरक्षित और गोपनीय है
          </p>
        </div>
      )}
    </form>
  );
}
