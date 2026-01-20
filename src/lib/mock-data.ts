import type { Order, Product, Seller, SessionUser } from "@/lib/types";

const todayISO = new Date().toISOString();

export const mockSession: SessionUser = {
  id: "u_1",
  handle: "juno",
  displayName: "Juno",
  avatarUrl:
    "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-01.jpg",
  role: "seller",
  creditsBalance: 2450,
  sellerApproved: true,
  sellerHandle: "railworks",
};

export const mockSellers: Seller[] = [
  {
    id: "s_1",
    handle: "railworks",
    displayName: "Railworks Studio",
    avatarUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-02.jpg",
    level: 18,
    xp: 1840,
    xpToNextLevel: 2200,
    verified: true,
    bio: "We ship clean Roblox train assets: optimized meshes, PBR materials, and reasonable LODs.",
    specialties: ["Trains", "PBR", "LOD"],
    stats: {
      totalSales: 642,
      avgRating: 4.9,
      reviewCount: 312,
      followers: 4800,
    },
  },
  {
    id: "s_2",
    handle: "signalcraft",
    displayName: "Signalcraft",
    avatarUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-03.jpg",
    level: 11,
    xp: 820,
    xpToNextLevel: 1200,
    verified: true,
    bio: "Signals and semaphores that just work. Modular kits with templates and docs.",
    specialties: ["Signals", "Scripting", "Modular"],
    stats: {
      totalSales: 281,
      avgRating: 4.7,
      reviewCount: 146,
      followers: 1200,
    },
  },
  {
    id: "s_3",
    handle: "tracklab",
    displayName: "Tracklab",
    avatarUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/user-04.jpg",
    level: 9,
    xp: 610,
    xpToNextLevel: 740,
    verified: false,
    bio: "Track geometry, switches, and spline-friendly systems. Verification pending.",
    specialties: ["Tracks", "Switches", "Spline"],
    stats: {
      totalSales: 118,
      avgRating: 4.6,
      reviewCount: 72,
      followers: 310,
    },
  },
];

export const mockProducts: Product[] = [
  {
    id: "p_1",
    slug: "northern-line-emus-pack",
    name: "Northern Line EMUs Pack",
    description: "Modern commuter set with clean materials and LODs.",
    category: "train-models",
    tags: ["Trains", "Optimized", "PBR"],
    priceCredits: 1299,
    originalPriceCredits: 1599,
    rating: 4.8,
    reviewCount: 126,
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/headphone-1.jpg",
    sellerHandle: "railworks",
    status: "published",
    createdAtISO: todayISO,
  },
  {
    id: "p_2",
    slug: "ballasted-track-system",
    name: "Ballasted Track System",
    description: "Curves, switches, and sleepers — cohesive and optimized.",
    category: "tracks",
    tags: ["Tracks", "Spline", "LOD"],
    priceCredits: 799,
    originalPriceCredits: 999,
    rating: 4.6,
    reviewCount: 84,
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/speaker-01.jpg",
    sellerHandle: "tracklab",
    status: "published",
    createdAtISO: todayISO,
  },
  {
    id: "p_3",
    slug: "london-underground-signals-kit",
    name: "Signal & Semaphore Kit",
    description: "Trackside signals plus templates for scripts.",
    category: "signals",
    tags: ["Signals", "Semaphores", "Modular"],
    priceCredits: 499,
    rating: 4.7,
    reviewCount: 57,
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/coffee-machine-02.jpg",
    sellerHandle: "signalcraft",
    status: "published",
    createdAtISO: todayISO,
  },
  {
    id: "p_4",
    slug: "starter-ui-pack",
    name: "Starter UI Pack",
    description: "Buttons, panels, and HUD widgets for gameplay menus.",
    category: "general",
    tags: ["UI", "HUD", "Clean"],
    priceCredits: 299,
    originalPriceCredits: 399,
    rating: 4.4,
    reviewCount: 41,
    imageUrl:
      "https://raw.githubusercontent.com/stackzero-labs/ui/refs/heads/main/public/placeholders/tablet-01.jpg",
    sellerHandle: "railworks",
    status: "draft",
    createdAtISO: todayISO,
  },
];

export const mockOrders: Order[] = [
  {
    id: "o_1",
    orderNumber: "WC-10421",
    buyerHandle: mockSession.handle,
    sellerHandle: "railworks",
    productIds: ["p_1"],
    totalCredits: 1299,
    status: "delivered",
    createdAtISO: todayISO,
  },
  {
    id: "o_2",
    orderNumber: "WC-10472",
    buyerHandle: mockSession.handle,
    sellerHandle: "signalcraft",
    productIds: ["p_3"],
    totalCredits: 499,
    status: "pending",
    createdAtISO: todayISO,
  },
];

export function getSellerByHandle(handle: string) {
  return mockSellers.find((s) => s.handle === handle) ?? null;
}

export function getProductById(id: string) {
  return mockProducts.find((p) => p.id === id) ?? null;
}

export function getProductBySlug(slug: string) {
  return mockProducts.find((p) => p.slug === slug) ?? null;
}

export function getProductsBySellerHandle(sellerHandle: string) {
  return mockProducts.filter((p) => p.sellerHandle === sellerHandle);
}
