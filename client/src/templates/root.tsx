import { Outlet } from "react-router-dom";
import { Toaster } from "../atoms/ui/toaster";
import { cn } from "../lib/utils";
import { SideNavBar } from "../organisms";

export const RootLayout = () => {
  return (
    <section className={cn("min-h-screen w-full flex")}>
      {/* sidebar */}
      <div className=" bg-purple-600">
        <SideNavBar />
      </div>

      {/* main page */}
      <div className="w-full h-full">
        <Outlet />
        <Toaster />
      </div>
    </section>
  );
};
