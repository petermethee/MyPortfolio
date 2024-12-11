import Level from "@/components/shared/Level";
import PageWrapper from "@/components/shared/PageWrapper";
import Skills from "@/components/Skills/Skills";

export default function SkillPage() {
  return (
    <PageWrapper>
      <div className="mb-20 flex flex-col items-center justify-center gap-8">
        <h1 className="my-8 text-center">Ce que je sais faire</h1>
        <Level demo rank={4} />
      </div>
      <Skills />
    </PageWrapper>
  );
}
