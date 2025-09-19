/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React from "react";

const products = [
  // Siap Saji
  {
    name: "Rica-Rica Ayam",
    desc: "Ayam segar berpadu bumbu rica segar khas Nusantara Kuliner, menghasilkan rasa pedas gurih yang memanjakan lidah di setiap suap.",
    price: "Rp40.000",
    img: "/img/-3.png",
    rating: 5,
    reviews: 42,
    wa: "https://wa.me/628123456789?text=Pesan%20Rica-Rica%20Ayam",
    category: "Siap Saji",
  },
  {
    name: "Rica-Rica Bebek",
    desc: "Bebek premium empuk, dibalut bumbu rica pedas yang harum menggoda dan meresap ke dalam serat daging.",
    price: "Rp52.500",
    img: "/img/-2.png",
    rating: 5,
    reviews: 13,
    wa: "https://wa.me/628123456789?text=Pesan%20Rica-Rica%20Bebek",
    category: "Siap Saji",
  },
  {
    name: "Rica-Rica Sapi",
    desc: "Daging sapi pilihan yang diolah dengan bumbu rica pekat nan gurih, menghadirkan sensasi pedas yang memanjakan.",
    price: "Rp64.500",
    img: "/img/-3.png",
    rating: 5,
    reviews: 9,
    wa: "https://wa.me/628123456789?text=Pesan%20Rica-Rica%20Sapi",
    category: "Siap Saji",
  },
  // Cemilan
  {
    name: "Keripik Tempe Rempah",
    desc: "Keripik tempe gurih dengan taburan rempah khas Nusantara, cocok untuk teman santai.",
    price: "Rp15.000",
    img: "/img/-3.png",
    rating: 5,
    reviews: 21,
    wa: "https://wa.me/628123456789?text=Pesan%20Keripik%20Tempe%20Rempah",
    category: "Cemilan",
  },
  {
    name: "Kacang Pedas Nusantara",
    desc: "Kacang tanah pilihan dengan bumbu pedas rempah, renyah dan bikin nagih.",
    price: "Rp12.000",
    img: "/img/-2.png",
    rating: 4,
    reviews: 17,
    wa: "https://wa.me/628123456789?text=Pesan%20Kacang%20Pedas%20Nusantara",
    category: "Cemilan",
  },
  {
    name: "Kacang Pedas Nusantara",
    desc: "Kacang tanah pilihan dengan bumbu pedas rempah, renyah dan bikin nagih.",
    price: "Rp12.000",
    img: "/img/-3.png",
    rating: 4,
    reviews: 17,
    wa: "https://wa.me/628123456789?text=Pesan%20Kacang%20Pedas%20Nusantara",
    category: "Cemilan",
  },
  // Rempah
  {
    name: "Bumbu Rica Instan",
    desc: "Bumbu rica siap pakai, racikan rempah asli Nusantara, praktis untuk masak di rumah.",
    price: "Rp18.000",
    img: "/img/-2.png",
    rating: 5,
    reviews: 33,
    wa: "https://wa.me/628123456789?text=Pesan%20Bumbu%20Rica%20Instan",
    category: "Rempah",
  },
  {
    name: "Bumbu Rica Instan",
    desc: "Bumbu rica siap pakai, racikan rempah asli Nusantara, praktis untuk masak di rumah.",
    price: "Rp18.000",
    img: "/img/-3.png",
    rating: 5,
    reviews: 33,
    wa: "https://wa.me/628123456789?text=Pesan%20Bumbu%20Rica%20Instan",
    category: "Rempah",
  },
  {
    name: "Bumbu Rica Instan",
    desc: "Bumbu rica siap pakai, racikan rempah asli Nusantara, praktis untuk masak di rumah.",
    price: "Rp18.000",
    img: "/img/-2.png",
    rating: 5,
    reviews: 33,
    wa: "https://wa.me/628123456789?text=Pesan%20Bumbu%20Rica%20Instan",
    category: "Rempah",
  },
  // Paket Hemat
  {
    name: "Paket Hemat Ayam + Keripik",
    desc: "Paket lengkap: Rica-Rica Ayam + Keripik Tempe Rempah, cocok untuk makan bersama.",
    price: "Rp50.000",
    img: "/img/-3.png",
    rating: 5,
    reviews: 12,
    wa: "https://wa.me/628123456789?text=Pesan%20Paket%20Hemat%20Ayam%20Keripik",
    category: "Paket Hemat",
  },
  {
    name: "Paket Hemat Ayam + Keripik",
    desc: "Paket lengkap: Rica-Rica Ayam + Keripik Tempe Rempah, cocok untuk makan bersama.",
    price: "Rp50.000",
    img: "/img/-2.png",
    rating: 5,
    reviews: 12,
    wa: "https://wa.me/628123456789?text=Pesan%20Paket%20Hemat%20Ayam%20Keripik",
    category: "Paket Hemat",
  },
  {
    name: "Paket Hemat Ayam + Keripik",
    desc: "Paket lengkap: Rica-Rica Ayam + Keripik Tempe Rempah, cocok untuk makan bersama.",
    price: "Rp50.000",
    img: "/img/-3.png",
    rating: 5,
    reviews: 12,
    wa: "https://wa.me/628123456789?text=Pesan%20Paket%20Hemat%20Ayam%20Keripik",
    category: "Paket Hemat",
  },
];

const categories = [
  { name: "Siap Saji", active: true },
  { name: "Cemilan", active: false },
  { name: "Rempah", active: false },
  { name: "Paket Hemat", active: false },
];

export default function ProductSection() {
  const [activeCat, setActiveCat] = React.useState("Siap Saji");

  const filteredProducts = products.filter((p) => p.category === activeCat);

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 leading-snug">
          <span className="text-orange-600">Cita Rasa</span> Legenda,
          <br />
          Siap Menggoyang <span className="text-orange-600">Lidah.</span>
        </h2>

        {/* Category Buttons */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              className={`px-6 py-2 rounded-full border font-semibold text-lg transition-colors duration-200 ${
                activeCat === cat.name
                  ? "bg-orange-600 text-white border-orange-600"
                  : "bg-white text-orange-600 border-orange-600 hover:bg-orange-50"
              }`}
              onClick={() => setActiveCat(cat.name)}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProducts.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="p-4 pb-0">
                <div className="relative h-48 bg-gray-100 rounded-xl overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Card Content */}
              <div className="px-6 pb-6 pt-2">
                {/* Product Name */}
                <p className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  {p.name}
                </p>

                {/* Product Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {p.desc}
                </p>

                {/* Price and Rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold text-gray-900">
                    {p.price}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                      {Array.from({ length: p.rating }).map((_, idx) => (
                        <svg
                          key={idx}
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          className="w-4 h-4"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.967c.3.921-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.967a1 1 0 00-.364-1.118L2.174 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-gray-600 text-sm font-medium">
                      ({p.reviews})
                    </p>
                  </div>
                </div>

                {/* WhatsApp Button */}
                <a
                  href={p.wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-105"
                  style={{
                    background:
                      "linear-gradient(to right, var(--primary-300), var(--primary-600))",
                  }}
                >
                  <Image
                    src="/icons/cart1.png"
                    alt="WhatsApp"
                    width={20}
                    height={20}
                  />
                  Pesan via WhatsApp
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
