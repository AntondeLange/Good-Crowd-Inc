import Link from "next/link";

const pillars = [
  ["People", "We create moments that bring communities together — building connection, pride and a genuine sense of belonging."],
  ["Place", "We celebrate what makes each region extraordinary — putting regional areas on the map for visitors and locals alike."],
  ["Prosperity", "We design events that flow economic energy into local businesses, producers and makers."]
];

export default function HomePage() {
  return <>
    <section className="bg-crowd-brown py-24 text-white md:py-36"><div className="container-crowd"><p className="mb-6 text-sm font-bold uppercase tracking-[.18em] text-crowd-peach">Good things happen here.</p><h1 className="display max-w-5xl text-5xl sm:text-6xl md:text-8xl">You haven’t discovered some of Australia’s best kept secrets yet. <span className="text-crowd-peach">We’re here to fix that.</span></h1><p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">Good Crowd Inc. is a not-for-profit that brings regional communities together through high-quality events that build belonging, attract visitors and grow local economies.</p><div className="mt-10 flex flex-wrap gap-4"><Link className="rounded-full bg-crowd-peach px-6 py-3 font-bold text-crowd-brown" href="/work-with-us">Work With Us →</Link><Link className="rounded-full border border-white/40 px-6 py-3 font-bold" href="/about">Our Story</Link></div></div></section>
    <section className="py-20"><div className="container-crowd"><div className="grid gap-5 md:grid-cols-3">{pillars.map(([title, copy], i) => <article key={title} className={`rounded-crowd p-8 md:min-h-72 ${i === 1 ? "bg-crowd-peach" : "bg-white"}`}><p className="text-sm font-bold uppercase tracking-widest">0{i+1}</p><h2 className="mt-16 text-4xl font-black tracking-tight">{title}</h2><p className="mt-4 leading-7 text-crowd-brown/75">{copy}</p></article>)}</div></div></section>
    <section className="bg-crowd-brown py-24 text-crowd-peach"><div className="container-crowd"><blockquote className="display max-w-5xl text-4xl md:text-6xl">“To gather good crowds in regional Australia — connecting neighbouring communities through high-quality events that leave lasting pride, visibility and prosperity behind.”</blockquote></div></section>
    <section className="py-24"><div className="container-crowd grid gap-10 md:grid-cols-2"><h2 className="display text-5xl md:text-7xl">Every community has a good crowd.</h2><div><p className="text-xl leading-8">We started Good Crowd Inc. because we couldn't wait any longer for the world to discover what regional Australia already knows — that the best communities, the most extraordinary stories, and the warmest welcomes are found beyond the city limits.</p><Link href="/about" className="mt-8 inline-block font-bold underline">Read Our Story →</Link></div></div></section>
    <section className="bg-crowd-peach py-20"><div className="container-crowd flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="text-sm font-bold uppercase tracking-widest">Work with us</p><h2 className="display mt-4 max-w-3xl text-5xl md:text-6xl">Good things happen when good people work together.</h2></div><Link href="/work-with-us" className="shrink-0 rounded-full bg-crowd-brown px-6 py-3 font-bold text-white">Find your place →</Link></div></section>
  </>;
}
