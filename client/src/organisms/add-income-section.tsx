import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "../atoms/ui/dialog";
import { DialogHeader, DialogFooter } from "../atoms/ui/dialog";
import { Input } from "../atoms/ui/input";
import { toast } from "../atoms/ui/use-toast";
import { format } from "date-fns";
import { Button } from "../atoms/ui/button";
import EmojiPicker from "emoji-picker-react";
import { useEffect, useRef, useState } from "react";
import { useAddNewIncomeMutation } from "../store/income-slice";
import { useAuth, useClerk } from "@clerk/clerk-react";

type IProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const AddIncomeSection = ({ isOpen, onClose }: IProps) => {
  const { userId } = useAuth();
  const { user } = useClerk();

  const initialState = {
    name: "",
    amount: "",
    userId,
    userName: user?.fullName,
  };

  const [income, setIncome] = useState(initialState);
  const [emojiIcon, setEmojiIcon] = useState("😀");
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);
  // const [deletingCategoryId, setDeletingCategoryId] = useState<string | null>(
  //   null
  // );
  const [addNewIncome] = useAddNewIncomeMutation();
  const isAddIncomeDisabled =
    income.name.trim() === "" || income.amount.trim() === "";

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

  const handleAddIncome = async (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    if (!isAddIncomeDisabled) {
      const payload = { ...income, icon: emojiIcon };
      await addNewIncome(payload);
      setIncome(initialState);
      toast({
        title: "Income has been successfully created.",
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
    setIncome({ ...income, [name]: value });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md xl:max-w-fit">
        <form className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>Create Income</DialogTitle>
            <DialogDescription>
              Easily record and manage your income sources to keep track of your
              earnings.
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
                placeholder="Income Name"
                name="name"
                value={income.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="grid flex-1 gap-2 w-full">
              <Input
                id="amount"
                placeholder="Income Amount (LKR)"
                name="amount"
                value={income.amount}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            <Button
              type="submit"
              variant="default"
              className="ml-auto"
              disabled={isAddIncomeDisabled}
              onClick={handleAddIncome}
            >
              Create
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
