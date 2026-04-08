import { SectionHeading } from "@/components/SectionHeading";
import { ServiceCard } from "@/components/ServiceCard";
import { SERVICES, SITE } from "@/lib/constants";
import { Phone } from "lucide-react";
import { FadeIn } from "@/components/AnimatedSection";

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center">
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-primary-light">
                Naše usluge
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-text">
                Oblasti kojima se bavimo
              </h1>
              <p className="text-lg text-text-light max-w-2xl mx-auto">
                Sveobuhvatan pristup dijagnostici i lečenju uz najsavremenije
                metode fizikalne medicine i rehabilitacije.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.id} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold font-[family-name:var(--font-playfair)] mb-4">
            Potrebna vam je konsultacija?
          </h2>
          <p className="text-white/80 mb-8">
            Zakažite pregled i napravite prvi korak ka oporavku.
          </p>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-8 py-4 rounded-full font-semibold hover:bg-accent-light transition-colors"
          >
            <Phone className="w-5 h-5" />
            {SITE.phone}
          </a>
        </div>
      </section>
    </>
  );
}
