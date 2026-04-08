"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/constants";
import { FadeIn } from "@/components/AnimatedSection";

interface Service {
  id: string;
  title: string;
  emoji: string;
  shortTitle: string;
  description: string;
  image: string;
  details: string[];
}

export function ServiceDetailClient({
  service,
  otherServices,
}: {
  service: Service;
  otherServices: Service[];
}) {
  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 to-primary/80" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-5xl mb-4 block">{service.emoji}</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white font-[family-name:var(--font-playfair)] mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-white/80 leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] mb-8 text-text">
                Sta obuhvata ova usluga?
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {service.details.map((detail, i) => (
                  <FadeIn key={detail} delay={i * 0.05}>
                    <div className="flex items-start gap-3 bg-white p-4 rounded-xl border border-border h-full">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                      <span className="text-text-light text-sm">{detail}</span>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <div className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/10">
                <h3 className="text-xl font-bold text-text mb-3">
                  Zakazite pregled
                </h3>
                <p className="text-text-light mb-6">
                  Kontaktirajte nas za vise informacija ili zakazivanje termina.
                  Individualni pristup i plan terapije prilagodjen vasim
                  potrebama.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    {SITE.phone}
                  </a>
                  <Link
                    href="/kontakt"
                    className="inline-flex items-center justify-center gap-2 border border-primary text-primary px-6 py-3 rounded-full font-semibold hover:bg-primary/5 transition-colors"
                  >
                    Kontakt forma
                  </Link>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="sticky top-28">
                <h3 className="text-lg font-bold text-text mb-4">
                  Ostale usluge
                </h3>
                <div className="space-y-3">
                  {otherServices.map((s) => (
                    <Link
                      key={s.id}
                      href={`/usluge/${s.id}`}
                      className="flex items-center gap-3 bg-white p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                    >
                      <span className="text-2xl">{s.emoji}</span>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-text group-hover:text-primary transition-colors">
                          {s.shortTitle}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-text-muted group-hover:text-primary transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
