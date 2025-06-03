
import { Card, CardContent } from "@/components/ui/card";

interface ContactInfo {
  email: string;
  chat: string;
  phone: string;
}

interface SupportContactProps {
  contactInfo: ContactInfo;
}

export const SupportContact = ({ contactInfo }: SupportContactProps) => {
  return (
    <Card className="border-blue-200 bg-blue-50">
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold text-blue-900 mb-3">Need More Help?</h3>
        <p className="text-blue-800 mb-4">
          If you're still experiencing payment issues after following these steps, our support team is here to help.
        </p>
        <div className="space-y-2 text-blue-800">
          <p>📧 Email: {contactInfo.email}</p>
          <p>💬 Live Chat: {contactInfo.chat}</p>
          <p>📞 Phone: {contactInfo.phone}</p>
        </div>
      </CardContent>
    </Card>
  );
};
