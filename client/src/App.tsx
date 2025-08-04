import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import ShippingPage from "@/pages/shipping";
import ReturnsPage from "@/pages/returns";
import PrivacyPage from "@/pages/privacy";
import TermsPage from "@/pages/terms";
import FAQPage from "@/pages/faq";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/shipping" component={ShippingPage} />
      <Route path="/returns" component={ReturnsPage} />
      <Route path="/privacy" component={PrivacyPage} />
      <Route path="/terms" component={TermsPage} />
      <Route path="/faq" component={FAQPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
