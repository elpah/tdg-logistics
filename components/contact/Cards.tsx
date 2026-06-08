import { LucideIcon } from "lucide-react";

type CardProps = {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
};

const Card = ({ label, value, description, icon: Icon }: CardProps) => {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-secondary p-5">
      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-5 text-primary" />
      </div>

      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-semibold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default Card;
