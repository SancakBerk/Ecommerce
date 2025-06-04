import {
  userType,
  productType,
  categoryType,
  cartItemType,
  productReviewType,
  orderType,
  ongoingItemType,
  serviceReturnType,
} from "../types/globalTypes";

const API_BASE_URL = "http://localhost:3005";

const fetchWithAuth = async <T>(
  endpoint: string,
  method: string,
  token?: string,
  body?: unknown
): Promise<serviceReturnType<T>> => {
  try {
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }

    const response = await fetch(`${API_BASE_URL}/${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();
    return {
      success: response.ok,
      data: response.ok ? data : undefined,
      message: response.ok ? undefined : data.message || "Bir hata oluştu",
      status: response.status,
    };
  } catch (error) {
    return {
      success: false,
      message:
        error instanceof Error ? error.message : "Bilinmeyen bir hata oluştu",
      status: 500,
    };
  }
};

// Users Service
export const createUser = async (
  user: userType
): Promise<serviceReturnType<userType>> => {
  return fetchWithAuth<userType>("users", "POST", undefined, user); // Token kaldırıldı
};

export const getAllUsers = async (
  token: string
): Promise<serviceReturnType<userType[]>> => {
  return fetchWithAuth<userType[]>("users", "GET", token);
};

export const getUserById = async (
  documentId: string,
  token: string
): Promise<serviceReturnType<userType>> => {
  return fetchWithAuth<userType>(`users/${documentId}`, "GET", token);
};

export const updateUser = async (
  documentId: string,
  user: Partial<userType>,
  token: string
): Promise<serviceReturnType<userType>> => {
  return fetchWithAuth<userType>(`users/${documentId}`, "PUT", token, user);
};

export const deleteUser = async (
  documentId: string,
  token: string
): Promise<serviceReturnType<void>> => {
  return fetchWithAuth<void>(`users/${documentId}`, "DELETE", token);
};

// Products Service
export const createProduct = async (
  product: productType,
  token: string
): Promise<serviceReturnType<productType>> => {
  return fetchWithAuth<productType>("products", "POST", token, product);
};

export const getAllProducts = async (): Promise<
  serviceReturnType<productType[]>
> => {
  return fetchWithAuth<productType[]>("products", "GET");
};

export const getProductById = async (
  productId: string
): Promise<serviceReturnType<productType>> => {
  return fetchWithAuth<productType>(`products/${productId}`, "GET");
};

export const updateProduct = async (
  productId: string,
  product: Partial<productType>,
  token: string
): Promise<serviceReturnType<productType>> => {
  return fetchWithAuth<productType>(
    `products/${productId}`,
    "PUT",
    token,
    product
  );
};

export const deleteProduct = async (
  productId: string,
  token: string
): Promise<serviceReturnType<void>> => {
  return fetchWithAuth<void>(`products/${productId}`, "DELETE", token);
};

// Reviews Service
export const createReview = async (
  review: productReviewType,
  token: string
): Promise<serviceReturnType<productReviewType>> => {
  return fetchWithAuth<productReviewType>("reviews", "POST", token, review);
};

export const getReviewsByProduct = async (
  productId: number
): Promise<serviceReturnType<productReviewType[]>> => {
  return fetchWithAuth<productReviewType[]>(
    `reviews/product/${productId}`,
    "GET"
  );
};

export const getReviewById = async (
  productId: string
): Promise<serviceReturnType<productReviewType[]>> => {
  return fetchWithAuth<productReviewType[]>(
    `reviews/product/${productId}`,
    "GET"
  );
};

export const updateReview = async (
  documentId: string,
  review: Partial<productReviewType>,
  token: string
): Promise<serviceReturnType<productReviewType>> => {
  return fetchWithAuth<productReviewType>(
    `reviews/${documentId}`,
    "PUT",
    token,
    review
  );
};

export const deleteReview = async (
  documentId: string,
  token: string
): Promise<serviceReturnType<void>> => {
  return fetchWithAuth<void>(`reviews/${documentId}`, "DELETE", token);
};

// Orders Service
export const createOrder = async (
  order: orderType,
  token: string
): Promise<serviceReturnType<orderType>> => {
  return fetchWithAuth<orderType>("orders", "POST", token, order);
};

export const getOrdersByUser = async (
  userId: number,
  token: string
): Promise<serviceReturnType<orderType[]>> => {
  return fetchWithAuth<orderType[]>(`orders/user/${userId}`, "GET", token);
};

export const getOrderById = async (
  documentId: string,
  token: string
): Promise<serviceReturnType<orderType>> => {
  return fetchWithAuth<orderType>(`orders/${documentId}`, "GET", token);
};

export const updateOrder = async (
  documentId: string,
  order: Partial<orderType>,
  token: string
): Promise<serviceReturnType<orderType>> => {
  return fetchWithAuth<orderType>(`orders/${documentId}`, "PUT", token, order);
};

export const deleteOrder = async (
  documentId: string,
  token: string
): Promise<serviceReturnType<void>> => {
  return fetchWithAuth<void>(`orders/${documentId}`, "DELETE", token);
};

// Ongoing Items Service
export const createOngoingItem = async (
  item: ongoingItemType,
  token: string
): Promise<serviceReturnType<ongoingItemType>> => {
  return fetchWithAuth<ongoingItemType>("ongoing-items", "POST", token, item);
};

export const getAllOngoingItems = async (): Promise<
  serviceReturnType<ongoingItemType[]>
> => {
  return fetchWithAuth<ongoingItemType[]>("ongoing-items", "GET");
};

export const getOngoingItemById = async (
  documentId: string
): Promise<serviceReturnType<ongoingItemType>> => {
  return fetchWithAuth<ongoingItemType>(`ongoing-items/${documentId}`, "GET");
};

export const updateOngoingItem = async (
  documentId: string,
  item: Partial<ongoingItemType>,
  token: string
): Promise<serviceReturnType<ongoingItemType>> => {
  return fetchWithAuth<ongoingItemType>(
    `ongoing-items/${documentId}`,
    "PUT",
    token,
    item
  );
};

export const deleteOngoingItem = async (
  documentId: string,
  token: string
): Promise<serviceReturnType<void>> => {
  return fetchWithAuth<void>(`ongoing-items/${documentId}`, "DELETE", token);
};

// Categories Service
export const createCategory = async (
  category: categoryType,
  token: string
): Promise<serviceReturnType<categoryType[]>> => {
  return fetchWithAuth<categoryType[]>("categories", "POST", token, category);
};

export const getAllCategories = async (): Promise<
  serviceReturnType<categoryType[]>
> => {
  return fetchWithAuth<categoryType[]>("categories", "GET");
};

export const getCategoryById = async (
  documentId: string
): Promise<serviceReturnType<categoryType>> => {
  return fetchWithAuth<categoryType>(`categories/${documentId}`, "GET");
};

export const updateCategory = async (
  documentId: string,
  category: Partial<categoryType>,
  token: string
): Promise<serviceReturnType<categoryType>> => {
  return fetchWithAuth<categoryType>(
    `categories/${documentId}`,
    "PUT",
    token,
    category
  );
};

export const deleteCategory = async (
  documentId: string,
  token: string
): Promise<serviceReturnType<void>> => {
  return fetchWithAuth<void>(`categories/${documentId}`, "DELETE", token);
};

// Cart Items Service
export const createCartItem = async (
  cartItem: cartItemType,
  token: string
): Promise<serviceReturnType<cartItemType>> => {
  return fetchWithAuth<cartItemType>("cart-items", "POST", token, cartItem);
};

export const getCartItemsByUser = async (
  userId: string,
  token: string
): Promise<serviceReturnType<cartItemType[]>> => {
  return fetchWithAuth<cartItemType[]>(
    `cart-items/user/${userId}`,
    "GET",
    token
  );
};

export const getCartItemById = async (
  documentId: string,
  token: string
): Promise<serviceReturnType<cartItemType>> => {
  return fetchWithAuth<cartItemType>(`cart-items/${documentId}`, "GET", token);
};

export const updateCartItem = async (
  documentId: string,
  cartItem: Partial<cartItemType>,
  token: string
): Promise<serviceReturnType<cartItemType>> => {
  return fetchWithAuth<cartItemType>(
    `cart-items/${documentId}`,
    "PUT",
    token,
    cartItem
  );
};

export const deleteCartItem = async (
  documentId: string,
  token: string
): Promise<serviceReturnType<void>> => {
  return fetchWithAuth<void>(`cart-items/${documentId}`, "DELETE", token);
};
