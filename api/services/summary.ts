import mongoose from "mongoose";
import { Budget } from "../models/budget.js";
import { Expense } from "../models/expense.js";
import { Income } from "../models/income.js";

export const summaryService = {
  async getSummary() {
    // Calculate total budgets amount
    const totalBudgets = await Budget.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);
    const totalBudgetsAmount =
      totalBudgets.length > 0 ? totalBudgets[0].total : 0;

    // Calculate total expenses amount
    const totalExpenses = await Expense.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);
    const totalExpensesAmount =
      totalExpenses.length > 0 ? totalExpenses[0].total : 0;

    // Calculate total income amount
    const totalIncome = await Income.aggregate([
      {
        $group: {
          _id: null,
          total: { $sum: "$amount" },
        },
      },
    ]);
    const totalIncomeAmount = totalIncome.length > 0 ? totalIncome[0].total : 0;

    // Count the number of budgets
    const numberOfBudgets = await Budget.countDocuments();

    return {
      totalBudgetsAmount,
      totalExpensesAmount,
      totalIncomeAmount,
      numberOfBudgets,
    };
  },
};
