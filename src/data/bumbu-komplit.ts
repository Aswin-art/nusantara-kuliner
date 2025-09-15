export type Tag = "non-msg" | "halal" | "no-preservatives" | "ready-to-use" | "vegan";

export type Item = {
  slug: string;
  name: string;
  weight: string;
  image: string;
  spicy: "mild" | "medium" | "hot";
  desc: string;
  tags: Tag[];
};

const items: Item[] = [
  {
    slug: "rendang-60g",
    name: "Bumbu Komplit Rendang",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "medium",
    desc: "Rendang khas Minang dengan cita rasa gurih pedas, tinggal tumis dan ungkep untuk hasil otentik.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    slug: "rawon-60g",
    name: "Bumbu Komplit Rawon",
    weight: "60g",
    image: "/img/bumbu-komplit/rendang.JPG",
    spicy: "mild",
    desc: "Kuah hitam pekat dari kluwek khas Jawa Timur, gurih dan hangat, cocok untuk hidangan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    slug: "soto-ayam-60g",
    name: "Bumbu Komplit Soto Ayam",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaBebek.JPG",
    spicy: "mild",
    desc: "Kuah kuning segar wangi serai dan rempah, cocok untuk sarapan atau makan siang yang hangat.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    slug: "lontong-60g",
    name: "Bumbu Komplit Lontong Sayur",
    weight: "60g",
    image: "/img/bumbu-komplit/rendang.JPG",
    spicy: "mild",
    desc: "Santan gurih lembut dengan daun salam dan lengkuas, pas untuk lontong sayur khas Lebaran.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    slug: "rica-merah-60g",
    name: "Bumbu Komplit Rica-Rica Merah",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "hot",
    desc: "Pedas segar khas Manado dengan aroma cabai merah, cocok untuk ayam maupun seafood.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },

  // — Varian Nasi Goreng (biar match screenshot) —
  {
    slug: "nasgor-cakalang-60g",
    name: "Bumbu Komplit Nasi Goreng Ikan Cakalang",
    weight: "60g",
    image: "/img/bumbu-komplit/rendang.JPG",
    spicy: "medium",
    desc: "Nasi goreng khas dengan aroma gurih ikan cakalang asap yang sedap dan menggugah selera.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    slug: "nasgor-bawang-60g",
    name: "Bumbu Komplit Nasi Goreng Bawang",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "mild",
    desc: "Harum bawang goreng dengan rasa gurih sedikit manis, nyaman untuk anak-anak dan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal", "vegan"],
  },
  {
    slug: "nasgor-sambal-matah-60g",
    name: "Bumbu Komplit Nasi Goreng Sambal Matah",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaBebek.JPG",
    spicy: "hot",
    desc: "Segar pedas khas Bali dari bawang, cabai, dan jeruk limau yang menggugah selera.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    slug: "nasgor-bawang-merah-60g",
    name: "Bumbu Komplit Nasi Goreng Bawang",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "mild",
    desc: "Harum bawang goreng dengan rasa gurih sedikit manis, nyaman untuk anak-anak dan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal", "vegan"],
  },
];

export default { items };
