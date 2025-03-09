
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import Skills from "./pages/Skills";
import Search from "./pages/Search";
import UserProfile from "./pages/UserProfile";
import Messages from "./pages/Messages";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";
import Guidelines from "./pages/Guidelines";
import Careers from "./pages/Careers";
import CookiePolicy from "./pages/CookiePolicy";
import ShareSkills from "./pages/ShareSkills";
import FindSkills from "./pages/FindSkills";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TechnologySkills from "./pages/categories/TechnologySkills";
import LanguagesSkills from "./pages/categories/LanguagesSkills";
import ArtsAndCraftsSkills from "./pages/categories/ArtsAndCraftsSkills";
import MusicSkills from "./pages/categories/MusicSkills";
import CookingSkills from "./pages/categories/CookingSkills";
import FitnessSkills from "./pages/categories/FitnessSkills";
import Explore from "./pages/Explore";
import CookieConsent from "./components/CookieConsent";

// Create a new query client for React Query
const queryClient = new QueryClient();

const App = () => {
  const [showCookieConsent, setShowCookieConsent] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowCookieConsent(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookieConsent(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/search" element={<Search />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/profile/:userId" element={<UserProfile />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/messages/:conversationId" element={<Messages />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/guidelines" element={<Guidelines />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/share-skills" element={<ShareSkills />} />
              <Route path="/find-skills" element={<FindSkills />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/category/technology" element={<TechnologySkills />} />
              <Route path="/category/languages" element={<LanguagesSkills />} />
              <Route path="/category/arts-crafts" element={<ArtsAndCraftsSkills />} />
              <Route path="/category/music" element={<MusicSkills />} />
              <Route path="/category/cooking" element={<CookingSkills />} />
              <Route path="/category/fitness" element={<FitnessSkills />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            {showCookieConsent && <CookieConsent onAccept={handleAcceptCookies} />}
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
