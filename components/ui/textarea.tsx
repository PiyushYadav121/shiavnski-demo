import * as React from "react";

import { cn } from "@/lib/utils/shadcn";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[150px] w-full rounded-[4px] py-3 bg-[#1E1E1E]/70 focus-visible:border-[2px] px-5 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#e1e1e1]/70 text-[16px] font-xs font-inter disabled:bg-[#2a2a2a] focus-visible:border-[#D162ED] outline-none disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
