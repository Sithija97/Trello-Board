import { model, Schema } from "mongoose";
import { Expense as IExpense } from "../interfaces/index.js";

const expenseSchema = new Schema<IExpense>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
      unique: true,
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    budgetId: {
      type: Schema.Types.ObjectId,
      ref: "Budget",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Expense = model("Expense", expenseSchema);
