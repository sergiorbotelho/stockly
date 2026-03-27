"use client";

import { Button } from "@/app/_components/ui/button";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import { ProductDto } from "@/app/_data-acess/product/get-products";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import UpsertSheetContent from "./upsert-sheet-content";

interface UpsertSaleButtonProps {
  products: ProductDto[];
  productsOptions: ComboboxOption[];
}
const UpsertSaleButton = ({
  products,
  productsOptions,
}: UpsertSaleButtonProps) => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <Button className="gap-2">
          <PlusIcon size={20} />
          Nova venda
        </Button>
      </SheetTrigger>
      <UpsertSheetContent
        isOpen={sheetIsOpen}
        setSheetIsOpen={setSheetIsOpen}
        productsOptions={productsOptions}
        products={products}
      />
    </Sheet>
  );
};

export default UpsertSaleButton;
