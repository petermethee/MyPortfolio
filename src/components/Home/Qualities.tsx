import { standardFont } from "@/app/layout";
import { qualities } from "@/data/qualities";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function Qualities() {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm md:text-lg lg:text-2xl">
          Pourquoi travailler avec moi ?
        </h2>
        <Button
          size="small"
          color="secondary"
          sx={{ fontSize: "0.8rem" }}
          endIcon={
            <ArrowForwardIosRounded
              sx={{
                fontSize: "0.8rem !important",
              }}
            />
          }
        >
          Compétences
        </Button>
      </div>
      <div className="flex flex-col items-center justify-evenly gap-10 md:flex-row">
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
