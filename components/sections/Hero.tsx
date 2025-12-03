import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section id="hero" variant="dark">
      <div className="flex flex-col gap-mobile-6 md:gap-10">
        <div className="flex-1 space-y-mobile-4 md:space-y-6">
          <Heading level={1} color="soft">
            DET — Dialectical Existential Therapy.
            <br />
            Новый формат психотерапии
          </Heading>
          <p className="max-w-mobile text-mobile-lg leading-mobile-normal text-accent-soft md:max-w-2xl md:text-base md:leading-relaxed">
            Диалектически-экзистенциальная терапия — это культура понимания человека. DETai — это технологическая экосистема,
            включающая продукты, интерфейсы и AI-инструменты, которые воплощают культуру DET в прикладных и ежедневных формах —
            доступных как клиентам, так и психотерапевтам.
          </p>
          <div className="flex flex-wrap items-center gap-mobile-4 md:gap-6">
            <Button as="a" href="#fundament-det" variant="primary">
              Фундамент DET
            </Button>
            <Button as="a" href="#mission" variant="secondary">
              Миссия и ценности
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
