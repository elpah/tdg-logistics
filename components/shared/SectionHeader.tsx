interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="mb-2 font-medium text-primary">{eyebrow}</p>

      <h2 className="text-2xl font-bold text-foreground md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </div>
  );
}
