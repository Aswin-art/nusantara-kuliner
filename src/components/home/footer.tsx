import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-neutral-900 text-gray-300 pt-10 pb-4 rounded-t-3xl">
            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-5 gap-8">
                {/* Logo */}
                <div className="flex flex-col items-start justify-start">
                    <Image src="/img/logo.png" alt="Nusantara Kuliner Logo" width={100} height={70} className="mb-2" />
                </div>
                {/* Navigation */}
                <div>
                    <div className="font-semibold text-lg mb-2">Navigation</div>
                    <ul className="space-y-1">
                        <li><a href="#" className="hover:text-orange-400">Home</a></li>
                        <li><a href="#tentang" className="hover:text-orange-400">Tentang Kami</a></li>
                        <li><a href="#katalog" className="hover:text-orange-400">Katalog</a></li>
                        <li><a href="#testimoni" className="hover:text-orange-400">Testimoni</a></li>
                        <li><a href="#kontak" className="hover:text-orange-400">Kontak</a></li>
                    </ul>
                </div>
                {/* Produk Kami */}
                <div>
                    <div className="font-semibold text-lg mb-2">Produk Kami</div>
                    <ul className="space-y-1">
                        <li><a href="#katalog" className="hover:text-orange-400">Rica-Rica Bebek</a></li>
                        <li><a href="#katalog" className="hover:text-orange-400">Rica-Rica Ayam</a></li>
                        <li><a href="#katalog" className="hover:text-orange-400">Rica-Rica Sapi</a></li>
                    </ul>
                </div>
                {/* Perusahaan & Social */}
                <div>
                    <div className="font-semibold text-lg mb-2">Perusahaan</div>
                    <ul className="space-y-1 mb-4">
                        <li><a href="#" className="hover:text-orange-400">Nusantara Kuliner</a></li>
                        <li><a href="#" className="hover:text-orange-400">Visi dan Misi</a></li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold text-lg mb-2">Social</div>
                    <div className="flex gap-4 text-2xl">
                        <a href="#" className="hover:text-orange-400" aria-label="Facebook">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0" /></svg>
                        </a>
                        <a href="#" className="hover:text-orange-400" aria-label="Instagram">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344c-.98.98-1.213 2.092-1.272 3.373C2.013 8.332 2 8.741 2 12c0 3.259.013 3.668.072 4.948.059 1.281.292 2.393 1.272 3.373.98.98 2.092 1.213 3.373 1.272C8.332 21.987 8.741 22 12 22s3.668-.013 4.948-.072c1.281-.059 2.393-.292 3.373-1.272.98-.98 1.213-2.092 1.272-3.373.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.281-.292-2.393-1.272-3.373-.98-.98-2.092-1.213-3.373-1.272C15.668.013 15.259 0 12 0zm0 5.838A6.162 6.162 0 0 0 5.838 12 6.162 6.162 0 0 0 12 18.162 6.162 6.162 0 0 0 18.162 12 6.162 6.162 0 0 0 12 5.838zm0 10.324A4.162 4.162 0 0 1 7.838 12 4.162 4.162 0 0 1 12 7.838 4.162 4.162 0 0 1 16.162 12 4.162 4.162 0 0 1 12 16.162zm6.406-11.845a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" /></svg>
                        </a>
                        <a href="#" className="hover:text-orange-400" aria-label="X">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M17.53 7.477h3.218l-7.033 8.09 7.033 8.09h-3.218l-5.815-6.687-5.815 6.687H3.218l7.033-8.09-7.033-8.09h3.218l5.815 6.687 5.815-6.687z" /></svg>
                        </a>
                        <a href="#" className="hover:text-orange-400" aria-label="YouTube">
                            <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.633 3.75 12 3.75 12 3.75s-7.633 0-9.386.324a2.994 2.994 0 0 0-2.112 2.112C0 7.939 0 12 0 12s0 4.061.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.367 20.25 12 20.25 12 20.25s7.633 0 9.386-.324a2.994 2.994 0 0 0 2.112-2.112C24 16.061 24 12 24 12s0-4.061-.502-5.814zM9.75 15.375v-6.75l6.75 3.375-6.75 3.375z" /></svg>
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
