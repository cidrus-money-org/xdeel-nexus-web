
import { Badge } from "@/components/ui/badge";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbSeparator, 
  BreadcrumbPage 
} from "@/components/ui/breadcrumb";
import { ArrowLeft, Clock, Calendar, Network } from "lucide-react";
import { Link } from "react-router-dom";

export const NetworkTypesHeader = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/knowledge-base">Knowledge Base</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/knowledge-base#crypto-101">Blockchain & Crypto 101</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>Different Types of Networks</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
        
        <Link to="/knowledge-base" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Knowledge Base
        </Link>
        
        <div className="flex items-center mb-4">
          <Badge variant="outline" className="mr-4 text-indigo-600 border-indigo-300">
            <Network className="w-4 h-4 mr-2" />
            Crypto 101
          </Badge>
          <div className="flex items-center text-xdeel-gray space-x-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              14 min read
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Last updated: Dec 1, 2024
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
          Different Types of Networks
        </h1>
        <p className="text-xl text-xdeel-gray">
          Understanding Proof of Work, Proof of Stake, Layer 2s and more
        </p>
      </div>
    </section>
  );
};
