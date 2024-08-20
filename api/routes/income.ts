import express from "express";
import {
  createIncome,
  deleteIncome,
  getIncomes,
  getIncomeById,
  updateIncome,
} from "../controllers/income.js";
import { protect } from "../middleware/auth.js";

const incomeRouter = express.Router();

incomeRouter.route("/").get(protect, getIncomes).post(protect, createIncome);

incomeRouter
  .route("/:incomeId")
  .get(protect, getIncomeById)
  .patch(protect, updateIncome)
  .delete(protect, deleteIncome);

export { incomeRouter };
