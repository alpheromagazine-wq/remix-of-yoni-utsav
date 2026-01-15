import { Phone } from "lucide-react";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

export const WhatsAppButton = ({ phoneNumber, message }: WhatsAppButtonProps) => {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="hidden md:flex fixed bottom-8 right-8 w-16 h-16 bg-[#25D366] rounded-full items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 z-50 animate-pulse-soft"
    >
      <Phone className="w-8 h-8 text-white" />
    </a>
  );
};
