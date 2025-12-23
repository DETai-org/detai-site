import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ExpandableAbstract from "@/components/sections/publications/ExpandableAbstract";
import PublicationShare from "@/components/sections/publications/PublicationShare";
import Button from "@/components/ui/Button";
import Heading from "@/components/ui/Heading";
import Section from "@/components/ui/Section";
import {
  buildPublicationDescription,
  getAllPublications,
  getPublicationBySlug,
  getPublicationTypeLabel,
} from "@/lib/publications/publications.utils";
import { PublicationPdfLanguage } from "@/lib/publications/types";

const publicationPageContainerClassName = "flex flex-col gap-8 md:gap-10";
const actionLinkBaseClasses =
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors duration-200 md:text-base";
const pdfLinkClasses = `${actionLinkBaseClasses} bg-gradient-to-br from-[#B68E3C] to-[#F2D389] text-basic-dark shadow-[0_0_15px_rgba(201,168,106,0.25)] hover:brightness-105 active:brightness-95`;
const externalLinkClasses = `${actionLinkBaseClasses} border-2 border-accent-primary text-accent-primary hover:bg-accent-soft/20 hover:text-accent-hover`;

const publicationTypeTitle = "det-publication-page";

type PublicationPageProps = { params: { slug: string } };

function buildTitle(title: string, author: string, year: number) {
  return `${title} — ${author}, ${year} | DETai`;
}

export function generateMetadata({ params }: PublicationPageProps): Metadata {
  const publication = getPublicationBySlug(params.slug);

  if (!publication) {
    return {
      title: "Публикация не найдена | DETai",
      description: "Материал не найден.",
    };
  }

  return {
    title: buildTitle(publication.title, publication.authors[0], publication.year),
    description: buildPublicationDescription(publication),
  };
}

export default function PublicationPage({ params }: PublicationPageProps) {
  const publication = getPublicationBySlug(params.slug);

  if (!publication) notFound();

  return (
    <div className="flex min-h-screen flex-col bg-basic-light text-basic-dark">
      <Header />
      <main className="flex flex-1 flex-col">
        <Section
          id={publicationTypeTitle}
          variant="light"
          className="bg-basic-light"
          containerClassName={publicationPageContainerClassName}
        >
          <article className="flex flex-col gap-5 md:gap-7">
            <Heading level={1} color="basic">
              {publication.title}
            </Heading>

            <div className="flex flex-col gap-1 text-mobile-small text-basic-dark/80 md:text-base">
              <div className="flex flex-wrap items-center gap-2 font-semibold">
                <span>{publication.authors.join(", ")}</span>
                <span>· {publication.year}</span>
                <span>· {getPublicationTypeLabel(publication.type)}</span>
                {publication.journal ? <span>· {publication.journal}</span> : null}
              </div>
            </div>

            {publication.seoLead ? (
              <p className="max-w-4xl text-base font-medium text-basic-dark md:text-lg">
                {publication.seoLead}
              </p>
            ) : null}

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                {getSortedPdfs(publication.pdfs).map((pdf) => (
                  <Link
                    key={`${publication.slug}-${pdf.lang}`}
                    href={pdf.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pdfLinkClasses}
                  >
                    Открыть PDF ({pdf.lang})
                  </Link>
                ))}

                {publication.externalLinks?.map((link) => (
                  <Link
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={externalLinkClasses}
                  >
                    Открыть в {link.label}
                  </Link>
                ))}
              </div>

              {publication.doi ? (
                <div className="flex flex-col gap-1 text-mobile-small text-basic-dark/70 md:text-base">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-basic-dark">DOI:</span>
                    <Link
                      href={`https://doi.org/${publication.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline decoration-basic-dark/30 underline-offset-[6px] transition-colors duration-200 hover:text-accent-hover hover:decoration-accent-primary/60"
                      title="DOI может вести на страницу регистрации и не всегда открывает статью"
                    >
                      {publication.doi}
                    </Link>
                  </div>
                  <span className="text-xs italic text-basic-dark/60">
                    DOI может вести на страницу регистрации и не всегда открывает статью
                  </span>
                </div>
              ) : null}

              <PublicationShare />
            </div>

            <div className="paper--object paper--object-mobile flex flex-col gap-5 rounded-2xl p-mobile-3 shadow-sm md:gap-6 md:p-6">
              <section className="flex flex-col gap-3">
                <h2 className="text-lg font-semibold text-basic-dark md:text-xl">Аннотация</h2>
                <ExpandableAbstract text={publication.abstract} className="max-w-4xl" />
              </section>

              {publication.keywords?.length ? (
                <section className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-basic-dark md:text-lg">Ключевые слова</h3>
                  <p className="text-mobile-small text-basic-dark/80 md:text-base">
                    {publication.keywords.join(", ")}
                  </p>
                </section>
              ) : null}

              {publication.citation ? (
                <section className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-basic-dark md:text-lg">Как цитировать</h3>
                  <div className="flex flex-col gap-1 text-mobile-small text-basic-dark/80 md:text-base">
                    {publication.citation.apa ? <p>APA: {publication.citation.apa}</p> : null}
                    {publication.citation.gost ? <p>ГОСТ: {publication.citation.gost}</p> : null}
                  </div>
                </section>
              ) : null}
            </div>

            <div className="flex flex-col gap-4 border-t border-basic-dark/10 pt-4 md:gap-5 md:pt-6">
              <Link
                href="/det/publications"
                className="text-base font-semibold text-accent-primary underline decoration-accent-primary/50 underline-offset-[6px] transition-colors duration-200 hover:text-accent-hover"
              >
                ← Все публикации
              </Link>

              <div className="flex flex-col gap-3 rounded-2xl border border-basic-dark/10 bg-basic-light p-mobile-3 text-basic-dark shadow-sm md:gap-4 md:p-6">
                <p className="text-mobile-small md:text-base">
                  DETai — экосистема инструментов и проектов, использующая научные данные в рамках Культуры DET.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/det" className="w-fit" passHref legacyBehavior>
                    <Button as="a" variant="secondary" className="px-5 py-2 text-sm md:text-base">
                      О концепции DET
                    </Button>
                  </Link>
                  <Link href="/detai" className="w-fit" passHref legacyBehavior>
                    <Button as="a" variant="primary" className="px-5 py-2 text-sm md:text-base">
                      Проекты DETai
                    </Button>
                  </Link>
                </div>
                <p className="text-xs text-basic-dark/70 md:text-mobile-small">
                  Данная публикация относится к исследовательскому полю, тематически связанному с экзистенциально-диалектической психотерапией (DET).
                </p>
              </div>
            </div>
          </article>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export function generateStaticParams() {
  return getAllPublications().map((publication) => ({
    slug: publication.slug,
  }));
}

function getSortedPdfs(pdfs: { lang: PublicationPdfLanguage; url: string }[]) {
  return [...pdfs].sort((a, b) => {
    if (a.lang === b.lang) return 0;
    return a.lang === "RU" ? -1 : 1;
  });
}
