"use client";

import Image from "next/image";

type HeroBannerProps = {
  videoUrl?: string;
  title?: string;
  imageSrc?: string; // path gambar di /public
  alt?: string;
};

export default function HeroBanner({
  videoUrl = "https://www.youtube.com/watch?v=abcd1234",
  title = "Bumbu Komplit",
  imageSrc = "/img/bumbu-komplit/bumbu.jpeg", // pastikan file ada
  alt = "Bumbu Komplit Hero",
}: HeroBannerProps) {
  return (
    <section
      className="
        relative w-full overflow-hidden
        mt-12
        h-[360px] sm:h-[400px] md:h-[440px] lg:h-[480px]
      "
    >
      {/* background */}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* overlay center */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center">
        <h1
          className="
            mb-4 font-extrabold text-white
            text-4xl sm:text-5xl md:text-6xl
          "
          style={{ textShadow: "0 3px 8px rgba(0,0,0,.6)" }}
        >
          {title}
        </h1>

        {/* tombol play */}
        <a
          href={videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Play video"
          className="
            grid h-20 w-20 place-items-center rounded-full
            transition hover:scale-110
          "
        >
          <svg viewBox="0 0 64 64" className="h-20 w-20">
            <circle cx="32" cy="32" r="30" fill="rgba(0,0,0,0.6)" />
            <polygon points="26,20 26,44 46,32" fill="#fff" />
          </svg>
        </a>
      </div>
    </section>
  );
}
