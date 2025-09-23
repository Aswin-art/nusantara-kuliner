export type Tag =
  | "non-msg"
  | "halal"
  | "no-preservatives"
  | "ready-to-use"
  | "vegan";

export type Item = {
  name: string;
  weight: string;
  image: string;
  spicy: "mild" | "medium" | "hot";
  desc: string;
  tags: Tag[];
};

const frozens: Item[] = [
  {
    name: "Rica - Rica Bebek",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "medium",
    desc: "Rendang khas Minang dengan cita rasa gurih pedas, tinggal tumis dan ungkep untuk hasil otentik.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Rica - Rica Ayam",
    weight: "60g",
    image: "/img/bumbu-komplit/rendang.JPG",
    spicy: "mild",
    desc: "Kuah hitam pekat dari kluwek khas Jawa Timur, gurih dan hangat, cocok untuk hidangan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Rendang Sapi",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaBebek.JPG",
    spicy: "mild",
    desc: "Kuah kuning segar wangi serai dan rempah, cocok untuk sarapan atau makan siang yang hangat.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Rendang Paru",
    weight: "60g",
    image: "/img/bumbu-komplit/rendang.JPG",
    spicy: "mild",
    desc: "Santan gurih lembut dengan daun salam dan lengkuas, pas untuk lontong sayur khas Lebaran.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Ayam Goreng Ketumbar",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "hot",
    desc: "Pedas segar khas Manado dengan aroma cabai merah, cocok untuk ayam maupun seafood.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },

  {
    name: "Ayam Balado",
    weight: "60g",
    image: "/img/bumbu-komplit/rendang.JPG",
    spicy: "medium",
    desc: "Nasi goreng khas dengan aroma gurih ikan cakalang asap yang sedap dan menggugah selera.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Ikan Kembung Balado",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "mild",
    desc: "Harum bawang goreng dengan rasa gurih sedikit manis, nyaman untuk anak-anak dan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal", "vegan"],
  },
  {
    name: "Ayam Taliwang",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaBebek.JPG",
    spicy: "hot",
    desc: "Segar pedas khas Bali dari bawang, cabai, dan jeruk limau yang menggugah selera.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
];

const bumbuInstans: Item[] = [
  {
    name: "Balado",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "medium",
    desc: "Rendang khas Minang dengan cita rasa gurih pedas, tinggal tumis dan ungkep untuk hasil otentik.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Rendang",
    weight: "60g",
    image: "/img/bumbu-komplit/rendang.JPG",
    spicy: "mild",
    desc: "Kuah hitam pekat dari kluwek khas Jawa Timur, gurih dan hangat, cocok untuk hidangan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Rica - Rica",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaBebek.JPG",
    spicy: "mild",
    desc: "Kuah kuning segar wangi serai dan rempah, cocok untuk sarapan atau makan siang yang hangat.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Ayam Taliwang",
    weight: "60g",
    image: "/img/bumbu-komplit/rendang.JPG",
    spicy: "mild",
    desc: "Santan gurih lembut dengan daun salam dan lengkuas, pas untuk lontong sayur khas Lebaran.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Opor Ayam",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "hot",
    desc: "Pedas segar khas Manado dengan aroma cabai merah, cocok untuk ayam maupun seafood.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
];

const sambals: Item[] = [
  {
    name: "Cabai Rawit",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "medium",
    desc: "Rendang khas Minang dengan cita rasa gurih pedas, tinggal tumis dan ungkep untuk hasil otentik.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Cabai Ijo",
    weight: "60g",
    image: "/img/bumbu-komplit/rendang.JPG",
    spicy: "mild",
    desc: "Kuah hitam pekat dari kluwek khas Jawa Timur, gurih dan hangat, cocok untuk hidangan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Bawang",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaBebek.JPG",
    spicy: "mild",
    desc: "Kuah kuning segar wangi serai dan rempah, cocok untuk sarapan atau makan siang yang hangat.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Udang",
    weight: "60g",
    image: "/img/bumbu-komplit/rendang.JPG",
    spicy: "mild",
    desc: "Santan gurih lembut dengan daun salam dan lengkuas, pas untuk lontong sayur khas Lebaran.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Cumi",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "hot",
    desc: "Pedas segar khas Manado dengan aroma cabai merah, cocok untuk ayam maupun seafood.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },

  {
    name: "Cakalang",
    weight: "60g",
    image: "/img/bumbu-komplit/rendang.JPG",
    spicy: "medium",
    desc: "Nasi goreng khas dengan aroma gurih ikan cakalang asap yang sedap dan menggugah selera.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Ayam Suwir",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "mild",
    desc: "Harum bawang goreng dengan rasa gurih sedikit manis, nyaman untuk anak-anak dan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal", "vegan"],
  },
  {
    name: "Bebek",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaBebek.JPG",
    spicy: "hot",
    desc: "Segar pedas khas Bali dari bawang, cabai, dan jeruk limau yang menggugah selera.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal"],
  },
  {
    name: "Matah",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "mild",
    desc: "Harum bawang goreng dengan rasa gurih sedikit manis, nyaman untuk anak-anak dan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal", "vegan"],
  },
  {
    name: "Tomat",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "mild",
    desc: "Harum bawang goreng dengan rasa gurih sedikit manis, nyaman untuk anak-anak dan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal", "vegan"],
  },
  {
    name: "Kecap",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "mild",
    desc: "Harum bawang goreng dengan rasa gurih sedikit manis, nyaman untuk anak-anak dan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal", "vegan"],
  },
  {
    name: "Kacang",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "mild",
    desc: "Harum bawang goreng dengan rasa gurih sedikit manis, nyaman untuk anak-anak dan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal", "vegan"],
  },
  {
    name: "Teri",
    weight: "60g",
    image: "/img/bumbu-komplit/RicaAyam.JPG",
    spicy: "mild",
    desc: "Harum bawang goreng dengan rasa gurih sedikit manis, nyaman untuk anak-anak dan keluarga.",
    tags: ["ready-to-use", "non-msg", "no-preservatives", "halal", "vegan"],
  },
];

export { frozens, sambals, bumbuInstans };
