import { useState } from "react";
import { AddBudgetSection } from "../organisms";
import { BudgetTemplate } from "../templates";

export const Budget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddBudget = () => setIsOpen(!isOpen);
  return (
    <>
      <BudgetTemplate handleAddBudget={handleAddBudget} />
      <AddBudgetSection isOpen={isOpen} onClose={handleAddBudget} />
    </>
  );
};
