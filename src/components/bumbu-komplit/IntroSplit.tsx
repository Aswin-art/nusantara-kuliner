
"use client";
import Image from "next/image";

type Props = {
  readonly title?: string;
  readonly text?: string;
  readonly buttonText?: string;
  readonly image?: string;
  readonly alt?: string;
};

export default function IntroSplit({
  title = "Bumbu Komplit Praktis, Dengan Bahan Natural",
  text = `Buat masakan #SeajaibBuatanIbu dengan bumbu komplit 100% rempah pilihan.\nSolusi harian untuk keluarga sibuk hingga UMKM yang butuh konsisten rasa.`,
  buttonText = "Pelajari Lebih Lanjut",
  image = "/img/bumbu-komplit/rendang.JPG",
  alt = "Semangkuk sup hangat",
}: Props) {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image - di atas pada mobile, kanan pada desktop */}
        <div className="relative flex justify-center items-center order-1 md:order-2 overflow-visible">
          <Image
            src={image}
            alt={alt}
            width={800}
            height={560}
            className="rounded-2xl shadow-lg object-contain"
            priority
          />
        </div>
        {/* Text & Button - di bawah pada mobile, kiri pada desktop */}
        <div className="flex flex-col gap-2 order-2 md:order-1">
          <span className="text-orange-600 text-lg font-semibold tracking-wide">#SeajaibBuatanIbu</span>
          <h2 className=" 
             text-[#111] font-extrabold leading-tight
            text-3xl sm:text-4xl md:text-5xl lg:text-[56px]">
            {title}
          </h2>
          <p className="mt-2 text-[#607086] text-lg">{text}</p>
          <div className="flex flex-wrap gap-6 mt-4">
            <a
              href="#pelajariLebihLanjut"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-lg shadow hover:scale-105 transition-transform duration-200 hover:cursor-pointer"
              style={{ background: "linear-gradient(to right, var(--primary-300), var(--primary-600))" }}
            >
              {buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
