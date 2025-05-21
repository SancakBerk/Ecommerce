import { cartItemType } from "@/types/globalTypes";
import axios from "axios";
const shippingCost = 100; // Example shipping cost

export const calculateTotalPrice = (
  addshipping = false,
  cartData: cartItemType[]
): string => {
  let totalPrice = 0;

  cartData.forEach((item) => {
    const discountedPrice = item.product.discountPercentage
      ? item.product.price -
        (item.product.price * item.product.discountPercentage) / 100
      : item.product.price; // Calculate discounted price if applicable

    totalPrice += discountedPrice * item.quantity;
  });
  if (addshipping) {
    totalPrice += shippingCost; // Add shipping cost
  }
  return totalPrice.toFixed(2);
};
export const getToken = (): string | null => {
  return localStorage.getItem("token"); // veya senin kullanmakta olduğun token alma yöntemi
};
// Jenerik tip ile rastgele veri seçme fonksiyonu
export const getRandomItems = <T>(list: T[], count: number): T[] => {
  // Hata kontrolleri
  if (!Array.isArray(list)) {
    throw new Error("Geçersiz giriş: Liste bir dizi olmalıdır.");
  }
  if (count < 0) {
    throw new Error("Geçersiz giriş: İstenilen veri miktarı negatif olamaz.");
  }
  if (count > list.length) {
    throw new Error(
      `Geçersiz giriş: İstenilen veri miktarı (${count}) listedeki eleman sayısından (${list.length}) fazla olamaz.`
    );
  }

  // Liste kopyasını oluştur (orijinal listeyi değiştirmemek için)
  const shuffled = [...list];
  // Fisher-Yates karıştırma algoritması
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // İlk 'count' elemanı al
  return shuffled.slice(0, count);
};

export const verifyToken = async (token: string): Promise<boolean> => {
  try {
    const res = await axios.get("http://localhost:3005/auth/verify-token", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data?.success === true;
  } catch {
    return false;
  }
};
