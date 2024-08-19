import { createBrowserRouter } from "react-router-dom";
import { SignIn, SignUp, Root, Home, Budget, Income, Expense } from "../pages";

export const router = createBrowserRouter([
  { path: "/sign-in/*", element: <SignIn /> },
  { path: "/sign-up/*", element: <SignUp /> },
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
