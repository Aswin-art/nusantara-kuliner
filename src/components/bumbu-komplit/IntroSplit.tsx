"use client";

import Image from "next/image";

type Props = {
  title?: string;
  text?: string;
  buttonText?: string;
  image?: string; // path di /public
  alt?: string;
};

export default function IntroSplit({
  title = "Bumbu Komplit Praktis, Dengan Bahan Natural",
  text = `Buat masakan #SeajaibBuatanIbu dengan bumbu komplit 100% rempah pilihan.
Solusi harian untuk keluarga sibuk hingga UMKM yang butuh konsisten rasa.`,
  buttonText = "Explore More",
  image = "/img/bumbu-komplit/bumbu.jpeg", // pastikan file ini ada
  alt = "Semangkuk sup hangat",
}: Props) {
  return (
    <section
      className="
        relative mx-auto max-w-[1280px]
        grid items-center gap-8
        px-4 lg:px-6 py-16
        lg:grid-cols-12
      "
    >
      {/* Kolom teks */}
      <div className="lg:col-span-6">
        <span className="text-[#f39c12] font-semibold tracking-wide">
          #SeajaibBuatanIbu
        </span>

        <h2
          className="
            mt-2 text-[#111] font-extrabold leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-[56px]
          "
        >
          {title}
        </h2>

        <p className="mt-4 max-w-[60ch] leading-8 text-[#607086]">{text}</p>

        <button
          className="
            mt-5 rounded-full bg-[#f7a824] px-6 py-3
            font-bold text-white
            shadow-[0_6px_0_0_#d88f16]
            transition
            hover:bg-[#f39c12]
            active:translate-y-[2px] active:shadow-[0_4px_0_0_#d88f16]
          "
        >
          {buttonText}
        </button>
      </div>

      {/* Kolom gambar kanan */}
      <div className="lg:col-span-6">
        {/* Parent untuk Image fill harus relative & punya tinggi */}
        <div className="relative min-h-[360px] lg:min-h-[520px]">
          {/* Box gambar: center di mobile, nempel kanan di desktop */}
          <div
            className="
              relative mx-auto aspect-square w-[86vw] max-w-[680px]
              lg:absolute lg:right-[-6vw] lg:top-1/2 lg:-translate-y-1/2
              lg:w-[52vw] lg:max-w-[720px]
            "
          >
            <Image
              src={image}
              alt={alt}
              fill
              priority
              sizes="(max-width:1024px) 90vw, 48vw"
              className="object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,.25)] pointer-events-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
