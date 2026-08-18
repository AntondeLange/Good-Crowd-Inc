import Link from "next/link";

const links = [
  ["About", "/about"],
  ["Work With Us", "/work-with-us"],
  ["Good Reads", "/stories"],
  ["Contact", "/contact"]
] as const;

export function SiteHeader() {
  return (
    <header className="border-b border-crowd-brown/10 bg-crowd-cream">
      <div className="container-crowd flex min-h-20 items-center justify-between gap-8 py-4">
        <Link href="/" className="text-xl font-black tracking-tight" aria-label="Good Crowd Inc home">GOOD CROWD INC.</Link>
        <nav aria-label="Primary navigation" className="hidden gap-7 text-sm font-semibold md:flex">
          {links.map(([label, href]) => <Link key={href} href={href} className="hover:underline focus-visible:underline">{label}</Link>)}
        </nav>
        <Link href="/work-with-us" className="rounded-full bg-crowd-brown px-5 py-3 text-sm font-bold text-white">Work With Us</Link>
      </div>
    </header>
  );
}
