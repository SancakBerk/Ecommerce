import { cartItemType } from "@/app/types/globalTypes";
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
