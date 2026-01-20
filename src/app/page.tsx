import Link from "next/link";

import { Container } from "@/components/shell/container";
import { MarketplaceMetrics } from "@/components/home/marketplace-metrics";
import { SellerSpotlight } from "@/components/home/seller-spotlight";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import ProductCard03 from "@/components/commerce-ui/product-card-03";

const featuredProducts = [
  {
    slug: "northern-line-emus-pack",
    title: "Northern Line EMUs Pack",
    subtitle: "Modern commuter set • Roblox-ready",
    priceCredits: 1299,
    tags: ["Trains", "Optimized", "PBR"],
  },
  {
    slug: "london-underground-signals-kit",
    title: "Signal & Semaphore Kit",
    subtitle: "Trackside signals with clean scripts (template)",
    priceCredits: 499,
    tags: ["Signals", "Semaphores", "Modular"],
  },
  {
    slug: "ballasted-track-system",
    title: "Ballasted Track System",
    subtitle: "Curves, switches, and sleepers — cohesive",
    priceCredits: 799,
    tags: ["Tracks", "Spline", "LOD"],
  },
];

const categories = [
  {
    name: "Train Models",
    slug: "train-models",
    description: "EMUs, locomotives, rolling stock.",
  },
  {
    name: "Tracks",
    slug: "tracks",
    description: "Trackbeds, switches, curves.",
  },
  {
    name: "Signals",
    slug: "signals",
    description: "Signals, semaphores, signage.",
  },
  {
    name: "General Roblox",
    slug: "general",
    description: "UI, assets, systems, VFX.",
  },
];

const trendingProducts = [
  {
    slug: "northern-line-emus-pack",
    title: "Northern Line EMUs Pack",
    description: "Modern commuter set with clean materials and LODs.",
    priceCredits: 1299,
    originalPriceCredits: 1599,
    rating: 4.8,
    reviewCount: 126,
    tagText: "TRENDING",
  },
  {
    slug: "ballasted-track-system",
    title: "Ballasted Track System",
    description: "Curves, switches, and sleepers — cohesive and optimized.",
    priceCredits: 799,
    originalPriceCredits: 999,
    rating: 4.6,
    reviewCount: 84,
    tagText: "NEW",
  },
  {
    slug: "london-underground-signals-kit",
    title: "Signal & Semaphore Kit",
    description: "Trackside signals plus templates for scripts.",
    priceCredits: 499,
    originalPriceCredits: 499,
    rating: 4.7,
    reviewCount: 57,
    tagText: "ON SALE",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <HeroHighlight containerClassName="h-auto bg-transparent" className="w-full">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-20 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-zinc-200/60 blur-3xl dark:bg-zinc-900/60" />
            <div className="absolute -bottom-24 left-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-zinc-200/40 blur-3xl dark:bg-zinc-900/40" />
          </div>

          <Container className="relative py-16 sm:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <div className="flex items-center justify-center gap-2">
                <Badge variant="outline">Template-only</Badge>
                <Badge>Credits Economy</Badge>
              </div>

              <div className="mt-6 flex flex-col items-center gap-4">
                <TypewriterEffect
                  words={[
                    {
                      text: "A",
                    },
                    {
                      text: "Roblox",
                    },
                    {
                      text: "marketplace",
                    },
                    {
                      text: "that",
                    },
                    {
                      text: "feels",
                    },
                    {
                      text: "like",
                    },
                    {
                      text: "a",
                    },
                    {
                      text: "Mac",
                      className: "text-zinc-950 dark:text-zinc-50",
                    },
                    {
                      text: "app.",
                      className: "text-zinc-950 dark:text-zinc-50",
                    },
                  ]}
                  className="text-balance text-4xl font-semibold tracking-tight sm:text-6xl"
                  cursorClassName="bg-zinc-950 dark:bg-zinc-50"
                />

                <p className="text-pretty text-lg text-zinc-600 dark:text-zinc-400">
                  Sleek storefront UI for train models, tracks, signals—and the rest of
                  the Roblox ecosystem. SSR-first pages, mock data only.
                </p>

                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  Purchase with <Highlight>Credits</Highlight>. Build a seller profile.
                  Unlock verification.
                </p>
              </div>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/explore">Explore products</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/login">Continue with Discord</Link>
                </Button>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-5 text-left shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
                  <div className="text-sm font-medium">Apple-like pacing</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Whitespace, subtle borders, soft motion.
                  </div>
                </div>
                <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-5 text-left shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
                  <div className="text-sm font-medium">Credits economy</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Robux → credits (mock). Purchases use credits.
                  </div>
                </div>
                <div className="rounded-3xl border border-zinc-200/70 bg-white/70 p-5 text-left shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
                  <div className="text-sm font-medium">Verified selling</div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                    Selling disabled until manually verified.
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </HeroHighlight>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <MarketplaceMetrics />
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Trending right now
              </h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                A commerce-style row (mock) using the commerce-ui card.
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/explore">View all</Link>
            </Button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {trendingProducts.map((p) => (
              <div key={p.slug} className="flex justify-center md:justify-start">
                <ProductCard03
                  tagText={p.tagText}
                  productName={p.title}
                  rating={p.rating}
                  reviewCount={p.reviewCount}
                  currencyPrefix=""
                  originalPrice={p.originalPriceCredits}
                  salePrice={p.priceCredits}
                  freeShipping={false}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Featured
              </h2>
              <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                Curated mock listings that show the layout and polish.
              </p>
            </div>
            <Button asChild variant="ghost">
              <Link href="/explore">View all</Link>
            </Button>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredProducts.map((p) => (
              <Card key={p.slug} className="group">
                <CardHeader>
                  <CardTitle className="text-lg">{p.title}</CardTitle>
                  <CardDescription>{p.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <Badge key={t} variant="outline">
                        {t}
                      </Badge>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      From
                      <span className="ml-2 text-base font-semibold text-zinc-950 dark:text-zinc-50">
                        {p.priceCredits.toLocaleString()} Credits
                      </span>
                    </div>
                    <Button asChild>
                      <Link href={`/product/${p.slug}`}>Open</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <SellerSpotlight />

      <section className="py-10 sm:py-14">
        <Container>
          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Browse by category
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/explore?category=${encodeURIComponent(c.slug)}`}
                className="rounded-3xl border border-zinc-200/70 bg-white p-5 shadow-sm shadow-zinc-950/5 transition hover:bg-zinc-50 dark:border-zinc-800/70 dark:bg-zinc-950 dark:hover:bg-zinc-900"
              >
                <div className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
                  {c.name}
                </div>
                <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  {c.description}
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-10 sm:py-14">
        <Container>
          <div className="rounded-3xl border border-zinc-200/70 bg-gradient-to-b from-zinc-50 to-white p-8 shadow-sm shadow-zinc-950/5 dark:border-zinc-800/70 dark:from-zinc-950 dark:to-black">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-xl font-semibold tracking-tight">
                  Built for creators.
                </h3>
                <p className="mt-2 max-w-xl text-sm text-zinc-600 dark:text-zinc-400">
                  Every account can become a seller—once verified by admins.
                  This template shows the UI states only.
                </p>
              </div>
              <div className="flex gap-3">
                <Button asChild variant="outline">
                  <Link href="/profile/railworks">View sample profile</Link>
                </Button>
                <Button asChild>
                  <Link href="/login">Sign in</Link>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
