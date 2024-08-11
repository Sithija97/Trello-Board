import { createBrowserRouter } from "react-router-dom";
import { SignIn, SignUp, Root, Home } from "../pages";

export const router = createBrowserRouter([
  { path: "/sign-in/*", element: <SignIn /> },
  { path: "/sign-up/*", element: <SignUp /> },
  {
    path: "/",
    element: <Root />,
    children: [{ path: "/", element: <Home /> }],
  },
]);
