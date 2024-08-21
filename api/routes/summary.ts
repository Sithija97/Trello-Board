import express from "express";
import { getSummary } from "../controllers/summary.js";
import { protect } from "../middleware/auth.js";

const summaryRouter = express.Router();

summaryRouter.route("/").get(getSummary);

export { summaryRouter };
