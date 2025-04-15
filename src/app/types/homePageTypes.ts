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
export type OngoingItem = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  date: number;
  link?: string;
  author: string;
  authorImageUrl: string;
};
