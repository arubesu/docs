"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

export interface ToolbarButtonProps {
  onClick?: () => void;
  icon: LucideIcon;
  isActive?: boolean;
}

export const ToolbarButton = ({
  onClick,
  icon: Icon,
  isActive,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      title={Icon.name}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};
