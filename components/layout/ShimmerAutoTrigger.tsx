"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ShimmerAutoTrigger() {
  const pathname = usePathname();

  useEffect(() => {
    const shimmerDelay = pathname?.toLowerCase().includes("herald") ? 13000 : 3000;

    const buttons = Array.from(document.querySelectorAll<HTMLElement>(".btn-shimmer"));

    if (!buttons.length) {
      return undefined;
    }

    const timers = new Map<Element, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;

          if (entry.isIntersecting) {
            const timer = window.setTimeout(() => {
              target.classList.add("auto-shimmer");
            }, shimmerDelay);

            timers.set(target, timer);
            return;
          }

          const timer = timers.get(target);

          if (timer) {
            window.clearTimeout(timer);
            timers.delete(target);
          }

          target.classList.remove("auto-shimmer");
        });
      },
      { threshold: 0.5 },
    );

    buttons.forEach((button) => observer.observe(button));

    return () => {
      observer.disconnect();

      timers.forEach((timer) => window.clearTimeout(timer));
      buttons.forEach((button) => button.classList.remove("auto-shimmer"));
    };
  }, [pathname]);

  return null;
}
