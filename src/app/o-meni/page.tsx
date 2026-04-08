import Image from "next/image";
import Link from "next/link";
import {
  GraduationCap,
  Award,
  BookOpen,
  Users,
  ArrowRight,
  Phone,
  CheckCircle,
} from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";
import {
  FadeIn,
  FadeInLeft,
  FadeInRight,
  ScaleIn,
} from "@/components/AnimatedSection";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary/5 to-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-primary-light">
                O doktoru
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-text">
                MSc. dr Branko M. Vujković
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Specijalist fizikalne medicine i rehabilitacije
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                Dr Branko M. Vujković je specijalist fizikalne medicine i
                rehabilitacije sa dugogodišnjim iskustvom u dijagnostici i
                lečenju bolnih stanja lokomotornog aparata, regenerativnoj
                medicini i rehabilitaciji sportskih povreda.
              </p>
              <p className="text-text-light leading-relaxed mb-4">
                Posebno je posvećen primeni savremenih metoda u lečenju,
                uključujući šokvejv terapiju, PRP tretmane i druge inovativne
                pristupe koji donose rezultate.
              </p>
              <p className="text-text-light leading-relaxed mb-8">
                Aktivan je u edukaciji pacijenata i stručne javnosti kroz
                publikovanje stručnih tekstova, posebno u oblasti zdravlja
                kičme - poznata serija &quot;Disciplina kičme&quot; na portalu
                Zdravlje Plus. Učesnik međunarodnih kongresa poput ESPRM-a
                u Ljubljani i ISPRM-a u Lisabonu.
              </p>
            </FadeIn>

            <ScaleIn delay={0.2}>
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/dr-vujkovic-portrait.png"
                    alt="Dr Branko Vujković"
                    width={700}
                    height={800}
                    className="object-cover w-full"
                  />
                </div>
              </div>
            </ScaleIn>
          </div>
        </div>
      </section>

      {/* Kvalifikacije */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Kvalifikacije"
            title="Obrazovanje i stručnost"
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Medicinski fakultet",
                desc: "Završene studije medicine",
              },
              {
                icon: Award,
                title: "Specijalizacija",
                desc: "Fizikalna medicina i rehabilitacija",
              },
              {
                icon: BookOpen,
                title: "Master nauka (MSc)",
                desc: "Postdiplomske studije",
              },
              {
                icon: Users,
                title: "Kontinuirana edukacija",
                desc: "Stručna usavršavanja i kongresi",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <FadeIn key={title} delay={i * 0.1}>
                <div className="bg-bg rounded-2xl p-6 text-center border border-border h-full">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-bold text-text mb-2">{title}</h3>
                  <p className="text-sm text-text-muted">{desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Galerija - kongresi */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Aktivnosti"
            title="Međunarodni kongresi i edukacija"
            description="Kontinuirano stručno usavršavanje na vodećim međunarodnim kongresima fizikalne medicine."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                src: "/images/dr-vujkovic-kongres-poster.png",
                alt: "ESPRM Kongres Ljubljana 2024 - poster prezentacija",
                caption: "ESPRM Kongres, Ljubljana 2024",
              },
              {
                src: "/images/dr-vujkovic-isprm-lisabon.png",
                alt: "ISPRM Kongres Lisabon",
                caption: "ISPRM Kongres, Lisabon",
              },
              {
                src: "/images/dr-vujkovic-toxin-academy.png",
                alt: "Toxin Academy edukacija",
                caption: "Toxin Academy, Švajcarska",
              },
            ].map(({ src, alt, caption }, i) => (
              <FadeIn key={src} delay={i * 0.1}>
                <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
                  <Image
                    src={src}
                    alt={alt}
                    width={500}
                    height={400}
                    className="object-cover w-full aspect-[4/3]"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-sm font-medium text-text-light">
                      {caption}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pristup */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                tag="Pristup"
                title="Individualna briga o svakom pacijentu"
                centered={false}
              />
              <div className="space-y-4">
                {[
                  "Detaljna dijagnostika i analiza stanja",
                  "Individualni plan terapije za svakog pacijenta",
                  "Kombinacija savremenih i proverenih metoda",
                  "Kontinuirano praćenje napretka",
                  "Edukacija pacijenata o prevenciji",
                  "Saradnja sa drugim specijalistima po potrebi",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-text-light">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <FadeInRight>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/tretman-terapija.png"
                  alt="Tretman u ordinaciji"
                  width={700}
                  height={500}
                  className="object-cover w-full"
                />
              </div>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Zakažite konsultaciju
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Kontaktirajte nas i zakažite pregled. Radujemo se što ćemo vam pomoći
            na putu ka oporavku.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-light transition-colors"
            >
              <Phone className="w-5 h-5" />
              {SITE.phone}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Kontakt forma
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
