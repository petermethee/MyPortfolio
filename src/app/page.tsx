import Companies from "@/components/Home/Companies";
import Hero from "@/components/Home/Hero";
import Qualities from "@/components/Home/Qualities";
import Services from "@/components/Home/Services";
export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      <Hero />
      <Services />
      <div className="w-screen border-y border-text/60 bg-background/30 backdrop-blur-[2px]">
        <div className="mx-auto max-w-screen-xl p-8">
          <Companies />
          <Qualities />
        </div>
      </div>
    </div>
  );
}
