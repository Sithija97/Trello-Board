import { useState } from "react";
import { PlusCircleIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../atoms/ui/card";
import { AddBudgetSection } from "../organisms";

export const Budget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleAddBudget = () => setIsOpen(!isOpen);
  return (
    <>
      <div className="p-4 md:p-8 2xl:p-16 space-y-4">
        <span>
          <h2 className="text-xl font-bold tracking-tight">My Budgets</h2>
          {/* <p className="text-muted-foreground">
          Here's what happening with your money, Let's manage your expenses.
        </p> */}
        </span>
        <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          <Card
            x-chunk="dashboard-01-chunk-0"
            className="cursor-pointer"
            onClick={handleAddBudget}
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
        </div>
      </div>
      <AddBudgetSection isOpen={isOpen} onClose={handleAddBudget} />
    </>
  );
};
