import Button from "../ui/Button";
import Heading from "../ui/Heading";
import Section from "../ui/Section";

export default function DetDetaiSplit() {
  return (
    <Section containerClassName="text-center">
      <div className="flex flex-col items-center gap-mobile-4 md:gap-6">
        <Heading level={2} color="basic">
          Выберите направление
        </Heading>
        <div className="flex w-full flex-col gap-mobile-4 md:flex-row md:items-center md:justify-center md:gap-6">
          <Button as="a" href="/det" variant="secondary" className="w-full md:w-auto">
            Перейти к DET
          </Button>
          <Button as="a" href="/detai" variant="primary" className="w-full md:w-auto">
            Перейти к DETai
          </Button>
        </div>
      </div>
    </Section>
  );
}
