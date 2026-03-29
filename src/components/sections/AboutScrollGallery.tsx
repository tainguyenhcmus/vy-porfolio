import { useEffect, useRef } from "react";
import type { CSSProperties, KeyboardEvent } from "react";
import { aboutCassetteItems } from "@/content/aboutCassettes";
import { useCassetteSelection } from "@/context/CassetteSelectionContext";
import "./about-gallery.css";
import { sectionFolderForCassette } from "@/content/cassetteSectionMap";

function normalizeScrollForK(k: number, scroller: HTMLElement) {
  if (Math.abs(k) <= 0.5) return;
  const maxScroll = scroller.scrollWidth - scroller.clientWidth;
  if (maxScroll <= 0) return;
  scroller.scrollLeft = 0.5 * (k - Math.sign(k) + 1) * maxScroll;
}

export function AboutScrollGallery() {
  const { selectedId, selectCassette } = useCassetteSelection();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const items = aboutCassetteItems;
  const n = items.length;

  useEffect(() => {
    const scroller = scrollerRef.current;
    const track = trackRef.current;
    if (!scroller || !track || n === 0) return;

    normalizeScrollForK(-1, scroller);

    const onScroll = () => {
      const raw = getComputedStyle(track).getPropertyValue("--about-k").trim();
      const k = parseFloat(raw);
      if (!Number.isFinite(k)) return;
      normalizeScrollForK(k, scroller);
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });

    const onWheel = (ev: globalThis.WheelEvent) => {
      if (Math.abs(ev.deltaY) <= Math.abs(ev.deltaX)) return;
      scroller.scrollLeft += ev.deltaY;
      ev.preventDefault();
    };
    scroller.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      scroller.removeEventListener("scroll", onScroll);
      scroller.removeEventListener("wheel", onWheel);
    };
  }, [n]);

  const onScrollerKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.2;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      el.scrollLeft += step;
      e.preventDefault();
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      el.scrollLeft -= step;
      e.preventDefault();
    }
  };

  if (n === 0) {
    return (
      <p className="px-4 py-8 text-center text-slate-600">
        Add PNG cassettes in <code className="text-slate-800">src/assets/cassettes</code>{" "}
        (excluding Hero.png).
      </p>
    );
  }

  const rootStyle = { "--n": n } as CSSProperties;

  return (
    <div className="about-gallery-root" style={rootStyle}>
      <div
        ref={scrollerRef}
        className="about-gallery-scroller"
        tabIndex={0}
        role="region"
        aria-label="Scroll-driven cassette gallery"
        onKeyDown={onScrollerKeyDown}
      >
        <div ref={trackRef} className="about-gallery-track">
          <div className="about-gallery-sticky">
            <div className="about-gallery-portal">
              <section className="about-gallery-assembly">
                {items.map((item, i) => (
                  <article
                    key={item.id}
                    tabIndex={0}
                    role="button"
                    aria-pressed={selectedId === item.id}
                    aria-label={`Select ${item.title} for selected work`}
                    data-selected={selectedId === item.id ? "true" : undefined}
                    className="about-gallery-cassette-select"
                    style={
                      {
                        "--i": i,
                        "--url": `url(${item.src})`,
                      } as CSSProperties
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      selectCassette(item.id);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        selectCassette(item.id);
                      }
                    }}
                  >
                    <header>
                      <img src={`/src/content/assets/${sectionFolderForCassette(item.id, i)}/image-1.png`} alt="" />
                    </header>
                    <figure>
                      <img src={item.src} alt="" />
                      <figcaption>{item.subtitle}</figcaption>
                    </figure>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>

      <aside className="about-gallery-aside" aria-live="polite">
        <p className="about-gallery-box-info-scrollani">
          Sorry — this browser may not support scroll-driven animations (
          <kbd>animation-timeline: scroll()</kbd>). Try current Chrome or Firefox (with
          the layout.css.scroll-driven-animations.enabled flag in{" "}
          <kbd>about:config</kbd>).
        </p>
      </aside>
    </div>
  );
}
