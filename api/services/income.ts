import mongoose from "mongoose";
import { Income } from "../models/index.js";
import { Income as IIncome } from "../interfaces/index.js";

export const incomeService = {
  async getAllIncomes() {
    const incomes = await Income.find({}, { __v: 0 })
      .sort({ createdAt: -1 })
      .lean();
    return incomes;
  },

  async getIncomeById(incomeId: string) {
    const objectId = new mongoose.Types.ObjectId(incomeId);
    const income = await Income.findById(objectId, { __v: 0 }).lean();
    if (!income) {
      throw new Error("Income not found");
    }
    return income;
  },

  async createIncome(income: IIncome) {
    const newIncome = await Income.create(income);
    return newIncome;
  },

  async updateIncome(incomeId: string, updatedIncome: IIncome) {
    const objectId = new mongoose.Types.ObjectId(incomeId);
    const result = await Income.findByIdAndUpdate(objectId, updatedIncome, {
      new: true,
    });

    return result;
  },

  async deleteIncome(incomeId: string) {
    const objectId = new mongoose.Types.ObjectId(incomeId);
    await Income.deleteOne({ _id: objectId });
    return objectId;
  },
};
