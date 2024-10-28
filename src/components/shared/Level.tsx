import { Levels } from "@/helper/Level";
import { Tooltip } from "@mui/material";
import clsx from "clsx";

export default function Level({
  rank,
  demo,
}: {
  rank: number;
  demo?: boolean;
}) {
  return (
    <Tooltip
      title={Levels.find((level) => level.rank === rank)?.description}
      arrow
      open={demo ? false : undefined}
    >
      <div
        className={clsx({
          "childTranslateZ flex rounded-3xl bg-primary": true,
          "gap-1 px-2 py-1": !demo,
          "gap-4 px-4 py-2": demo,
        })}
      >
        {Levels.map((level) => (
          <Tooltip
            key={level.rank}
            title={level.description}
            arrow
            open={demo}
            placement={level.rank % 2 === 0 ? "top" : "bottom"}
            disableHoverListener={!demo}
            disableFocusListener={!demo}
            disableTouchListener={!demo}
          >
            <div
              className={clsx({
                "rounded-full border-[1px] border-secondary/40": true,
                "bg-secondary": level.rank <= rank,
                "h-6 w-6": demo,
                "h-4 w-4": !demo,
              })}
              key={level.rank}
            />
          </Tooltip>
        ))}
      </div>
    </Tooltip>
  );
}
