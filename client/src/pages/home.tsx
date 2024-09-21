import { useClerk } from "@clerk/clerk-react";
import { DashboardPieChart, SummaryCardSection } from "../organisms";
import { DataTable } from "../organisms/data-table";
import { useGetExpensesQuery } from "../store/expense-slice";
import { columns } from "../organisms/columns";
import { SkeletonCard } from "../molecules";

export const Home = () => {
  const { user } = useClerk();
  const { data: expenses = [], isLoading } = useGetExpensesQuery({});
  return (
    <div className="p-4 md:p-8 2xl:p-16 space-y-4">
      <span>
        <h2 className="text-xl font-bold tracking-tight">{`Welcome back ${user?.firstName}`}</h2>
        <p className="text-muted-foreground">
          Here's what happening with your money, Let's manage your expenses.
        </p>
      </span>
      <div className="xl:space-y-6 2xl:space-y-10 ">
        <SummaryCardSection />
        <div className="grid xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2  py-4">
            <p className="text-start font-semibold pb-4">
              Recently added Ongoing cases
            </p>
            {isLoading ? (
              <SkeletonCard customClassNames=" h-[300px]" />
            ) : (
              <DataTable data={expenses} columns={columns} />
            )}
          </div>

          <div className="py-4">
            <DashboardPieChart />
          </div>
        </div>
      </div>
    </div>
  );
};
