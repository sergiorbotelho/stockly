"use client";

import { Button } from "@/app/_components/ui/button";
import { ComboboxOption } from "@/app/_components/ui/combobox";
import { Sheet, SheetTrigger } from "@/app/_components/ui/sheet";
import { Product } from "@/app/generated/prisma";
import { useState } from "react";
import UpsertSheetContent from "./upsert-sheet-content";

interface CreateSaleButtonProps {
  products: Product[];
  productsOptions: ComboboxOption[];
}
const CreateSaleButton = ({
  products,
  productsOptions,
}: CreateSaleButtonProps) => {
  const [sheetIsOpen, setSheetIsOpen] = useState(false);
  return (
    <Sheet open={sheetIsOpen} onOpenChange={setSheetIsOpen}>
      <SheetTrigger asChild>
        <Button>Nova venda</Button>
      </SheetTrigger>
      <UpsertSheetContent
        setSheetIsOpen={setSheetIsOpen}
        productsOptions={productsOptions}
        products={products}
      />
    </Sheet>
  );
};

export default CreateSaleButton;
