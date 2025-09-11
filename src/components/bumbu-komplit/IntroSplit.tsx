"use client";
import Image from "next/image";
import styles from "./intro.module.css";

type Props = {
  title?: string;
  text?: string;
  buttonText?: string;
  image?: string;   // path ke public/...
  alt?: string;
};

export default function IntroSplit({
  title = "Bumbu Komplit Praktis, Dengan Bahan Natural",
  text = `Buat masakan #SeajaibBuatanIbu dengan bumbu komplit 100% rempah pilihan.
Solusi harian untuk keluarga sibuk hingga UMKM yang butuh konsisten rasa.`,
  buttonText = "Explore More",
  image = "/img/bumbu-komplit/bumbu.jpeg",
  alt = "Semangkuk sup hangat",
}: Props) {
  return (
    <section className={styles.wrap}>
      <div className={styles.colText}>
        <span className={styles.kicker}>#SeajaibBuatanIbu</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.p}>{text}</p>
        <button className={styles.cta}>{buttonText}</button>
      </div>

      {/* ilustrasi kanan, menjorok ke tepi */}
      <div className={styles.colImg}>
        <div className={styles.edgeRight}>
          <Image
            src={image}
            alt={alt}
            fill
            priority
            sizes="(max-width:1024px) 90vw, 48vw"
            className={styles.heroImg}
          />
        </div>
      </div>
    </section>
  );
}
