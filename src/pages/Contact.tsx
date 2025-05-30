import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  MapPin, 
  Users, 
  Shield, 
  Headphones,
  Globe,
  Calendar,
  Building,
  FileText,
  Star,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Support",
      description: "Call us directly for immediate assistance",
      value: "+48 66 224 8895",
      availability: "24/7 Available",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us an email and we'll respond quickly",
      value: "support@xdeel.com",
      availability: "Quick Response",
      color: "blue"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team instantly",
      value: "Start Chat",
      availability: "Instant",
      color: "purple"
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Get help with technical issues",
      value: "tech@xdeel.com",
      availability: "24/7 Available",
      color: "orange"
    }
  ];

  const offices = [
    {
      city: "Lodz",
      country: "Poland",
      address: "Wierzbowa 21, Lodz 90-227, Poland",
      phone: "+48 66 224 8895",
      email: "office@xdeel.com",
      isHeadquarters: true
    }
  ];

  const supportCategories = [
    {
      icon: Users,
      title: "Account Support",
      description: "Account verification, password reset, profile management"
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "KYC verification, security questions, compliance issues"
    },
    {
      icon: Globe,
      title: "Trading Support",
      description: "Buy/sell assistance, transaction issues, market questions"
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "Legal documents, terms of service, privacy policy"
    }
  ];

  const stats = [
    { label: "Average Response Time", value: "< 2 hours", icon: Clock },
    { label: "Customer Satisfaction", value: "98.5%", icon: Star },
    { label: "Languages Supported", value: "12+", icon: Globe },
    { label: "Support Agents", value: "50+", icon: Users }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#7B38F3] via-[#8B46F5] to-[#9B54F7] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-white border-white/30 bg-white/10">
              Contact Support
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              We're Here to Help
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
              Our dedicated support team is available 24/7 to assist you with any questions or issues. 
              Get in touch through any of our channels below.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Choose Your Preferred Contact Method
            </h2>
            <p className="text-xl text-xdeel-gray max-w-3xl mx-auto">
              Multiple ways to reach us, all leading to the same exceptional support experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-xdeel-primary/50 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center pb-3">
                  <div className="w-16 h-16 bg-xdeel-purple rounded-xl flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-xdeel-primary" />
                  </div>
                  <CardTitle className="text-xdeel-dark text-xl">{method.title}</CardTitle>
                  <p className="text-xdeel-gray text-sm">{method.description}</p>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    {method.title === "Live Chat" ? (
                      <Button className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white w-full">
                        {method.value}
                      </Button>
                    ) : (
                      <p className="text-xdeel-primary font-semibold text-lg">{method.value}</p>
                    )}
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`
                      ${method.color === 'green' ? 'bg-green-100 text-green-700 border-green-200' : ''}
                      ${method.color === 'blue' ? 'bg-blue-100 text-blue-700 border-blue-200' : ''}
                      ${method.color === 'purple' ? 'bg-purple-100 text-purple-700 border-purple-200' : ''}
                      ${method.color === 'orange' ? 'bg-orange-100 text-orange-700 border-orange-200' : ''}
                    `}
                  >
                    {method.availability}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Support Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-xdeel-dark">Send us a Message</CardTitle>
                  <p className="text-xdeel-gray">
                    Fill out the form below and we'll get back to you within 2 hours during business hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="general" className="w-full">
                    <TabsList className="grid w-full grid-cols-3">
                      <TabsTrigger value="general">General</TabsTrigger>
                      <TabsTrigger value="technical">Technical</TabsTrigger>
                      <TabsTrigger value="business">Business</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="general" className="space-y-4 mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-xdeel-dark mb-2">First Name *</label>
                          <Input placeholder="Enter your first name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-xdeel-dark mb-2">Last Name *</label>
                          <Input placeholder="Enter your last name" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-xdeel-dark mb-2">Email Address *</label>
                        <Input type="email" placeholder="your.email@example.com" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-xdeel-dark mb-2">Subject *</label>
                        <Input placeholder="Brief description of your inquiry" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-xdeel-dark mb-2">Message *</label>
                        <Textarea rows={6} placeholder="Please provide as much detail as possible..." />
                      </div>
                      <Button className="w-full bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
                        Send Message
                      </Button>
                    </TabsContent>

                    <TabsContent value="technical" className="space-y-4 mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-xdeel-dark mb-2">Your Name *</label>
                          <Input placeholder="Enter your name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-xdeel-dark mb-2">Account Email *</label>
                          <Input type="email" placeholder="your.account@email.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-xdeel-dark mb-2">Issue Type *</label>
                        <Input placeholder="e.g., Login problems, Transaction issues, etc." />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-xdeel-dark mb-2">Error Message (if any)</label>
                        <Input placeholder="Copy and paste any error messages" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-xdeel-dark mb-2">Detailed Description *</label>
                        <Textarea rows={6} placeholder="Please describe the issue, when it occurred, and steps you've already tried..." />
                      </div>
                      <Button className="w-full bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
                        Submit Technical Request
                      </Button>
                    </TabsContent>

                    <TabsContent value="business" className="space-y-4 mt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-xdeel-dark mb-2">Company Name *</label>
                          <Input placeholder="Your company name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-xdeel-dark mb-2">Your Role *</label>
                          <Input placeholder="e.g., CEO, CTO, Finance Director" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-xdeel-dark mb-2">Contact Person *</label>
                          <Input placeholder="Your full name" />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-xdeel-dark mb-2">Business Email *</label>
                          <Input type="email" placeholder="business@company.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-xdeel-dark mb-2">Inquiry Type *</label>
                        <Input placeholder="e.g., Partnership, API Integration, Enterprise Solutions" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-xdeel-dark mb-2">Business Requirements</label>
                        <Textarea rows={6} placeholder="Please describe your business needs, expected volume, timeline, and any specific requirements..." />
                      </div>
                      <Button className="w-full bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
                        Submit Business Inquiry
                      </Button>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Support Categories */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-xdeel-dark mb-6">Support Categories</h3>
                <div className="space-y-4">
                  {supportCategories.map((category, index) => (
                    <Card key={index} className="bg-white border-gray-200 hover:border-xdeel-primary/50 transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 bg-xdeel-purple rounded-lg flex items-center justify-center flex-shrink-0">
                            <category.icon className="w-5 h-5 text-xdeel-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-xdeel-dark mb-1">{category.title}</h4>
                            <p className="text-sm text-xdeel-gray">{category.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Quick Tips */}
              <Card className="bg-xdeel-purple border-xdeel-primary/30">
                <CardHeader>
                  <CardTitle className="text-xdeel-dark flex items-center">
                    <CheckCircle className="w-5 h-5 text-xdeel-primary mr-2" />
                    Quick Tips
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-xdeel-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-xdeel-gray">Include your account email for faster assistance</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-xdeel-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-xdeel-gray">Check our FAQ section for common questions</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-xdeel-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-xdeel-gray">Use live chat for urgent matters</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="w-4 h-4 text-xdeel-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-xdeel-gray">Business inquiries get priority handling</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-xdeel-dark mb-4">
              Our Office
            </h2>
            <p className="text-xl text-xdeel-gray max-w-3xl mx-auto">
              Visit us at our office in Lodz, Poland or reach out to our team directly.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {offices.map((office, index) => (
              <Card key={index} className="bg-white border-gray-200 hover:border-xdeel-primary/50 transition-all duration-300 hover:shadow-lg ring-2 ring-xdeel-primary/20">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Building className="w-5 h-5 text-xdeel-primary" />
                      <CardTitle className="text-xl text-xdeel-dark">{office.city}</CardTitle>
                    </div>
                    <Badge className="bg-xdeel-primary text-white">Headquarters</Badge>
                  </div>
                  <p className="text-xdeel-gray font-medium">{office.country}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-xdeel-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-xdeel-gray">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-xdeel-primary" />
                    <p className="text-sm text-xdeel-gray font-medium">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-xdeel-primary" />
                    <p className="text-sm text-xdeel-gray font-medium">{office.email}</p>
                  </div>
                  <Button variant="outline" className="w-full border-xdeel-primary/30 text-xdeel-primary hover:bg-xdeel-purple">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Visit
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-xdeel-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Join thousands of satisfied customers who trust Xdeel for their cryptocurrency needs. 
            Our support team is ready to help you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
              Start Trading Now
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
              Download Mobile App
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
