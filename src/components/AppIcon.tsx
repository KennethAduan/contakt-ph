"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

type AppIconProps = {
  className?: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const AppIcon = ({
  className,
  src,
  alt,
  width = 100,
  height = 100,
}: AppIconProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  return (
    <div className={cn("flex items-center justify-center relative", className)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority
        onLoad={handleImageLoad}
        onError={handleImageError}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50">
          <Loader2 className="h-4 w-4 animate-spin" />
        </div>
      )}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 text-destructive text-sm">
          Failed to load image
        </div>
      )}
    </div>
  );
};

export default AppIcon;
