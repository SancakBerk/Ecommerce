import { Category, serviceReturnType } from "@/app/types/globalTypes";
import { Product } from "@/app/types/homePageTypes";
import { categories, products } from "@/utils/constants";

export const getCategories = async (): Promise<serviceReturnType> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    status: 200,
    success: true,
    data: categories as Category[],
    message: "Categories fetched successfully",
  };
};
export const getProducts = async (): Promise<serviceReturnType<Product[]>> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return {
    status: 200,
    success: true,
    data: products as Product[],
    message: "Categories fetched successfully",
  };
};
