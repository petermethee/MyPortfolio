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
    <div className="sticky top-0 flex h-fit w-48 flex-col gap-2 rounded-md bg-primary/50 p-2 backdrop-blur-md">
      {Object.values(EWorkspace).map((filter) => (
        <div
          key={filter}
          className={`w-full cursor-pointer rounded-sm px-2 py-1 transition-all ${standardFont.className} ${filter === workspace ? "bg-secondary text-primary_dark" : "bg-text/15 text-text/80 hover:bg-text/25"}`}
          onClick={() => setWorkspace(filter)}
        >
          {filter}
        </div>
      ))}
      <br />
      <span>Thèmes</span>
      {Object.values(ETheme).map((curTheme) => (
        <div
          key={curTheme}
          className={`w-full cursor-pointer rounded-sm px-2 py-1 transition-all ${standardFont.className} ${curTheme === theme ? "bg-secondary text-primary_dark" : "bg-text/15 text-text/80 hover:bg-text/25"}`}
          onClick={() => setTheme(curTheme)}
        >
          {curTheme}
        </div>
      ))}
    </div>
  );
}
