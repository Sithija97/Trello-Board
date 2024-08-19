import {
  BriefcaseBusiness,
  CreditCard,
  CircleDollarSign,
  PiggyBank,
} from "lucide-react";
import { SummaryCard } from "../molecules";

export const SummaryCardSection = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <SummaryCard
        title="Total Budget"
        value="$45,231.89"
        comparison="+20.1% from last month"
        icon={BriefcaseBusiness}
      />
      <SummaryCard
        title="Total Spend"
        value="+2350"
        comparison="+180.1% from last month"
        icon={CreditCard}
      />
      <SummaryCard
        title="Sum of Income"
        value="+12,234"
        comparison="+19% from last month"
        icon={CircleDollarSign}
      />
      <SummaryCard
        title="No. of Budgets"
        value="+573"
        comparison="+201 since last hour"
        icon={PiggyBank}
      />
    </div>
  );
};
