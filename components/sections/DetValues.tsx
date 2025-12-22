import Image from "next/image";

import BodyText from "../ui/BodyText";
import DefaultCard from "../ui/DefaultCard";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

const detValues = [
  {
    title: "Право на противоречие",
    description:
      "Уважение к внутренней двойственности человека. Мы не пытаемся “исправить” внутренний конфликт и противоречия как дефект: мы учимся видеть в них динамику, смысл и возможность для роста.",
  },
  {
    title: "Безусловная вера во внутренний потенциал",
    description:
      "Безусловная вера во внутренний потенциал личности. В человеке уже заложено все потенциально возможное — и наша задача помочь проявиться тому, что может сделать жизнь глубже, честнее и устойчивее.",
  },
];

export default function DetValues() {
  return (
    <Section
      id="det-values"
      variant="dark"
      className="bg-basic-dark"
      containerClassName="flex flex-col gap-mobile-5 md:gap-10"
    >
      <div className="flex flex-col gap-mobile-3 md:gap-4">
        <Heading level={2} color="soft">
          Ценности диалектически-экзистенциальной терапии ⚜️
        </Heading>
        <BodyText className="max-w-3xl">
          Это не техники — это то, на чём держится культура DET.
        </BodyText>
      </div>

      <div className="grid grid-cols-1 gap-mobile-4 md:grid-cols-2 md:gap-6">
        {detValues.map((value, index) => (
          <DefaultCard
            key={value.title}
            title={value.title}
            variant="dark"
            titlePrefixPlacement="top-right"
            titlePrefix={
              <Image
                alt={`Золотая цифра ${index + 1}`}
                className="h-16 w-16 md:h-14 md:w-14"
                height={64}
                src={`/images/gold_numbers/${index + 1}_number.webp`}
                width={64}
              />
            }
            titleClassName="text-left text-xl leading-snug md:text-lg md:leading-tight"
          >
            <BodyText className="text-left text-mobile-body text-accent-soft md:text-base md:leading-relaxed">
              {value.description}
            </BodyText>
          </DefaultCard>
        ))}
      </div>
    </Section>
  );
}
