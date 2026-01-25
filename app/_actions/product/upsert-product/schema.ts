import z from "zod";

export const upsertProductSchema = z.object({
  id: z.uuidv4().optional(),
  name: z.string().trim().min(1, { error: "O nome do produto é obrigatório" }),
  price: z.number().min(0.01, { error: "O preço do produto é obrigatório" }),
  stock: z
    .number()
    .int()
    .min(0, { error: "A quantidade em estoque é obrigatório" }),
});

export type UpsertProductSchema = z.infer<typeof upsertProductSchema>;
