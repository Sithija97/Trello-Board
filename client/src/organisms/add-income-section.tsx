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
import {
  useAddNewIncomeMutation,
  useDeleteIncomeMutation,
} from "../store/income-slice";
import { useAuth, useClerk } from "@clerk/clerk-react";
import { AddIncomeModalType } from "../enums";
import { RootState, useAppDispatch, useAppSelector } from "../store/store";
import { clearIncome } from "../store/base-slice";

type IProps = {
  isOpen: boolean;
  type?: AddIncomeModalType;
  onClose: () => void;
};

export const AddIncomeSection = ({
  isOpen,
  type = AddIncomeModalType.NEW,
  onClose,
}: IProps) => {
  const { userId } = useAuth();
  const { user } = useClerk();
  const dispatch = useAppDispatch();
  const [addNewIncome] = useAddNewIncomeMutation();
  const [deleteIncome] = useDeleteIncomeMutation();

  const selectedIncome = useAppSelector(
    (state: RootState) => state.baseState.selectedIncome
  );

  const initialState = {
    name: "",
    amount: "",
    userId,
    userName: user?.fullName,
  };
  const defaultEmoji = "😀";

  const [income, setIncome] = useState(initialState);
  const [emojiIcon, setEmojiIcon] = useState(defaultEmoji);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement>(null);

  const isAddIncomeDisabled =
    income.name.trim() === "" || income.amount.trim() === "";

  useEffect(() => {
    setEmojiIcon(selectedIncome.icon || defaultEmoji);
    setIncome({
      ...income,
      name: type === AddIncomeModalType.EDIT ? selectedIncome.name : "",
      amount:
        type === AddIncomeModalType.EDIT
          ? selectedIncome.amount.toString()
          : "",
    });
  }, [selectedIncome._id]);

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
      onClose();
      toast({
        title: "New Income Source Created!",
        description: format(new Date(), "EEEE, MMMM do, yyyy 'at' h:mm a"),
        duration: 1500,
      });
      setIncome(initialState);
      setEmojiIcon(defaultEmoji);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setIncome({ ...income, [name]: value });
  };

  const handleDeleteIncome = async () => {
    dispatch(clearIncome());
    await deleteIncome(selectedIncome);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md xl:max-w-fit">
        <form className="flex flex-col gap-5">
          <DialogHeader>
            <DialogTitle>
              {type === AddIncomeModalType.NEW
                ? `Create Income`
                : `Update Income`}
            </DialogTitle>
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
            {type === AddIncomeModalType.EDIT ? (
              <>
                <Button
                  type="button"
                  variant="default"
                  className="ml-auto"
                  disabled={isAddIncomeDisabled}
                  onClick={handleAddIncome}
                >
                  Update
                </Button>
                <Button
                  type="button"
                  variant="destructive"
                  className="ml-auto"
                  onClick={handleDeleteIncome}
                >
                  Delete
                </Button>
              </>
            ) : (
              <Button
                type="button"
                variant="default"
                className="ml-auto"
                disabled={isAddIncomeDisabled}
                onClick={handleAddIncome}
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
