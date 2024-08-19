import { SummaryCardSection } from "../organisms";

export const Home = () => {
  return (
    <div className="p-4 md:p-8 2xl:p-16 space-y-4">
      <span>
        <h2 className="text-xl font-bold tracking-tight">{`Welcome back Sithija`}</h2>
        <p className="text-muted-foreground">
          Here's what happening with your money, Let's manage your expenses.
        </p>
      </span>
      <SummaryCardSection />
    </div>
  );
};
