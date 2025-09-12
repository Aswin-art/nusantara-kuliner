"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
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
}: Props) {
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
    <div className="relative mx-auto max-w-[1280px] px-4 pt-2" {...bindHover}>
      {/* Arrow kiri */}
      <button
        type="button"
        aria-label="Sebelumnya"
        onClick={() => embla?.scrollPrev()}
        className="absolute left-2 top-1/2 z-30 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[26px] shadow-lg transition hover:scale-[1.06]"
      >
        ‹
      </button>

      {/* Viewport */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-5">
          {slides.map((it) => (
            <div
              key={it.slug}
              className="min-w-[33.333%] basis-1/3 shrink-0 grow-0 md:min-w-1/2 md:basis-1/2 sm:min-w-full sm:basis-full"
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
                    className="relative aspect-[4/3] overflow-hidden rounded-t-[28px] border-b border-black/10 bg-center bg-cover"
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
                  <div className="relative aspect-[4/3] overflow-hidden">
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
        className="absolute right-2 top-1/2 z-30 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full border border-black/10 bg-white text-[26px] shadow-lg transition hover:scale-[1.06]"
      >
        ›
      </button>

      {/* Controls */}
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          className="rounded-full bg-[#f7a824] px-6 py-3 font-bold text-white shadow-[0_6px_0_0_#d88f16] transition hover:bg-[#f39c12] active:translate-y-[2px] active:shadow-[0_4px_0_0_#d88f16]"
        >
          {ctaLabel}
        </button>

        <div className="flex items-center gap-2">
          {snaps.map((_, i) => (
            <button
              key={i}
              onClick={() => embla?.scrollTo(i)}
              aria-label={`Ke slide ${i + 1}`}
              aria-selected={i === selectedIndex}
              className={[
                "h-2.5 w-2.5 rounded-full border border-black/10 bg-[#e2e6ea]",
                i === selectedIndex && "bg-[#f7a824] border-[#e29a16]",
              ]
                .filter(Boolean)
                .join(" ")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
