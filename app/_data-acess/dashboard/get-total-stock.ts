import { db } from "@/app/_lib/prisma";

export const getTotalStock = async (): Promise<number> => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const totalStock = db.product.aggregate({
    _sum: {
      stock: true,
    },
  });
  return Number((await totalStock)._sum.stock);
};
