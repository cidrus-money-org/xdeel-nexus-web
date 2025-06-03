
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface PaymentIssueCardProps {
  title: string;
  icon: LucideIcon;
  causes: string[];
  solutions: string[];
  borderColor: string;
  bgColor: string;
  textColor: string;
}

export const PaymentIssueCard = ({
  title,
  icon: Icon,
  causes,
  solutions,
  borderColor,
  bgColor,
  textColor
}: PaymentIssueCardProps) => {
  return (
    <Card className={`${borderColor} ${bgColor}`}>
      <CardHeader>
        <CardTitle className={`flex items-center ${textColor}`}>
          <Icon className="w-6 h-6 mr-3" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h4 className={`font-semibold ${textColor}`}>Possible Causes:</h4>
          <ul className={`${textColor.replace('-900', '-800')} space-y-2`}>
            {causes.map((cause, index) => (
              <li key={index}>• {cause}</li>
            ))}
          </ul>
          <h4 className={`font-semibold ${textColor}`}>Solutions:</h4>
          <ul className={`${textColor.replace('-900', '-800')} space-y-2`}>
            {solutions.map((solution, index) => (
              <li key={index}>• {solution}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};
