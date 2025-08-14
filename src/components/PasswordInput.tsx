"use client";

import React, { useId, useState, InputHTMLAttributes, forwardRef } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export interface PasswordInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  showToggleLabel?: boolean;
}

const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ showToggleLabel = false, id, className, ...props }, ref) => {
    const autoId = useId();
    const inputId = id || autoId;
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const handleToggleVisibility = () => setIsVisible((prev) => !prev);

    return (
      <div className="*:not-first:mt-2">
        <div className="relative">
          <Input
            id={inputId}
            ref={ref}
            className={`pe-9 ${className ?? ""}`}
            type={isVisible ? "text" : "password"}
            autoComplete="current-password"
            {...props}
          />
          <button
            className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
            type="button"
            onClick={handleToggleVisibility}
            aria-label={isVisible ? "Hide password" : "Show password"}
            aria-pressed={isVisible}
            tabIndex={0}
          >
            {isVisible ? (
              <EyeOffIcon size={16} aria-hidden="true" />
            ) : (
              <EyeIcon size={16} aria-hidden="true" />
            )}
            {showToggleLabel && (
              <span className="sr-only">
                {isVisible ? "Hide password" : "Show password"}
              </span>
            )}
          </button>
        </div>
      </div>
    );
  }
);

PasswordInput.displayName = "PasswordInput";

export default PasswordInput;
