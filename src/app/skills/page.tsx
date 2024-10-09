import Wrapper from "@/components/shared/Wrapper";
import Career from "@/components/Skills/Career";
import Skills from "@/components/Skills/Skills";

export default function SkillPage() {
  return (
    <Wrapper>
      <div className="my-8 text-center text-3xl font-bold">
        Ce que je sais faire
      </div>
      <Skills />
      <br />

      <div className="my-8 text-center text-3xl font-bold">Mon parcours</div>
      <Career />
    </Wrapper>
  );
}
