"use client";
import Image from "next/image";
import styles from "./hero.module.css";

type HeroBannerProps = {
  videoUrl?: string; // optional link video
};

export default function HeroBanner({ videoUrl = "https://www.youtube.com/watch?v=abcd1234" }: HeroBannerProps) {
  return (
    <section className={styles.hero}>
      {/* Background image */}
      <Image
        src="/img/bumbu-komplit/bumbu.jpeg"
        alt="Bumbu Komplit Hero"
        fill
        priority
        className={styles.bg}
      />

      {/* Overlay */}
      <div className={styles.overlay}>
        <h1 className={styles.title}>Bumbu Komplit</h1>

        {/* Tombol Play */}
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.playBtn}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            className={styles.playIcon}
          >
            <circle cx="32" cy="32" r="30" fill="rgba(0,0,0,0.6)" />
            <polygon points="26,20 26,44 46,32" fill="#fff" />
          </svg>
        </a>
      </div>
    </section>
  );
}
