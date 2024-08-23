import { useAuth } from "@clerk/clerk-react";
import { RootLayout } from "../templates";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const Root = () => {
  const { userId, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && !userId) {
      navigate("/sign-in");
    }
  }, [isLoaded]);

  return !isLoaded ? <p>Loading...</p> : <RootLayout />;
};
