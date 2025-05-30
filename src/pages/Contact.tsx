
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-xdeel-primary border-xdeel-primary/30 bg-xdeel-purple">
              Contact Us
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-xdeel-gray max-w-3xl mx-auto">
              Our support team is here to help you 24/7. Reach out through any of the channels below 
              and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-white border-gray-200 hover:border-xdeel-primary/50 transition-all duration-300">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-xdeel-purple rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-xdeel-primary" />
                </div>
                <CardTitle className="text-xdeel-dark text-lg">Phone Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xdeel-gray mb-3">Call us directly</p>
                <p className="text-xdeel-primary font-semibold">+48 66 224 8895</p>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700 border-green-200">
                  24/7 Available
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-xdeel-primary/50 transition-all duration-300">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-xdeel-purple rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-xdeel-primary" />
                </div>
                <CardTitle className="text-xdeel-dark text-lg">Email Support</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xdeel-gray mb-3">Send us an email</p>
                <p className="text-xdeel-primary font-semibold">support@xdeel.com</p>
                <Badge variant="secondary" className="mt-2 bg-blue-100 text-blue-700 border-blue-200">
                  Quick Response
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-xdeel-primary/50 transition-all duration-300">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-xdeel-purple rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MessageCircle className="w-6 h-6 text-xdeel-primary" />
                </div>
                <CardTitle className="text-xdeel-dark text-lg">Live Chat</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xdeel-gray mb-3">Instant messaging</p>
                <Button variant="outline" className="border-xdeel-primary/30 text-xdeel-primary hover:bg-xdeel-purple">
                  Start Chat
                </Button>
                <Badge variant="secondary" className="mt-2 bg-green-100 text-green-700 border-green-200">
                  Instant
                </Badge>
              </CardContent>
            </Card>

            <Card className="bg-white border-gray-200 hover:border-xdeel-primary/50 transition-all duration-300">
              <CardHeader className="text-center pb-3">
                <div className="w-12 h-12 bg-xdeel-purple rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-xdeel-primary" />
                </div>
                <CardTitle className="text-xdeel-dark text-lg">Support Hours</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-xdeel-gray mb-3">We're always here</p>
                <p className="text-xdeel-primary font-semibold">24/7</p>
                <Badge variant="secondary" className="mt-2 bg-purple-100 text-purple-700 border-purple-200">
                  Always Open
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
