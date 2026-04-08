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
  MessageCircleQuestion,
  ClipboardList,
  Stethoscope,
  Activity,
  Users,
  CalendarCheck,
  ThumbsUp,
} from "lucide-react";
import { SITE, SERVICES } from "@/lib/constants";
import { ServiceCard } from "@/components/ServiceCard";
import { SectionHeading } from "@/components/SectionHeading";
import {
  HeroFadeIn,
  HeroScaleIn,
  FadeInLeft,
  FadeInRight,
  FadeIn,
  ScaleIn,
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
                Vaše zdravlje je{" "}
                <span className="text-accent-light">naš prioritet</span>
              </h1>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-lg">
                MSc. dr Branko M. Vujković - više od decenije iskustva u
                dijagnostici i terapiji bolnih stanja, regenerativnoj medicini i
                rehabilitaciji sportskih povreda.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-accent-light transition-colors shadow-lg shadow-accent/30"
                >
                  <Phone className="w-5 h-5" />
                  Zakažite pregled
                </a>
                <Link
                  href="/usluge"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
                >
                  Naše usluge
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
                    alt="Dr Branko Vujković"
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
      <section className="py-12 bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Shield, label: "Licencirani specijalist", desc: "Verifikovan stručnjak" },
              { icon: Heart, label: "Individualni pristup", desc: "Prilagođena terapija" },
              { icon: Clock, label: "Savremene metode", desc: "Najnovija tehnologija" },
              { icon: Star, label: "Zadovoljni pacijenti", desc: "Dokazani rezultati" },
            ].map(({ icon: Icon, label, desc }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-background rounded-xl p-4 border border-border/50"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text">{label}</p>
                  <p className="text-xs text-text-muted">{desc}</p>
                </div>
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
            description="Sveobuhvatan pristup dijagnostici i lečenju uz najsavremenije metode fizikalne medicine i rehabilitacije."
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
                    alt="Dr Vujković u ordinaciji"
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
                MSc. dr Branko M. Vujković
              </h2>
              <p className="text-text-light leading-relaxed mb-4">
                Specijalist fizikalne medicine i rehabilitacije sa bogatim
                iskustvom u dijagnostici i lečenju bolnih stanja
                lokomotornog aparata. Posvećen primeni najsavremenijih
                metoda u fizikalnoj medicini.
              </p>
              <p className="text-text-light leading-relaxed mb-6">
                Autor stručnih tekstova u oblasti zdravlja kičme i
                rehabilitacije. Aktivan u edukaciji pacijenata kroz
                publikacije i društvene mreže.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Specijalist fizikalne medicine i rehabilitacije",
                  "Master medicinskih nauka (MSc)",
                  "Autor stručnih publikacija",
                  "Savremene dijagnostičke i terapijske metode",
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
                Saznajte više o doktoru
                <ArrowRight className="w-5 h-5" />
              </Link>
            </FadeInRight>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Kako funkcioniše"
            title="Vaš put do oporavka"
            description="Jednostavan proces od prvog kontakta do potpunog oporavka, uz stručno vođstvo na svakom koraku."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                step: "01",
                title: "Zakažite pregled",
                desc: "Pozovite nas ili pošaljite poruku kako biste zakazali termin koji vam odgovara.",
              },
              {
                icon: ClipboardList,
                step: "02",
                title: "Detaljna dijagnostika",
                desc: "Temeljni pregled i dijagnostika kako bi se utvrdio tačan uzrok tegoba.",
              },
              {
                icon: Stethoscope,
                step: "03",
                title: "Plan terapije",
                desc: "Individualni plan lečenja prilagođen vašim potrebama i ciljevima oporavka.",
              },
              {
                icon: ThumbsUp,
                step: "04",
                title: "Oporavak",
                desc: "Praćenje napretka i prilagođavanje terapije za optimalne rezultate.",
              },
            ].map(({ icon: Icon, step, title, desc }, i) => (
              <FadeIn key={step} delay={i * 0.1}>
                <div className="relative text-center group">
                  {i < 3 && (
                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] border-t-2 border-dashed border-border" />
                  )}
                  <div className="relative inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/5 mb-6 group-hover:bg-primary/10 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                    <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-white text-xs font-bold flex items-center justify-center">
                      {step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-text mb-2">{title}</h3>
                  <p className="text-sm text-text-light leading-relaxed">
                    {desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-br from-primary-dark to-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Godina iskustva", icon: Award },
              { number: "5000+", label: "Pregledanih pacijenata", icon: Users },
              { number: "4", label: "Oblasti specijalizacije", icon: Activity },
              {
                number: "98%",
                label: "Zadovoljnih pacijenata",
                icon: ThumbsUp,
              },
            ].map(({ number, label, icon: Icon }, i) => (
              <ScaleIn key={label} delay={i * 0.1}>
                <div className="text-center">
                  <Icon className="w-8 h-8 text-accent-light mx-auto mb-3" />
                  <p className="text-3xl sm:text-4xl font-bold text-white mb-1">
                    {number}
                  </p>
                  <p className="text-sm text-white/70">{label}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            tag="Česta pitanja"
            title="Imate pitanje?"
            description="Odgovori na najčešća pitanja naših pacijenata."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "Da li je potrebna uputnica za pregled?",
                a: "Za privatni pregled nije potrebna uputnica. Dovoljno je da zakažete termin pozivom ili putem kontakt forme na sajtu.",
              },
              {
                q: "Koliko traje prvi pregled?",
                a: "Prvi pregled traje oko 30-45 minuta i uključuje detaljnu anamnezu, fizički pregled i postavljanje dijagnoze sa planom terapije.",
              },
              {
                q: "Da li šokvejv terapija boli?",
                a: "Šokvejv terapija može biti blago neugodna tokom tretmana, ali je generalno dobro podnošljiva. Intenzitet se prilagođava toleranciji svakog pacijenta.",
              },
              {
                q: "Koliko tretmana je potrebno za oporavak?",
                a: "Broj tretmana zavisi od dijagnoze i individualnog odgovora na terapiju. Obično je potrebno 3-6 tretmana, a plan se prilagođava na osnovu napretka.",
              },
              {
                q: "Da li pokrivate sportske povrede svih nivoa?",
                a: "Da, leče se sportske povrede kod rekreativaca i profesionalnih sportista. Plan rehabilitacije se prilagođava vrsti sporta i ciljevima pacijenta.",
              },
            ].map(({ q, a }, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <details className="group bg-background rounded-2xl border border-border overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                    <div className="flex items-center gap-3">
                      <MessageCircleQuestion className="w-5 h-5 text-primary shrink-0" />
                      <span className="font-semibold text-text text-left">
                        {q}
                      </span>
                    </div>
                    <span className="text-primary shrink-0 transition-transform group-open:rotate-45 text-xl font-light">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-6 pt-0 text-text-light leading-relaxed text-sm ml-8">
                    {a}
                  </div>
                </details>
              </FadeIn>
            ))}
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
            tag="Zakažite pregled"
            title="Napravite prvi korak ka oporavku"
            description="Javite se i zakažite pregled. Individualni pristup svakom pacijentu i plan terapije prilagođen vašim potrebama."
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
              Pošaljite poruku
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
