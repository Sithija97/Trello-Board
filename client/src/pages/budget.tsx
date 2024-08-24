import { useState } from "react";
import { AddBudgetSection } from "../organisms";
import { BudgetTemplate } from "../templates";
import { setBudgetModalType } from "../store/base-slice";
import { RootState, useAppSelector } from "../store/store";

export const Budget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { budgetModalType } = useAppSelector(
    (state: RootState) => state.baseState
  );
  const handleAddBudget = () => setIsOpen(!isOpen);

  return (
    <>
      <BudgetTemplate
        setType={setBudgetModalType}
        handleAddBudget={handleAddBudget}
      />
      <AddBudgetSection
        type={budgetModalType}
        isOpen={isOpen}
        onClose={handleAddBudget}
      />
    </>
  );
};
