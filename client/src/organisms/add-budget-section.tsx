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
import { useAddNewBudgetMutation } from "../store/budget-slice";
import { useAuth, useClerk } from "@clerk/clerk-react";

type IProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddBudgetSection = ({ isOpen, onClose }: IProps) => {
  const { userId } = useAuth();
  const { user } = useClerk();

  const initialState = {
    name: "",
    amount: "",
    userId,
    userName: user?.fullName,
  };
  const [budget, setBudget] = useState(initialState);
  const [emojiIcon, setEmojiIcon] = useState("😀");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  // const [deletingCategoryId, setDeletingCategoryId] = useState<string | null>(
  //   null
  // );
  const [addNewBudget] = useAddNewBudgetMutation();
  const isAddBudgetDisabled =
    budget.name.trim() === "" || budget.amount.trim() === "";

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
    setBudget({ ...budget, [name]: value });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md xl:max-w-fit">
        <form className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Create Budget</DialogTitle>
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
            <Button
              type="submit"
              variant="default"
              className="ml-auto"
              disabled={isAddBudgetDisabled}
              onClick={handleAddBudget}
            >
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
