
export const Stats = () => {
  return (
    <section className="py-20 bg-white w-full">
      <div className="w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-[#7B38F3] mb-2">€100M+</div>
            <div className="text-[#7C7C7C] text-lg">Transaction Volume</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-[#7B38F3] mb-2">50K+</div>
            <div className="text-[#7C7C7C] text-lg">Active Users</div>
          </div>
          <div className="text-center">
            <div className="text-5xl font-extrabold text-[#7B38F3] mb-2">99.9%</div>
            <div className="text-[#7C7C7C] text-lg">Uptime</div>
          </div>
        </div>
      </div>
    </section>
  );
};
