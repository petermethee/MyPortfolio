import { standardFont } from "@/app/layout";
import { qualities } from "@/data/qualities";

export default function Qualities() {
  return (
    <div className="my-16 w-screen border-y border-text/60 bg-background/30 p-8 backdrop-blur-[2px]">
      <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-evenly gap-10 md:flex-row">
        {qualities.map((quality) => (
          <div
            key={quality.title}
            className="flex max-w-sm flex-col items-center gap-4"
          >
            <div
              className={`rounded-full p-4`}
              style={{ backgroundColor: quality.color }}
            >
              {quality.icon}
            </div>
            <span className="uppercase text-secondary">{quality.title}</span>
            <span
              className="text-center text-sm"
              style={{ fontFamily: standardFont.style.fontFamily }}
            >
              {quality.description}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
