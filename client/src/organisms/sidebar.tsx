import {
  ChevronRight,
  House,
  CircleDollarSign,
  BriefcaseBusiness,
  CreditCard,
} from "lucide-react";
import { useState } from "react";
import { useWindowWidth } from "@react-hook/window-size";
import { useNavigate } from "react-router-dom";
import { Button } from "../atoms/ui/button";
import { NavBar } from "../molecules";

export const SideNavBar = () => {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  // const [isOpenFilters, setIsOpenFilters] = useState(false);
  const toggleSidebar = () => setIsCollapsed(!isCollapsed);

  // const handleAddCategory = () => setIsOpen(!isOpen);
  // const handleAddFilters = () => setIsOpenFilters(!isOpenFilters);

  const onlyWidth = useWindowWidth();
  const mobileWidth = onlyWidth < 768;

  const navigateToHome = () => navigate("/");
  const navigateToBudgets = () => navigate("/budgets");
  const navigateToIncomes = () => navigate("/incomes");
  const navigateToExpenses = () => navigate("/expense");

  return (
    <div className={`relative px-3 pb-10 pt-24 ${!isCollapsed && "min-w-64"}`}>
      {!mobileWidth && (
        <div className="absolute right-[-20px] top-7">
          <Button
            onClick={toggleSidebar}
            variant="secondary"
            className=" rounded-full p-2"
          >
            <ChevronRight />
          </Button>
        </div>
      )}
      <NavBar
        isCollapsed={mobileWidth ? true : isCollapsed}
        links={[
          {
            title: "Home",
            href: "#",
            icon: House,
            variant: "default",
            onclick: navigateToHome,
          },
          {
            title: "Incomes",
            href: "#",
            icon: CircleDollarSign,
            variant: "ghost",
            onclick: navigateToIncomes,
          },
          {
            title: "Budgets",
            href: "#",
            icon: BriefcaseBusiness,
            variant: "ghost",
            onclick: navigateToBudgets,
          },
          {
            title: "Expenses",
            href: "#",
            icon: CreditCard,
            variant: "ghost",
            onclick: navigateToExpenses,
          },
        ]}
      />
    </div>
  );
};
