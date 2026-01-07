import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Product } from "@/app/generated/prisma";
import { ClipboardCopyIcon, EllipsisIcon, Trash2Icon } from "lucide-react";

interface SalesTableDropdownMenuProps {
  product: Pick<Product, "id">;
  onDelete: (productId: string) => void;
}

const SalesTableDropdownMenu = ({
  product,
  onDelete,
}: SalesTableDropdownMenuProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={"ghost"}>
          <EllipsisIcon size={16} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(product.id)}
          className="gap-1.5"
        >
          <ClipboardCopyIcon size={16} />
          Copiar ID
        </DropdownMenuItem>

        <DropdownMenuItem
          className="gap-1.5 text-red-500"
          onClick={() => onDelete(product.id)}
        >
          <Trash2Icon size={16} className="text-red-500" />
          <span className="text-red-500">Deletar</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SalesTableDropdownMenu;
