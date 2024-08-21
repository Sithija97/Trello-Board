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

budgetRouter.route("/").get(getBudgets).post(createBudget);

budgetRouter
  .route("/:budgetId")
  .get(getBudgetById)
  .patch(updateBudget)
  .delete(deleteBudget);

export { budgetRouter };
