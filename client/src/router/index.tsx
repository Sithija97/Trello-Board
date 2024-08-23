import { createBrowserRouter } from "react-router-dom";
import {
  SignInPage,
  SignUpPage,
  Root,
  Home,
  Budget,
  Income,
  Expense,
} from "../pages";

export const router = createBrowserRouter([
  { path: "/sign-in/*", element: <SignInPage /> },
  { path: "/sign-up/*", element: <SignUpPage /> },
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/budgets", element: <Budget /> },
      { path: "/incomes", element: <Income /> },
      { path: "/expenses", element: <Expense /> },
    ],
  },
]);
