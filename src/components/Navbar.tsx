import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full">
      <div>Logo</div>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
      <Link href="/pricing">Pricing</Link>
    </div>
  );
}
