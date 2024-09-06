import { AddBudgetModalType, AddIncomeModalType } from "../enums";

export type Budget = {
  _id: string;
  name: string;
  amount: number;
  icon: string;
  userId: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
  spent: number;
  remaining: number;
};

export type Income = {
  _id: string;
  name: string;
  amount: number;
  icon: string;
  userId: string;
  userName: string;
  createdAt: string;
  updatedAt: string;
};

export type Expense = {
  _id: string;
  name: string;
  amount: number;
  userId: string;
  userName: string;
  budgetId: Budget;
  createdAt: string;
  updatedAt: string;
};

export type InitialBaseState = {
  selectedBudget: Budget;
  selectedIncome: Income;
  selectedExpense: Expense;
  budgetModalType: AddBudgetModalType.NEW | AddBudgetModalType.EDIT;
  incomeModalType: AddIncomeModalType.NEW | AddIncomeModalType.EDIT;
};
