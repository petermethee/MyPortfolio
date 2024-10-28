import { StaticImport } from "next/dist/shared/lib/get-img-props";
import ica from "../assets/companies_logo/ICA.png";
import amadeus from "../assets/companies_logo/amadeus.png";
import avisto from "../assets/companies_logo/avisto.webp";
import mpb from "../assets/companies_logo/mpb.jpg";
import pellenc from "../assets/companies_logo/pellenc.png";

export const companies: { name: string; logo: StaticImport }[] = [
  {
    name: "Parfumerie Mireille",
    logo: mpb,
  },
  {
    name: "Ingeneria y Controles Automatizados",
    logo: ica,
  },
  {
    name: "Avisto",
    logo: avisto,
  },
  {
    name: "PellencST",
    logo: pellenc,
  },
  {
    name: "Amadeus",
    logo: amadeus,
  },
];
