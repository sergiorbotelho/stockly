"use client";
import { SaleDto } from "@/app/_data-acess/sale/get-sales";
import { formatCurrency } from "@/app/_helpers/currency";
import { ColumnDef } from "@tanstack/react-table";
import SaletTableDropdownMenu from "./table-dropdown-menu";

export const salesTableColumns: ColumnDef<SaleDto>[] = [
  {
    accessorKey: "productNames",
    header: "Produtos",
  },
  {
    accessorKey: "totalProducts",
    header: "Quantidades de produtos",
  },
  {
    accessorKey: "totalAmount",
    header: "Valor Total",
    cell: ({
      row: {
        original: { totalAmount },
      },
    }) => formatCurrency(totalAmount),
  },
  {
    header: "Data",
    cell: ({
      row: {
        original: { date },
      },
    }) => new Date(date).toLocaleDateString("pt-BR"),
  },
  {
    accessorKey: "actions",
    header: "Ações",
    cell: ({ row: { original } }) => {
      return <SaletTableDropdownMenu sale={original} />;
    },
  },
];
