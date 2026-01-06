import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services";
import { getServiceBySlug } from "@/lib/services-data";

const service = getServiceBySlug("trauma-ptsd")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function TraumaPtsdPage() {
  return <ServicePageTemplate service={service} />;
}
