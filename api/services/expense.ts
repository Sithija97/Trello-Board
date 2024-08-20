import mongoose from "mongoose";
import { Expense } from "../models/index.js";
import { Expense as IExpense } from "../interfaces/index.js";

export const expenseService = {
  async getAllExpenses() {
    const expenses = await Expense.find({}, { __v: 0 })
      .populate({
        path: "budgetId",
        select: "-__v",
      })
      .sort({ createdAt: -1 })
      .lean();
    return expenses;
  },

  async getExpenseById(expenseId: string) {
    const objectId = new mongoose.Types.ObjectId(expenseId);
    const expense = await Expense.findOne({ _id: objectId }, { __v: 0 })
      .populate({
        path: "budgetId",
        select: "-__v",
      })
      .lean();
    if (!expense) {
      throw new Error("Expense not found");
    }
    return expense;
  },

  async createExpense(expense: IExpense) {
    const newExpense = await Expense.create(expense);
    return newExpense;
  },

  async updateExpense(expenseId: string, updatedExpense: IExpense) {
    const objectId = new mongoose.Types.ObjectId(expenseId);
    const result = await Expense.findByIdAndUpdate(objectId, updatedExpense, {
      new: true,
    });
    return result;
  },

  async deleteExpense(expenseId: string) {
    const objectId = new mongoose.Types.ObjectId(expenseId);
    await Expense.deleteOne({ _id: objectId });
    return objectId;
  },
};
