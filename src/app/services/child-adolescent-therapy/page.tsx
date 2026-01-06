import { Metadata } from "next";
import { ServicePageTemplate } from "@/components/services";
import { getServiceBySlug } from "@/lib/services-data";

const service = getServiceBySlug("child-adolescent-therapy")!;

export const metadata: Metadata = {
  title: service.metaTitle,
  description: service.metaDescription,
};

export default function ChildAdolescentTherapyPage() {
  return <ServicePageTemplate service={service} />;
}
