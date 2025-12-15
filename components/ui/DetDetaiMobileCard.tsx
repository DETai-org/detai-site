"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

type DetDetaiMobileCardProps = {
  paragraphs: string[];
  className?: string;
};

export default function DetDetaiMobileCard({ paragraphs, className }: DetDetaiMobileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleParagraphs = isExpanded ? paragraphs : paragraphs.slice(0, 1);

  return (
    <div
      className={cn(
        "md:hidden",
        "relative overflow-hidden rounded-2xl border border-accent-primary/20 bg-basic-light p-mobile-4 shadow-[0_12px_40px_-12px_rgba(43,32,20,0.24)]",
        "before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_12%_10%,rgba(255,197,143,0.28),transparent_42%),radial-gradient(circle_at_92%_12%,rgba(204,228,255,0.32),transparent_40%)]",
        className,
      )}
    >
      <div className="relative flex flex-col gap-mobile-3 text-mobile-lg leading-mobile-normal text-basic-dark">
        {visibleParagraphs.map((paragraph) => (
          <p key={paragraph} className="font-sans text-mobile-lg leading-mobile-normal text-basic-dark">
            {paragraph}
          </p>
        ))}
      </div>

      {!isExpanded && paragraphs.length > 1 ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-14 h-16 bg-gradient-to-t from-basic-light to-transparent" />
      ) : null}

      <button
        type="button"
        className="relative mt-mobile-4 inline-flex w-full items-center justify-center gap-mobile-2 rounded-xl bg-basic-dark px-mobile-4 py-mobile-3 text-mobile-lg font-semibold text-accent-soft transition-transform duration-150 active:translate-y-[1px]"
        onClick={() => setIsExpanded((current) => !current)}
        aria-expanded={isExpanded}
      >
        {isExpanded ? "Свернуть" : "Читать полностью"}
        <span aria-hidden className="text-accent-primary">
          {isExpanded ? "↑" : "↓"}
        </span>
      </button>
    </div>
  );
}
