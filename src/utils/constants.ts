import { Category, OngoingItem, Product } from "@/app/types/homePageTypes";

export const products: Product[] = [
  {
    productId: "prod_001",
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
    productId: "prod_002",
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
    productId: "prod_003",
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
    productId: "prod_004",
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
    productId: "prod_005",
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
    productId: "prod_005",
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
    productId: "prod_001",
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
    productId: "prod_002",
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
    productId: "prod_003",
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
    productId: "prod_004",
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
    productId: "prod_005",
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
    productId: "prod_005",
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
    productId: "prod_001",
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
    productId: "prod_002",
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
    productId: "prod_003",
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
    productId: "prod_004",
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
    productId: "prod_005",
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
    productId: "prod_005",
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

export const categories: Category[] = [
  {
    id: 1,
    name: "Elektronik",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "En yeni teknoloji ürünleri",
  },
  {
    id: 2,
    name: "Moda",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Kadın ve erkek giyim ürünleri",
  },
  {
    id: 3,
    name: "Ev & Yaşam",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Mobilya, mutfak ve dekorasyon ürünleri",
  },
  {
    id: 4,
    name: "Kozmetik",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Makyaj ve kişisel bakım ürünleri",
  },
  {
    id: 5,
    name: "Spor & Outdoor",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Spor ekipmanları ve outdoor ürünleri",
  },
  {
    id: 6,
    name: "Kitap & Kırtasiye",
    imageUrl:
      "https://in.danielwellington.com/cdn/shop/products/731ffc3293c27cb7ae988a77f0db561c635e3b38.png?v=1679929601&width=1500",
    description: "Kitaplar, ofis ve okul ürünleri",
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
