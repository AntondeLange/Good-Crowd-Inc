"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import type { BoardMember } from "@/lib/site-content";
import styles from "./board-carousel.module.css";

export function BoardCarousel({ members }: { members: BoardMember[] }) {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<BoardMember | null>(null);
  const track = useRef<HTMLUListElement>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLButtonElement | null>(null);
  const id = useId();

  useEffect(() => {
    if (!selected) return;
    const panel = dialog.current;
    const overflow = document.body.style.overflow;
    panel?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      panel?.close();
      document.body.style.overflow = overflow;
      opener.current?.focus({ preventScroll: true });
    };
  }, [selected]);

  function goTo(index: number) {
    const list = track.current;
    const card = list?.children[index] as HTMLElement | undefined;
    if (!list || !card) return;
    list.scrollTo({
      left: card.offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  if (!members.length) return null;

  return (
    <div className={styles.carousel} role="region" aria-roledescription="carousel" aria-label="Board directors">
      <p className={styles.hint} id={`${id}-hint`}>Explore the Board. Select a portrait to open their profile.</p>
      <ul
        ref={track}
        id={`${id}-portraits`}
        className={styles.track}
        aria-describedby={`${id}-hint`}
        onScroll={() => {
          const list = track.current;
          if (!list) return;
          const cards = Array.from(list.children) as HTMLElement[];
          const closest = cards.reduce((best, card, index) =>
            Math.abs(card.offsetLeft - list.scrollLeft) < Math.abs(cards[best].offsetLeft - list.scrollLeft) ? index : best, 0);
          setActive(closest);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft" || event.key === "Home" || event.key === "End") {
            event.preventDefault();
            const index = event.key === "Home" ? 0 : event.key === "End" ? members.length - 1 : (active + (event.key === "ArrowRight" ? 1 : -1) + members.length) % members.length;
            goTo(index);
            (track.current?.children[index]?.querySelector("button") as HTMLButtonElement | null)?.focus({ preventScroll: true });
          }
        }}
      >
        {members.map((member, index) => (
          <li key={member.name} className={styles.card} data-active={index === active}>
            <button
              type="button"
              className={styles.portrait}
              aria-label={`Open profile for ${member.name}`}
              aria-haspopup="dialog"
              onClick={(event) => { opener.current = event.currentTarget; setSelected(member); }}
            >
              <Image src={member.image.src} alt={member.image.alt} fill sizes="(max-width: 640px) 82vw, (max-width: 1024px) 50vw, 480px" className={styles.image} />
              <span className={styles.openLabel} aria-hidden="true">View profile <span>↗</span></span>
            </button>
            <h3 className={styles.name}>{member.name}</h3>
            <p className={styles.role}>{member.role}</p>
            {member.placeholder && <p className={styles.pending}>Photo coming soon</p>}
          </li>
        ))}
      </ul>
      <div className={styles.controls}>
        <button type="button" aria-label="Previous director" aria-controls={`${id}-portraits`} onClick={() => goTo((active - 1 + members.length) % members.length)}>←</button>
        <button type="button" aria-label="Next director" aria-controls={`${id}-portraits`} onClick={() => goTo((active + 1) % members.length)}>→</button>
        <p role="status" aria-atomic="true" className={styles.count}><span className="sr-only">{members[active].name}, director </span>{active + 1} / {members.length}</p>
      </div>
      <dialog
        ref={dialog}
        className={styles.dialog}
        aria-labelledby={`${id}-name`}
        onCancel={(event) => { event.preventDefault(); setSelected(null); }}
        onClose={() => setSelected(null)}
        onKeyDown={(event) => {
          // Profile copy is plain text; the close button is the only tab stop.
          if (event.key === "Tab") {
            event.preventDefault();
            dialog.current?.querySelector("button")?.focus();
          }
        }}
        onClick={(event) => { if (event.target === event.currentTarget) setSelected(null); }}
      >
        {selected && <div className={styles.panel}>
          <button type="button" autoFocus className={styles.close} aria-label="Close director profile" onClick={() => setSelected(null)}>×</button>
          <div className={styles.modalPortrait}><Image src={selected.image.src} alt={selected.image.alt} fill sizes="(max-width: 640px) 90vw, 480px" className={styles.modalImage} /></div>
          <div className={styles.biography}>
            <p className="eyebrow">Our Board</p>
            <h2 id={`${id}-name`} className="display">{selected.name}</h2>
            <p className={styles.role}>{selected.role}</p>
            {selected.placeholder && <p className={styles.pending}>Photo coming soon</p>}
            <div className={styles.bio}>{selected.bio.length ? selected.bio.map((paragraph, index) => <p key={index}>{paragraph}</p>) : <p>Biography coming soon.</p>}</div>
          </div>
        </div>}
      </dialog>
    </div>
  );
}
