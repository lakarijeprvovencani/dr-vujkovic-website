import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import { getAllPosts, getPostBySlug } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Blog | Dr Branko M. Vujkovic`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0">
          <Image src={post.image} alt={post.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/95 via-primary-dark/70 to-primary-dark/40" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Nazad na blog
          </Link>
          <span className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-white mb-4">
            <Tag className="w-3 h-3" />
            {post.category}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-[family-name:var(--font-playfair)] mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-white/70 text-sm">
            <Calendar className="w-4 h-4" />
            {new Date(post.date).toLocaleDateString("sr-RS", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg prose-slate max-w-none [&>p]:text-text-light [&>p]:leading-relaxed [&>h2]:text-text [&>h2]:font-[family-name:var(--font-playfair)] [&>h3]:text-text [&>ul]:text-text-light [&>ol]:text-text-light">
            {post.content.split("\n").map((paragraph, i) => {
              if (!paragraph.trim()) return null;
              if (paragraph.startsWith("## "))
                return (
                  <h2 key={i} className="text-2xl font-bold mt-10 mb-4">
                    {paragraph.replace("## ", "")}
                  </h2>
                );
              if (paragraph.startsWith("### "))
                return (
                  <h3 key={i} className="text-xl font-bold mt-8 mb-3">
                    {paragraph.replace("### ", "")}
                  </h3>
                );
              return (
                <p key={i} className="mb-4">
                  {paragraph}
                </p>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
}
