"use client";

import type { Item } from "@/data/bumbu-komplit";
import HeroBanner from "./HeroBanner";
import IntroSplit from "./IntroSplit";
import FeatureCards from "./FeaturedCards";     // ⬅️ pastikan nama file & import ini benar
import ProductCarousel from "./ProductCarousel";

type Props = { initialItems: Item[] };

export default function BumbuKomplitView({ initialItems }: Props) {
  const all = initialItems;
  const nasiGoreng = all.filter((i) => /nasi goreng/i.test(i.name));

  return (
    <main className="space-y-12">
      {/* Hero */}
      <HeroBanner
        title="Bumbu Komplit"
        imageSrc="/img/bumbu-komplit/bumbu.jpeg"   // pastikan file ada
      />

      {/* Intro kiri-teks kanan-gambar */}
      <section className="mx-auto max-w-[1280px] px-4">
        <IntroSplit />
      </section>

      {/* 3 kartu keunggulan */}
      <section className="mx-auto max-w-[1280px] px-4">
        <FeatureCards />
      </section>

      {/* Carousel utama */}
      <section className="mx-auto max-w-[1280px] px-4">
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-[#111] sm:text-4xl">
          Bumbu Komplit
        </h2>
        <ProductCarousel items={all} ctaLabel="Buy Now" />
      </section>

      {/* Hashtag / CTA */}
      <section className="mx-auto max-w-[1280px] px-4">
        <IntroSplit
          title="#SeajaibBuatanIbu"
          text={`Kalau teknologi maju, masak juga makin praktis.
Dulu bumbu harus dikupas, diiris, diulek. Sekarang cukup tuang—rasanya tetap rumahan.`}
          buttonText="Try Now"
          image="/img/bumbu-komplit/bumbu.jpeg"
          alt="Bumbu komplit kemasan"
        />
      </section>

      {/* Carousel Nasi Goreng (marble board) */}
      <section className="mx-auto max-w-[1280px] px-4 pb-16">
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-[#111] sm:text-4xl">
          Bumbu Komplit Nasi Goreng
        </h2>
        <ProductCarousel items={nasiGoreng} ctaLabel="Buy Now" variant="marble" />
      </section>
    </main>
  );
}
