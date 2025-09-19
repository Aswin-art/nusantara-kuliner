"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image & Badges - di atas pada mobile, kanan pada desktop */}
        <div className="relative flex justify-center items-center order-1 md:order-2 overflow-visible">
          <Image
            src="/img/hero.jpg"
            alt="Makanan Nusantara"
            width={800}
            height={560}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
          {/* Badge: 100% Autentik */}
          <div
            className="absolute top-8 right-[-40px] text-white px-6 py-3 rounded-xl flex items-center gap-2 text-base shadow-lg animate-badge-float"
            style={{
              background:
                "linear-gradient(to right, rgba(231,111,81,0.85), rgba(230,57,70,0.85))",
              animation: "badgeFloat 2.5s ease-in-out infinite alternate",
            }}
          >
            100% Autentik
            <Image
              src="/icons/certificate.png"
              alt="Authentic"
              width={20}
              height={20}
            />
            {/* <Signature /> */}
          </div>
          {/* Badge: Praktis & Sehat */}
          <div
            className="absolute bottom-8 left-[-40px] text-white px-6 py-3 rounded-xl flex items-center gap-2 text-base shadow-lg animate-badge-float"
            style={{
              background:
                "linear-gradient(to right, rgba(231,111,81,0.85), rgba(230,57,70,0.85))",
              animation: "badgeFloat 2.5s ease-in-out infinite alternate",
              animationDelay: "1.2s",
            }}
          >
            Praktis & Sehat
            <Image
              src="/icons/health.png"
              alt="Authentic"
              width={20}
              height={20}
            />
            {/* <HandHeart /> */}
          </div>
        </div>
        {/* Text & Buttons - di bawah pada mobile, kiri pada desktop */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <h1 className="text-2xl md:text-4xl font-bold leading-snug">
            Hangatnya Rasa <span className="text-orange-600">Nusantara</span>,
            <br />
            <span className="text-orange-600">Siap Disajikan</span> Kapan Saja
          </h1>
          <p className="mt-2 text-gray-700 text-lg">
            Temukan rasa yang kaya dari kuliner <b>Nusantara</b> yang dimasak
            dengan <b>rempah premium</b> petani lokal, <b>tanpa pengawet</b>,
            dan <b>kemasan higienis</b>. Siap saji, hangatnya rasa{" "}
            <b>Nusantara</b>.
          </p>
          <div className="flex flex-wrap gap-6 mt-4">
            <a
              href="#coba"
              className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-lg shadow hover:scale-105 transition-transform duration-200"
              style={{
                background:
                  "linear-gradient(to right, var(--primary-300), var(--primary-600))",
              }}
            >
              {/* <Utensils /> */}
              <Image
                src="/icons/try.png"
                alt="Utensils"
                width={20}
                height={20}
              />
              Coba Sekarang
            </a>
            <a
              href="/products"
              className="text-orange-600 text-lg flex items-center gap-2 hover:underline"
            >
              Lihat Produk
            </a>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes badgeFloat {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-16px);
          }
        }
        .animate-badge-float {
          will-change: transform;
        }
      `}</style>
    </section>
  );
}
