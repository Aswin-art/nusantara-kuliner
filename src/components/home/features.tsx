import { Leaf, ShieldCheck, Snowflake } from "lucide-react";
import React from "react";

const features = [
  {
    icon: (
      <Leaf />
    ),
    title: "100% Bumbu Alami",
    desc: "Rempah pilihan, tanpa perisa buatan",
  },
  {
    icon: (
      <ShieldCheck />
    ),
    title: "Tanpa Pengawet Buatan",
    desc: "Aman dinikmati setiap hari",
  },
  {
    icon: (
      <Snowflake />
    ),
    title: "Tahan Lama",
    desc: "Tetap lezat seperti baru dimasak",
  },
];

export default function Features() {
  return (
    <section className="w-full py-8 bg-orange-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex items-center gap-4 bg-white rounded-2xl shadow px-6 py-4"
          >
            <div className="flex-shrink-0 text-white rounded-full flex items-center justify-center w-12 h-12"
            style={{ background: "linear-gradient(to right, var(--primary-300), var(--primary-600))" }}
            >
              {f.icon}
            </div>
            <div>
                <p className="font-light text-gray-900 mb-1" style={{ fontFamily: "var(--font-open-sans, 'Open Sans', sans-serif)" }}>{f.title}</p>
              <p className="text-gray-600 font-light text-sm">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
