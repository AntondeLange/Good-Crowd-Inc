"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import type { BoardMember } from "@/lib/site-content";
import styles from "./board-carousel.module.css";

function subscribeReducedMotion(callback: () => void) {
  const media = window.matchMedia("(prefers-reduced-motion: reduce)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const getReducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const getServerReducedMotion = () => true;

export function BoardCarousel({ members }: { members: BoardMember[] }) {
  const [active, setActive] = useState(0);
  const [selected, setSelected] = useState<BoardMember | null>(null);
  const track = useRef<HTMLUListElement>(null);
  const carousel = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [inView, setInView] = useState(false);
  const [pageHidden, setPageHidden] = useState(false);
  const reducedMotion = useSyncExternalStore(subscribeReducedMotion, getReducedMotion, getServerReducedMotion);
  const rotating = !paused && !hovered && !focused && !selected && !reducedMotion && inView && !pageHidden;

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.35 });
    if (carousel.current) observer.observe(carousel.current);
    const onVisibility = () => setPageHidden(document.hidden);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  useEffect(() => {
    if (!rotating || members.length < 2) return;
    const timer = window.setInterval(() => setActive(index => (index + 1) % members.length), 3000);
    return () => window.clearInterval(timer);
  }, [rotating, members.length, active]);
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
    setActive(index);
  }

  function positionFor(index: number) {
    if (index === active) return "center";
    if (index === (active - 1 + members.length) % members.length) return "left";
    if (index === (active + 1) % members.length) return "right";
    return "hidden";
  }

  if (!members.length) return null;

  return (
    <div
      ref={carousel}
      className={styles.carousel}
      role="region"
      aria-roledescription="carousel"
      aria-label="Board directors"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
      }}
    >
      <ul
        ref={track}
        id={`${id}-portraits`}
        className={styles.track}
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = touchStart.current - event.changedTouches[0].clientX;
          if (Math.abs(distance) > 40) goTo((active + (distance > 0 ? 1 : -1) + members.length) % members.length);
          touchStart.current = null;
        }}
        onTouchCancel={() => { touchStart.current = null; }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft" || event.key === "Home" || event.key === "End") {
            event.preventDefault();
            const index = event.key === "Home" ? 0 : event.key === "End" ? members.length - 1 : (active + (event.key === "ArrowRight" ? 1 : -1) + members.length) % members.length;
            goTo(index);
            requestAnimationFrame(() => (track.current?.children[index]?.querySelector("button") as HTMLButtonElement | null)?.focus({ preventScroll: true }));
          }
        }}
      >
        {members.map((member, index) => (
          <li key={member.name} className={styles.card} data-position={positionFor(index)} aria-hidden={positionFor(index) === "hidden"}>
            <button
              type="button"
              className={styles.portrait}
              aria-label={`Open profile for ${member.name}`}
              aria-haspopup="dialog"
              tabIndex={index === active ? 0 : -1}
              onClick={(event) => { opener.current = event.currentTarget; setSelected(member); }}
            >
              <Image src={member.image.src} alt={member.image.alt} fill sizes="(max-width: 640px) 70vw, 448px" className={styles.image} />
              <span className={styles.openLabel} aria-hidden="true">View profile <span>↗</span></span>
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.caption} aria-live={rotating ? "off" : "polite"} aria-atomic="true">
        <h3 className={styles.name}>{members[active].name}</h3>
        <p className={styles.role}>{members[active].role}</p>
        {members[active].placeholder && <p className={styles.pending}>Photo coming soon</p>}
      </div>
      <div className={styles.controls}>
        <button type="button" aria-label="Previous director" aria-controls={`${id}-portraits`} onClick={() => goTo((active - 1 + members.length) % members.length)}>←</button>
        <button type="button" aria-label="Next director" aria-controls={`${id}-portraits`} onClick={() => goTo((active + 1) % members.length)}>→</button>
        <button type="button" className={styles.rotation} disabled={reducedMotion} aria-label={paused ? "Resume automatic rotation" : "Pause automatic rotation"} onClick={() => setPaused(value => !value)}>{reducedMotion ? "Manual rotation" : paused ? "Play" : "Pause"}</button>
        <p aria-live={rotating ? "off" : "polite"} aria-atomic="true" className={styles.count}><span className="sr-only">{members[active].name}, director </span>{active + 1} / {members.length}</p>
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
