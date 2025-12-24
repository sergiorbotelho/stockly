"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Button } from "./ui/button";

interface SidebarButtonProps {
  children: ReactNode;

  href: string;
}
const SidebarButton = ({ children, href }: SidebarButtonProps) => {
  const pathname = usePathname();
  return (
    <Button
      variant={pathname === href ? "secondary" : "ghost"}
      className="justify-start"
      asChild
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
};

export default SidebarButton;
