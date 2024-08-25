import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "../atoms/ui/dialog";
import { Button } from "../atoms/ui/button";

type IProps = {
  isOpen: boolean;
  //   type?: BaseTypes;
  onClose: () => void;
};

export const DeleteModal = ({ isOpen, onClose }: IProps) => {
  //   const dispatch = useAppDispatch();
  //   const { selectedNote } = useAppSelector((state) => state.baseState);
  //   const [deleteNote] = useDeleteNoteMutation();

  //   const handleDeleteNote = () => {
  //     dispatch(clearNote());
  //     deleteNote(selectedNote);
  //   };

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-md" onClick={onClose}>
        <DialogHeader>
          <DialogTitle>{`Delete `}</DialogTitle>
          <DialogDescription>
            {`Are you sure to delete this  permanently?`}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="sm:justify-start">
          <Button
            type="button"
            variant="destructive"
            className="ml-auto"
            // onClick={handleDeleteNote}
          >
            Delete
          </Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary" onClick={onClose}>
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
