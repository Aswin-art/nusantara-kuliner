import { Inbox, Phone, ShoppingCart } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: (
      // <ShoppingCart />
      <Image src="/icons/cart2.png" alt="Cart" width={20} height={20} />
    ),
    title: "Menu Favorit Kamu",
    desc: "Jelajahi pilihan hidangan khas Nusantara Kuliner dan temukan hidangan favorit Anda.",
  },
  {
    icon: (
      // <Phone />
      <Image src="/icons/whatsapp.png" alt="Phone" width={20} height={20} />
    ),
    title: "Klik Pesan via WhatsApp",
    desc: "Hubungi tim kami secara langsung untuk memesan hidangan dan mengatur pengiriman.",
  },
  {
    icon: (
      // <Inbox />
      <Image src="/icons/box.png" alt="Box" width={20} height={20} />
    ),
    title: "Terima, Panaskan, Sajikan",
    desc: "Pesanan akan tiba dalam keadaan siap dipanaskan dan disajikan, ikuti petunjuk sederhana penyajian.",
  },
];

export default function OrderSteps() {
  return (
    <section className="w-full py-16 bg-orange-50 relative overflow-hidden">
      {/* Left & Right Product Images */}
      <Image src="/img/right.png" alt="Produk Kanan" width={260} height={420} className="absolute left-0 bottom-0 hidden md:block object-cover m-0 p-0" />
      <Image src="/img/left.png" alt="Produk Kiri" width={260} height={420} className="absolute right-0 bottom-0 hidden md:block object-cover m-0 p-0" />
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 leading-snug">
          Cara Pemesanan <br /> <span className="text-orange-600">Nusantara Kuliner</span>
        </h2>
        <div className="flex justify-center mb-8">
          <Image src="/icons/line.png" alt="Cara Pemesanan" width={320} height={12} className="object-cover" />
        </div>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center gap-4">
              <div className="rounded-full shadow-lg flex items-center justify-center w-16 h-16 mb-2 text-white"
                style={{ background: "linear-gradient(to right, var(--primary-300), var(--primary-600))" }}
              >
                {step.icon}
              </div>
              <p className="font-bold text-lg mb-1">{i + 1}. {step.title}</p>
              <p className="text-gray-700 text-base max-w-xs mx-auto">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
