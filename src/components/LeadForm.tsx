import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Phone, User } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "कृपया अपना नाम दर्ज करें (कम से कम 2 अक्षर)",
  }),
  phone: z.string().regex(/^[6-9]\d{9}$/, {
    message: "कृपया सही मोबाइल नंबर दर्ज करें (10 अंक)",
  }),
});

type FormValues = z.infer<typeof formSchema>;

interface LeadFormProps {
  onSubmitSuccess?: () => void;
}

export function LeadForm({ onSubmitSuccess }: LeadFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
    },
  });

  function onSubmit(values: FormValues) {
    // Log form data to console
    console.log("Lead Form Submission:", values);
    console.log("Timestamp:", new Date().toISOString());
    
    // Show success message
    toast.success("धन्यवाद! हम जल्द ही आपसे संपर्क करेंगे।", {
      description: "आपका फॉर्म सफलतापूर्वक सबमिट हो गया है।",
    });
    
    // Reset form
    form.reset();
    
    // Optional callback
    if (onSubmitSuccess) {
      onSubmitSuccess();
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">नाम *</FormLabel>
              <FormControl>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="अपना पूरा नाम दर्ज करें"
                    className="pl-11 h-12 text-base"
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold">फोन नंबर *</FormLabel>
              <FormControl>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    placeholder="10 अंकों का मोबाइल नंबर"
                    className="pl-11 h-12 text-base"
                    type="tel"
                    maxLength={10}
                    {...field}
                  />
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="btn-primary w-full text-lg font-bold"
          disabled={form.formState.isSubmitting}
        >
          🔥 अभी बुक करें
        </Button>
      </form>
    </Form>
  );
}