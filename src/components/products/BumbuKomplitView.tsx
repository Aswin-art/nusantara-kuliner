"use client";

import {
  bumbuInstans,
  frozens,
  sambals,
  type Item,
} from "@/data/bumbu-komplit";
import HeroBanner from "./HeroBanner";
import IntroSplit from "./IntroSplit";
import FeatureCards from "./FeaturedCards";
import ProductCarousel from "./ProductCarousel";

export default function BumbuKomplitView() {
  return (
    <main className="space-y-12">
      <HeroBanner
        title="Produk Kami"
        imageSrc="/img/bumbu-komplit/hero-bumbu-komplit.png"
        brightness={0.5}
        overlayOpacity={0.15}
        className="rounded-2xl"
      />

      <section className="mx-auto max-w-[1280px] px-4">
        <IntroSplit />
      </section>

      <section className="mx-auto max-w-[1280px] px-4">
        <FeatureCards />
      </section>

      <section className="mx-auto max-w-[1280px] px-4">
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-[#111] sm:text-4xl">
          Frozen Food
        </h2>
        <ProductCarousel items={frozens} ctaLabel="Beli sekarang" loop />
      </section>

      <section className="mx-auto max-w-[1280px] px-4">
        <IntroSplit
          title="#SeajaibBuatanIbu"
          text={`Kalau teknologi maju, masak juga makin praktis.\nDulu bumbu harus dikupas, diiris, diulek. Sekarang cukup tuang—rasanya tetap rumahan.`}
          buttonText="Pesan sekarang"
          image="/img/bumbu-komplit/RicaBebek.JPG"
          imageSide="left"
        />
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-16">
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-[#111] sm:text-4xl">
          Bumbu Instan
        </h2>
        <ProductCarousel items={bumbuInstans} ctaLabel="Beli sekarang" loop />
      </section>

      <section className="mx-auto max-w-[1280px] px-4">
        <IntroSplit
          title="Sambal Praktis, Pedas Menyala"
          text={`Hadirkan kelezatan pedas khas Indonesia dengan sambal praktis siap santap. Dibuat dari cabai segar dan rempah pilihan, cocok jadi pelengkap segala hidangan.`}
          buttonText="Pesan sekarang"
          image="/img/bumbu-komplit/RicaBebek.JPG"
          imageSide="right"
        />
      </section>

      <section className="mx-auto max-w-[1280px] px-4 pb-16">
        <h2 className="mb-4 text-center text-3xl font-extrabold tracking-tight text-[#111] sm:text-4xl">
          Aneka Sambalan
        </h2>
        <ProductCarousel items={sambals} ctaLabel="Beli sekarang" loop />
      </section>
    </main>
  );
}
