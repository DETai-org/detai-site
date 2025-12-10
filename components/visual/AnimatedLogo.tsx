"use client";

import Lottie from "lottie-react";
import clsx from "clsx";

import animationData from "@/public/assets/animations/logo.json";

type AnimatedLogoProps = {
  className?: string;
};

export default function AnimatedLogo({ className }: AnimatedLogoProps) {
  return (
    <div className={clsx(className)}>
      <Lottie
        animationData={animationData}
        loop={false}
        autoplay
        className="h-full w-full"
        rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
      />
    </div>
  );
}
