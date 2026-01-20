import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { Card } from "@/components/ui/card";
import { ItemForm } from "@/components/seller/item-form";

export const metadata = {
  title: "Add product",
};

export default function NewItemPage() {
  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader
          title="Add product"
          description="Create a new listing (mock)."
        />

        <Card className="mt-8 rounded-3xl border-zinc-200/70 bg-white/70 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-950/40">
          <ItemForm submitLabel="Create" />
        </Card>
      </Container>
    </main>
  );
}
