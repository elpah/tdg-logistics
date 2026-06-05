import { CheckCircle } from "lucide-react";

export function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3">
      <CheckCircle className="size-5 shrink-0 text-accent" />
      <span>{children}</span>
    </li>
  );
}
