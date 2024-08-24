import { Progress } from "@radix-ui/react-progress";
import { Card, CardHeader, CardTitle, CardContent } from "../atoms/ui/card";

type IProps = {
  name: string;
  amount: number;
  icon: string;
  onClick: () => void;
};

export const BudgetCard = ({ name, amount, icon, onClick }: IProps) => {
  return (
    <Card
      x-chunk="dashboard-01-chunk-0"
      className="hover:bg-slate-50 cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-bold">{name}</CardTitle>
        <div className="text-lg font-semibold">{amount}</div>
        <p className="text-3xl bg-slate-100 p-2 rounded-full">{icon}</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground mb-2">0 Spend</p>
          <p className="text-xs text-muted-foreground mb-2">0 Remaining</p>
        </div>
        <Progress value={40} />
      </CardContent>
    </Card>
  );
};
