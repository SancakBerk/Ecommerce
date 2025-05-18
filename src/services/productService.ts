import {
  cartItemType,
  Category,
  serviceReturnType,
} from "@/app/types/globalTypes";
import { ProductType, ProductDetailsType } from "@/app/types/homePageTypes";
import {
  cartItems,
  categories,
  productDetails,
  products,
} from "@/utils/constants";

export const getCategories = async (): Promise<serviceReturnType> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    status: 200,
    success: true,
    data: categories as Category[],
    message: "Categories fetched successfully",
  };
};
export const getProducts = async (): Promise<
  serviceReturnType<ProductType[]>
> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    status: 200,
    success: true,
    data: products as ProductType[],
    message: "Categories fetched successfully",
  };
};
export const getProductById = async (
  productId: number
): Promise<serviceReturnType<ProductDetailsType>> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    status: 200,
    success: true,
    data: productDetails[0] as ProductDetailsType,
    message: "Categories fetched successfully" + productId,
  };
};
export const getCartByUserId = async (
  userId: number
): Promise<serviceReturnType<cartItemType[]>> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    status: 200,
    success: true,
    data: cartItems as cartItemType[],
    message: "Categories fetched successfully" + userId,
  };
};

export const updateCartByUserId = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    status: 200,
    success: true,
    data: cartItems as cartItemType[],
    message: "Categories fetched successfully",
  };
};
