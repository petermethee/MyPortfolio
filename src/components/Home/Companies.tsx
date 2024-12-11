import { companies } from "@/data/companies";
import { ArrowForwardIosRounded } from "@mui/icons-material";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
export default function Companies() {
  return (
    <>
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-sm md:text-lg lg:text-2xl">
          Ils m'ont fait confiance
        </h2>
        <Link href="/projects">
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
            Projets
          </Button>
        </Link>
      </div>

      <div className="my-8 flex flex-wrap justify-evenly gap-4">
        {companies.map((company) => (
          <div
            key={company.name}
            className="h-16 w-32 overflow-hidden rounded-md border-[3px] border-secondary bg-white shadow-lg md:w-44"
          >
            <Image
              loading="lazy"
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
