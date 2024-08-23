import { model, Schema } from "mongoose";
import { Income as IIncome } from "../interfaces/index.js";

const incomeSchema = new Schema<IIncome>(
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

export const Income = model("Income", incomeSchema);
