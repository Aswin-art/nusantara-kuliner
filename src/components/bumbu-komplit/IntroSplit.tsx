"use client";
import Image from "next/image";
import styles from "./intro.module.css";

type Props = {
  variant?: "default" | "hashtag";
  title?: string;
  text?: string;
  buttonText?: string;
  image?: string;
};

export default function IntroSplit({
  variant = "default",
  title = "Bumbu Komplit Praktis, Dengan Bahan Natural",
  text = `Buat masakan #SeajaibBuatanIbu dengan bumbu komplit 100% rempah pilihan.
Solusi harian untuk keluarga sibuk hingga UMKM yang butuh konsisten rasa.`,
  buttonText = "Explore More",
  image = "/public/img/bumbu-komplit/bumbu.jpeg",
}: Props) {
  const isHashtag = variant === "hashtag";
  return (
    <section className={styles.wrap}>
      <div className={styles.colText}>
        <span className={styles.kicker}>{isHashtag ? "#SeajaibBuatanIbu" : "#SeajaibBuatanIbu"}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.p}>{text}</p>
        <button className={styles.cta}>{buttonText}</button>
      </div>
      <div className={styles.colImg}>
        <Image src={image} alt="Ilustrasi hidangan" fill sizes="(max-width: 1024px) 100vw, 560px" />
      </div>
    </section>
  );
}
