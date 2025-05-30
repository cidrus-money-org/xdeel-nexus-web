
export const Stats = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-xdeel-primary mb-2">€100M+</div>
            <div className="text-xdeel-gray">Transaction Volume</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-xdeel-primary mb-2">50K+</div>
            <div className="text-xdeel-gray">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-xdeel-primary mb-2">99.9%</div>
            <div className="text-xdeel-gray">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};
