import React from "react";
import PhoneInput, { Value } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { cn } from "@/lib/utils";

interface CustomPhoneInputProps extends Omit<React.ComponentProps<typeof PhoneInput>, "onChange"> {
  className?: string;
  error?: boolean;
  onChange: (value: Value) => void;
}

export const CustomPhoneInput = React.forwardRef<React.ElementRef<typeof PhoneInput>, CustomPhoneInputProps>(({ className, error, ...props }, ref) => {
  return (
    <div className={cn("relative", className)}>
      <PhoneInput
        ref={ref}
        defaultCountry="IN"
        countries={["IN"]}
        limitMaxLength={true}
        onChange={props.onChange}
        {...props}
        className={cn(
          "flex w-full items-center gap-0 rounded-xl border border-input bg-white shadow-sm transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 overflow-hidden",
          error && "border-destructive focus-within:border-destructive focus-within:ring-destructive/20"
        )}
        numberInputProps={{
          ...props.numberInputProps,
          className: cn(
            "flex h-12 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-none focus:ring-0 px-4",
            props.numberInputProps?.className
          ),
          onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
            const el = e.currentTarget;
            if (
              e.key === "Backspace" ||
              e.key === "Delete" ||
              e.key === "ArrowLeft" ||
              e.key === "ArrowRight" ||
              e.key === "Tab" ||
              e.ctrlKey ||
              e.metaKey ||
              e.altKey
            ) {
              return;
            }

            if (el.selectionStart !== el.selectionEnd) return;

            const value = el.value;
            const digits = value.replace(/\D/g, "");

            if (/^\d$/.test(e.key)) {
              if (value.startsWith("+")) {
                if (digits.length >= 12) e.preventDefault();
              } else {
                if (digits.length >= 10) e.preventDefault();
              }
            }
            
            (props.numberInputProps as React.InputHTMLAttributes<HTMLInputElement>)?.onKeyDown?.(e);
          },
        }}
      />
      <style>{`
          .PhoneInputCountry {
            background-color: hsl(var(--muted) / 0.4);
            margin-right: 0px;
            padding-left: 12px;
            padding-right: 12px;
            align-self: stretch;
            display: flex;
            align-items: center;
            border-right: 1px solid hsl(var(--input));
          }
           .PhoneInputInput {
             background: transparent;
             border: none;
             outline: none;
          }
          .PhoneInputCountrySelectArrow {
             margin-left: 6px;
             opacity: 0.5;
          }
        `}</style>
    </div>
  );
});

CustomPhoneInput.displayName = "CustomPhoneInput";
