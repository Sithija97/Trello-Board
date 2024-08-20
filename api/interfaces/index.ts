import { Schema } from "mongoose";

export interface Income {
  id: string;
  name: string;
  amount: number;
  icon: string;
  userId: String;
  userName: String;
}

export interface Expense {
  id: string;
  name: string;
  amount: number;
  userId: String;
  userName: String;
  budgetId: Schema.Types.ObjectId;
}

export interface Budget {
  id: string;
  name: string;
  amount: number;
  icon: string;
  userId: String;
  userName: String;
}
