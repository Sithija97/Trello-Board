import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

// Get all incomes
export const getIncomes = asyncHandler(async (req: Request, res: Response) => {
  // const incomes = await incomeService.getAllIncomes();
  // res.status(200).json(incomes);
});

// Get income by ID
export const getIncomeById = asyncHandler(
  async (req: Request, res: Response) => {
    const incomeId = req.params.incomeId;
    // const income = await incomeService.getIncomeById(incomeId);
    // if (!income) {
    //   res.status(404).json({ message: "Income not found" });
    //   return;
    // }
    // res.status(200).json(income);
  }
);

// Create income
export const createIncome = asyncHandler(
  async (req: Request, res: Response) => {
    // const income: Income = req.body;
    // const newIncome = await incomeService.createIncome(income);
    // res.status(201).send();
  }
);

// Update income
export const updateIncome = asyncHandler(
  async (req: Request, res: Response) => {
    const incomeId = req.params.incomeId;
    const updatedIncome = req.body;
    // const income = await incomeService.updateIncome(
    //   incomeId,
    //   updatedIncome
    // );
    // if (!income) {
    //   res.status(404).json({ message: "Income not found" });
    //   return;
    // }
    // res.status(200).send();
  }
);

// Delete income
export const deleteIncome = asyncHandler(
  async (req: Request, res: Response) => {
    const incomeId = req.params.incomeId;
    //   await incomeService.deletIncome(incomeId);
    //   res.status(204).send();
  }
);
