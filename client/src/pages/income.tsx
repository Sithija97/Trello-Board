import { useState } from "react";
import { IncomeTemplate } from "../templates/income";
import { AddIncomeSection } from "../organisms";

export const Income = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddIncome = () => setIsOpen(!isOpen);
  return (
    <>
      <IncomeTemplate handleAddIncome={handleAddIncome} />
      <AddIncomeSection isOpen={isOpen} onClose={handleAddIncome} />
    </>
  );
};
