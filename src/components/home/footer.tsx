import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-800 text-gray-300 pt-10 pb-4">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-5 gap-8">
        {/* Logo */}
        <div className="flex flex-col items-start justify-start">
          <Image
            src="/img/logo.png"
            alt="Nusantara Kuliner Logo"
            width={100}
            height={70}
            className="mb-2"
          />
        </div>
        {/* Navigation */}
        <div>
          <div className="font-semibold text-lg mb-2">Navigation</div>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-orange-400 text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a
                href="#tentang"
                className="hover:text-orange-400 text-gray-400"
              >
                Tentang Kami
              </a>
            </li>
            <li>
              <a
                href="#katalog"
                className="hover:text-orange-400 text-gray-400"
              >
                Katalog
              </a>
            </li>
            <li>
              <a
                href="#testimoni"
                className="hover:text-orange-400 text-gray-400"
              >
                Testimoni
              </a>
            </li>
            <li>
              <a href="#kontak" className="hover:text-orange-400 text-gray-400">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        {/* Produk Kami */}
        <div>
          <div className="font-semibold text-lg mb-2">Produk Kami</div>
          <ul className="space-y-1">
            <li>
              <a
                href="#katalog"
                className="hover:text-orange-400 text-gray-400"
              >
                Rica-Rica Bebek
              </a>
            </li>
            <li>
              <a
                href="#katalog"
                className="hover:text-orange-400 text-gray-400"
              >
                Rica-Rica Ayam
              </a>
            </li>
            <li>
              <a
                href="#katalog"
                className="hover:text-orange-400 text-gray-400"
              >
                Rica-Rica Sapi
              </a>
            </li>
          </ul>
        </div>
        {/* Perusahaan & Social */}
        <div>
          <div className="font-semibold text-lg mb-2">Perusahaan</div>
          <ul className="space-y-1 mb-4">
            <li>
              <a href="#" className="hover:text-orange-400 text-gray-400">
                Nusantara Kuliner
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-400 text-gray-400">
                Visi dan Misi
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-lg mb-2">Social</div>
          <div className="flex gap-4 text-2xl items-center">
            <a
              href="#"
              className="hover:text-orange-400 text-gray-400"
              aria-label="Facebook"
            >
              <Image
                src="/icons/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="hover:text-orange-400 text-gray-400"
              aria-label="Instagram"
            >
              <Image
                src="/icons/ig.png"
                alt="Instagram"
                width={24}
                height={24}
              />
            </a>
            <a
              href="#"
              className="hover:text-orange-400 text-gray-400"
              aria-label="X"
            >
              <Image src="/icons/twitter.png" alt="X" width={24} height={24} />
            </a>
            <a
              href="#"
              className="hover:text-orange-400 text-gray-400"
              aria-label="YouTube"
            >
              <Image
                src="/icons/youtube.png"
                alt="YouTube"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
      {/* Divider */}
      <div className="w-full border-t border-gray-500 my-8"></div>
      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm">
        © 2025 Nusantara Kuliner | All Rights Reserved
      </div>
    </footer>
  );
}
