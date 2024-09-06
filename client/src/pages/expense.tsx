import { useGetExpensesQuery } from "../store/expense-slice";
import { ExpensesTemplate } from "../templates";

export const Expense = () => {
  const { data: expenses = [] } = useGetExpensesQuery({});

  return <ExpensesTemplate expenses={expenses} />;
};
