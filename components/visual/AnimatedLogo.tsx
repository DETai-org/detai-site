"use client";

import Lottie from "lottie-react";
import clsx from "clsx";

import animationData from "@/public/assets/animations/logo.json";

type AnimatedLogoProps = {
  className?: string;
};

export default function AnimatedLogo({ className }: AnimatedLogoProps) {
  return <Lottie animationData={animationData} loop={false} autoplay className={clsx("w-48 h-48", className)} />;
}
