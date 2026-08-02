"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

export interface QuestionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  titleHi?: string;
  description?: string;
  descriptionHi?: string;
  helperText?: string;
  helperTextHi?: string;
  variant?: "default" | "glass";
  icon?: React.ReactNode;
}

const QuestionCard = React.forwardRef<HTMLDivElement, QuestionCardProps>(
  ({ title, titleHi, description, descriptionHi, helperText, helperTextHi, variant = "default", icon, children, className, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        variant={variant}
        className={cn("w-full transition-all duration-300 relative", className)}
        {...props}
      >
        {/* Top gold accent line for premium CNM design */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold/80 to-transparent" />

        <CardHeader className="space-y-4 pb-4">
          <div className="flex items-start gap-3">
            <span className="text-gold shrink-0 mt-0.5">
              {icon || <HelpCircle className="h-6 w-6" />}
            </span>
            <div className="question-text space-y-1.5 flex-1">
              <CardTitle className="question-en text-xl md:text-2xl font-bold leading-relaxed text-white font-sans">
                {title}
              </CardTitle>
              {titleHi && (
                <div className="question-hi text-lg md:text-xl font-normal leading-relaxed text-zinc-300 font-sans">
                  {titleHi}
                </div>
              )}
            </div>
          </div>
          {(description || descriptionHi) && (
            <div className="pl-9 space-y-1">
              {description && (
                <CardDescription className="text-zinc-400 text-sm font-light leading-relaxed">
                  {description}
                </CardDescription>
              )}
              {descriptionHi && (
                <p className="text-zinc-400/80 text-xs font-normal leading-relaxed">
                  {descriptionHi}
                </p>
              )}
            </div>
          )}
        </CardHeader>

        <CardContent className="space-y-6 pl-6 pr-6 md:pl-15 md:pr-8">
          {/* Answer Area (renders Option items or other input views) */}
          <div className="w-full">{children}</div>

          {/* Helper Text Compliance Reminder */}
          {(helperText || helperTextHi) && (
            <div className="space-y-0.5 pt-2">
              {helperText && (
                <p className="text-xs text-zinc-500 font-mono italic">
                  {helperText}
                </p>
              )}
              {helperTextHi && (
                <p className="text-[11px] text-zinc-500/80 font-mono italic">
                  {helperTextHi}
                </p>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
);
QuestionCard.displayName = "QuestionCard";

export { QuestionCard };
