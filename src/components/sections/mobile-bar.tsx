import { Sparkles } from "lucide-react";
import { PRODUCT_DETAILS } from "@/constants/product";
import { useOrderDialog } from "@/contexts/order-dialog-context";

interface MobileBottomBarProps {
  onCtaClick?: () => void;
}

export const MobileBottomBar = ({ onCtaClick }: MobileBottomBarProps) => {
  const { openOrderDialog } = useOrderDialog();
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onCtaClick) onCtaClick();
    openOrderDialog();
  };
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card/95 backdrop-blur-sm border-t border-border shadow-lg z-50 py-3 px-4 md:hidden">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground line-through">{PRODUCT_DETAILS.currencySymbol}{PRODUCT_DETAILS.mrp.toLocaleString()}</span>
            <span className="text-xl font-bold text-primary">{PRODUCT_DETAILS.currencySymbol}{PRODUCT_DETAILS.price.toLocaleString()}</span>
          </div>
          <p className="text-xs text-muted-foreground">मुफ्त शिपिंग • COD</p>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-linear-to-r from-primary to-accent text-primary-foreground font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] h-12 rounded-xl px-8 text-base shrink-0 cursor-pointer"
          onClick={handleClick}
        >
          <Sparkles className="w-4 h-4" />
          अभी ऑर्डर करें
        </button>
      </div>
    </div>
  );
};
