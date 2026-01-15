import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { LeadForm } from "@/components/lead-form";
import { useOrderDialog } from "@/contexts/order-dialog-context";

export function OrderDialog() {
  const { isOpen, closeOrderDialog } = useOrderDialog();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeOrderDialog()}>
      <DialogContent size="md" backdrop="blur">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-center text-xl font-bold">
            अपना ऑर्डर पूरा करें
          </DialogTitle>
          <DialogDescription className="text-center">
             नीचे अपना विवरण भरें और हम आपका ऑर्डर प्रोसेस करेंगे।
          </DialogDescription>
        </DialogHeader>
        <div className="mt-0">
          <LeadForm showFeatures={false} showSecurityNote={false} />
        </div>
      </DialogContent>
    </Dialog>
  );
}
