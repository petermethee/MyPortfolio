import { companies } from "@/data/companies";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
export default function Companies() {
  return (
    <>
      <div className="flex items-center gap-4">
        <h2 className="text-sm md:text-lg lg:text-2xl">
          Ils m'ont fait confiance
        </h2>
        <Button
          size="small"
          color="secondary"
          endIcon={
            <ArrowForwardIosRounded
              sx={{
                fontSize: "12px !important",
              }}
            />
          }
        >
          Projets
        </Button>
      </div>

      <div className="my-8 flex flex-wrap justify-evenly gap-4">
        {companies.map((company) => (
          <div
            key={company.name}
            className="h-16 w-32 overflow-hidden rounded-md border-[3px] border-secondary bg-white shadow-lg md:w-44"
          >
            <Image
              src={company.logo}
              alt={company.name}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </>
  );
}
