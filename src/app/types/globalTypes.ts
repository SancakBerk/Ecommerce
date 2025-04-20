export type Category = {
  id: number;
  name: string;
  slug: string;
  subCategories?: Category[];
  imageUrl: string;
  description?: string;
  parentId?: number;
};

export type serviceReturnType<T = unknown> = {
  success: boolean;
  data?: T;
  message?: string;
  status: number;
};
export type priceRangeType = {
  from: number;
  to: number;
  currency: string;
};
