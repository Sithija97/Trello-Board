import { columns, DataTable, TablePageHeader } from "../organisms";

type IProps = {
  expenses: any[];
};

export const ExpenseTemplate = ({ expenses }: IProps) => {
  return (
    <div className="flex-1 flex-col space-y-2 p-8 md:flex">
      <TablePageHeader title={`Here's a list of your archived notes.`} />
      <DataTable data={expenses} columns={columns} />
    </div>
  );
};
