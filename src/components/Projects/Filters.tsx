import { standardFont } from "@/app/layout";
import { ETheme, EWorkspace } from "@/models/EThemes";

export default function Filters({
  theme,
  workspace,
  setTheme,
  setWorkspace,
}: {
  workspace: EWorkspace;
  theme: ETheme;
  setTheme: (theme: ETheme) => void;
  setWorkspace: (workspace: EWorkspace) => void;
}) {
  return (
    <div
      className="sticky top-0 flex h-fit w-48 flex-col gap-2 rounded-md bg-background p-2"
      style={{
        boxShadow: "0px 0px 36px -20px var(--primary)",
      }}
    >
      {Object.values(EWorkspace).map((filter) => (
        <div
          key={filter}
          className={`w-full cursor-pointer rounded-sm px-2 py-1 transition-all ${standardFont.className} ${filter === workspace ? "bg-primary text-secondary" : "bg-primary_dark hover:bg-text/25"}`}
          onClick={() => setWorkspace(filter)}
        >
          {filter}
        </div>
      ))}
      <br />
      <span className="font-bold uppercase text-text/50">Thèmes</span>
      {Object.values(ETheme).map((curTheme) => (
        <div
          key={curTheme}
          className={`w-full cursor-pointer rounded-sm px-2 py-1 transition-all ${standardFont.className} ${curTheme === theme ? "bg-primary text-secondary" : "bg-primary_dark hover:bg-text/25"}`}
          onClick={() => setTheme(curTheme)}
        >
          {curTheme}
        </div>
      ))}
    </div>
  );
}
