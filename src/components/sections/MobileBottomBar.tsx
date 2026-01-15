import { Sparkles } from "lucide-react";

interface MobileBottomBarProps {
  onCtaClick?: () => void;
}

export const MobileBottomBar = ({ onCtaClick }: MobileBottomBarProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg z-50 py-3 px-4 md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground line-through">₹4,980</span>
            <span className="text-xl font-bold text-primary">₹2,490</span>
          </div>
          <p className="text-xs text-muted-foreground">मुफ्त शिपिंग • COD</p>
        </div>
        <a
          href="#lead-form"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-gradient-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] h-12 rounded-xl px-8 text-base shrink-0"
          onClick={onCtaClick}
        >
          <Sparkles className="w-4 h-4" />
          अभी ऑर्डर करें
        </a>
      </div>
    </div>
  );
};
