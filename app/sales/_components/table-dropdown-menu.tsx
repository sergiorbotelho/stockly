import { deleteSale } from "@/app/_actions/sales/delete-sale";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/app/_components/ui/alert-dialog";
import { Button } from "@/app/_components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/app/_components/ui/dropdown-menu";
import { Sale } from "@/app/generated/prisma";
import {
  ClipboardCopyIcon,
  EditIcon,
  EllipsisIcon,
  Trash2,
} from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";

interface SaleTableDropdownMenuProps {
  sale: Pick<Sale, "id">;
}

const SaleTableDropdownMenu = ({ sale }: SaleTableDropdownMenuProps) => {
  const { execute: executeDeleteSale } = useAction(deleteSale, {
    onSuccess: () => {
      toast.success("Venda deletada com sucesso.");
    },
    onError: () => {
      toast.error("Erro  ao deletar a venda.");
    },
  });
  const handleCopyToClipboardClick = () => {
    navigator.clipboard.writeText(sale.id);
    toast.success("ID copiado com sucesso!");
  };

  const handleConfirmDelete = () => executeDeleteSale({ id: sale.id });
  return (
    <AlertDialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={"ghost"}>
            <EllipsisIcon size={16} />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={handleCopyToClipboardClick}
            className="gap-1.5"
          >
            <ClipboardCopyIcon size={16} />
            Copiar ID
          </DropdownMenuItem>

          <DropdownMenuItem className="gap-1.5">
            <EditIcon size={16} />
            Editar
          </DropdownMenuItem>

          <AlertDialogTrigger asChild>
            <DropdownMenuItem className="gap-1.5 text-red-500">
              <Trash2 size={16} className="text-red-500" />
              <span className="text-red-500">Deletar</span>
            </DropdownMenuItem>
          </AlertDialogTrigger>
        </DropdownMenuContent>
      </DropdownMenu>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Você tem certeza?</AlertDialogTitle>
          <AlertDialogDescription>
            Você está prestes a excluir este produto. Esta ação não pode ser
            desfeita. Deseja continuar?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancelar</AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmDelete}>
            Continuar
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SaleTableDropdownMenu;
