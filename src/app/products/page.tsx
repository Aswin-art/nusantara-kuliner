import type { Metadata } from "next";
import BumbuKomplitView from "@/components/products/BumbuKomplitView";
import data from "@/data/bumbu-komplit";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";

export const metadata: Metadata = {
  title: "Bumbu Komplit | Nusantara Kuliner",
  description:
    "Kumpulan bumbu komplit: tinggal tuang, rasa autentik Indonesia. Non-MSG, tanpa pengawet, siap masak.",
  alternates: { canonical: "/bumbu-komplit" },
  openGraph: {
    title: "Bumbu Komplit | Nusantara Kuliner",
    description:
      "Kumpulan bumbu komplit siap pakai. Rasa Nusantara, praktis, #SeajaibBuatanIbu.",
    url: "/bumbu-komplit",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <Navbar />

      <BumbuKomplitView initialItems={data.items} />

      <Footer />
    </>
  );
}
