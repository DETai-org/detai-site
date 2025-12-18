"use client";

import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";
import BodyText from "./BodyText";

type DetDetaiMobileCardVariant = "default" | "immersive";

type DetDetaiMobileCardProps = {
  paragraphs: string[];
  className?: string;
  variant?: DetDetaiMobileCardVariant;
};

const variantClasses: Record<DetDetaiMobileCardVariant, string> = {
  default: cn(
    "bg-gradient-to-br from-basic-light via-white to-accent-soft/80",
    "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_16%_22%,rgba(201,168,106,0.22),transparent_44%),radial-gradient(circle_at_92%_18%,rgba(242,229,194,0.5),transparent_48%)]",
    "before:pointer-events-none before:content-['']",
  ),
  immersive: cn(
    "bg-gradient-to-br from-basic-light via-basic-light/90 to-basic-light/70",
    "before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_18%_20%,rgba(30,27,25,0.12),transparent_45%),radial-gradient(circle_at_82%_16%,rgba(246,241,233,0.6),transparent_42%),radial-gradient(circle_at_48%_80%,rgba(30,27,25,0.08),transparent_50%)]",
    "before:pointer-events-none before:content-['']",
    "after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_14%_86%,rgba(30,27,25,0.06),transparent_55%)] after:pointer-events-none after:content-['']",
    "shadow-[0_26px_60px_-28px_rgba(30,27,25,0.45)]",
  ),
};

export default function DetDetaiMobileCard({
  paragraphs,
  className,
  variant = "default",
}: DetDetaiMobileCardProps) {
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

  return (
    <div
      className={cn(
        "md:hidden relative isolate w-full max-w-none overflow-hidden rounded-none border-y border-accent-primary/20",
        "px-mobile-4 py-mobile-5 shadow-[0_18px_48px_-18px_rgba(185,146,79,0.35)]",
        variantClasses[variant],
        className,
      )}
      role="button"
      tabIndex={0}
      onClick={() => setIsExpanded((current) => !current)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setIsExpanded((current) => !current);
        }
      }}
      aria-expanded={isExpanded}
      aria-label={isExpanded ? "Свернуть текст" : "Развернуть текст"}
    >
      <div className="relative flex flex-col gap-mobile-4">
        <BodyText variant="infoCard" className="text-basic-dark">{firstSentence}</BodyText>

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
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white via-basic-light/70 to-transparent" />
          <span className="pointer-events-none absolute bottom-mobile-3 right-mobile-4 text-mobile-sm font-semibold uppercase tracking-wide text-accent-primary">
            Читать дальше
          </span>
        </>
      ) : null}
    </div>
  );
}
