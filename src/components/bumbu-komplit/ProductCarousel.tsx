// src/components/bumbu-komplit/ProductCarousel.tsx
"use client";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import styles from "./carousel.module.css";
import type { Item } from "@/data/bumbu-komplit";

type Props = {
  items: Item[];
  ctaLabel?: string;
  variant?: "default" | "marble";
};

export default function ProductCarousel({
  items,
  ctaLabel = "Buy Now",
  variant = "default",
}: Props) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snapList, setSnapList] = useState<number[]>([]);
  const timer = useRef<number | null>(null);
  const hovering = useRef(false);

  const play = useCallback(() => {
    if (!embla || hovering.current) return;
    embla.scrollNext();
    timer.current = window.setTimeout(play, 3800) as unknown as number;
  }, [embla]);

  const stop = useCallback(() => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = null;
  }, []);

  useEffect(() => {
    if (!embla) return;
    setSnapList(embla.scrollSnapList());
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    onSelect();
    embla.on("select", onSelect);
    play();
    return () => {
      embla.off("select", onSelect);
      stop();
    };
  }, [embla, play, stop]);

  const bindHover = {
    onMouseEnter: () => {
      hovering.current = true; stop();
    },
    onMouseLeave: () => {
      hovering.current = false; play();
    },
    onTouchStart: () => stop(),
    onTouchEnd: () => play(),
  };

  const slides = useMemo(() => items, [items]);

  return (
    <div className={`${styles.wrap} ${variant === "marble" ? styles.wrapMarble : ""}`} {...bindHover}>
      {/* Arrow kiri */}
      <button
        className={`${styles.arrow} ${styles.arrowLeft}`}
        aria-label="Sebelumnya"
        onClick={() => embla?.scrollPrev()}
      >‹</button>

      {/* Viewport */}
      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {slides.map((it) => (
            <div className={styles.slide} key={it.slug}>
              <article
                className={`${styles.card} ${variant === "marble" ? styles.cardMarble : ""}`}
              >
                {/* thumb */}
                {variant === "marble" ? (
                  <div className={styles.marbleThumb}>
                    <div className={styles.plate} />
                    {/* packshot di atas “piring kayu” */}
                    <Image
                      src={it.image}
                      alt={it.name}
                      fill
                      sizes="(max-width: 1200px) 80vw, 420px"
                      className={styles.packshot}
                    />
                  </div>
                ) : (
                  <div className={styles.thumb}>
                    <Image
                      src={it.image}
                      alt={it.name}
                      fill
                      sizes="(max-width: 1200px) 80vw, 420px"
                      className={styles.img}
                    />
                  </div>
                )}

                <h3 className={styles.name}>{it.name}</h3>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow kanan */}
      <button
        className={`${styles.arrow} ${styles.arrowRight}`}
        aria-label="Berikutnya"
        onClick={() => embla?.scrollNext()}
      >›</button>

      {/* CTA + dots */}
      <div className={styles.controls}>
        <button className={styles.buy}>{ctaLabel}</button>
        <div className={styles.dots} role="tablist">
          {snapList.map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${i === selectedIndex ? styles.dotActive : ""}`}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Ke slide ${i + 1}`}
              aria-selected={i === selectedIndex}
              role="tab"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
