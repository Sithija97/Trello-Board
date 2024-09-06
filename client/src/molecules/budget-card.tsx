import { Progress } from "../atoms/ui/progress";
import { Card, CardHeader, CardTitle, CardContent } from "../atoms/ui/card";
import { Budget } from "../types";

type IProps = {
  budget: Budget;
  onClick: () => void;
};

export const BudgetCard = ({ budget, onClick }: IProps) => {
  const calculateProgressPerc = () => {
    // (spend/total)*100
    const perc = (budget.spent / budget.amount) * 100;
    return Number(perc.toFixed(2));
  };

  return (
    <Card
      x-chunk="dashboard-01-chunk-0"
      className="hover:bg-slate-50 cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{budget.name}</CardTitle>
        <div className="text-lg font-semibold">{budget.amount}</div>
        <p className="text-3xl bg-slate-100 p-2 rounded-full">{budget.icon}</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground mb-2">{`${budget.spent} Spend`}</p>
          <p className="text-xs text-muted-foreground mb-2">{`${budget.remaining} Remaining`}</p>
        </div>
        <Progress value={calculateProgressPerc()} />
      </CardContent>
    </Card>
  );
};
