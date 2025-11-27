export default function Hero() {
  return (
    <section id="hero" className="w-full bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 py-16 md:flex-row md:items-center md:gap-10 md:py-24">
        <div className="flex-1">
          <h1 className="text-4xl font-semibold leading-tight tracking-tight text-gray-900 md:text-5xl">
            DET — Dialectical Existential Therapy.
            <br />
            Диалектически-экзистенциальная терапия как культура понимания человека.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-700 md:text-xl">
            DETai — технологическая экосистема, включающая продукты, интерфейсы и AI-инструменты, которые воплощают культуру DET в прикладных и ежедневных формах — доступных как клиентам, так и психотерапевтам.
          </p>
        </div>
      </div>
    </section>
  );
}
