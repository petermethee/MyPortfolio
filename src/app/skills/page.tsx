import Career from "@/components/Skills/Career";
import Skills from "@/components/Skills/Skills";

export default function SkillPage() {
  return (
    <div className=" max-w-screen-xl mx-auto px-10 py-24">
      <div className="text-3xl font-bold text-center my-8">
        Ce que je sais faire
      </div>
      <Skills />
      <br />

      <div className="text-3xl font-bold text-center my-8">Mon parcours</div>
      <Career />
    </div>
  );
}
