import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section id="hero" variant="dark">
      <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
        <div className="flex-1 space-y-6">
          <span className="text-2xl font-accent text-basic-gold-primary">Дизайн-система DET/DETai</span>
          <Heading level={1} color="soft">
            DET — Dialectical Existential Therapy.
            <br />
            Новый формат психотерапии
          </Heading>
          <p className="max-w-2xl text-lg leading-relaxed text-basic-gold-soft md:text-xl">
            Диалектически-экзистенциальная терапия — это культура понимания человека. DETai — это технологическая экосистема,
            включающая продукты, интерфейсы и AI-инструменты, которые воплощают культуру DET в прикладных и ежедневных формах —
            доступных как клиентам, так и психотерапевтам.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button as="a" href="#projects" variant="primary">
              Проекты DETai
            </Button>
            <Button as="a" href="#fundament-det" variant="secondary">
              Фундамент DET
            </Button>
          </div>
        </div>
        <div className="flex flex-1 justify-end">
          <div className="flex w-full max-w-md flex-col gap-3 px-6 py-8 text-basic-dark rounded-xl border border-basic-gold-primary/30 bg-basic-light shadow-md">
            <p className="text-sm uppercase tracking-[0.18em] text-basic-gold-primary">Базовые принципы</p>
            <p className="text-lg leading-relaxed text-basic-dark">
              Создаём язык и инструменты, которые соединяют глубину человеческого опыта и точность технологического исполнения.
              DET — смысловой слой, DETai — его прикладная форма.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
