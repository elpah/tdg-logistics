import { LucideIcon } from "lucide-react";

type CardProps = {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
  href?: string;
};

const cardClassName =
  "grid grid-cols-[2.5rem_1fr] gap-x-4 rounded-xl bg-secondary p-5 transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-px hover:shadow-[0_2px_8px_rgba(15,23,42,0.06)]";

const Card = ({ label, value, description, icon: Icon, href }: CardProps) => {
  const content = (
    <>
      <p className="col-start-2 text-sm text-muted-foreground">{label}</p>

      <div className="relative col-start-1 row-start-2 h-0 self-center">
        <div className="absolute top-1/2 left-0 flex size-10 -translate-y-1/2 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>
      </div>

      <p className="col-start-2 row-start-2 font-semibold text-foreground">
        {value}
      </p>

      <p className="col-start-2 text-sm text-muted-foreground">{description}</p>
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${cardClassName} cursor-pointer no-underline`}>
        {content}
      </a>
    );
  }

  return <div className={cardClassName}>{content}</div>;
};

export default Card;
