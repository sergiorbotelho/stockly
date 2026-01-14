import { getProducts } from "../_data-acess/product/get-products";
import CreateSaleButton from "./_components/create-sale-button";

const SalesPage = async () => {
  const products = await getProducts();
  const options = products.map((item) => ({
    value: item.id,
    label: item.name,
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
        <CreateSaleButton
          productsOptions={JSON.parse(JSON.stringify(options))}
          products={JSON.parse(JSON.stringify(products))}
        />
      </div>
      {/* <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      /> */}
    </div>
  );
};

export default SalesPage;
