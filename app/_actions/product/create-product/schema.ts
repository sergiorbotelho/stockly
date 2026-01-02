import z from "zod";

export const createProductSchema = z.object({
  name: z.string().trim().min(1, { error: "O nome do produto é obrigatório" }),
  price: z.number().min(0.01, { error: "O preço do produto é obrigatório" }),
  stock: z
    .number()
    .int()
    .positive({ error: "A quantidade em estoque deve ser positiva." })
    .min(0, { error: "A quantidade em estoque é obrigatório" }),
});

export type CreateProductSchema = z.infer<typeof createProductSchema>;
