
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";

export const Comparison = () => {
  const features = [
    {
      feature: "Instant Verification",
      xdeel: true,
      traditional: false
    },
    {
      feature: "SEPA/SWIFT Transfers",
      xdeel: true,
      traditional: "Limited"
    },
    {
      feature: "Licensed in EU",
      xdeel: true,
      traditional: false
    },
    {
      feature: "Direct Fiat to Crypto",
      xdeel: true,
      traditional: "Often Indirect"
    },
    {
      feature: "24/7 Support",
      xdeel: true,
      traditional: false
    },
    {
      feature: "Bank-Grade Security",
      xdeel: true,
      traditional: "Varies"
    }
  ];

  return (
    <section className="py-16 bg-[#F4F0FF] w-full border-t border-gray-200">
      <div className="w-full px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-[#7B38F3] border-[#7B38F3]/30 bg-white px-4 py-2 rounded-xl">
            Comparison
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2E2E2E] mb-4">
            Why Choose Xdeel?
          </h2>
          <p className="text-lg text-[#7C7C7C] max-w-3xl mx-auto">
            See how Xdeel compares to traditional cryptocurrency exchanges.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="bg-white border-gray-200 shadow-lg rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#F8F6FF]">
                    <tr>
                      <th className="text-left p-6 text-[#2E2E2E] font-bold text-lg">Feature</th>
                      <th className="text-center p-6 text-[#7B38F3] font-bold text-lg">Xdeel</th>
                      <th className="text-center p-6 text-[#7C7C7C] font-bold text-lg">Traditional Exchanges</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-6 text-[#2E2E2E] font-medium">{item.feature}</td>
                        <td className="p-6 text-center">
                          {item.xdeel === true ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-[#7B38F3] font-medium">{item.xdeel}</span>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {item.traditional === false ? (
                            <X className="w-6 h-6 text-red-500 mx-auto" />
                          ) : item.traditional === true ? (
                            <Check className="w-6 h-6 text-green-500 mx-auto" />
                          ) : (
                            <span className="text-[#7C7C7C] font-medium">{item.traditional}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
