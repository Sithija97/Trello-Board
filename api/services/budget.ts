import mongoose from "mongoose";
import { Budget, Expense } from "../models/index.js";
import { Budget as IBudget } from "../interfaces/index.js";

export const budgetService = {
  async getAllBudgets() {
    const budgets = await Budget.find({}, { __v: 0 })
      .sort({ createdAt: -1 })
      .lean();
    return budgets;
  },

  async getBudgetById(budgetId: string) {
    const objectId = new mongoose.Types.ObjectId(budgetId);
    const budget = await Budget.findById(objectId, { __v: 0 }).lean();
    if (!budget) {
      throw new Error("Budget not found");
    }
    return budget;
  },

  async createBudget(budget: IBudget) {
    const newBudget = await Budget.create(budget);
    return newBudget;
  },

  async updateBudget(budgetId: string, updatedBudget: IBudget) {
    const objectId = new mongoose.Types.ObjectId(budgetId);
    const result = await Budget.findByIdAndUpdate(objectId, updatedBudget, {
      new: true,
    });

    return result;
  },

  async deleteBudget(budgetId: string) {
    const objectId = new mongoose.Types.ObjectId(budgetId);
    // Check if there are any expenses associated with this budget
    const associatedExpenses = await Expense.findOne({ budgetId: objectId });

    if (associatedExpenses) {
      throw new Error(
        "Cannot delete this budget. There are expenses associated with this budget."
      );
    }
    await Budget.deleteOne({ _id: objectId });
    return objectId;
  },
};
