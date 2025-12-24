import Button from "../ui/Button";
import HeroHeadingTitle from "../ui/HeroHeadingTitle";
import Section from "../ui/Section";
import HeroScene from "./HeroScene";
import Heading from "../ui/Heading";

export default function DetaiHero() {
  return (
    <Section
      id="detai-hero"
      variant="dark"
      className="relative min-h-screen overflow-hidden bg-[color:rgb(var(--hero-bg))] bg-no-repeat [background-image:var(--hero-glow)]"
      containerClassName="relative flex min-h-screen flex-col justify-center gap-8 md:gap-12"
      fullWidth
    >
      <div className="relative z-20 w-full max-w-[48rem] md:max-w-[52rem]">
        <HeroHeadingTitle className="text-[color:rgb(var(--hero-text))]">
          <span className="block">DETai</span>
          <span className="block whitespace-nowrap">Диалектически-экзистенциальная терапия,</span>
          <span className="block">обогащённая AI</span>
        </HeroHeadingTitle>
        <Heading
          level={2}
          className="mt-4 text-lg font-sans font-normal leading-snug text-[color:var(--hero-subtitle)] md:text-xl lg:text-2xl"
        >
          DETai — платформа AI-инструментов, которая воплощает культуру DET в прикладных формах.
        </Heading>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[minmax(30rem,1.05fr)_minmax(24rem,0.95fr)] md:items-start md:gap-10 lg:grid-cols-[minmax(36rem,1fr)_minmax(28rem,1fr)] lg:gap-14">
        <div className="order-2 flex w-full max-w-[48rem] flex-col gap-6 md:order-1 md:max-w-none">
          <div className="mt-mobile-2 flex w-full flex-col items-center gap-4 md:mt-0 md:w-auto md:flex-row md:items-center md:justify-start md:gap-4 lg:gap-6">
            <Button as="a" href="/detai/projects" variant="primary">
              Проекты DETai
            </Button>
            <Button as="a" href="/det" variant="secondary">
              DET как культура
            </Button>
          </div>
        </div>

        <HeroScene
          className="order-1 flex-shrink-0 overflow-hidden min-h-[22rem] md:order-2 md:min-h-[30rem] md:ml-12 lg:ml-16 xl:ml-20"
          logoSize="32rem"
        />
      </div>
    </Section>
  );
}
