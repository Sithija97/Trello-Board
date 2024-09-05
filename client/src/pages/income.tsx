import { useState } from "react";
import { IncomeTemplate } from "../templates";
import { AddIncomeSection } from "../organisms";
import { setIncomeModalType } from "../store/base-slice";
import { RootState, useAppSelector } from "../store/store";

export const Income = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { incomeModalType } = useAppSelector(
    (state: RootState) => state.baseState
  );
  const handleAddIncome = () => setIsOpen(!isOpen);
  return (
    <>
      <IncomeTemplate
        setType={setIncomeModalType}
        handleAddIncome={handleAddIncome}
      />
      <AddIncomeSection
        type={incomeModalType}
        isOpen={isOpen}
        onClose={handleAddIncome}
      />
    </>
  );
};
