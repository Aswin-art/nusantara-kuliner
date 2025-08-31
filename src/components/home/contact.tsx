"use client";
import { Send } from "lucide-react";
import Image from "next/image";

export default function ContactSection() {
  // Handler untuk submit form
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nama = (
      form.elements.namedItem("nama") as HTMLInputElement
    )?.value.trim();
    const email = (
      form.elements.namedItem("email") as HTMLInputElement
    )?.value.trim();
    const whatsapp = (
      form.elements.namedItem("whatsapp") as HTMLInputElement
    )?.value.trim();
    const pesanRaw = (
      form.elements.namedItem("pesan") as HTMLTextAreaElement
    )?.value.trim();

    if (!nama || !email || !whatsapp || !pesanRaw) {
      alert("Semua field wajib diisi!");
      return;
    }

    // CRLF agar kompatibel di lebih banyak mail client
    const nl = "\r\n";
    const subject = encodeURIComponent("Pesan dari Form Nusantara Kuliner");

    const bodyPlain =
      `Nama: ${nama}${nl}` +
      `Email: ${email}${nl}` +
      `Nomor WhatsApp: ${whatsapp}${nl}` +
      `Pesan:${nl}${pesanRaw}`;

    const body = encodeURIComponent(bodyPlain);

    const mailto = `mailto:aswiinarung1@gmail.com?subject=${subject}&body=${body}`;

    // Batas aman panjang URL (konservatif)
    if (mailto.length > 1800) {
      alert(
        "Pesan terlalu panjang untuk dibuka via email client. Mohon ringkas pesan atau hubungi kami langsung."
      );
      return;
    }

    // Buka mail client
    window.location.href = mailto;

    // --- OPSIONAL: fallback Gmail compose jika ingin ---
    setTimeout(() => {
      const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
        "aswiinarung1@gmail.com"
      )}&su=${subject}&body=${body}`;
      window.open(gmailCompose, "_blank");
    }, 500);
  }
  return (
    <section className="w-full py-16 bg-orange-50 flex justify-center items-center">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-8 px-4">
        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-2 leading-snug">
            Hubungi Tim{" "}
            <span className="text-orange-600">Nusantara Kuliner.</span>
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Mari terhubung & nikmati rasa{" "}
            <b className="font-semibold">Nusantara</b> lebih dekat.
            <br />
            Pesan produk, tanya detail, atau ajukan kerja sama.
          </p>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="nama"
              required
              placeholder="Nama *"
              className="border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email *"
              className="border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <input
              type="text"
              name="whatsapp"
              required
              placeholder="Nomor WhatsApp *"
              className="border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <textarea
              name="pesan"
              required
              placeholder="Ada yang bisa dibantu? *"
              rows={3}
              className="border rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
            <button
              type="submit"
              className="mt-2 text-white font-semibold text-lg py-3 rounded-xl flex items-center justify-center gap-2 shadow hover:scale-105 transition-transform duration-200 hover:cursor-pointer"
              style={{
                background:
                  "linear-gradient(to right, var(--primary-300), var(--primary-600))",
              }}
            >
              {/* <Send /> */}
              <Image src="/icons/send.png" alt="Send" width={20} height={20} />
              Kirim Pesan
            </button>
          </form>
        </div>
        {/* Contact Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col gap-6 justify-center">
          <div className="flex items-center gap-4">
            <span className="bg-orange-50 text-orange-600 rounded-full p-3">
              <Image src="/icons/call.png" alt="Phone" width={20} height={20} />
            </span>
            <div>
              <div className="font-semibold text-lg">Nomor Telepon</div>
              <div className="text-gray-700">0812 3456 7890</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-orange-50 text-orange-600 rounded-full p-3">
              <Image
                src="/icons/instagram.png"
                alt="Instagram"
                width={20}
                height={20}
              />
            </span>
            <div>
              <div className="font-semibold text-lg">Instagram</div>
              <div className="text-gray-700">@nusantara.kuliner</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-orange-50 text-orange-600 rounded-full p-3">
              <Image src="/icons/mail.png" alt="Email" width={20} height={20} />
            </span>
            <div>
              <div className="font-semibold text-lg">Email</div>
              <div className="text-gray-700">nusantara.kuliner@gmail.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-orange-50 text-orange-600 rounded-full p-3">
              <Image
                src="/icons/location.png"
                alt="Location"
                width={20}
                height={20}
              />
            </span>
            <div>
              <div className="font-semibold text-lg">Alamat Toko</div>
              <div className="text-gray-700">
                Jl. Raya Contoh No.99, Example, Indonesia 10101
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d590.3390180101454!2d106.77850243592555!3d-6.229217739559027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1819b15e725%3A0x7a17eef77b277737!2sKuliner%20Nusantara!5e1!3m2!1sid!2sid!4v1756491897065!5m2!1sid!2sid"
              height="120"
              style={{ border: 0 }}
              className="w-full h-36 md:h-44 lg:h-52"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
