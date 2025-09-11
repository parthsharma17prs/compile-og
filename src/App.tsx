import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "@/components/ThemeProvider";
import { lazy, Suspense } from "react";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Partners from "./pages/Partners";
import Pricing from "./pages/Pricing";
import Solutions from "./pages/Solutions";
import NotFound from "./pages/NotFound";
import Founder from "./pages/Founder";
import Security from "./pages/Security";
import Documentation from "./pages/Documentation";
import Platform from "./pages/Platform";

const Demo = lazy(() => import("./pages/Demo"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/partners" element={<Partners />} />
            <Route
              path="/demo"
              element={
                <Suspense fallback={<div />}>
                  <Demo />
                </Suspense>
              }
            />
            <Route
              path="/schedule-call"
              element={
                <Suspense fallback={<div />}>
                  <Demo />
                </Suspense>
              }
            />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/founder" element={<Founder />} />
            <Route path="/security" element={<Security />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
