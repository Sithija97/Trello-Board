import {
  BriefcaseBusiness,
  CreditCard,
  CircleDollarSign,
  PiggyBank,
} from "lucide-react";
import { SkeletonCard, SummaryCard } from "../molecules";
import { useGetSummaryQuery } from "../store/summary-slice";

export const SummaryCardSection = () => {
  const { data, isLoading } = useGetSummaryQuery({});
  return isLoading ? (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      {Array.from({ length: 4 }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  ) : (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <SummaryCard
        title="Total Budget"
        value={`${data.totalBudgetsAmount} LKR`}
        comparison="+20.1% from last month"
        icon={BriefcaseBusiness}
      />
      <SummaryCard
        title="Total Spend"
        value={`${data.totalExpensesAmount} LKR`}
        comparison="+180.1% from last month"
        icon={CreditCard}
      />
      <SummaryCard
        title="Sum of Income"
        value={`${data.totalIncomeAmount} LKR`}
        comparison="+19% from last month"
        icon={CircleDollarSign}
      />
      <SummaryCard
        title="No. of Budgets"
        value={data.numberOfBudgets}
        comparison="+201 since last hour"
        icon={PiggyBank}
      />
    </div>
  );
};
