import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../atoms/ui/dialog";
import { DialogHeader, DialogFooter } from "../atoms/ui/dialog";
import { Input } from "../atoms/ui/input";
import { toast } from "../atoms/ui/use-toast";
import { format } from "date-fns";
import { Button } from "../atoms/ui/button";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import {
  useAddNewBudgetMutation,
  useDeleteBudgetMutation,
} from "../store/budget-slice";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { AddBudgetModalType } from "../enums";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { clearBudget } from "../store/base-slice";

type IProps = {
  isOpen: boolean;
  type?: AddBudgetModalType;
  onClose: () => void;
};

export const AddBudgetSection = ({ isOpen, type, onClose }: IProps) => {
  const { userId } = useAuth();
  const { user } = useClerk();
  const dispatch = useAppDispatch();
  const [addNewBudget] = useAddNewBudgetMutation();
  const [deleteBudget] = useDeleteBudgetMutation();

  const selectedBudget = useAppSelector(
    (state: RootState) => state.baseState.selectedBudget
  );

  const initialState = {
    name: "",
    amount: "",
    userId,
    userName: user?.fullName,
  };
  const defaultEmoji = "😀";

  const [budget, setBudget] = useState(initialState);
  const [emojiIcon, setEmojiIcon] = useState(defaultEmoji);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const isAddBudgetDisabled =
    budget.name.trim() === "" || budget.amount.trim() === "";

  useEffect(() => {
    setEmojiIcon(selectedBudget.icon || defaultEmoji);
    setBudget({
      ...budget,
      name: type === AddBudgetModalType.EDIT ? selectedBudget.name : "",
      amount:
        type === AddBudgetModalType.EDIT
          ? selectedBudget.amount.toString()
          : "",
    });
  }, [selectedBudget._id]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setOpenEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleAddBudget = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!isAddBudgetDisabled) {
      const payload = { ...budget, icon: emojiIcon };
      await addNewBudget(payload);
      setBudget(initialState);
      toast({
        title: "New Budget Created!",
        description: format(new Date(), "EEEE, MMMM do, yyyy 'at' h:mm a"),
        duration: 1500,
      });
      onClose();
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setBudget((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleDeleteBudget = async () => {
    dispatch(clearBudget());
    await deleteBudget(selectedBudget);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md xl:max-w-fit">
        <form className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>
              {type === AddBudgetModalType.NEW
                ? `Create Budget`
                : `Update Budget`}
            </DialogTitle>
            <DialogDescription>
              Effortlessly plan and allocate your budget for smarter financial
              management.
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col space-y-4">
            <div>
              <Button
                variant="outline"
                className="text-lg"
                type="button"
                onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
              >
                {emojiIcon}
              </Button>
              <div ref={emojiPickerRef} className="absolute z-20">
                <EmojiPicker
                  open={openEmojiPicker}
                  onEmojiClick={(e) => {
                    setEmojiIcon(e.emoji);
                    setOpenEmojiPicker(false);
                  }}
                />
              </div>
            </div>

            <div className="grid flex-1 gap-2 w-full">
              <Input
                id="name"
                placeholder="Budget Name"
                name="name"
                value={budget.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid flex-1 gap-2 w-full">
              <Input
                id="amount"
                placeholder="Budget Amount (LKR)"
                name="amount"
                value={budget.amount}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            {type === AddBudgetModalType.EDIT ? (
              <>
                <Button
                  type="button"
                  variant="default"
                  className="ml-auto"
                  disabled={isAddBudgetDisabled}
                  onClick={handleAddBudget}
                >
                  Update
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  className="ml-auto"
                  disabled={isAddBudgetDisabled}
                  onClick={handleDeleteBudget}
                >
                  Delete
                </Button>
              </>
            ) : (
              <Button
                type="button"
                variant="default"
                className="ml-auto"
                disabled={isAddBudgetDisabled}
                onClick={handleAddBudget}
              >
                Create
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
