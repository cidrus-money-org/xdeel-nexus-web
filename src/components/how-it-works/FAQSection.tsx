
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const FAQSection = () => {
  const faqItems = [
    {
      question: "How long does the account verification process take?",
      answer: "The account verification process typically takes 24-48 hours, but many users receive instant approval through our automated verification system. The speed depends on the accuracy and clarity of the submitted documents."
    },
    {
      question: "What documents do I need for KYC verification?",
      answer: "For KYC verification, you'll need a government-issued photo ID (passport, national ID card, or driver's license), a recent selfie for facial verification, and proof of address (utility bill or bank statement from the last 3 months)."
    },
    {
      question: "What payment methods does Xdeel accept?",
      answer: "Xdeel accepts various payment methods including bank transfers (SEPA), credit/debit cards, Apple Pay, and local payment methods. Each method has different processing times and fees, with card payments being the fastest option."
    },
    {
      question: "What are the minimum and maximum deposit amounts?",
      answer: "The minimum deposit is €20 (or currency equivalent). The maximum daily deposit is €10,000 for standard accounts, and the monthly limit is €100,000. Higher limits are available for verified business accounts."
    },
    {
      question: "How quickly can I start trading after registration?",
      answer: "You can start trading immediately after completing the account verification process and making your first deposit. With instant payment methods like credit cards, you can begin trading within minutes of initial registration."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, Xdeel is transparent about all fees. Trading fees range from 0.10% to 0.35% depending on your account type and whether you're a maker or taker. Deposit fees vary by payment method, and withdrawal fees include network costs plus a small service fee."
    },
    {
      question: "How secure is the Xdeel platform?",
      answer: "Xdeel employs bank-grade security measures including 2FA authentication, cold storage for 95% of assets, regular security audits, and full regulatory compliance with KNF requirements. All user data is encrypted and protected."
    },
    {
      question: "Can I use Xdeel on mobile devices?",
      answer: "Yes, Xdeel's platform is fully responsive and works on all mobile browsers. Our web interface is optimized for both desktop and mobile use, giving you full trading functionality on any device."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-white/80">
            Questions & Answers
          </Badge>
          <h2 className="text-3xl font-bold text-xdeel-dark mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xdeel-gray max-w-2xl mx-auto">
            Get answers to common questions about using Xdeel for cryptocurrency trading.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 text-xdeel-dark font-medium">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-2 text-xdeel-gray">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
