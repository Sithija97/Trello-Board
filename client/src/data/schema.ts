import { z } from "zod";

export const taskSchema = z.object({
  _id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
});

export const expenseSchema = z.object({
  _id: z.string(),
  name: z.string(),
  amount: z.number(),
  userId: z.string(),
  userName: z.string(),
  budgetId: z.object({
    _id: z.string(),
    name: z.string(),
    amount: z.number(),
    icon: z.string(),
    userId: z.string(),
    userName: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
  }),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
export type Expense = z.infer<typeof expenseSchema>;
