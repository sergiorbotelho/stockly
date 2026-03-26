import { Suspense } from "react";
import {
  Header,
  HeaderLeft,
  HeaderSubTitle,
  HeaderTitle,
} from "../_components/header";
import { getDashboard } from "../_data-acess/dashboard/get-dashboard";
import Last14DaysRevenueCard from "./_components/last-14-days-revenue-card";
import MostSoldProductItem from "./_components/most-solid-product-item";
import {
  SummaryCardSkeleton,
  SummaryChartSkeleton,
} from "./_components/summary-card";
import TodayRevenue from "./_components/today-revenue-card";
import TotalProductCard from "./_components/total-product-card";
import TotalRevenueCard from "./_components/total-revenue-card";
import TotalSaleCard from "./_components/total-sale-card";
import TotalStockCard from "./_components/total-stock-card";

const Home = async () => {
  const { mostSoldProducts } = await getDashboard();
  return (
    <div className="m-8 flex w-full flex-col space-y-8 rounded-lg">
      <Header>
        <HeaderLeft>
          <HeaderSubTitle>Visão geral dos dados</HeaderSubTitle>
          <HeaderTitle>Dashboard</HeaderTitle>
        </HeaderLeft>
      </Header>

      <div className="grid grid-cols-2 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalRevenueCard />
        </Suspense>

        <Suspense fallback={<SummaryCardSkeleton />}>
          <TodayRevenue />
        </Suspense>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalSaleCard />
        </Suspense>
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalStockCard />
        </Suspense>
        <Suspense fallback={<SummaryCardSkeleton />}>
          <TotalProductCard />
        </Suspense>
      </div>

      <div className="grid min-h-0 grid-cols-[minmax(0,2.5fr),minmax(0,1fr)] gap-6">
        <Suspense fallback={<SummaryChartSkeleton />}>
          <Last14DaysRevenueCard />
        </Suspense>

        <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white">
          <p className="p-6 text-lg font-semibold text-slate-900">
            Produtos mais vendidos
          </p>

          <div className="space-y-7 overflow-y-auto px-6 pb-6">
            {mostSoldProducts.map((product) => (
              <MostSoldProductItem key={product.productId} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
