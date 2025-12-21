const stats = [
  { value: "$12B+", label: "Processed Annually" },
  { value: "99.99%", label: "Uptime SLA" },
  { value: "190+", label: "Countries Supported" },
  { value: "10K+", label: "Happy Customers" },
];

const Stats = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="glass rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
