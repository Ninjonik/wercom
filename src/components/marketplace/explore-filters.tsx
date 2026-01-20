"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export type ExploreFiltersValue = {
  q: string;
  category: "all" | "train-models" | "tracks" | "signals" | "general";
  sort: "recommended" | "new" | "price-asc" | "price-desc" | "rating";
};

export function ExploreFilters({
  value,
  onChange,
  className,
}: {
  value: ExploreFiltersValue;
  onChange: (next: ExploreFiltersValue) => void;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-3 lg:grid-cols-12", className)}>
      <div className="lg:col-span-6">
        <Input
          value={value.q}
          onChange={(e) => onChange({ ...value, q: e.target.value })}
          placeholder="Search wagons, tracks, semaphores…"
          aria-label="Search"
          className="h-11 rounded-2xl"
        />
      </div>
      <div className="lg:col-span-3">
        <Select
          value={value.category}
          onValueChange={(v) =>
            onChange({ ...value, category: v as ExploreFiltersValue["category"] })
          }
        >
          <SelectTrigger className="h-11 rounded-2xl">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All categories</SelectItem>
            <SelectItem value="train-models">Train models</SelectItem>
            <SelectItem value="tracks">Tracks</SelectItem>
            <SelectItem value="signals">Signals</SelectItem>
            <SelectItem value="general">General Roblox</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="lg:col-span-3">
        <Select
          value={value.sort}
          onValueChange={(v) =>
            onChange({ ...value, sort: v as ExploreFiltersValue["sort"] })
          }
        >
          <SelectTrigger className="h-11 rounded-2xl">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="recommended">Recommended</SelectItem>
            <SelectItem value="new">Newest</SelectItem>
            <SelectItem value="rating">Top rated</SelectItem>
            <SelectItem value="price-asc">Price: low → high</SelectItem>
            <SelectItem value="price-desc">Price: high → low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

export function useExploreFiltering<T extends {
  name: string;
  description: string;
  tags: string[];
  category: string;
  priceCredits: number;
  rating: number;
  createdAtISO: string;
}>(items: T[], value: ExploreFiltersValue) {
  return React.useMemo(() => {
    const q = value.q.trim().toLowerCase();

    const filtered = items.filter((p) => {
      if (value.category !== "all" && p.category !== value.category) return false;
      if (!q) return true;

      const haystack = [p.name, p.description, ...p.tags]
        .join(" ")
        .toLowerCase();

      return haystack.includes(q);
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (value.sort) {
        case "new":
          return b.createdAtISO.localeCompare(a.createdAtISO);
        case "price-asc":
          return a.priceCredits - b.priceCredits;
        case "price-desc":
          return b.priceCredits - a.priceCredits;
        case "rating":
          return b.rating - a.rating;
        case "recommended":
        default:
          // light "recommended": rating weight + recency
          return b.rating * 10 + Date.parse(b.createdAtISO) - (a.rating * 10 + Date.parse(a.createdAtISO));
      }
    });

    return sorted;
  }, [items, value.category, value.q, value.sort]);
}
