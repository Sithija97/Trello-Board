import express from "express";
import {
  createBudget,
  deleteBudget,
  getBudgets,
  getBudgetById,
  updateBudget,
} from "../controllers/budget.js";
import { protect } from "../middleware/auth.js";

const budgetRouter = express.Router();

budgetRouter.route("/").get(protect, getBudgets).post(protect, createBudget);

budgetRouter
  .route("/:budgetId")
  .get(protect, getBudgetById)
  .patch(protect, updateBudget)
  .delete(protect, deleteBudget);

export { budgetRouter };
