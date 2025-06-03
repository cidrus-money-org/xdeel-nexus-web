
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
import SecurityCategory from "./pages/knowledge-base/SecurityCategory";
import Crypto101Category from "./pages/knowledge-base/Crypto101Category";
import ApiDocsCategory from "./pages/knowledge-base/ApiDocsCategory";
import ComplianceCategory from "./pages/knowledge-base/ComplianceCategory";
import OrderTypes from "./pages/knowledge-base/trading/OrderTypes";
import ReadingCharts from "./pages/knowledge-base/trading/ReadingCharts";
import FeesLimits from "./pages/knowledge-base/trading/FeesLimits";
import CommonMistakes from "./pages/knowledge-base/trading/CommonMistakes";
import Enable2FA from "./pages/knowledge-base/security/Enable2FA";
import PhishingAwareness from "./pages/knowledge-base/security/PhishingAwareness";
import WalletProtection from "./pages/knowledge-base/security/WalletProtection";
import FakeSupport from "./pages/knowledge-base/security/FakeSupport";
import ReportSuspicious from "./pages/knowledge-base/security/ReportSuspicious";
import PasswordTips from "./pages/knowledge-base/security/PasswordTips";
import Keys from "./pages/knowledge-base/crypto-101/Keys";
import Stablecoins from "./pages/knowledge-base/crypto-101/Stablecoins";
import GettingStartedCategory from "./pages/knowledge-base/GettingStartedCategory";
import WithdrawFunds from "./pages/knowledge-base/payments/WithdrawFunds";
import DepositFunds from "./pages/knowledge-base/payments/DepositFunds";
import StopLossTakeProfit from "./pages/knowledge-base/trading/StopLossTakeProfit";
import AmlCompliance from "./pages/knowledge-base/compliance/AmlCompliance";
import RestrictedJurisdictions from "./pages/knowledge-base/compliance/RestrictedJurisdictions";
import PrivacyRights from "./pages/knowledge-base/compliance/PrivacyRights";
import TermsExplained from "./pages/knowledge-base/compliance/TermsExplained";

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
          <Route path="/knowledge-base/getting-started" element={<GettingStartedCategory />} />
          <Route path="/knowledge-base/trading" element={<TradingCategory />} />
          <Route path="/knowledge-base/payments" element={<PaymentsCategory />} />
          <Route path="/knowledge-base/security" element={<SecurityCategory />} />
          <Route path="/knowledge-base/crypto-101" element={<Crypto101Category />} />
          <Route path="/knowledge-base/api-docs" element={<ApiDocsCategory />} />
          <Route path="/knowledge-base/compliance" element={<ComplianceCategory />} />
          <Route path="/knowledge-base/trading/order-types" element={<OrderTypes />} />
          <Route path="/knowledge-base/trading/reading-charts" element={<ReadingCharts />} />
          <Route path="/knowledge-base/trading/fees-limits" element={<FeesLimits />} />
          <Route path="/knowledge-base/trading/stop-loss-take-profit" element={<StopLossTakeProfit />} />
          <Route path="/knowledge-base/trading/common-mistakes" element={<CommonMistakes />} />
          <Route path="/knowledge-base/payments/deposit-funds" element={<DepositFunds />} />
          <Route path="/knowledge-base/payments/withdraw-funds" element={<WithdrawFunds />} />
          <Route path="/knowledge-base/security/enable-2fa" element={<Enable2FA />} />
          <Route path="/knowledge-base/security/phishing-awareness" element={<PhishingAwareness />} />
          <Route path="/knowledge-base/security/wallet-protection" element={<WalletProtection />} />
          <Route path="/knowledge-base/security/fake-support" element={<FakeSupport />} />
          <Route path="/knowledge-base/security/report-suspicious" element={<ReportSuspicious />} />
          <Route path="/knowledge-base/security/password-tips" element={<PasswordTips />} />
          <Route path="/knowledge-base/crypto-101/keys" element={<Keys />} />
          <Route path="/knowledge-base/crypto-101/stablecoins" element={<Stablecoins />} />
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
          <Route path="/knowledge-base/compliance/aml-compliance" element={<AmlCompliance />} />
          <Route path="/knowledge-base/compliance/restricted-jurisdictions" element={<RestrictedJurisdictions />} />
          <Route path="/knowledge-base/compliance/privacy-rights" element={<PrivacyRights />} />
          <Route path="/knowledge-base/compliance/terms-explained" element={<TermsExplained />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
