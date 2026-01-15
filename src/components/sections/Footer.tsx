export const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t border-border py-12 mb-20 md:mb-0">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto space-y-6 text-center">
          <div className="space-y-4 text-xs text-muted-foreground">
            <p>
              <strong className="text-foreground">Disclaimer:</strong> ReYoni is an external use product only. Do not apply internally. For external intimate areas only. Discontinue use if irritation occurs.
            </p>

            <p>
              <strong className="text-foreground">Individual Results:</strong> Results may vary from person to person depending on skin type, consistency of use, and individual physiology. The testimonials shown represent individual experiences and may not reflect typical results.
            </p>

            <p>
              <strong className="text-foreground">Medical Advice:</strong> This product is not intended to diagnose, treat, cure, or prevent any disease. If you have any medical conditions or concerns, please consult with a healthcare professional before use. Not suitable for use during pregnancy or breastfeeding without medical consultation.
            </p>
          </div>

          <div className="pt-6 border-t border-border text-xs text-muted-foreground">
            <p>
              © 2025 ReYoni. All rights reserved. | For inquiries: <a href="mailto:support@reyoni.com" className="text-primary hover:underline">support@reyoni.com</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
