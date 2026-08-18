import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-crowd-brown py-14 text-white">
      <div className="container-crowd grid gap-10 md:grid-cols-2">
        <div><p className="text-2xl font-black">GOOD CROWD INC.</p><p className="mt-3 max-w-md text-white/75">People. Place. Prosperity. All interconnected. All worth celebrating.</p></div>
        <div className="md:text-right"><Link href="/contact" className="font-bold underline">Get in touch</Link></div>
      </div>
      <div className="container-crowd mt-12 border-t border-white/20 pt-8 text-sm leading-6 text-white/70">Good Crowd Inc. acknowledges the Traditional Custodians of the many Countries on which we gather. We pay our respects to Elders past, present and emerging, and honour the enduring connection of Aboriginal and Torres Strait Islander peoples to land, water and community.</div>
    </footer>
  );
}
