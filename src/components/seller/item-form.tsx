"use client";

import * as React from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { type Product, type ProductCategory } from "@/lib/types";

type ItemFormValue = {
  name: string;
  description: string;
  category: ProductCategory;
  priceCredits: number;
  originalPriceCredits?: number;
  tags: string;
  status: "draft" | "published";
  imageUrl: string;
};

function toFormValue(product?: Product): ItemFormValue {
  return {
    name: product?.name ?? "",
    description: product?.description ?? "",
    category: product?.category ?? "train-models",
    priceCredits: product?.priceCredits ?? 499,
    originalPriceCredits: product?.originalPriceCredits,
    tags: (product?.tags ?? []).join(", "),
    status: product?.status ?? "draft",
    imageUrl: product?.imageUrl ?? "",
  };
}

export function ItemForm({
  product,
  submitLabel,
}: {
  product?: Product;
  submitLabel: string;
}) {
  const [value, setValue] = React.useState<ItemFormValue>(() =>
    toFormValue(product),
  );
  const [isSaving, setIsSaving] = React.useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSaving(true);
        // mock-only: no persistence
        window.setTimeout(() => {
          setIsSaving(false);
          toast.success("Saved (mock)", {
            description: "No backend connected yet.",
          });
        }, 450);
      }}
      className="grid gap-6"
    >
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          value={value.name}
          onChange={(e) => setValue({ ...value, name: e.target.value })}
          placeholder="e.g. Ballasted Track System"
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          value={value.description}
          onChange={(e) => setValue({ ...value, description: e.target.value })}
          placeholder="Short, clear description used in listings."
          rows={5}
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label>Category</Label>
          <Select
            value={value.category}
            onValueChange={(v) =>
              setValue({ ...value, category: v as ProductCategory })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="train-models">Train models</SelectItem>
              <SelectItem value="tracks">Tracks</SelectItem>
              <SelectItem value="signals">Signals</SelectItem>
              <SelectItem value="general">General Roblox</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="tags">Tags</Label>
          <Input
            id="tags"
            value={value.tags}
            onChange={(e) => setValue({ ...value, tags: e.target.value })}
            placeholder="comma separated: PBR, LOD, Modular"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="grid gap-2">
          <Label htmlFor="priceCredits">Price (Credits)</Label>
          <Input
            id="priceCredits"
            type="number"
            value={value.priceCredits}
            onChange={(e) =>
              setValue({ ...value, priceCredits: Number(e.target.value) })
            }
            min={0}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="originalPriceCredits">Original price (optional)</Label>
          <Input
            id="originalPriceCredits"
            type="number"
            value={value.originalPriceCredits ?? ""}
            onChange={(e) =>
              setValue({
                ...value,
                originalPriceCredits: e.target.value
                  ? Number(e.target.value)
                  : undefined,
              })
            }
            min={0}
          />
        </div>
      </div>

      <div className="grid gap-2">
        <Label htmlFor="imageUrl">Image URL</Label>
        <Input
          id="imageUrl"
          value={value.imageUrl}
          onChange={(e) => setValue({ ...value, imageUrl: e.target.value })}
          placeholder="https://…"
        />
      </div>

      <div className="grid gap-2">
        <Label>Status</Label>
        <Select
          value={value.status}
          onValueChange={(v) => setValue({ ...value, status: v as "draft" | "published" })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="published">Published</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-zinc-600 dark:text-zinc-400">
          Mock form only. Wire it to Appwrite later.
        </p>
        <div className="flex gap-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => setValue(toFormValue(product))}
            disabled={isSaving}
          >
            Reset
          </Button>
          <Button type="submit" disabled={isSaving}>
            {isSaving ? "Saving..." : submitLabel}
          </Button>
        </div>
      </div>
    </form>
  );
}
