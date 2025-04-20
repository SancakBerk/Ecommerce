import { OngoingItem, Product } from "@/app/types/homePageTypes";
import { Category } from "@/app/types/globalTypes";

export const products: Product[] = [
  {
    productId: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 149.99,
    stock: 30,
    category: "Electronics",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
    discountPercentage: 20,
  },
  {
    productId: 2,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with adjustable DPI and RGB lighting.",
    price: 59.99,
    stock: 50,
    category: "Accessories",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 3,
    name: "Smart Watch",
    description: "Fitness tracker with heart rate monitor and GPS.",
    price: 129.99,
    stock: 20,
    category: "Wearables",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 4,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with deep bass and long battery life.",
    price: 89.99,
    stock: 15,
    category: "Audio",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 5,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 6,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 7,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 149.99,
    stock: 30,
    category: "Electronics",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 8,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with adjustable DPI and RGB lighting.",
    price: 59.99,
    stock: 50,
    category: "Accessories",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 9,
    name: "Smart Watch",
    description: "Fitness tracker with heart rate monitor and GPS.",
    price: 129.99,
    stock: 20,
    category: "Wearables",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 10,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with deep bass and long battery life.",
    price: 89.99,
    stock: 15,
    category: "Audio",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 11,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 12,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 13,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 149.99,
    stock: 30,
    category: "Electronics",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 14,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with adjustable DPI and RGB lighting.",
    price: 59.99,
    stock: 50,
    category: "Accessories",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 15,
    name: "Smart Watch",
    description: "Fitness tracker with heart rate monitor and GPS.",
    price: 129.99,
    stock: 20,
    category: "Wearables",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 16,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with deep bass and long battery life.",
    price: 89.99,
    stock: 15,
    category: "Audio",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 17,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
  {
    productId: 18,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1672531199000, // Example timestamp
  },
];

export const latestOngoings: OngoingItem[] = [
  {
    id: 1,
    title: "Bahar Kampanyası Başladı!",
    description: "Seçili ürünlerde %50'ye varan indirimler seni bekliyor.",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1744746047,
    link: "/kampanyalar/bahar",
    author: "Daniel Wellington",
    authorImageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
  },
  {
    id: 2,
    title: "Yeni Koleksiyon: 2025 İlkbahar",
    description: "Moda dünyasında yeni trendlerle tanış!",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1744746047,
    link: "/koleksiyon/ilkbahar-2025",
    author: "Daniel Wellington",
    authorImageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
  },
  {
    id: 3,
    title: "Ücretsiz Kargo Fırsatı!",
    description: "150 TL ve üzeri alışverişlerde kargo ücretsiz.",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    date: 1744746047,
    author: "Daniel Wellington",
    authorImageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
  },
];

export const MONTHS_TR: string[] = [
  "Ocak",
  "Şubat",
  "Mart",
  "Nisan",
  "Mayıs",
  "Haziran",
  "Temmuz",
  "Ağustos",
  "Eylül",
  "Ekim",
  "Kasım",
  "Aralık",
];
export const MONTHS_EN: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Elektronik",
    slug: "elektronik",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Akıllı telefonlar, televizyonlar ve diğer elektronik ürünler",
    subCategories: [
      {
        id: 101,
        name: "Akıllı Telefonlar",
        slug: "akilli-telefonlar",
        parentId: 1,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
      {
        id: 102,
        name: "Televizyonlar",
        slug: "televizyonlar",
        parentId: 1,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
      {
        id: 103,
        name: "Bilgisayarlar",
        slug: "bilgisayarlar",
        parentId: 1,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
    ],
  },
  {
    id: 2,
    name: "Moda",
    slug: "moda",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Kadın, erkek ve çocuk modası",
    subCategories: [
      {
        id: 201,
        name: "Kadın Giyim",
        slug: "kadin-giyim",
        parentId: 2,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
      {
        id: 202,
        name: "Erkek Giyim",
        slug: "erkek-giyim",
        parentId: 2,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
      {
        id: 203,
        name: "Çocuk Giyim",
        slug: "cocuk-giyim",
        parentId: 2,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
    ],
  },
  {
    id: 3,
    name: "Ev & Yaşam",
    slug: "ev-yasam",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Mobilya, ev dekorasyonu ve yaşam ürünleri",
    subCategories: [
      {
        id: 301,
        name: "Mobilya",
        slug: "mobilya",
        parentId: 3,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
      {
        id: 302,
        name: "Dekorasyon",
        slug: "dekorasyon",
        parentId: 3,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
    ],
  },
  {
    id: 4,
    name: "Spor & Outdoor",
    slug: "spor-outdoor",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Spor malzemeleri, outdoor ekipmanları",
    subCategories: [
      {
        id: 401,
        name: "Kamp Ekipmanları",
        slug: "kamp-ekipmanlari",
        parentId: 4,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
      {
        id: 402,
        name: "Fitness Aletleri",
        slug: "fitness-aletleri",
        parentId: 4,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
    ],
  },
  {
    id: 5,
    name: "Kozmetik & Kişisel Bakım",
    slug: "kozmetik",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Makyaj, cilt bakımı, parfümler",
    subCategories: [
      {
        id: 501,
        name: "Makyaj",
        slug: "makyaj",
        parentId: 5,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
      {
        id: 502,
        name: "Cilt Bakımı",
        slug: "cilt-bakimi",
        parentId: 5,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
    ],
  },
  {
    id: 6,
    name: "Kitap & Kırtasiye",
    slug: "kitap-kirtasiye",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Kitaplar, defterler, ofis kırtasiyeleri",
    subCategories: [
      {
        id: 601,
        name: "Roman",
        slug: "roman",
        parentId: 6,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
      {
        id: 602,
        name: "Eğitim Kitapları",
        slug: "egitim-kitaplari",
        parentId: 6,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
    ],
  },
  {
    id: 7,
    name: "Anne & Bebek",
    slug: "anne-bebek",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Bebek ürünleri, bebek bezi, emzikler",
    subCategories: [
      {
        id: 701,
        name: "Bebek Bezleri",
        slug: "bebek-bezleri",
        parentId: 7,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
      {
        id: 702,
        name: "Emzikler",
        slug: "emzikler",
        parentId: 7,
        imageUrl:
          "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      },
    ],
  },
];

export const priceRanges = [
  { from: 0, to: 50, currency: "₺" },
  { from: 50, to: 100, currency: "₺" },
  { from: 100, to: 200, currency: "₺" },
  { from: 200, to: 500, currency: "₺" },
  { from: 500, to: 1000, currency: "₺" },
  { from: 1000, to: 5000, currency: "₺" },
  { from: 5000, to: Infinity, currency: "₺" },
];
