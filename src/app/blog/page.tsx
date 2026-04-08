import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import { getAllPosts } from "@/lib/blog";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata = {
  title: "Blog | Dr Branko M. Vujković",
  description:
    "Stručni tekstovi, naučni radovi i saveti iz oblasti fizikalne medicine i rehabilitacije.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <section className="py-20 bg-gradient-to-b from-primary/5 to-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-3 text-primary-light">
            Blog
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold font-[family-name:var(--font-playfair)] mb-6 text-text">
            Stručni tekstovi i saveti
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto">
            Stručni i naučni radovi, saveti za pacijente i aktuelnosti iz
            oblasti fizikalne medicine.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg mb-2">
                Blog postovi će uskoro biti dostupni.
              </p>
              <p className="text-text-muted">
                Pratite nas na društvenim mrežama za najnovije informacije.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-border hover:border-primary/20"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-primary">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-text-muted text-xs mb-3">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(post.date).toLocaleDateString("sr-RS", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <h2 className="text-lg font-bold text-text group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h2>
                    <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                      Pročitaj više
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
