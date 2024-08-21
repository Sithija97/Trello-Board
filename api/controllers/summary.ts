import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { summaryService } from "../services/summary.js";

// Get summary
export const getSummary = asyncHandler(async (req: Request, res: Response) => {
  const summaryData = await summaryService.getSummary();
  res.status(200).json(summaryData);
});
