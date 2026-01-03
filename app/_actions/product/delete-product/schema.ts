import { z } from "zod";

export const deleteProductSchema = z.object({
  id: z.uuidv4(),
});

export type DeleteProductSchema = z.infer<typeof deleteProductSchema>;
