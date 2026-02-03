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
      <div className="flex w-full items-center justify-between">
        <div className="space-y-1">
          <span className="text-xs font-semibold text-slate-500">
            Gestão de Vendas
          </span>
          <h2 className="text-xl font-semibold">Vendas</h2>
        </div>
        <UpsertSaleButton
          productsOptions={JSON.parse(JSON.stringify(productOptions))}
          products={JSON.parse(JSON.stringify(products))}
        />
      </div>
      <DataTable
        columns={salesTableColumns}
        data={JSON.parse(JSON.stringify(tableData))}
      />
    </div>
  );
};

export default SalesPage;
