import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function Mission() {
  return (
    <Section id="mission" variant="dark">
      <div className="flex flex-col gap-mobile-6 md:gap-8">
        <Heading level={2} color="soft">
          Наша миссия
        </Heading>
        <p className="max-w-mobile text-mobile-lg leading-mobile-normal text-accent-soft md:max-w-2xl md:text-base md:leading-relaxed">
          Создать новую терапевтическую логику, которая объединяет глубину экзистенциальной психологии и возможности современного
          интеллекта — человеческого и искусственного. DET и DETai — это путь к осмысленным инструментам, которые помогают людям
          понимать себя и развиваться.
        </p>
      </div>
    </Section>
  );
}
