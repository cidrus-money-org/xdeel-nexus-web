
import { PaymentIssueCard } from "./PaymentIssueCard";
import { AlertCircle, Clock, XCircle } from "lucide-react";

const paymentIssues = [
  {
    title: "Card Declined",
    icon: XCircle,
    causes: [
      "Insufficient funds in your account",
      "Daily spending limit exceeded",
      "Card expired or invalid details",
      "Bank blocking international transactions"
    ],
    solutions: [
      "Check your account balance",
      "Contact your bank to increase limits",
      "Verify card details are correct",
      "Enable international transactions"
    ],
    borderColor: "border-red-200",
    bgColor: "bg-red-50",
    textColor: "text-red-900"
  },
  {
    title: "Bank Transfer Delayed",
    icon: Clock,
    causes: [
      "Weekend or bank holiday processing",
      "Additional verification required",
      "Incorrect bank details provided",
      "High transaction volume delays"
    ],
    solutions: [
      "Wait for next business day",
      "Check for verification emails",
      "Verify IBAN/account details",
      "Contact support if over 5 days"
    ],
    borderColor: "border-orange-200",
    bgColor: "bg-orange-50",
    textColor: "text-orange-900"
  },
  {
    title: "Payment Method Not Accepted",
    icon: AlertCircle,
    causes: [
      "Unsupported card type (e.g., prepaid cards)",
      "Geographic restrictions",
      "Currency not supported",
      "Minimum deposit amount not met"
    ],
    solutions: [
      "Use a different payment method",
      "Check supported countries list",
      "Convert to supported currency",
      "Meet minimum deposit requirements"
    ],
    borderColor: "border-yellow-200",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-900"
  }
];

export const PaymentIssuesGrid = () => {
  return (
    <div className="grid gap-6 mb-12">
      {paymentIssues.map((issue, index) => (
        <PaymentIssueCard
          key={index}
          title={issue.title}
          icon={issue.icon}
          causes={issue.causes}
          solutions={issue.solutions}
          borderColor={issue.borderColor}
          bgColor={issue.bgColor}
          textColor={issue.textColor}
        />
      ))}
    </div>
  );
};
