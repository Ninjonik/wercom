export type UserRole = "user" | "seller" | "admin";

export type SellerStats = {
  totalSales: number;
  avgRating: number;
  reviewCount: number;
  followers: number;
};

export type Seller = {
  id: string;
  handle: string;
  displayName: string;
  avatarUrl: string;
  level: number;
  xp: number;
  xpToNextLevel: number;
  verified: boolean;
  bio: string;
  specialties: string[];
  stats: SellerStats;
};

export type ProductCategory =
  | "train-models"
  | "tracks"
  | "signals"
  | "general";

export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: ProductCategory;
  tags: string[];
  priceCredits: number;
  originalPriceCredits?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  sellerHandle: string;
  status: "draft" | "published";
  createdAtISO: string;
};

export type OrderStatus = "pending" | "delivered" | "cancelled";

export type Order = {
  id: string;
  orderNumber: string;
  buyerHandle: string;
  sellerHandle: string;
  productIds: string[];
  totalCredits: number;
  status: OrderStatus;
  createdAtISO: string;
};

export type SessionUser = {
  id: string;
  handle: string;
  displayName: string;
  avatarUrl: string;
  role: UserRole;
  creditsBalance: number;
  sellerApproved: boolean;
  sellerHandle?: string;
};
