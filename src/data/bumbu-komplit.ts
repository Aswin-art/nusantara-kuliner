export type Tag = "non-msg" | "halal" | "no-preservatives" | "ready-to-use" | "vegan";
export type Item = {
  slug: string; name: string; weight: string; image: string;
  spicy: "mild" | "medium" | "hot"; desc: string; tags: Tag[];
};

const items: Item[] = [
  { slug:"rendang-60g", name:"Bumbu Komplit Rendang", weight:"60g",
    image:"/img/bumbu-komplit/bumbu.jpeg", spicy:"medium",
    desc:"Rendang minang: kaya rempah, tinggal tumis & ungkep.",
    tags:["ready-to-use","non-msg","no-preservatives","halal"] },
  { slug:"rawon-60g", name:"Bumbu Komplit Rawon", weight:"60g",
    image:"/img/bumbu-komplit/bumbu.jpeg", spicy:"mild",
    desc:"Kluwek pekat khas Jawa Timur, gurih & hangat.",
    tags:["ready-to-use","non-msg","no-preservatives","halal"] },
  { slug:"soto-ayam-60g", name:"Bumbu Komplit Soto Ayam", weight:"60g",
    image:"/img/bumbu-komplit/bumbu.jpeg", spicy:"mild",
    desc:"Kuah kuning segar, wangi serai, pas sarapan.",
    tags:["ready-to-use","non-msg","no-preservatives","halal"] },
  { slug:"lontong-60g", name:"Bumbu Komplit Lontong Sayur", weight:"60g",
    image:"/img/bumbu-komplit/bumbu.jpeg", spicy:"mild",
    desc:"Santan gurih lembut, daun salam & lengkuas.",
    tags:["ready-to-use","non-msg","no-preservatives","halal"] },
  { slug:"rica-merah-60g", name:"Bumbu Komplit Rica-Rica Merah", weight:"60g",
    image:"/img/bumbu-komplit/bumbu.jpeg", spicy:"hot",
    desc:"Pedas segar ala Manado. Cocok ayam/seafood.",
    tags:["ready-to-use","non-msg","no-preservatives","halal"] },

  // — varian Nasi Goreng (biar match screenshot) —
  { slug:"nasgor-cakalang-60g", name:"Bumbu Komplit Nasi Goreng Ikan Cakalang", weight:"60g",
    image:"/img/bumbu-komplit/bumbu.jpeg", spicy:"medium",
    desc:"Aromatik gurih ikan cakalang asap, sedap nendang.",
    tags:["ready-to-use","non-msg","no-preservatives","halal"] },
  { slug:"nasgor-bawang-60g", name:"Bumbu Komplit Nasi Goreng Bawang", weight:"60g",
    image:"/img/bumbu-komplit/bumbu.jpeg", spicy:"mild",
    desc:"Harum bawang & sedikit manis gurih, nyaman buat anak.",
    tags:["ready-to-use","non-msg","no-preservatives","halal","vegan"] },
  { slug:"nasgor-sambal-matah-60g", name:"Bumbu Komplit Nasi Goreng Sambal Matah", weight:"60g",
    image:"/img/bumbu-komplit/bumbu.jpeg", spicy:"hot",
    desc:"Segar pedas bawang & jeruk limau, khas Bali.",
    tags:["ready-to-use","non-msg","no-preservatives","halal"] },
];

export default { items };
