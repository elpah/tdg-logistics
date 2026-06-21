const StatCard = ({ value, label }: { value: string; label: string }) => {
  return (
    <div className="text-center">
      <p className="text-4xl font-bold text-foreground md:text-5xl">{value}</p>

      <p className="mt-2 text-primary">{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "50+", label: "Countries Served" },
    { value: "10K+", label: "Shipments Delivered" },
    { value: "98%", label: "Customer Satisfaction" },
  ];
  return (
    <section className="bg-secondary px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;