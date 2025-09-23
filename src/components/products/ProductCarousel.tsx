"use client";

import { useCallback, useEffect, useMemo, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import type { Item } from "@/data/bumbu-komplit";

type Props = {
  items: Item[];
  ctaLabel?: string;
  /** "marble" = papan kayu di atas marmer (mirip referensi) */
  variant?: "default" | "marble";
  loop?: boolean; // baru: kontrol loop
};

export default function ProductCarousel({
  items,
  ctaLabel = "Buy Now",
  variant = "default",
  loop = true,
}: Readonly<Props>) {
  const [emblaRef, embla] = useEmblaCarousel({ loop, align: "start" });
  const timer = useRef<number | null>(null);
  const hovering = useRef(false);

  const play = useCallback(() => {
    if (!embla || hovering.current) return;
    // Jika non-loop dan sudah di slide terakhir, jangan lanjut autoplay
    if (!loop) {
      const last = embla.scrollSnapList().length - 1;
      if (embla.selectedScrollSnap() === last) return;
    }
    embla.scrollNext();
    timer.current = window.setTimeout(play, 3800) as unknown as number;
  }, [embla, loop]);

  const stop = useCallback(() => {
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = null;
  }, []);

  useEffect(() => {
    if (!embla) return;
    play();
    return () => {
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

  // Duplikasi item kalau loop aktif tapi jumlah item sedikit (misal <= 3) supaya visual loop terasa
  const slides = useMemo(() => {
    if (!loop) return items;
    const MIN_LOOP_VISUAL = 5; // target minimal item agar rotasi terasa
    if (items.length >= MIN_LOOP_VISUAL) return items;
    const repeat = Math.ceil(MIN_LOOP_VISUAL / items.length);
    const expanded = Array.from({ length: repeat }, () => items).flat();
    return expanded
      .slice(0, MIN_LOOP_VISUAL)
      .map((it, idx) => ({ ...it, _dupIndex: idx }));
  }, [items, loop]);

  return (
    <div
      className="relative mx-auto max-w-[1280px] px-4 pt-2 mt-16"
      {...bindHover}
    >
      {/* Arrow kiri */}
      <button
        type="button"
        aria-label="Sebelumnya"
        onClick={() => embla?.scrollPrev()}
        className="absolute -left-3 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 shadow-lg transition hover:scale-[1.06] hover:cursor-pointer"
      >
        <ChevronLeft />
      </button>

      {/* Viewport */}
      <div className="overflow-hidden rounded-[28px]" ref={emblaRef}>
        <div className="flex -mx-3">
          {slides.map((it: Item & { _dupIndex?: number }, idx) => (
            <div
              key={it.name + "-" + (it._dupIndex ?? idx)}
              className="basis-1/2 lg:basis-1/3 shrink-0 grow-0 px-3"
            >
              <article
                className={[
                  "grid h-full overflow-hidden rounded-[28px] border bg-white shadow-[0_18px_48px_rgba(0,0,0,0.08)]",
                  variant === "marble" &&
                    "bg-[#f7f7f7] border-black/10 shadow-[0_24px_60px_rgba(0,0,0,0.10)]",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <div className="relative aspect-[3/2] overflow-hidden rounded-t-[28px]">
                  <Image
                    src={it.image}
                    alt={it.name}
                    fill
                    sizes="(max-width:1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>

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
        className="absolute -right-3 top-1/2 z-30 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full  bg-orange-600 shadow-lg transition hover:scale-[1.06] hover:cursor-pointer"
      >
        <ChevronRight />
      </button>

      {/* Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 flex-col">
        <button
          type="button"
          className="text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105 hover:cursor-pointer"
          style={{
            background:
              "linear-gradient(to right, var(--primary-300), var(--primary-600))",
          }}
        >
          {ctaLabel}
        </button>
      </div>
    </div>
  );
}
