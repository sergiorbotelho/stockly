import { getTotalSale } from "@/app/_data-acess/dashboard/get-total-sale";
import { CircleDollarSign } from "lucide-react";
import {
  SummaryCard,
  SummaryCardIcon,
  SummaryCardTitle,
  SummaryCardValue,
} from "./summary-card";

const TotalSaleCard = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const totalSales = await getTotalSale();
  return (
    <SummaryCard>
      <SummaryCardIcon>
        <CircleDollarSign />
      </SummaryCardIcon>
      <SummaryCardTitle>Vendas Totais</SummaryCardTitle>
      <SummaryCardValue>{totalSales}</SummaryCardValue>
    </SummaryCard>
  );
};

export default TotalSaleCard;
