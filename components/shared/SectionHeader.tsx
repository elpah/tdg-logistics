interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}
const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeaderProps) => {
  return (
    <div
      className={
        align === "left"
          ? "mb-8 max-w-2xl text-left"
          : "mx-auto mb-10 max-w-2xl text-center"
      }
    >
      <p className="mb-2 text-sm font-medium tracking-wide text-primary">{eyebrow}</p>

      <h2 className="text-2xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
