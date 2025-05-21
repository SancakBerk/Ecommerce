export type userType = {
  email: string;
  password: string;
  name?: string;
};

export type productType = {
  productId: number;
  documentId: string;
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

export type categoryType = {
  categoryId: number;
  documentId: string;
  name: string;
  slug: string;
  subCategories?: categoryType[];
  imageUrl: string;
  description?: string;
  parentId?: number;
};

export type cartItemType = {
  cartItemId: number;
  documentId: string;
  userId: number;
  product: productType;
  quantity: number;
};

export type productReviewType = {
  reviewId: number;
  documentId: string;
  productId: number;
  userId: number;
  userName: string;
  userImageUrl: string;
  reviewDate: number;
  reviewText: string;
  givenStars: number;
  reviewLikes: number;
  reviewDislikes: number;
  reviewReplies?: productReviewType[];
};

export type orderType = {
  orderId: number;
  documentId: string;
  userId: number;
  items: cartItemType[];
  totalAmount: number;
  status: "pending" | "shipped" | "delivered" | "cancelled";
  createdAt: number;
  shippingAddress?: {
    street: string;
    city: string;
    country: string;
    postalCode: string;
  };
  paymentMethod: "creditCard" | "paypal" | "cashOnDelivery";
};

export type ongoingItemType = {
  itemId: number;
  documentId: string;
  title: string;
  description: string;
  imageUrl: string;
  date: number;
  link?: string;
  author: string;
  authorImageUrl: string;
};

export type serviceReturnType<T = unknown> = {
  success: boolean;
  data?: T;
  message?: string;
  status: number;
};

export type productDetailsType = productType & {
  reviews: productReviewType[];
};
