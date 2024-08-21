import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { expenseService } from "../services/expense.js";
import { Expense } from "../interfaces/index.js";

// Get all expenses
export const getExpenses = asyncHandler(async (req: Request, res: Response) => {
  const expenses = await expenseService.getAllExpenses();
  res.status(200).json(expenses);
});

// Get expense by ID
export const getExpenseById = asyncHandler(
  async (req: Request, res: Response) => {
    const expenseId = req.params.expenseId;
    const expense = await expenseService.getExpenseById(expenseId);
    if (!expense) {
      res.status(404).json({ message: "Expense not found" });
      return;
    }
    res.status(200).json(expense);
  }
);

// Create expense
export const createExpense = asyncHandler(
  async (req: Request, res: Response) => {
    const expense: Expense = req.body;
    const newExpense = await expenseService.createExpense(expense);
    res.status(201).send();
  }
);

// Update expense
export const updateExpense = asyncHandler(
  async (req: Request, res: Response) => {
    const expenseId = req.params.expenseId;
    const updatedExpense = req.body;
    const expense = await expenseService.updateExpense(
      expenseId,
      updatedExpense
    );
    if (!expense) {
      res.status(404).json({ message: "Expense not found" });
      return;
    }
    res.status(200).send();
  }
);

// Delete expense
export const deleteExpense = asyncHandler(
  async (req: Request, res: Response) => {
    const expenseId = req.params.expenseId;
    await expenseService.deleteExpense(expenseId);
    res.status(204).send();
  }
);
