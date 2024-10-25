import Hero from "@/components/Home/Hero";
import Qualities from "@/components/Home/Qualities";
import Services from "@/components/Home/Services";
import { companies } from "@/data/companies";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Services />
      <div className="w-screen border-y border-text/60 bg-background/30 p-8 backdrop-blur-[2px]">
        <h2>Ils m'ont fait confiance</h2>
        <div className="flex justify-evenly gap-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="overflow-hidden rounded-md bg-white"
            >
              <Image src={company.logo} height={50} alt={company.name} />
            </div>
          ))}
        </div>
        <Qualities />
      </div>
    </div>
  );
}
