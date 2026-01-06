import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services";
import { getServiceBySlug } from "@/lib/services-data";

const service = getServiceBySlug("family-therapy")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function FamilyTherapyPage() {
  return <ServicePageTemplate service={service} />;
}
