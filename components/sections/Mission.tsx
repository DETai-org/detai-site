import Image from "next/image";

import BodyText from "../ui/BodyText";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function Mission() {
  return (
    <Section id="mission" variant="dark">
      <div className="flex w-full max-w-[960px] flex-col items-center gap-mobile-6 md:gap-8">
        <Heading
          level={2}
          color="soft"
          className="text-mobile-4xl font-semibold leading-mobile-tight tracking-tight md:text-5xl"
        >
          Наша миссия
        </Heading>

        <div className="group relative w-full max-w-[900px] overflow-hidden rounded-[18px] bg-basic-dark/80 px-mobile-3 py-8 md:px-0 md:py-12">
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-basic-dark px-6 text-center transition-opacity duration-500 ease-out group-hover:pointer-events-none group-hover:opacity-0 group-active:pointer-events-none group-active:opacity-0">
            <p className="text-lg font-semibold uppercase tracking-[0.08em] text-accent-soft md:text-xl">Наша миссия</p>
            <Image
              src="/assets/animations/logo.svg"
              alt="Логотип DETai"
              width={320}
              height={320}
              className="logo logo--accent-soft h-[9rem] w-[9rem] object-contain md:h-[12rem] md:w-[12rem]"
              priority={false}
            />
            <p className="text-sm uppercase tracking-[0.18em] text-accent-soft/70">click me</p>
          </div>

          <div className="relative z-10 flex items-center justify-center px-mobile-3 py-mobile-4 text-center opacity-0 transition-opacity duration-500 ease-out group-active:opacity-100 group-hover:opacity-100 md:px-8 md:py-10">
            <div className="flex w-full max-w-[820px] flex-col gap-mobile-3 md:gap-4">
              <BodyText>
                Создать новую терапевтическую логику, которая объединяет глубину экзистенциальной психологии и возможности современного
                интеллекта — человеческого и искусственного. DET и DETai — это путь к осмысленным инструментам, которые помогают людям
                понимать себя и развиваться.
              </BodyText>

              <BodyText className="md:text-xl md:leading-relaxed" variant="sectionDefaultDark">
                Мы создаём культуру, где диалектика и гуманизм соединяются с технологиями, чтобы поддерживать человека в осознанном
                движении вперёд.
              </BodyText>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
