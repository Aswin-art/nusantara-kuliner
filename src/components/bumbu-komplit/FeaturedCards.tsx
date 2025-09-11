"use client";
import React from "react";
import styles from "./features.module.css";


type Feature = {
  title: string;
  text: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

const BowlIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopOpacity="1" stopColor="#f8b84a" />
        <stop offset="1" stopOpacity="1" stopColor="#ff9f1a" />
      </linearGradient>
    </defs>
    <path d="M8 36c0 9.94 12.54 18 24 18s24-8.06 24-18H8z" fill="#565c67" />
    <path d="M14 32h36a2 2 0 0 1 0 4H14a2 2 0 1 1 0-4z" fill="#8b94a4" />
    <path d="M20 20c1.5 0 3-1.2 3-3s-2-3-2-5 1.5-4 1.5-4" stroke="#ffb23f" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <path d="M33 12c.8 0 2-1 2-2s-1.2-2-1.2-3.4" stroke="#ffb23f" strokeWidth="3" fill="none" strokeLinecap="round"/>
    <g fill="url(#g1)">
      <circle cx="48" cy="16" r="3"/>
      <path d="M40 14l6 4-6 4-3-2 3-6z"/>
      <path d="M25 18l4 2-3 5-4-2 3-5z"/>
    </g>
    <path d="M10 36h44" stroke="#dfe6ef" strokeWidth="2" opacity=".6"/>
  </svg>
);

const NaturalIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <defs>
      <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffb027" />
        <stop offset="1" stopColor="#f39c12" />
      </linearGradient>
    </defs>
    <path d="M6 38c9-18 22-20 28-20 10 0 24 6 24 24-20 0-29 6-37 6S8 41 6 38z" fill="none" stroke="url(#g2)" strokeWidth="4" strokeLinecap="round"/>
    <path d="M30 28c-4 10-9 15-16 18 10 1 18-6 22-14" fill="#ffc04d"/>
    <path d="M26 34c3-7 8-10 12-12 6 5 8 11 6 17-6 2-12 0-18-5z" fill="#72c472"/>
    <text x="36" y="36" fontSize="10" fontWeight="800" fill="#222">100%</text>
    <text x="31.5" y="47" fontSize="9" fontWeight="700" fill="#222">NATURAL</text>
  </svg>
);

const FishIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 64 64" aria-hidden="true" {...props}>
    <defs>
      <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#ffb027" />
        <stop offset="1" stopColor="#f39c12" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="14" r="3" fill="url(#g3)"/>
    <circle cx="56" cy="23" r="2" fill="url(#g3)"/>
    <path d="M10 32c8-8 20-12 30-10 5 1 10 5 10 10s-5 9-10 10c-10 2-22-2-30-10z" fill="#2b6aa6"/>
    <circle cx="38" cy="30" r="2.4" fill="#fff"/>
    <circle cx="38" cy="30" r="1.2" fill="#1c2a3a"/>
    <path d="M12 32l-8 6v-12l8 6z" fill="#1c2a3a"/>
    <path d="M46 28l10-6v20l-10-6" fill="#1c2a3a"/>
  </svg>
);

export default function FeatureCards() {
  const items: Feature[] = [
    {
      Icon: BowlIcon,
      title: "Bumbu Sudah Matang",
      text: "Praktis untuk sehari-hari—cukup tumis/tuang, rasa konsisten. Khusus varian nasi goreng tinggal aduk 20x.",
    },
    {
      Icon: NaturalIcon,
      title: "Dengan Bahan Natural Pilihan",
      text: "100% rempah Indonesia, tanpa pengawet & tanpa pewarna sintetis. Kualitas premium untuk cita rasa Nusantara.",
    },
    {
      Icon: FishIcon,
      title: "Dengan Daging Ikan Asli",
      text: "Beberapa varian pakai protein asli, lezat & bernutrisi (omega-3, dsb) yang baik untuk tubuh.",
    },
  ];

  return (
    <section className={styles.area} aria-label="Keunggulan">
      <div className={styles.halo} aria-hidden />
      <div className={styles.grid}>
        {items.map(({ Icon, title, text }) => (
          <article className={styles.card} key={title}>
            <div className={styles.iconWrap}>
              <Icon className={styles.icon} />
            </div>
            <h3 className={styles.h3}>{title}</h3>
            <p className={styles.p}>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
