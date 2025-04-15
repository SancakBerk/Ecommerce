export interface discountCardType {
  discountPercentage: number;
}
export type Product = {
  productId: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string;
  date: number;
  discountPercentage?: number;
};

export type Category = {
  id: number;
  name: string;
  imageUrl: string;
  description?: string;
};
