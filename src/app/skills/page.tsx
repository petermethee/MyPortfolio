import Level from "@/components/shared/Level";
import Wrapper from "@/components/shared/Wrapper";
import Skills from "@/components/Skills/Skills";

export default function SkillPage() {
  return (
    <Wrapper>
      <div className="mb-14 flex flex-col items-center justify-center gap-8">
        <span className="my-8 text-center text-3xl font-bold">
          Ce que je sais faire
        </span>
        <Level demo rank={4} />
      </div>
      <Skills />
    </Wrapper>
  );
}
