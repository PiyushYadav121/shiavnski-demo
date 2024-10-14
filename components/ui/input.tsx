import * as React from "react";

import { cn } from "@/lib/utils/shadcn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full rounded-[4px] bg-[#1E1E1E]/70 focus-visible:border-[2px] px-5 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#e1e1e1]/70 file:text-[#e1e1e1] text-[16px] font-xs font-inter disabled:bg-[#2a2a2a] focus-visible:border-[#D162ED] outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
