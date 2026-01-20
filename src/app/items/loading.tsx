import { Container } from "@/components/shell/container";
import { PageHeader } from "@/components/shell/page-header";
import { TableSkeleton } from "@/components/skeletons/table-skeleton";

export default function ItemsLoading() {
  return (
    <main>
      <Container className="py-10 sm:py-14">
        <PageHeader title="Manage items" description="Loading your listings…" />
        <div className="mt-8">
          <TableSkeleton rows={7} cols={5} />
        </div>
      </Container>
    </main>
  );
}
