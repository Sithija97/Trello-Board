import { model, Schema } from "mongoose";
import { Budget as IBudget } from "../interfaces/index.js";

const budgetSchema = new Schema<IBudget>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      default: "😀",
    },
    userId: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Budget = model("Budget", budgetSchema);
