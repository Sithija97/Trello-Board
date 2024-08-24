import { PlusCircleIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../atoms/ui/card";
import { useGetIncomesQuery } from "../store/income-slice";
import { IncomeCard } from "../molecules/income-card";
import { Income } from "../types";
import { AddIncomeModalType } from "../enums";
import { useAppDispatch } from "../store/store";
import { clearIncome, setIncome } from "../store/base-slice";

type IProps = {
  setType: (payload: AddIncomeModalType) => any;
  handleAddIncome: () => void;
};

export const IncomeTemplate = ({ setType, handleAddIncome }: IProps) => {
  const dispatch = useAppDispatch();
  const { data: incomes, isSuccess } = useGetIncomesQuery({});

  const setIncomeItem = (budget: any) => {
    dispatch(setIncome(budget));
    dispatch(setType(AddIncomeModalType.EDIT));
    handleAddIncome();
  };

  const handleAddNewIncome = () => {
    dispatch(setType(AddIncomeModalType.NEW));
    dispatch(clearIncome());
    handleAddIncome();
  };

  return (
    <div className="p-4 md:p-8 2xl:p-16 space-y-4">
      <span>
        <h2 className="text-xl font-bold tracking-tight">My Incomes</h2>
      </span>
      <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
        <Card
          x-chunk="dashboard-01-chunk-0"
          className="cursor-pointer"
          onClick={handleAddNewIncome}
        >
          <CardHeader className="flex flex-row items-center justify-center space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              <PlusCircleIcon />
            </CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="text-mdfont-semibold p-1">Create new Income</div>
          </CardContent>
        </Card>
        {isSuccess &&
          incomes &&
          incomes.map((income: Income) => (
            <IncomeCard
              key={income._id}
              name={income.name}
              amount={income.amount}
              icon={income.icon}
              onClick={() => setIncomeItem(income)}
            />
          ))}
      </div>
    </div>
  );
};
