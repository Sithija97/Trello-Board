import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../atoms/ui/dialog";
import { FilePlus } from "lucide-react";
import { Button } from "../atoms/ui/button";
import { DialogHeader, DialogFooter } from "../atoms/ui/dialog";
import { Input } from "../atoms/ui/input";
import { useState } from "react";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { RootState, useAppSelector } from "../store/store";
import { toast } from "../atoms/ui/use-toast";
import { format } from "date-fns";
import { useAddNewExpenseMutation } from "../store/expense-slice";

type IProps = {
  isOpen: boolean;
  type?: any;
  onClose: () => void;
};

export const AddExpenseSection = ({ isOpen, type, onClose }: IProps) => {
  const { userId } = useAuth();
  const { user } = useClerk();
  const [addNewExpense] = useAddNewExpenseMutation();
  const { selectedBudget } = useAppSelector(
    (state: RootState) => state.baseState
  );

  const initialState = {
    name: "",
    amount: "",
    userId,
    userName: user?.fullName,
    budgetId: selectedBudget._id,
  };
  const [expense, setExpense] = useState(initialState);

  const isAddExpenseDisabled =
    expense.name.trim() === "" || expense.amount.trim() === "";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setExpense((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddExpense = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    const payload = {
      ...expense,
      amount: Number(expense.amount),
    };
    if (!isAddExpenseDisabled) {
      await addNewExpense(payload);
      setExpense(initialState);
      toast({
        title: "New Expense Added!",
        description: format(new Date(), "EEEE, MMMM do, yyyy 'at' h:mm a"),
        duration: 1500,
      });
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md xl:max-w-fit">
        <form className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>
              {/* {type === AddIncomeModalType.NEW
                ? `Create Income`
                : `Update Income`} */}
              Add Expense
            </DialogTitle>
            <DialogDescription>
              Effortlessly track and manage your expenses to stay on top of your
              spending.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col space-y-4">
            <div className="grid flex-1 gap-2 w-full">
              <Input
                id="name"
                placeholder="Expense Name"
                name="name"
                value={expense.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid flex-1 gap-2 w-full">
              <Input
                id="amount"
                placeholder="Expense Amount (LKR)"
                name="amount"
                value={expense.amount}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            {/* {type === AddIncomeModalType.EDIT ? ( */}
            {/* <>
                <Button
                  type="button"
                  variant="default"
                  size={"sm"}
                  className="ml-auto"
                  disabled={isAddIncomeDisabled}
                  onClick={handleUpdateIncome}
                >
                  <Pencil className="mr-2 h-4 w-4" /> Edit
                </Button>

                <Button
                  type="button"
                  variant="destructive"
                  size={"sm"}
                  className="ml-auto"
                  onClick={handleDeleteIncome}
                >
                  <Trash2 className="mr-2 h-4 w-4" /> Delete
                </Button>
              </>
            ) : ( */}
            <Button
              type="button"
              variant={"default"}
              className="ml-auto"
              disabled={isAddExpenseDisabled}
              onClick={handleAddExpense}
            >
              <FilePlus className="mr-2 h-4 w-4" /> Add
            </Button>
            {/* )} */}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
