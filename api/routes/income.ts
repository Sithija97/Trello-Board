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

incomeRouter.route("/").get(getIncomes).post(createIncome);

incomeRouter
  .route("/:incomeId")
  .get(getIncomeById)
  .patch(updateIncome)
  .delete(deleteIncome);

export { incomeRouter };
