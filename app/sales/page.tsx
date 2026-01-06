import { Button } from "../_components/ui/button";
import { Sheet, SheetTrigger } from "../_components/ui/sheet";
import { getProducts } from "../_data-acess/product/get-products";
import UpsertSheetContent from "./_components/upsert-sheet-content";

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
          <h2 className="text-xl font-semibold">Produtos</h2>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button>Nova venda</Button>
          </SheetTrigger>
          <UpsertSheetContent
            productsOptions={JSON.parse(JSON.stringify(options))}
            products={JSON.parse(JSON.stringify(products))}
          />
        </Sheet>
      </div>
      {/* <DataTable
        columns={productTableColumns}
        data={JSON.parse(JSON.stringify(products))}
      /> */}
    </div>
  );
};

export default SalesPage;
