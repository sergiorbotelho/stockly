"use client";

import ProductStatusBadge from "@/app/_components/product-status-badge";
import { ProductDto } from "@/app/_data-acess/product/get-products";
import { formatCurrency } from "@/app/_helpers/currency";
import { ColumnDef } from "@tanstack/react-table";
import ProductTableDropdownMenu from "./table-dropdown-menu";

export const productTableColumns: ColumnDef<ProductDto>[] = [
  {
    accessorKey: "name",
    header: "Produto",
  },
  {
    accessorKey: "price",
    header: "Valor unitário",
    cell({ row: { original } }) {
      const product = original;
      return formatCurrency(Number(product.price));
    },
  },
  {
    accessorKey: "stock",
    header: "Estoque",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row: { original } }) => {
      const product = original;
      return <ProductStatusBadge status={product.status} />;
    },
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original } }) => {
      return <ProductTableDropdownMenu row={original} />;
    },
  },
];
