import { Goal, Lightbulb } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Mission() {
  return (
    <section className="w-full py-16 bg-orange-50 flex justify-center items-center">
      <div className="relative w-full px-4">
        {/* Card Container */}
        <div className="bg-white w-full rounded-md shadow-lg grid md:grid-cols-2 gap-12 py-16 px-10 md:px-20 relative">
          {/* Corner Decorations */}
          <span className="absolute left-6 bottom-6 w-12 h-12 border-l-4 border-b-4 border-orange-600"></span>
          <span className="absolute right-6 top-6 w-12 h-12 border-r-4 border-t-4 border-orange-600"></span>

          {/* Visi */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-orange-500 rounded-full shadow-md p-5 mb-6">
              {/* <Lightbulb width={40} height={40} /> */}
              <Image src="/icons/visi.png" alt="Idea" width={40} height={40} />
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Visi Kami</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi pelopor kuliner sehat berbasis rempah Nusantara yang tidak
              hanya menghadirkan cita rasa otentik, tetapi juga menginspirasi
              masyarakat di seluruh dunia untuk menjalani gaya hidup yang
              praktis, sehat, dan berkualitas..
            </p>
          </div>

          {/* Misi */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-orange-500 rounded-full shadow-md p-5 mb-6">
              <Image src="/icons/misi.png" alt="Goal" width={40} height={40} />
            </div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4">Misi Kami</h3>
            <ul className="text-gray-700 leading-relaxed list-disc list-inside space-y-2">
              <li>
                Menghadirkan makanan instan bebas pengawet sintetis bercita rasa
                autentik
              </li>
              <li>
                Menggunakan rempah alami sebagai pengawet sekaligus penambah
                rasa
              </li>
              <li>
                Mengedepankan keberlanjutan dengan bahan baku dari petani lokal
              </li>
              <li>
                Memperkenalkan kekayaan kuliner Nusantara ke panggung global
              </li>
              <li>Memadukan kearifan tradisi dengan teknologi pangan modern</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
