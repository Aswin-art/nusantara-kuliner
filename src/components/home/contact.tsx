"use client";
import Image from "next/image";

export default function ContactSection() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const nama = (
      form.elements.namedItem("nama") as HTMLInputElement
    )?.value.trim();
    const whatsapp = (
      form.elements.namedItem("whatsapp") as HTMLInputElement
    )?.value.trim();
    const pesanRaw = (
      form.elements.namedItem("pesan") as HTMLTextAreaElement
    )?.value.trim();

    if (!nama || !whatsapp || !pesanRaw) {
      alert("Semua field wajib diisi!");
      return;
    }

    const targetNumber = "6285691919971";

    const userPhone = whatsapp.replace(/[^\d]/g, "");

    const message = [
      "Halo Nusantara Kuliner,",
      "",
      `Nama: ${nama}`,
      `No. WhatsApp: ${userPhone}`,
      `Pesan: ${pesanRaw}`,
      "",
      "Terima kasih.",
    ].join("\n");

    const url = `https://wa.me/${targetNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  }
  return (
    <section id="kontak" className="w-full py-16 bg-orange-50 flex justify-center items-center">
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
              <div className="text-gray-700">085691919971</div>
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
              <div className="text-gray-700">@nusantarakuliner_1</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="bg-orange-50 text-orange-600 rounded-full p-3">
              <Image src="/icons/mail.png" alt="Email" width={20} height={20} />
            </span>
            <div>
              <div className="font-semibold text-lg">Email</div>
              <div className="text-gray-700">nusantarakuliner88@gmail.com</div>
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
                Perum Royal Juanda Blok B/2, Tani Nelayan, Pepe, Kec. Sedati,
                Kabupaten Sidoarjo, Jawa Timur 61253
              </div>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden mt-2">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4950.846873636942!2d112.775309!3d-7.403531999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMjQnMTIuNyJTIDExMsKwNDYnMzEuMSJF!5e1!3m2!1sid!2sid!4v1758622085542!5m2!1sid!2sid"
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
