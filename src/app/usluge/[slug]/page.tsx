import { notFound } from "next/navigation";
import { SERVICES, SITE } from "@/lib/constants";
import { ServiceDetailClient } from "./ServiceDetailClient";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // We need to handle this synchronously for metadata
  // Next.js will await the params promise
  return params.then(({ slug }) => {
    const service = SERVICES.find((s) => s.id === slug);
    if (!service) return {};
    return {
      title: `${service.title} | ${SITE.name}`,
      description: service.description,
    };
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) notFound();

  const otherServices = SERVICES.filter((s) => s.id !== slug);

  return <ServiceDetailClient service={service} otherServices={otherServices} />;
}
