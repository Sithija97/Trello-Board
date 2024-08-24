import { createSlice } from "@reduxjs/toolkit";
import { InitialBaseState } from "../types";
import { RootState } from "./store";
import { AddBudgetModalType, AddIncomeModalType } from "../enums";

const initialState: InitialBaseState = {
  selectedBudget: {
    _id: "",
    name: "",
    amount: 0,
    icon: "",
    userId: "",
    userName: "",
    createdAt: "",
    updatedAt: "",
  },
  selectedIncome: {
    _id: "",
    name: "",
    amount: 0,
    icon: "",
    userId: "",
    userName: "",
    createdAt: "",
    updatedAt: "",
  },
  selectedExpense: {
    _id: "",
    name: "",
    amount: 0,
    userId: "",
    userName: "",
    budgetId: {
      _id: "",
      name: "",
      amount: 0,
      icon: "",
      userId: "",
      userName: "",
      createdAt: "",
      updatedAt: "",
    },
    createdAt: "",
    updatedAt: "",
  },
  budgetModalType: AddBudgetModalType.NEW,
  incomeModalType: AddIncomeModalType.NEW,
};

const baseSlice = createSlice({
  name: "baseState",
  initialState,
  reducers: {
    setBudget: (state, { payload }) => {
      state.selectedBudget = payload;
    },
    clearBudget: (state) => {
      state.selectedBudget = initialState.selectedBudget;
    },
    setIncome: (state, { payload }) => {
      state.selectedIncome = payload;
    },
    clearIncome: (state) => {
      state.selectedIncome = initialState.selectedIncome;
    },
    setExpense: (state, { payload }) => {
      state.selectedExpense = payload;
    },
    clearExpense: (state) => {
      state.selectedExpense = initialState.selectedExpense;
    },
    setBudgetModalType: (state, { payload }) => {
      state.budgetModalType = payload;
    },
    setIncomeModalType: (state, { payload }) => {
      state.incomeModalType = payload;
    },
  },
});

// selectors
export const selectedBudget = (state: RootState) =>
  state.baseState.selectedBudget;
export const selectedIncome = (state: RootState) =>
  state.baseState.selectedIncome;
export const selectedExpense = (state: RootState) =>
  state.baseState.selectedExpense;

export const {
  setBudget,
  clearBudget,
  setIncome,
  clearIncome,
  setExpense,
  clearExpense,
  setBudgetModalType,
  setIncomeModalType,
} = baseSlice.actions;
export default baseSlice.reducer;
