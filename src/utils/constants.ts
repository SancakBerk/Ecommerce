import {
  OngoingItem,
  Product,
  ProductDetailsType,
} from "@/app/types/homePageTypes";
import { cartItemType, Category } from "@/app/types/globalTypes";

export const products: Product[] = [
  {
    productId: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 149.99,
    stock: 30,
    category: "Electronics",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    discountPercentage: 20,
    categoryId: 101,
    parentCategoryId: 1,
    averageStars: 4.5,
  },
  {
    productId: 2,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with adjustable DPI and RGB lighting.",
    price: 59.99,
    stock: 50,
    category: "Accessories",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 102,
    averageStars: 4.5,
  },
  {
    productId: 3,
    name: "Smart Watch",
    description: "Fitness tracker with heart rate monitor and GPS.",
    price: 129.99,
    stock: 20,
    category: "Wearables",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 103,
    parentCategoryId: 1,
    averageStars: 4.5,
  },
  {
    productId: 4,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with deep bass and long battery life.",
    price: 89.99,
    stock: 15,
    category: "Audio",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 104,
    averageStars: 4.5,
    parentCategoryId: 1,
  },
  {
    productId: 5,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 105,
    averageStars: 4.5,
  },
  {
    productId: 6,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 106,
    averageStars: 4.5,
  },
  {
    productId: 7,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 149.99,
    stock: 30,
    category: "Electronics",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 107,
    averageStars: 4.5,
  },
  {
    productId: 8,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with adjustable DPI and RGB lighting.",
    price: 59.99,
    stock: 50,
    category: "Accessories",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 108,
    averageStars: 4.5,
  },
  {
    productId: 9,
    name: "Smart Watch",
    description: "Fitness tracker with heart rate monitor and GPS.",
    price: 129.99,
    stock: 20,
    category: "Wearables",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 109,
    averageStars: 4.5,
  },
  {
    productId: 10,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with deep bass and long battery life.",
    price: 89.99,
    stock: 15,
    category: "Audio",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 110,
    averageStars: 4.5,
  },
  {
    productId: 11,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 111,
    averageStars: 4.5,
  },
  {
    productId: 12,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 112,
    averageStars: 4.5,
  },
  {
    productId: 13,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 149.99,
    stock: 30,
    category: "Electronics",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 113,
    averageStars: 4.5,
  },
  {
    productId: 14,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with adjustable DPI and RGB lighting.",
    price: 59.99,
    stock: 50,
    category: "Accessories",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 114,
    averageStars: 4.5,
  },
  {
    productId: 15,
    name: "Smart Watch",
    description: "Fitness tracker with heart rate monitor and GPS.",
    price: 129.99,
    stock: 20,
    category: "Wearables",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 115,
    averageStars: 4.5,
  },
  {
    productId: 16,
    name: "Bluetooth Speaker",
    description:
      "Portable Bluetooth speaker with deep bass and long battery life.",
    price: 89.99,
    stock: 15,
    category: "Audio",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 116,
    averageStars: 4.5,
  },
  {
    productId: 17,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 117,
    averageStars: 4.5,
  },
  {
    productId: 18,
    name: "Laptop Stand",
    description: "Adjustable aluminum laptop stand for better ergonomics.",
    price: 39.99,
    stock: 75,
    category: "Office",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000, // Example timestamp
    categoryId: 118,
    averageStars: 4.5,
  },
];

export const latestOngoings: OngoingItem[] = [
  {
    id: 1,
    title: "Bahar Kampanyası Başladı!",
    description: "Seçili ürünlerde %50'ye varan indirimler seni bekliyor.",
    imageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    date: 1744746047,
    link: "/kampanyalar/bahar",
    author: "Daniel Wellington",
    authorImageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
  },
  {
    id: 2,
    title: "Yeni Koleksiyon: 2025 İlkbahar",
    description: "Moda dünyasında yeni trendlerle tanış!",
    imageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    date: 1744746047,
    link: "/koleksiyon/ilkbahar-2025",
    author: "Daniel Wellington",
    authorImageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
  },
  {
    id: 3,
    title: "Ücretsiz Kargo Fırsatı!",
    description: "150 TL ve üzeri alışverişlerde kargo ücretsiz.",
    imageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    date: 1744746047,
    author: "Daniel Wellington",
    authorImageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
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
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    description: "Akıllı telefonlar, televizyonlar ve diğer elektronik ürünler",
    subCategories: [
      {
        id: 101,
        name: "Akıllı Telefonlar",
        slug: "akilli-telefonlar",
        parentId: 1,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
      {
        id: 102,
        name: "Televizyonlar",
        slug: "televizyonlar",
        parentId: 1,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
      {
        id: 103,
        name: "Bilgisayarlar",
        slug: "bilgisayarlar",
        parentId: 1,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
    ],
  },
  {
    id: 2,
    name: "Moda",
    slug: "moda",
    imageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    description: "Kadın, erkek ve çocuk modası",
    subCategories: [
      {
        id: 201,
        name: "Kadın Giyim",
        slug: "kadin-giyim",
        parentId: 2,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
      {
        id: 202,
        name: "Erkek Giyim",
        slug: "erkek-giyim",
        parentId: 2,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
      {
        id: 203,
        name: "Çocuk Giyim",
        slug: "cocuk-giyim",
        parentId: 2,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
    ],
  },
  {
    id: 3,
    name: "Ev & Yaşam",
    slug: "ev-yasam",
    imageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    description: "Mobilya, ev dekorasyonu ve yaşam ürünleri",
    subCategories: [
      {
        id: 301,
        name: "Mobilya",
        slug: "mobilya",
        parentId: 3,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
      {
        id: 302,
        name: "Dekorasyon",
        slug: "dekorasyon",
        parentId: 3,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "Spor & Outdoor",
    slug: "spor-outdoor",
    imageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    description: "Spor malzemeleri, outdoor ekipmanları",
    subCategories: [
      {
        id: 401,
        name: "Kamp Ekipmanları",
        slug: "kamp-ekipmanlari",
        parentId: 4,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
      {
        id: 402,
        name: "Fitness Aletleri",
        slug: "fitness-aletleri",
        parentId: 4,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Kozmetik & Kişisel Bakım",
    slug: "kozmetik",
    imageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    description: "Makyaj, cilt bakımı, parfümler",
    subCategories: [
      {
        id: 501,
        name: "Makyaj",
        slug: "makyaj",
        parentId: 5,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
      {
        id: 502,
        name: "Cilt Bakımı",
        slug: "cilt-bakimi",
        parentId: 5,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "Kitap & Kırtasiye",
    slug: "kitap-kirtasiye",
    imageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    description: "Kitaplar, defterler, ofis kırtasiyeleri",
    subCategories: [
      {
        id: 601,
        name: "Roman",
        slug: "roman",
        parentId: 6,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
      {
        id: 602,
        name: "Eğitim Kitapları",
        slug: "egitim-kitaplari",
        parentId: 6,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
    ],
  },
  {
    id: 7,
    name: "Anne & Bebek",
    slug: "anne-bebek",
    imageUrl:
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    description: "Bebek ürünleri, bebek bezi, emzikler",
    subCategories: [
      {
        id: 701,
        name: "Bebek Bezleri",
        slug: "bebek-bezleri",
        parentId: 7,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      },
      {
        id: 702,
        name: "Emzikler",
        slug: "emzikler",
        parentId: 7,
        imageUrl:
          "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
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
export const productDetails: ProductDetailsType[] = [
  {
    productId: 1,
    name: "Wireless Headphones",
    description: "High-quality wireless headphones with noise cancellation.",
    price: 149.99,
    stock: 30,
    category: "Electronics",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000,
    discountPercentage: 20,
    categoryId: 101,
    parentCategoryId: 1,
    averageStars: 4.5,
    reviews: [
      {
        reviewId: 1,
        productId: 1,
        userId: 1001,
        userName: "Zeynep Kaya",
        userImageUrl:
          "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
        reviewDate: 1672617599000,
        reviewText: "Mükemmel ses kalitesi, kulaklığı çok beğendim.",
        givenStars: 5,
        reviewDislikes: 0,
        reviewLikes: 10,
      },
      {
        reviewId: 2,
        productId: 1,
        userId: 1002,
        userName: "Mert Demir",
        userImageUrl:
          "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg",
        reviewDate: 1672703999000,
        reviewText: "Gürültü engelleme özelliği güzel ama biraz pahalı.",
        givenStars: 4,
        reviewDislikes: 1,
        reviewLikes: 5,
        reviewReplies: [
          {
            reviewId: 1,
            userId: 1003,
            userName: "Ali Çelik",
            userImageUrl:
              "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style",
            givenStars: 5,
            productId: 1,
            reviewDate: 1672790399000,
            reviewDislikes: 0,
            reviewLikes: 2,
            reviewText: "Fiyatına göre çok iyi bir ürün, tavsiye ederim.",
            reviewReplies: [],
          },
        ],
      },
    ],
  },
  {
    productId: 2,
    name: "Gaming Mouse",
    description: "Ergonomic gaming mouse with adjustable DPI and RGB lighting.",
    price: 59.99,
    stock: 50,
    category: "Accessories",
    imageUrl: [
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
    ],
    date: 1672531199000,
    categoryId: 102,
    parentCategoryId: 1,
    averageStars: 4.5,
    reviews: [
      {
        reviewId: 3,
        productId: 2,
        userId: 1003,
        userName: "Ali Çelik",
        userImageUrl: "https://example.com/users/ali.jpg",
        reviewDate: 1672786799000,
        reviewText: "Oyun için harika bir mouse, ışıklandırması da çok güzel.",
        givenStars: 5,
        reviewDislikes: 0,
        reviewLikes: 8,
        reviewReplies: [
          {
            reviewId: 1,
            parentReviewId: 3,
            userId: 1004,
            userName: "Ayşe Öz",
            userImageUrl:
              "https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style",
            givenStars: 4,
            productId: 2,
            reviewDate: 1672873199000,
            reviewDislikes: 0,
            reviewLikes: 3,
            reviewText:
              "Kablo kalitesi daha iyi olabilirdi ama genel olarak iyi.",
          },
          {
            reviewId: 4,
            productId: 2,
            userId: 1004,
            userName: "Ayşe Öz",
            userImageUrl: "https://example.com/users/ayse.jpg",
            reviewDate: 1672873199000,
            reviewText:
              "Kablo kalitesi daha iyi olabilirdi ama genel olarak iyi.",
            givenStars: 4,
            reviewDislikes: 0,
            reviewLikes: 3,
            parentReviewId: 3,
            reviewReplies: [],
          },
        ],
      },
    ],
  },
];

export const cartItems: cartItemType[] = [
  {
    product: {
      productId: 1,
      name: "Wireless Headphones",
      description:
        "Noise-cancelling over-ear headphones with Bluetooth connectivity.",
      price: 149.99,
      category: "Electronics",
      stock: 25,
      imageUrl: [
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      ],
      date: 20250420,
      discountPercentage: 10,
      categoryId: 101,
      parentCategoryId: 100,
      averageStars: 4.5,
    },
    quantity: 1,
  },
  {
    product: {
      productId: 2,
      name: "Ergonomic Office Chair",
      description:
        "Comfortable office chair with adjustable height and lumbar support.",
      price: 239.99,
      category: "Furniture",
      stock: 8,
      imageUrl: [
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      ],
      date: 20250415,
      discountPercentage: 15,
      categoryId: 201,
      parentCategoryId: 200,
      averageStars: 4.7,
    },
    quantity: 2,
  },
  {
    product: {
      productId: 3,
      name: "Smart LED Bulb",
      description: "Energy-saving bulb controllable via smartphone app.",
      price: 19.99,
      category: "Home",
      stock: 100,
      imageUrl: [
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      ],
      date: 20250422,
      categoryId: 301,
      parentCategoryId: 300,
      averageStars: 4.2,
    },
    quantity: 5,
  },
  {
    product: {
      productId: 4,
      name: "Gaming Mouse",
      description:
        "High-precision wired mouse with customizable DPI and RGB lighting.",
      price: 59.99,
      category: "Electronics",
      stock: 45,
      imageUrl: [
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
        "https://media.wired.com/photos/61bd571ff6b645152a4dc4ad/master/pass/Evolution-Luxury-Watches-Oris.jpg",
      ],
      date: 20250410,
      discountPercentage: 5,
      categoryId: 102,
      parentCategoryId: 100,
      averageStars: 4.6,
    },
    quantity: 1,
  },
];
