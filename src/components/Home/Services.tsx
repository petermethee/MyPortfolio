import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="mx-auto flex max-w-screen-2xl flex-wrap items-center justify-evenly gap-10 px-6">
      {services.map((service) => (
        <ServiceCard key={service.title} {...service} />
      ))}
    </div>
  );
}
