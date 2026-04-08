import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  ArrowRight,
  Shield,
  Heart,
  Award,
  Clock,
  Star,
  CheckCircle,
} from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  HeroFadeIn,
  HeroScaleIn,
  FadeInLeft,
  FadeInRight,
} from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 to-primary/70" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <HeroFadeIn>
              <span className="inline-block bg-accent/20 text-accent-light px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                Specijalist fizikalne medicine i rehabilitacije
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight font-[family-name:var(--font-playfair)] mb-6">
                Vase zdravlje je{" "}
                <span className="text-accent-light">nas prioritet</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                MSc. dr Branko M. Vujkovic - vise od decenije iskustva u
                dijagnostici i terapiji bolnih stanja, regenerativnoj medicini i
                rehabilitaciji sportskih povreda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-accent-light transition-colors shadow-lg shadow-accent/30"
                >
                  <Phone className="w-5 h-5" />
                  Zakazite pregled
                </a>
                <Link
                  href="/usluge"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
                >
                  Nase usluge
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </HeroFadeIn>

            <HeroScaleIn className="hidden lg:block">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/30 to-primary-light/30 transform rotate-3" />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/dr-vujkovic-portrait.png"
                    alt="Dr Branko Vujkovic"
                    width={600}
                    height={750}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                {/* Floating card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-text">10+ godina</p>
                      <p className="text-xs text-text-muted">iskustva</p>
                    </div>
                  </div>
                </div>
              </div>
            </HeroScaleIn>
          </div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-8 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Shield, label: "Licencirani specijalist" },
              { icon: Heart, label: "Individualni pristup" },
              { icon: Clock, label: "Savremene metode" },
              { icon: Star, label: "Zadovoljni pacijenti" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center justify-center gap-3 text-text-light"
              >
                <Icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Usluge"
            title="Oblasti kojima se bavimo"
            description="Sveobuhvatan pristup dijagnostici i lecenju uz najsavremenije metode fizikalne medicine i rehabilitacije."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeInLeft>
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/dr-vujkovic-ordinacija.png"
                    alt="Dr Vujkovic u ordinaciji"
                    width={700}
                    height={500}
                    className="object-cover w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
                  <p className="text-3xl font-bold">MSc.</p>
                  <p className="text-sm text-white/80">Master nauka</p>
                </div>
              </div>
            </FadeInLeft>

            <FadeInRight>
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-primary-light">
                O doktoru
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-text">
                MSc. dr Branko M. Vujkovic
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                Specijalista fizikalne medicine i rehabilitacije sa bogatim
                iskustvom u dijagnostici i lecenju bolnih stanja
                lokomotornog aparata. Posvecen primeni najsavremenijih
                metoda u fizikalnoj medicini.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                Autor strucnih tekstova u oblasti zdravlja kicme i
                rehabilitacije. Aktivan u edukaciji pacijenata kroz
                publikacije i drustvene mreze.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Specijalist fizikalne medicine i rehabilitacije",
                  "Master medicinskih nauka (MSc)",
                  "Autor strucnih publikacija",
                  "Savremene dijagnosticke i terapijske metode",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-text-light"
                  >
                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/o-meni"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Saznajte vise o doktoru
                <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            tag="Zakazite pregled"
            title="Napravite prvi korak ka oporavku"
            description="Javite se i zakazite pregled. Individualni pristup svakom pacijentu i plan terapije prilagodjen vasim potrebama."
            light
          />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-accent-light transition-colors shadow-lg"
            >
              <Phone className="w-5 h-5" />
              {SITE.phone}
            </a>
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-colors border border-white/20"
            >
              Posaljite poruku
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
