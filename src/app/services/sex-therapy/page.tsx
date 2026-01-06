import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services";
import { getServiceBySlug } from "@/lib/services-data";

const service = getServiceBySlug("sex-therapy")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function SexTherapyPage() {
  return <ServicePageTemplate service={service} />;
}
