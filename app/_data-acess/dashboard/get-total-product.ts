import { db } from "@/app/_lib/prisma";

export const getTotalProduct = async (): Promise<number> => {
  const totalProducts = await db.product.count();

  return totalProducts;
};
