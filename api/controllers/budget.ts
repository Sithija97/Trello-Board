import { Request, Response } from "express";
import asyncHandler from "express-async-handler";

// Get all budgets
export const getBudgets = asyncHandler(async (req: Request, res: Response) => {
  // const budgets = await budgetService.getAllBudgets();
  // res.status(200).json(budgets);
});

// Get budget by ID
export const getBudgetById = asyncHandler(
  async (req: Request, res: Response) => {
    const budgetId = req.params.budgetId;
    // const budget = await budgetService.getBudgetById(budgetId);
    // if (!budget) {
    //   res.status(404).json({ message: "Budget not found" });
    //   return;
    // }
    // res.status(200).json(budget);
  }
);

// Create budget
export const createBudget = asyncHandler(
  async (req: Request, res: Response) => {
    // const budget: Budget = req.body;
    // const newBudget = await budgetService.createBudget(budget);
    // res.status(201).send();
  }
);

// Update budget
export const updateBudget = asyncHandler(
  async (req: Request, res: Response) => {
    const budgetId = req.params.budgetId;
    const updatedBudget = req.body;
    // const budget = await budgetService.updateBudget(
    //   budgetId,
    //   updatedBudget
    // );
    // if (!budget) {
    //   res.status(404).json({ message: "Budget not found" });
    //   return;
    // }
    // res.status(200).send();
  }
);

// Delete budget
export const deleteBudget = asyncHandler(
  async (req: Request, res: Response) => {
    const budgetId = req.params.budgetId;
    //   await budgetService.deletBudget(budgetId);
    //   res.status(204).send();
  }
);
