import { Card } from "@/app/_components/ui/card";
import { ReactNode } from "react";

export const SummaryCardIcon = ({ children }: { children: ReactNode }) => {
  return (
    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-md bg-emerald-300 bg-opacity-10 text-emerald-500">
      {children}
    </div>
  );
};

export const SummaryCardTitle = ({ children }: { children: ReactNode }) => {
  return <p className="text-sm font-medium text-slate-500">{children}</p>;
};

export const SummaryCardValue = ({ children }: { children: ReactNode }) => {
  return <p className="text-2xl font-semibold text-slate-900">{children}</p>;
};

export const SummaryCard = ({ children }: { children: ReactNode }) => {
  return <Card className="rounded-xl p-6 shadow-md">{children}</Card>;
};

export const SummaryCardSkeleton = () => {
  return (
    <div className="rounded-xl bg-white p-6">
      <div className="space-y-2">
        <div className="h-9 w-9 rounded-md bg-gray-200" />
        <div className="h-5 w-[86.26px] rounded-md bg-gray-200" />
        <div className="h-8 w-48 rounded-md bg-gray-200" />
      </div>
    </div>
  );
};
