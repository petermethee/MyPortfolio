import Link from "next/link";

export default function Navbar() {
  return (
    <div className="sticky top-0 flex h-20 w-full justify-center bg-background/50 backdrop-blur-sm border-b-2 border-accent">
      <div className="flex w-full max-w-screen-md justify-between gap-2 items-center">
        <div>Logo</div>
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/pricing">Pricing</Link>
      </div>
    </div>
  );
}
