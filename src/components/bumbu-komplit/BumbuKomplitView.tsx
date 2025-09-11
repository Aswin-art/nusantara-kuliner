"use client";

import type { Item } from "@/data/bumbu-komplit";
import HeroBanner from "./HeroBanner";
import IntroSplit from "./IntroSplit";
import FeatureCards from "./FeaturedCards";
import ProductCarousel from "./ProductCarousel";

type Props = {
  initialItems: Item[]; // ⬅️ deklarasi prop yg diminta page.tsx
};

export default function BumbuKomplitView({ initialItems }: Props) {
  const all = initialItems;
  const nasiGoreng = all.filter((i) => /nasi goreng/i.test(i.name));

  return (
    <main>
      <HeroBanner />
      <IntroSplit />
      <FeatureCards />

      <section style={{ marginTop: 48 }}>
        {/* <h2 className="sectionTitle">Bumbu Komplit</h2> */}
        <ProductCarousel items={all} ctaLabel="Buy Now" />
      </section>

      <section style={{ marginTop: 72 }}>
        <IntroSplit
          variant="hashtag"
          title="#SeajaibBuatanIbu"
          text={`Kalau teknologi maju, masak juga makin praktis.
Dulu bumbu harus dikupas, diiris, diulek. Sekarang cukup tuang—rasanya tetap rumahan.`}
          buttonText="Try Now"
          image="/img/bumbu-komplit/bumbu.jpeg"
        />
      </section>

      <section style={{ marginTop: 48, marginBottom: 64 }}>
        {/* <h2 className="sectionTitle">Bumbu Komplit Nasi Goreng</h2> */}
        <ProductCarousel items={nasiGoreng} ctaLabel="Buy Now" />
      </section>
    </main>
  );
}
