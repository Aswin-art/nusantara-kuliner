import Image from "next/image";

export default function About() {
  return (
    <section className="w-full py-32 bg-white relative overflow-hidden">
      {/* Corner Decorations */}
      <Image
        src="/img/corner.png"
        alt="corner"
        width={120}
        height={120}
        className="absolute top-0 left-0 z-0"
      />
      <Image
        src="/img/corner.png"
        alt="corner"
        width={120}
        height={120}
        className="absolute bottom-0 right-0 rotate-180 z-0"
      />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center relative z-10 px-4">
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="/img/hero.jpg"
            alt="Hidangan Nusantara"
            width={480}
            height={320}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
        {/* Right: Text */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mb-6">
            <span className="text-orange-600">Sepenuh Hati</span> Kami Memasak,
            Sajikan <span className="text-orange-600">Hidangan Nusantara.</span>
          </h1>
          <p className="font-light text-gray-700 mb-4 text-justify">
            Di <b className="font-semibold">Nusantara Kuliner</b>, setiap
            hidangan adalah <b className="font-semibold">perjalanan rasa</b>.
            Dari pasar tradisional Jawa Timur,{" "}
            <b className="font-semibold">rempah pilihan</b> kami diolah dengan
            sentuhan inovatif melalui{" "}
            <b className="font-semibold">pengasapan tradisional</b>,{" "}
            <b className="font-semibold">pasteurisasi</b>, dan{" "}
            <b className="font-semibold">kemasan vakum</b> higienis,
            menghadirkan kepraktisan tanpa mengorbankan rasa maupun kesehatan.
            Kami percaya bahwa makanan instan dapat menjadi solusi yang{" "}
            <b className="font-semibold">aman, sehat, dan tetap kaya rasa</b>,
            setiap produk adalah komitmen kami untuk membawa kehangatan rasa
            rumah <b className="font-semibold">ke mana pun</b> Anda pergi.
          </p>
        </div>
      </div>
    </section>
  );
}
