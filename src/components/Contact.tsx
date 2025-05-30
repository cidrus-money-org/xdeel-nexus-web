
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, MessageCircle, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-blue-400 border-blue-500/30 bg-blue-600/10">
            Contact Us
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our support team is here to help you 24/7. Reach out through any of the channels below 
            and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Phone className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-white text-lg">Phone Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-3">Call us directly</p>
              <p className="text-blue-400 font-semibold">+48 66 224 8895</p>
              <Badge variant="secondary" className="mt-2 bg-green-600/20 text-green-400 border-green-500/30">
                24/7 Available
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-white text-lg">Email Support</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-3">Send us an email</p>
              <p className="text-blue-400 font-semibold">support@xdeel.com</p>
              <Badge variant="secondary" className="mt-2 bg-blue-600/20 text-blue-400 border-blue-500/30">
                Quick Response
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MessageCircle className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-white text-lg">Live Chat</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-3">Instant messaging</p>
              <Button variant="outline" className="border-blue-500/30 text-blue-400 hover:bg-blue-600/10">
                Start Chat
              </Button>
              <Badge variant="secondary" className="mt-2 bg-green-600/20 text-green-400 border-green-500/30">
                Instant
              </Badge>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/50 border-gray-700 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm">
            <CardHeader className="text-center pb-3">
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-blue-400" />
              </div>
              <CardTitle className="text-white text-lg">Support Hours</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-300 mb-3">We're always here</p>
              <p className="text-blue-400 font-semibold">24/7</p>
              <Badge variant="secondary" className="mt-2 bg-purple-600/20 text-purple-400 border-purple-500/30">
                Always Open
              </Badge>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto bg-gray-800/50 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-xl text-center">Send us a Message</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">First Name</label>
                <input type="text" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Last Name</label>
                <input type="text" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
              <input type="email" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input type="text" className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea rows={4} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"></textarea>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
              Send Message
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
