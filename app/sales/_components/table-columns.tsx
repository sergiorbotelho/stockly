"use client";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { ProductDto } from "@/app/_data-acess/product/get-products";
import { SaleDto } from "@/app/_data-acess/sale/get-sales";
import { formatCurrency } from "@/app/_helpers/currency";
import { ColumnDef } from "@tanstack/react-table";
import SaletTableDropdownMenu from "./table-dropdown-menu";

interface SaleTableColumn extends SaleDto {
  products: ProductDto[];
  productOptions: ComboboxOption[];
}

export const salesTableColumns: ColumnDef<SaleTableColumn>[] = [
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
    cell: ({ row: { original: sales } }) => {
      return (
        <SaletTableDropdownMenu
          sale={sales}
          productOptions={sales.productOptions}
          products={sales.products}
        />
      );
    },
  },
];
