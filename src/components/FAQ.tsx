
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
      question: "Is Xdeel regulated and safe to use?",
      answer: "Yes, Xdeel is a fully licensed Virtual Asset Service Provider (VASP) in the European Union. We comply with all relevant regulations including AML/KYC requirements and maintain the highest security standards with bank-grade encryption and cold storage for digital assets."
    },
    {
      question: "How long does KYC verification take?",
      answer: "Our streamlined KYC process typically takes 2-5 minutes to complete. In most cases, verification is instant, but it may take up to 24 hours during peak times. You'll be notified immediately once your account is verified."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers (SEPA), debit/credit cards (Visa, Mastercard), and various other payment methods depending on your region. All transactions are processed securely with industry-standard encryption."
    },
    {
      question: "What cryptocurrencies can I trade?",
      answer: "Xdeel supports major cryptocurrencies including Bitcoin (BTC), Ethereum (ETH), and many other popular altcoins. We regularly add new cryptocurrencies based on market demand and regulatory compliance."
    },
    {
      question: "What are your fees?",
      answer: "We believe in transparent pricing with no hidden fees. Trading fees start from 0.5% per transaction, with lower rates for higher volume traders. Deposit and withdrawal fees vary by payment method. Check our fee schedule for detailed information."
    },
    {
      question: "How secure is my money and crypto?",
      answer: "Security is our top priority. We use multi-signature wallets, cold storage for the majority of funds, two-factor authentication, and maintain comprehensive insurance coverage. Your funds are segregated and protected according to EU regulations."
    },
    {
      question: "Can I withdraw my crypto to an external wallet?",
      answer: "Absolutely! You have full control over your cryptocurrency. You can withdraw to any external wallet address at any time. We support all major wallet types and blockchain networks."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes, our customer support team is available 24/7 via live chat, email, and phone. Our experts are ready to help with any questions about trading, verification, or technical issues."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-600 border-blue-200">
            FAQ
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about Xdeel. Can't find the answer you're looking for? 
            Reach out to our customer support team.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-gray-200 rounded-lg px-6 data-[state=open]:shadow-md transition-all duration-200"
            >
              <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
