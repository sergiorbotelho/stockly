import { getMostSoldProduct } from "@/app/_data-acess/dashboard/get-most-sold-product";
import MostSoldProductItem from "./most-solid-product-item";

const MostSoldProductCard = async () => {
  const mostSoldProducts = await getMostSoldProduct();
  return (
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
  );
};

export default MostSoldProductCard;
