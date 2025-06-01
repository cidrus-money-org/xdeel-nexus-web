
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Features from "./pages/Features";
import HowItWorks from "./pages/HowItWorks";
import KnowledgeBase from "./pages/KnowledgeBase";
import Updates from "./pages/Updates";
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
import WhatIsBitcoin from "./pages/knowledge-base/WhatIsBitcoin";
import WhatIsEthereum from "./pages/knowledge-base/WhatIsEthereum";
import HowBlockchainWorks from "./pages/knowledge-base/HowBlockchainWorks";
import CryptoHistory from "./pages/knowledge-base/CryptoHistory";
import GasFees from "./pages/knowledge-base/GasFees";
import NetworkTypes from "./pages/knowledge-base/NetworkTypes";
import AccountSetup from "./pages/knowledge-base/getting-started/AccountSetup";
import FirstSteps from "./pages/knowledge-base/getting-started/FirstSteps";
import VerificationGuide from "./pages/knowledge-base/getting-started/VerificationGuide";
import PlatformTour from "./pages/knowledge-base/getting-started/PlatformTour";
import TradingCategory from "./pages/knowledge-base/TradingCategory";
import PaymentsCategory from "./pages/knowledge-base/PaymentsCategory";
import OrderTypes from "./pages/knowledge-base/trading/OrderTypes";

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
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/knowledge-base/trading" element={<TradingCategory />} />
          <Route path="/knowledge-base/payments" element={<PaymentsCategory />} />
          <Route path="/knowledge-base/trading/order-types" element={<OrderTypes />} />
          <Route path="/updates" element={<Updates />} />
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
          <Route path="/knowledge-base/what-is-bitcoin" element={<WhatIsBitcoin />} />
          <Route path="/knowledge-base/what-is-ethereum" element={<WhatIsEthereum />} />
          <Route path="/knowledge-base/how-blockchain-works" element={<HowBlockchainWorks />} />
          <Route path="/knowledge-base/crypto-history" element={<CryptoHistory />} />
          <Route path="/knowledge-base/gas-fees" element={<GasFees />} />
          <Route path="/knowledge-base/network-types" element={<NetworkTypes />} />
          <Route path="/knowledge-base/account-setup" element={<AccountSetup />} />
          <Route path="/knowledge-base/first-steps" element={<FirstSteps />} />
          <Route path="/knowledge-base/verification-guide" element={<VerificationGuide />} />
          <Route path="/knowledge-base/platform-tour" element={<PlatformTour />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
