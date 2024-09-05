import { TablePageHeader } from "../molecules";
import { columns } from "../organisms/columns";
import { DataTable } from "../organisms/data-table";

type IProps = {
  expenses: any[];
};
export const ExpensesTemplate = ({ expenses }: IProps) => {
  return (
    <div className="flex-1 flex-col space-y-2 p-8 md:flex">
      <TablePageHeader title={`Here's a list of your expenses.`} />
      <DataTable data={expenses} columns={columns} />
    </div>
  );
};
