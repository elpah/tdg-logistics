const FeatureCard = ({
  icon: Icon,
  title,
  description,
  centered = false,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  centered?: boolean;
}) => {
  return (
    <div
      className={`rounded-2xl border border-border bg-background p-8 ${
        centered ? "text-center" : ""
      }`}
    >
      <div
        className={`mb-6 flex size-12 items-center justify-center rounded-lg bg-primary/10 ${
          centered ? "mx-auto" : ""
        }`}
      >
        <Icon className="size-6 text-primary" />
      </div>

      <h3 className="mb-4 text-2xl font-bold text-foreground">{title}</h3>

      <p className="leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
