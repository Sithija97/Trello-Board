import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../atoms/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "../atoms/ui/chart";
import { generateDate } from "../utils";
import { useGetSummaryQuery } from "../store/summary-slice";

export const description = "A donut chart with text";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  settled: {
    label: "Total Incomes",
    color: "hsl(142 88% 28%)",
  },
  ongoing: {
    label: "Total Expenses",
    color: "hsl(140 74% 44%)",
  },
  mc: {
    label: "Total Budgets",
    color: "hsl(145, 45%, 65%)",
  },
} satisfies ChartConfig;

export const DashboardPieChart = () => {
  const { data, isLoading } = useGetSummaryQuery({});

  const chartData = [
    {
      browser: "settled",
      visitors: data?.totalIncomeAmount,
      fill: "var(--color-settled)",
    },
    {
      browser: "ongoing",
      visitors: data?.totalExpensesAmount,
      fill: "var(--color-ongoing)",
    },
    {
      browser: "mc",
      visitors: data?.totalBudgetsAmount,
      fill: "var(--color-mc)",
    },
  ];
  const totalCases = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, []);

  const getInhandSavingsAmount = (): number => {
    return data?.totalIncomeAmount - data?.totalExpensesAmount;
  };

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Overview</CardTitle>
        <CardDescription>{`Date: ${generateDate()}`}</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        {isLoading ? (
          <div className="mx-auto aspect-square max-h-[200px] bg-slate-200 rounded-full animate-pulse my-6 flex items-center justify-center">
            <div className="aspect-square w-[60%] bg-white rounded-full"></div>
          </div>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px]"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={60}
                strokeWidth={5}
              >
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-3xl font-bold"
                          >
                            {getInhandSavingsAmount()}
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            Savings In-hand
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        )}
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Total Income,Expenses and Budgets
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          This graph is genereated based on the entered data.
        </div>
      </CardFooter>
    </Card>
  );
};
