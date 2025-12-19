"use client";

import { useMemo, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";
import BodyText from "./BodyText";

type DetDetaiMobileCardProps = {
  paragraphs: string[];
  className?: string;
};

export default function DetDetaiMobileCard({ paragraphs, className }: DetDetaiMobileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const { firstSentence, remainingParagraphs, remainingText } = useMemo(() => {
    const normalizedParagraphs = paragraphs.map((paragraph) => paragraph.trim()).filter(Boolean);
    const [firstParagraph = "", ...rest] = normalizedParagraphs;
    const firstSentenceEnd = firstParagraph.indexOf(".");

    const sentenceEndIndex = firstSentenceEnd >= 0 ? firstSentenceEnd + 1 : firstParagraph.length;
    const firstSentenceText = firstParagraph.slice(0, sentenceEndIndex).trim();

    const remaining = [firstParagraph.slice(sentenceEndIndex).trim(), ...rest].filter(Boolean);
    const combinedRemainingText = remaining.join("\n\n").trim();

    return {
      firstSentence: firstSentenceText,
      remainingParagraphs: remaining,
      remainingText: combinedRemainingText,
    };
  }, [paragraphs]);

  const previewText = useMemo(() => remainingText.slice(0, 320), [remainingText]);
  const previewParagraphs = useMemo(
    () => previewText.split(/\n\n+/).map((paragraph) => paragraph.trim()).filter(Boolean),
    [previewText],
  );

  const toggleCard = () => setIsExpanded((current) => !current);

  return (
    <div
      className={cn(
        "md:hidden relative isolate overflow-hidden w-[calc(100%-theme(spacing['mobile-2'])*2)] max-w-none rounded-none border-y border-accent-primary/20",
        "px-mobile-3 py-mobile-5 shadow-[0_18px_48px_-18px_rgba(185,146,79,0.35)]",
        "mx-auto",
        className,
      )}
      aria-live="polite"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 paper--object-mobile-torn" aria-hidden />

      <div className="relative z-10 flex flex-col gap-mobile-4">
        <BodyText variant="infoCard" className="pt-mobile-2 text-basic-dark">
          {firstSentence}
        </BodyText>

        {isExpanded ? (
          <div className="flex flex-col gap-mobile-3">
            {remainingParagraphs.map((paragraph, index) => (
              <BodyText key={index} variant="infoCard" className="text-basic-dark">
                {paragraph}
              </BodyText>
            ))}
          </div>
        ) : previewParagraphs.length ? (
          <div className="flex flex-col gap-mobile-3">
            {previewParagraphs.map((paragraph, index) => (
              <BodyText key={index} variant="infoCard" className="text-basic-dark">
                {paragraph}
              </BodyText>
            ))}
          </div>
        ) : null}
      </div>

      {!isExpanded && remainingText ? (
        <>
          <div className="pointer-events-none absolute inset-x-[-1rem] bottom-[-0.25rem] z-10 h-20 bg-gradient-to-t from-white via-basic-light/70 to-transparent blur-[18px]" />
          <button
            type="button"
            onClick={toggleCard}
            className="absolute inset-x-0 bottom-mobile-4 z-20 mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-accent-primary/40 bg-white/90 text-accent-primary shadow-[0_8px_22px_-12px_rgba(185,146,79,0.45)] backdrop-blur"
            aria-expanded={isExpanded}
            aria-label="Развернуть текст"
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        </>
      ) : null}

      {isExpanded ? (
        <div className="relative mt-mobile-2 flex justify-center">
          <button
            type="button"
            onClick={toggleCard}
            className="flex items-center gap-mobile-1 rounded-full border border-accent-primary/40 bg-white/90 px-mobile-2 py-[0.4rem] text-mobile-sm font-semibold uppercase tracking-wide text-accent-primary shadow-[0_8px_22px_-12px_rgba(185,146,79,0.45)] backdrop-blur"
            aria-expanded={isExpanded}
            aria-label="Свернуть текст"
          >
            <span>Свернуть</span>
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
