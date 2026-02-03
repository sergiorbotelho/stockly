import {
  Header,
  HeaderLeft,
  HeaderRight,
  HeaderSubTitle,
  HeaderTitle,
} from "../_components/header";
import { DataTable } from "../_components/ui/data-table";
import { getProducts } from "../_data-acess/product/get-products";
import { getSales, SaleDto } from "../_data-acess/sale/get-sales";
import UpsertSaleButton from "./_components/create-sale-button";
import { salesTableColumns } from "./_components/table-columns";

const SalesPage = async () => {
  const sales: SaleDto[] = await getSales();
  const products = await getProducts();
  const productOptions = products.map((item) => ({
    value: item.id,
    label: item.name,
  }));

  const tableData = sales.map((sale) => ({
    ...sale,
    products,
    productOptions,
  }));
  return (
    <div className="m-8 w-full space-y-8 rounded-lg bg-white p-8">
      <Header>
        <HeaderLeft>
          <HeaderSubTitle>Gestão de Vendas</HeaderSubTitle>
          <HeaderTitle>Vendas</HeaderTitle>
        </HeaderLeft>
        <HeaderRight>
          <UpsertSaleButton
            productsOptions={JSON.parse(JSON.stringify(productOptions))}
            products={JSON.parse(JSON.stringify(products))}
          />
        </HeaderRight>
      </Header>

      <DataTable
        columns={salesTableColumns}
        data={JSON.parse(JSON.stringify(tableData))}
      />
    </div>
  );
};

export default SalesPage;
