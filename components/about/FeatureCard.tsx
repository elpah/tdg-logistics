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
      className={`rounded-xl border border-border bg-card p-8 transition-[border-color,box-shadow,transform] duration-300 hover:-translate-y-px hover:border-primary/25 hover:shadow-sm motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
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

      <h3 className="mb-3 text-xl font-semibold text-foreground">{title}</h3>

      <p className="leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
};

export default FeatureCard;
