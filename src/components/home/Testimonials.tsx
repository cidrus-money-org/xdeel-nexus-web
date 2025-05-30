
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Elias M.",
      role: "Small Business Owner",
      content: "Xdeel helped us onboard crypto payments faster than any other platform. Simple and secure.",
      rating: 5,
      initials: "EM"
    },
    {
      name: "Anna K.",
      role: "Freelancer",
      content: "The KNF authorization gave me confidence. Finally a crypto platform I can trust completely.",
      rating: 5,
      initials: "AK"
    },
    {
      name: "Marcus W.",
      role: "Investor",
      content: "Best user experience I've had with crypto. The instant transfers and support are amazing.",
      rating: 5,
      initials: "MW"
    }
  ];

  return (
    <section className="py-20 bg-[#F4F0FF] w-full">
      <div className="w-full px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-[#7B38F3] border-[#7B38F3]/30 bg-white/80 px-4 py-2 rounded-xl">
            Testimonials
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#2E2E2E] mb-4">
            What Our Users Say
          </h2>
          <p className="text-lg text-[#7C7C7C] max-w-3xl mx-auto">
            Join thousands of satisfied users who trust Xdeel for their cryptocurrency needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 rounded-2xl hover:scale-105">
              <CardContent className="p-8">
                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Content */}
                <p className="text-[#7C7C7C] leading-relaxed mb-6 italic">
                  "{testimonial.content}"
                </p>

                {/* User Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#7B38F3] rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#2E2E2E]">{testimonial.name}</h4>
                    <p className="text-sm text-[#7C7C7C]">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
