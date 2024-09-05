import { useState } from "react";
import { AddBudgetSection, AddExpenseSection } from "../organisms";
import { BudgetTemplate } from "../templates";
import { setBudgetModalType } from "../store/base-slice";
import { RootState, useAppSelector } from "../store/store";

export const Budget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpenseOpen, setExpenseOpen] = useState(false);

  const { budgetModalType } = useAppSelector(
    (state: RootState) => state.baseState
  );

  const handleAddBudget = () => setIsOpen(!isOpen);
  const handleAddExpense = () => setExpenseOpen(!isExpenseOpen);

  return (
    <>
      <BudgetTemplate
        setType={setBudgetModalType}
        handleAddBudget={handleAddBudget}
      />
      <AddBudgetSection
        type={budgetModalType}
        isOpen={isOpen}
        setExpenseOpen={handleAddExpense}
        onClose={handleAddBudget}
      />
      <AddExpenseSection isOpen={isExpenseOpen} onClose={handleAddExpense} />
    </>
  );
};
