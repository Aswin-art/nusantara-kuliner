"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import type { Item } from "@/data/bumbu-komplit";

type Props = {
  items: Item[];
  ctaLabel?: string;
  /** "marble" = papan kayu di atas marmer (mirip referensi) */
  variant?: "default" | "marble";
};

export default function ProductCarousel({
  items,
  ctaLabel = "Buy Now",
  variant = "default",
}: Readonly<Props>) {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
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
    setSnaps(embla.scrollSnapList());
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
      hovering.current = true;
      stop();
    },
    onMouseLeave: () => {
      hovering.current = false;
      play();
    },
    onTouchStart: () => stop(),
    onTouchEnd: () => play(),
  };

  const slides = useMemo(() => items, [items]);

  return (
    <div className="relative mx-auto max-w-[1280px] px-4 pt-2 mt-16" {...bindHover}>
      {/* Arrow kiri */}
      <button
        type="button"
        aria-label="Sebelumnya"
        onClick={() => embla?.scrollPrev()}
        className="absolute -left-3 top-1/2 z-30 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-full bg-orange-600 shadow-lg transition hover:scale-[1.06] hover:cursor-pointer"
        style={{ transform: "translateY(-100%)" }}
      >
        {/* <span className="text-center align-middle text-4xl font-bold">‹</span> */}
        <ChevronLeft />
      </button>

      {/* Viewport */}
      <div className="overflow-hidden rounded-[28px]" ref={emblaRef}>
        <div className="flex gap-6">
          {slides.map((it) => (
            <div
              key={it.slug}
              className="min-w-[33.333%] basis-1/3 shrink-0 grow-0"
            >
              <article
                className={[
                  "grid overflow-hidden rounded-[28px] border bg-white shadow-[0_18px_48px_rgba(0,0,0,0.08)]",
                  variant === "marble" &&
                  "bg-[#f7f7f7] border-black/10 shadow-[0_24px_60px_rgba(0,0,0,0.10)]",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {/* Thumb */}
                {variant === "marble" ? (
                  <div
                    className="relative aspect-[3/2] overflow-hidden rounded-t-[28px] border-b border-black/10 bg-center bg-cover"
                    style={{
                      // siapkan /public/img/ui/marble.jpg
                      backgroundImage: "url('/img/ui/marble.jpg')",
                    }}
                  >
                    {/* “piring kayu” */}
                    <div
                      className="absolute left-1/2 top-1/2 z-[1] aspect-square w-[68%] -translate-x-1/2 -translate-y-[44%] rounded-full shadow-[inset_0_8px_18px_rgba(255,255,255,.35),0_22px_36px_rgba(0,0,0,.25)]"
                      // siapkan /public/img/ui/wood.png
                      style={{ background: "url('/img/ui/wood.png') center/cover no-repeat" }}
                    />
                    {/* Packshot */}
                    <Image
                      src={it.image}
                      alt={it.name}
                      fill
                      sizes="(max-width:1200px) 80vw, 420px"
                      className="z-[2] object-contain drop-shadow-[0_14px_26px_rgba(0,0,0,.35)]"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[3/2] overflow-hidden rounded-t-[28px]">
                    <Image
                      src={it.image}
                      alt={it.name}
                      fill
                      sizes="(max-width:1200px) 80vw, 420px"
                      className="object-cover"
                    />
                  </div>
                )}

                <h3 className="m-0 px-3 pb-5 pt-4 text-center text-[18px] font-bold text-[#454545]">
                  {it.name}
                </h3>
              </article>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow kanan */}
      <button
        type="button"
        aria-label="Berikutnya"
        onClick={() => embla?.scrollNext()}
        className="absolute -right-3 top-1/2 z-30 -translate-y-1/2 flex items-center justify-center h-12 w-12 rounded-full  bg-orange-600 shadow-lg transition hover:scale-[1.06] hover:cursor-pointer"
        style={{ transform: "translateY(-100%)" }}
      >
        <ChevronRight />
      </button>

      {/* Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 flex-col">
        {/* <div className="flex items-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={slides[i]?.slug || i}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Ke slide ${i + 1}`}
              className={[
                "h-2.5 w-2.5 rounded-full border border-black/10 bg-[#e2e6ea]",
                i === selectedIndex && "bg-orange-600",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div> */}
        <button
          type="button"
          className="text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:cursor-pointer"
          style={{ background: "linear-gradient(to right, var(--primary-300), var(--primary-600))" }}
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
