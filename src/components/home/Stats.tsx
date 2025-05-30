
export const Stats = () => {
  return (
    <section className="py-20 bg-white w-full">
      <div className="w-full px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="bg-[#F4F0FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-extrabold text-[#7B38F3] mb-2">€100M+</div>
              <div className="text-[#7C7C7C] text-lg font-medium">Transaction Volume</div>
              <div className="text-sm text-[#7C7C7C] mt-2">Processed securely</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-[#F4F0FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-extrabold text-[#7B38F3] mb-2">50K+</div>
              <div className="text-[#7C7C7C] text-lg font-medium">Active Users</div>
              <div className="text-sm text-[#7C7C7C] mt-2">Trust our platform</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="bg-[#F4F0FF] rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="text-5xl font-extrabold text-[#7B38F3] mb-2">99.9%</div>
              <div className="text-[#7C7C7C] text-lg font-medium">Uptime</div>
              <div className="text-sm text-[#7C7C7C] mt-2">Reliable service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
