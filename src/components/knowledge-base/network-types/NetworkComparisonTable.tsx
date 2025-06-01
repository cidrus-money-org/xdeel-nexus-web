
import { Card, CardContent } from "@/components/ui/card";

export const NetworkComparisonTable = () => {
  return (
    <Card className="mb-8">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold text-xdeel-dark mb-6">Making Sense of Network Types</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-200 p-3 text-left font-semibold">Factor</th>
                <th className="border border-gray-200 p-3 text-left font-semibold">PoW</th>
                <th className="border border-gray-200 p-3 text-left font-semibold">PoS</th>
                <th className="border border-gray-200 p-3 text-left font-semibold">Layer 2</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-200 p-3 font-medium">Energy Usage</td>
                <td className="border border-gray-200 p-3">High</td>
                <td className="border border-gray-200 p-3">Low</td>
                <td className="border border-gray-200 p-3">Varies</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">Transaction Speed</td>
                <td className="border border-gray-200 p-3">Slow</td>
                <td className="border border-gray-200 p-3">Medium</td>
                <td className="border border-gray-200 p-3">Fast</td>
              </tr>
              <tr>
                <td className="border border-gray-200 p-3 font-medium">Security Level</td>
                <td className="border border-gray-200 p-3">Very High</td>
                <td className="border border-gray-200 p-3">High</td>
                <td className="border border-gray-200 p-3">Moderate to High</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-200 p-3 font-medium">Decentralization</td>
                <td className="border border-gray-200 p-3">High</td>
                <td className="border border-gray-200 p-3">Medium</td>
                <td className="border border-gray-200 p-3">Varies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};
