import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { InstagramIcon, FacebookIcon } from "@/components/SocialIcons";
import { SITE } from "@/lib/constants";
import { FadeIn } from "@/components/AnimatedSection";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-primary-light">
              Kontakt
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-text">
              Javite nam se
            </h1>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Zakazite pregled ili postavite pitanje. Tu smo da vam pomognemo.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-text">
                Kontakt informacije
              </h2>

              <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-border">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-0.5">Telefon</p>
                  <a
                    href={`tel:${SITE.phone.replace(/\s/g, "")}`}
                    className="font-medium text-text hover:text-primary transition-colors"
                  >
                    {SITE.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-border">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-0.5">Email</p>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-medium text-text hover:text-primary transition-colors"
                  >
                    {SITE.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-border">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-0.5">Lokacija</p>
                  <p className="font-medium text-text">{SITE.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white p-5 rounded-xl border border-border">
                <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text-muted mb-0.5">Radno vreme</p>
                  <p className="font-medium text-text">Po dogovoru</p>
                </div>
              </div>

              {/* Social */}
              <div className="pt-4">
                <p className="text-sm text-text-muted mb-3">Pratite nas:</p>
                <div className="flex gap-3">
                  <a
                    href={SITE.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <InstagramIcon className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={SITE.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  >
                    <FacebookIcon className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
                <h2 className="text-2xl font-bold font-[family-name:var(--font-playfair)] text-text mb-6">
                  Posaljite poruku
                </h2>
                <form
                  action="https://formspree.io/f/placeholder"
                  method="POST"
                  className="space-y-5"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">
                        Ime i prezime
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="Vase ime"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-text mb-1.5">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="Vas broj telefona"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="vas@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text mb-1.5">
                      Poruka
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                      placeholder="Opisite vase tegobe ili postavite pitanje..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-primary-dark transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    Posaljite poruku
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
