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

expenseRouter.route("/").get(getExpenses).post(createExpense);

expenseRouter
  .route("/:expenseId")
  .get(getExpenseById)
  .patch(updateExpense)
  .delete(deleteExpense);

export { expenseRouter };
