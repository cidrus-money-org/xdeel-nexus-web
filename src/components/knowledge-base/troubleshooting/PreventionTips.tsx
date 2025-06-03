
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

interface PreventionTipsProps {
  tips: string[];
}

export const PreventionTips = ({ tips }: PreventionTipsProps) => {
  return (
    <Card className="border-green-200 bg-green-50 mb-8">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
          <CheckCircle className="w-5 h-5 mr-2" />
          Prevention Tips
        </h3>
        <ul className="space-y-2 text-green-800">
          {tips.map((tip, index) => (
            <li key={index}>• {tip}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
