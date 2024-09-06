import { PlusCircleIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../atoms/ui/card";
import { useGetBudgetsQuery } from "../store/budget-slice";
import { Budget } from "../types";
import { BudgetCard } from "../molecules/budget-card";
import { useAppDispatch } from "../store/store";
import { clearBudget, setBudget } from "../store/base-slice";
import { AddBudgetModalType } from "../enums";

type IProps = {
  setType: (payload: AddBudgetModalType) => any;
  handleAddBudget: () => void;
};

export const BudgetTemplate = ({ setType, handleAddBudget }: IProps) => {
  const dispatch = useAppDispatch();
  const { data: budgets, isSuccess } = useGetBudgetsQuery({});

  const setBudgetItem = (budget: Budget) => {
    dispatch(setBudget(budget));
    dispatch(setType(AddBudgetModalType.EDIT));
    handleAddBudget();
  };

  const handleAddNewBudget = () => {
    dispatch(setType(AddBudgetModalType.NEW));
    dispatch(clearBudget());
    handleAddBudget();
  };

  return (
    <div className="p-4 md:p-8 2xl:p-16 space-y-4">
      <span>
        <h2 className="text-xl font-bold tracking-tight">My Budgets</h2>
      </span>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card
          x-chunk="dashboard-01-chunk-0"
          className="cursor-pointer"
          onClick={handleAddNewBudget}
        >
          <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              <PlusCircleIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="text-mdfont-semibold p-1">Create new Budget</div>
          </CardContent>
        </Card>
        {isSuccess &&
          budgets &&
          budgets.map((budget: Budget) => (
            <BudgetCard
              key={budget._id}
              budget={budget}
              onClick={() => setBudgetItem(budget)}
            />
          ))}
      </div>
    </div>
  );
};
