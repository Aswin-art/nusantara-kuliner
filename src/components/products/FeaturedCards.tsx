
"use client";

import React from "react";
import { CookingPot, Leaf, Fish } from "lucide-react";

type Feature = {
  title: string;
  text: string;
  Icon: React.FC<{ className?: string }>;
};

export default function FeatureCards() {
  const items: Feature[] = [
    {
      Icon: CookingPot,
      title: "Bumbu Sudah Matang",
      text: "Praktis untuk sehari-hari—cukup tumis/tuang, rasa konsisten. Khusus varian nasi goreng tinggal aduk 20x.",
    },
    {
      Icon: Leaf,
      title: "Dengan Bahan Natural Pilihan",
      text: "100% rempah Indonesia, tanpa pengawet & tanpa pewarna sintetis. Kualitas premium untuk cita rasa Nusantara.",
    },
    {
      Icon: Fish,
      title: "Dengan Daging Ikan Asli",
      text: "Beberapa varian pakai protein asli, lezat & bernutrisi (omega-3) yang baik untuk tubuh.",
    },
  ];

  return (
    <section className="relative py-12" aria-label="Keunggulan">
      {/* Halo radial ala referensi */}
      <div className="relative mx-auto grid max-w-[1280px] gap-6 px-4 md:grid-cols-3">
        {items.map(({ Icon, title, text }) => (
          <article
            key={title}
            className="relative rounded-2xl border shadow-2xl border-black/10 bg-white p-7 text-center transition will-change-transform hover:-translate-y-1"
          >
            <div className="flex justify-center items-center mt-0 mb-4">
              <div className="h-24 w-24 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(to right, var(--primary-300), var(--primary-600))" }}>
                <Icon className="h-12 w-12 text-white" />
              </div>
            </div>

            <h3 className="text-[20px] font-extrabold tracking-tight text-[#22324a]">
              {title}
            </h3>
            <p className="mt-2 leading-7 text-[#526781]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
