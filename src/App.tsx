
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import FAQ from "./pages/FAQ";
import Compliance from "./pages/Compliance";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Legal from "./pages/Legal";
import KycOverview from "./pages/KycOverview";
import Security from "./pages/Security";
import NotFound from "./pages/NotFound";
import TradingGuide from "./pages/resources/TradingGuide";
import SecurityGuide from "./pages/resources/SecurityGuide";
import ApiDocs from "./pages/resources/ApiDocs";
import FeeSchedule from "./pages/resources/FeeSchedule";
import SupportedCountries from "./pages/resources/SupportedCountries";
import TaxGuide from "./pages/resources/TaxGuide";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/kyc-overview" element={<KycOverview />} />
          <Route path="/security" element={<Security />} />
          <Route path="/resources/trading-guide" element={<TradingGuide />} />
          <Route path="/resources/security-guide" element={<SecurityGuide />} />
          <Route path="/resources/api-docs" element={<ApiDocs />} />
          <Route path="/resources/fee-schedule" element={<FeeSchedule />} />
          <Route path="/resources/supported-countries" element={<SupportedCountries />} />
          <Route path="/resources/tax-guide" element={<TaxGuide />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
