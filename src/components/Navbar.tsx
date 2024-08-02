import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();

  return (
    <div className="absolute top-0 flex h-20 w-full justify-center bg-background/50 backdrop-blur-sm z-10">
      <div className="flex w-full max-w-screen-md justify-between gap-2 items-center px-8">
        <div>Logo</div>
        <Link
          className={` hover:text-secondary/80 duration-200 ${
            pathName === "/" && "text-secondary"
          }`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={` hover:text-secondary/80 duration-200  ${
            pathName === "/projects" && "text-secondary"
          }`}
          href="/projects"
        >
          Projects
        </Link>
        <Link
          className={` hover:text-secondary/80 duration-200  ${
            pathName === "/contact" && "text-secondary"
          }`}
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className={`hover:text-secondary/80 duration-200  ${
            pathName === "/pricing" && "text-secondary"
          }`}
          href="/pricing"
        >
          Pricing
        </Link>
      </div>
    </div>
  );
}
