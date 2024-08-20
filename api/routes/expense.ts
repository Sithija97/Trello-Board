import express from "express";
import {
  createExpense,
  deleteExpense,
  getExpenses,
  getExpenseById,
  updateExpense,
} from "../controllers/expense.js";
import { protect } from "../middleware/auth.js";

const expenseRouter = express.Router();

expenseRouter.route("/").get(protect, getExpenses).post(protect, createExpense);

expenseRouter
  .route("/:expenseId")
  .get(protect, getExpenseById)
  .patch(protect, updateExpense)
  .delete(protect, deleteExpense);

export { expenseRouter };
