import { db } from "@/app/_lib/prisma";

export const getTotalProduct = async (): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 7000));
  const totalProducts = await db.product.count();

  return totalProducts;
};
