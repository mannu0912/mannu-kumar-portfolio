import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Navbar, Footer } from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import { TechnicalSEO, OnPageSEO, EcommerceSEO, LocalSEO, ContentStrategy } from "./pages/ServicePages";
import Process from "./pages/Process";
import Pricing from "./pages/Pricing";
import Blog from "./pages/Blog";
import { AgricultureSEO, LocalSEOChecklist, TechnicalSEOFoundation, AISEOContent, EcommerceCategoryPages, LinkBuilding2026 } from "./pages/BlogPosts";
import Contact from "./pages/Contact";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Back to Top Button
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button 
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-10 right-10 w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 z-50 hover:scale-110"
    >
      <ArrowUp size={24} />
    </button>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about/" element={<About />} />
            <Route path="/services/" element={<Services />} />
            <Route path="/services/technical-seo/" element={<TechnicalSEO />} />
            <Route path="/services/on-page-seo/" element={<OnPageSEO />} />
            <Route path="/services/ecommerce-seo/" element={<EcommerceSEO />} />
            <Route path="/services/local-seo/" element={<LocalSEO />} />
            <Route path="/services/content-strategy/" element={<ContentStrategy />} />
            <Route path="/process/" element={<Process />} />
            <Route path="/pricing/" element={<Pricing />} />
            <Route path="/blog/" element={<Blog />} />
            <Route path="/blog/agriculture-seo/" element={<AgricultureSEO />} />
            <Route path="/blog/local-seo-checklist/" element={<LocalSEOChecklist />} />
            <Route path="/blog/technical-seo-foundation/" element={<TechnicalSEOFoundation />} />
            <Route path="/blog/ai-seo-content/" element={<AISEOContent />} />
            <Route path="/blog/ecommerce-category-pages/" element={<EcommerceCategoryPages />} />
            <Route path="/blog/link-building-2026/" element={<LinkBuilding2026 />} />
            <Route path="/contact/" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <BackToTop />
      <Footer />
    </BrowserRouter>
  );
}
