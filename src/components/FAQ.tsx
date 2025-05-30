
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export const FAQ = () => {
  const faqs = [
    {
      question: "How do I create a Xdeel account?",
      answer: "Creating an account is simple and takes just 2 minutes. Click 'Sign Up', provide your email address, create a secure password, and verify your email. You'll then be able to access all Xdeel features immediately."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We support a wide range of payment methods including bank transfers (SEPA), credit/debit cards (Visa, Mastercard), and various local payment methods depending on your region. All transactions are processed securely with industry-standard encryption."
    },
    {
      question: "How quickly can I buy cryptocurrencies?",
      answer: "Once your account is set up and verified, you can purchase cryptocurrencies instantly. Our platform processes transactions in real-time with live market prices, so you get immediate execution of your orders."
    },
    {
      question: "What are your fees?",
      answer: "We believe in transparent pricing with no hidden fees. Our competitive fees vary by transaction type and payment method. You'll always see the exact fee amount before confirming any transaction. Check our fee schedule for detailed information."
    },
    {
      question: "Is Xdeel regulated and safe?",
      answer: "Yes, Xdeel is fully authorized by the Polish Financial Supervision Authority (KNF). We maintain the highest security standards with bank-grade encryption, secure storage, and comprehensive compliance with financial regulations."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available 24/7 to help you. You can reach us by phone at +48 66 224 8895, email us at support@xdeel.com, or use our live chat feature on the website."
    },
    {
      question: "Can I convert between different cryptocurrencies?",
      answer: "Absolutely! Xdeel supports crypto-to-crypto conversions and swaps. You can easily convert between different cryptocurrencies or swap to fiat currencies with competitive rates and instant processing."
    },
    {
      question: "What security measures do you have in place?",
      answer: "We employ multiple layers of security including multi-factor authentication, encrypted transactions, secure cold storage for funds, regular security audits, and compliance with financial regulatory standards to protect your assets and personal information."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-500/30 bg-blue-600/10">
            FAQ
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Everything you need to know about Xdeel. Can't find the answer you're looking for? 
            Contact our 24/7 support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-700 rounded-lg px-6 data-[state=open]:shadow-lg data-[state=open]:border-blue-500/50 transition-all duration-200 bg-gray-900/50 backdrop-blur-sm"
            >
              <AccordionTrigger className="text-left font-semibold text-white hover:text-blue-400 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-300 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
