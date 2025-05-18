export interface discountCardType {
  discountPercentage: number;
}
export type ProductType = {
  productId: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string[];
  date: number;
  discountPercentage?: number;
  categoryId: number;
  parentCategoryId?: number;
  averageStars: number;
};

export type ProductReview = {
  reviewId: number;
  parentReviewId?: number;
  productId: number;
  userId: number;
  userName: string;
  userImageUrl: string;
  reviewDate: number;
  reviewText: string;
  givenStars: number;
  reviewLikes: number;
  reviewDislikes: number;
  reviewReplies?: ProductReview[];
};
export type ProductDetailsType = {
  productId: number;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl: string[];
  date: number;
  discountPercentage?: number;
  categoryId: number;
  parentCategoryId?: number;
  averageStars: number;
  reviews: ProductReview[];
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
