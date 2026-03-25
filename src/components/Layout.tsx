import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Linkedin, Github, Mail } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about/" },
    { name: "Services", path: "/services/" },
    { name: "Process", path: "/process/" },
    { name: "Pricing", path: "/pricing/" },
    { name: "Blog", path: "/blog/" },
    { name: "Contact", path: "/contact/" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled ? "bg-white py-4 shadow-[0_2px_20px_rgba(0,0,0,0.06)] border-border" : "bg-white py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-display font-bold tracking-tighter text-ink">
          Mannu Kumar
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all relative group ${
                location.pathname === link.path ? "text-brand" : "text-muted hover:text-brand"
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="navUnderline"
                  className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-brand"
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact/"
            className="btn-primary !py-2.5 !px-6 text-sm flex items-center gap-2"
          >
            Get In Touch <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-ink" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-6 md:hidden shadow-xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    location.pathname === link.path ? "text-brand" : "text-ink"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact/"
                onClick={() => setIsOpen(false)}
                className="bg-brand text-white px-6 py-4 rounded-xl text-center font-bold"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-ink pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-display font-bold tracking-tighter text-white">
              Mannu Kumar
            </Link>
            <p className="text-light-grey text-sm leading-relaxed">
              SEO Specialist — Driving Organic Growth. I help eCommerce brands scale with sustainable strategies that compound over time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:border-brand hover:text-brand transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:border-brand hover:text-brand transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#2A2A2A] flex items-center justify-center text-[#888888] hover:border-brand hover:text-brand transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Pages</h4>
            <ul className="space-y-4 text-sm text-[#888888]">
              <li><Link to="/" className="hover:text-brand">Home</Link></li>
              <li><Link to="/about/" className="hover:text-brand">About</Link></li>
              <li><Link to="/services/" className="hover:text-brand">Services</Link></li>
              <li><Link to="/process/" className="hover:text-brand">Process</Link></li>
              <li><Link to="/pricing/" className="hover:text-brand">Pricing</Link></li>
              <li><Link to="/blog/" className="hover:text-brand">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white">Services</h4>
            <ul className="space-y-4 text-sm text-[#888888]">
              <li><Link to="/services/technical-seo/" className="hover:text-brand">Technical SEO</Link></li>
              <li><Link to="/services/on-page-seo/" className="hover:text-brand">On-Page SEO</Link></li>
              <li><Link to="/services/ecommerce-seo/" className="hover:text-brand">eCommerce SEO</Link></li>
              <li><Link to="/services/local-seo/" className="hover:text-brand">Local SEO</Link></li>
              <li><Link to="/services/content-strategy/" className="hover:text-brand">Content Strategy</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold mb-6 text-white">Contact</h4>
            <p className="text-sm text-light-grey">mannudhiman6@gmail.com</p>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-badge-bg text-brand text-xs font-bold rounded-full">
              <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
              Currently Accepting New Clients
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-[#2A2A2A] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted font-medium">
          <p className="text-[#666666]">© 2026 Mannu Kumar. All rights reserved.</p>
          <p className="text-[#666666]">Built for organic growth</p>
        </div>
      </div>
    </footer>
  );
};
