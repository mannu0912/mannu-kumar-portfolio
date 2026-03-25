import { motion, useMotionValue, useTransform, animate } from "motion/react";
import { ArrowRight, Star, ChevronDown, Plus, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { SEO } from "../components/SEO";
import myPhoto from "../assets/images/mine.jpg";
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const CountUp = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(count, value, { duration: 2, ease: "easeOut" });
    return controls.stop;
  }, [count, value]);

  useEffect(() => {
    return rounded.on("change", (latest) => setDisplayValue(latest));
  }, [rounded]);

  return <span>{displayValue}{suffix}</span>;
};

const AuditForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center text-center py-12"
      >
        <div className="w-16 h-16 bg-[#E8F5EF] text-[#1D9E75] rounded-full flex items-center justify-center mb-6">
          <Plus className="rotate-45" size={32} />
        </div>
        <p className="text-[#1D9E75] font-bold text-lg leading-relaxed">
          Thanks! I will review your site and get back to you within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div className="grid grid-cols-2 gap-[10px]">
        <input 
          type="text" 
          placeholder="First Name" 
          required 
          className="bg-[#F8F8F6] border border-[#E0E0E0] rounded-lg px-[14px] py-3 text-sm text-[#1A1A1A] placeholder-[#AAAAAA] w-full transition-all"
        />
        <input 
          type="text" 
          placeholder="Last Name" 
          required 
          className="bg-[#F8F8F6] border border-[#E0E0E0] rounded-lg px-[14px] py-3 text-sm text-[#1A1A1A] placeholder-[#AAAAAA] w-full transition-all"
        />
      </div>
      <input 
        type="email" 
        placeholder="Email Address" 
        required 
        className="bg-[#F8F8F6] border border-[#E0E0E0] rounded-lg px-[14px] py-3 text-sm text-[#1A1A1A] placeholder-[#AAAAAA] w-full transition-all"
      />
      <input 
        type="url" 
        placeholder="Website URL" 
        required 
        className="bg-[#F8F8F6] border border-[#E0E0E0] rounded-lg px-[14px] py-3 text-sm text-[#1A1A1A] placeholder-[#AAAAAA] w-full transition-all"
      />
      <textarea 
        placeholder="Tell me about your project" 
        rows={4}
        required
        className="bg-[#F8F8F6] border border-[#E0E0E0] rounded-lg px-[14px] py-3 text-sm text-[#1A1A1A] placeholder-[#AAAAAA] w-full transition-all resize-none"
      ></textarea>
      <button 
        type="submit"
        className="w-full bg-[#1D9E75] hover:bg-[#178A65] text-white font-bold py-[15px] rounded-lg transition-all mt-1"
      >
        Get Your Free SEO Audit →
      </button>
      <div className="flex items-center justify-center gap-1 text-[11px] text-[#AAAAAA] mt-4">
        <Lock size={10} /> No commitment · I respond within 24 hours
      </div>
    </form>
  );
};

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mannu Dhiman",
    "jobTitle": "SEO Specialist",
    "url": "https://mannudhiman.com",
    "sameAs": [
      "https://www.linkedin.com/in/mannudhiman",
      "https://github.com/mannudhiman"
    ],
    "description": "Freelance SEO consultant specializing in eCommerce growth and technical SEO."
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Organic Growth. Built to Last." 
        description="SEO strategy for eCommerce brands ready to scale without depending on paid ads. 7+ years of experience helping 50+ brands grow."
        schema={personSchema}
      />
      {/* SECTION 1 — HERO */}
      <section className="min-h-[90vh] bg-white py-20 flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
            {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-start"
          >
            <div className="section-badge mb-5">
              SEO Specialist · 7+ Years Experience
            </div>
            <h1 className="text-[36px] md:text-[52px] font-bold text-ink leading-[1.15] mb-5">
              Your Competitors<br />
              Are <span className="text-brand">Ranking.</span><br />
              You Should Too.
            </h1>
            <p className="text-[18px] text-muted leading-[1.6] mb-10 max-w-lg">
              I help ambitious businesses outrank their competitors, drive high-intent traffic, and scale revenue through data-driven SEO strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto">
              <Link to="/contact/" className="btn-primary">
                Get Your Free SEO Audit
              </Link>
              <Link to="/services/" className="btn-secondary">
                View Case Studies
              </Link>
            </div>
            
            {/* Stats Row */}
            <div className="flex items-center gap-6 md:gap-10">
              <div className="flex flex-col">
                <span className="stat-number text-[28px]">
                  <CountUp value={170} suffix="%" />
                </span>
                <span className="stat-label">Avg. Organic Growth</span>
              </div>
              <div className="h-9 w-px bg-border"></div>
              <div className="flex flex-col">
                <span className="stat-number text-[28px]">
                  <CountUp value={50} suffix="+" />
                </span>
                <span className="stat-label">Brands Helped</span>
              </div>
              <div className="h-9 w-px bg-border"></div>
              <div className="flex flex-col">
                <span className="stat-number text-[28px]">
                  <CountUp value={60} suffix="%" />
                </span>
                <span className="stat-label">Client Retention</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="bg-white border border-border rounded-[16px] p-8 md:px-[28px] md:py-[32px] shadow-[0_8px_40px_rgba(0,0,0,0.10)]"
          >
            <div className="mb-6">
              <div className="text-brand text-[11px] font-semibold tracking-[0.08em] uppercase mb-1">FREE AUDIT</div>
              <h2 className="text-[20px] font-bold text-ink mb-2">Start With a Free SEO Audit</h2>
              <p className="text-[12px] text-light-grey leading-[1.6]">
                Get a personalised audit of your website with actionable recommendations — no commitment.
              </p>
            </div>
            <AuditForm />
          </motion.div>
        </div>
      </div>
    </section>

      {/* Ticker Strip */}
      <div className="ticker-wrapper">
        <div className="ticker-track">
          <span>Technical SEO</span>
          <span className="ticker-dot">•</span>
          <span>Content Strategy</span>
          <span className="ticker-dot">•</span>
          <span>eCommerce SEO</span>
          <span className="ticker-dot">•</span>
          <span>Local SEO</span>
          <span className="ticker-dot">•</span>
          <span>Shopify SEO</span>
          <span className="ticker-dot">•</span>
          <span>AI-Assisted SEO</span>
          <span className="ticker-dot">•</span>
          <span>Link Building</span>
          <span className="ticker-dot">•</span>
          <span>Core Web Vitals</span>
          <span className="ticker-dot">•</span>
          <span>Google Business Profile</span>
          <span className="ticker-dot">•</span>
          <span>Site Architecture</span>
          <span className="ticker-dot">•</span>
          <span>Technical SEO</span>
          <span className="ticker-dot">•</span>
          <span>Content Strategy</span>
          <span className="ticker-dot">•</span>
          <span>eCommerce SEO</span>
          <span className="ticker-dot">•</span>
          <span>Local SEO</span>
          <span className="ticker-dot">•</span>
          <span>Shopify SEO</span>
          <span className="ticker-dot">•</span>
          <span>AI-Assisted SEO</span>
          <span className="ticker-dot">•</span>
          <span>Link Building</span>
          <span className="ticker-dot">•</span>
          <span>Core Web Vitals</span>
          <span className="ticker-dot">•</span>
          <span>Google Business Profile</span>
          <span className="ticker-dot">•</span>
          <span>Site Architecture</span>
          <span className="ticker-dot">•</span>
        </div>
      </div>

      {/* SECTION 3 — PERSONAL INTRODUCTION */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 flex flex-col md:flex-row items-center gap-20">
          {/* Left Column - Photo */}
          <motion.div 
            {...fadeInUp}
            className="w-full md:w-[45%] relative group"
          >
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand rounded-2xl -z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
            <div className="aspect-[340/420] w-full rounded-[20px] overflow-hidden transition-transform duration-500 group-hover:scale-[1.02]">
  <img 
    src={myPhoto} 
    alt="My Photo" 
    className="w-full h-full object-cover"
  />
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 0.2 }}
            className="w-full md:w-[55%] space-y-8"
          >
            <div className="flex flex-col items-start gap-4">
              <span className="text-brand font-bold text-lg">Hi, I'm Mannu Dhiman.</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight text-ink">
              I help eCommerce brands rank higher and grow faster with SEO that actually works.
            </h2>
            <p className="text-muted text-lg leading-relaxed">
              I have spent 7+ years building organic growth strategies for eCommerce brands across USA, Canada, UAE and India. No paid ads. No shortcuts. Just sustainable SEO that compounds over time.
            </p>
            <Link to="/contact/" className="btn-primary flex items-center gap-4 group w-fit">
              Let's Grow Your Organic Traffic <ArrowRight className="transition-transform group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 4 — WHAT I SPECIALISE IN */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="mb-20">
            <span className="section-badge">Services</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-ink">SEO That Goes <span className="text-brand">Beyond Rankings</span></h2>
            <p className="text-muted max-w-xl">Every service is built around one goal — sustainable organic growth that compounds over time.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Technical SEO", desc: "Fixing the foundation so Google can find, crawl, and rank your pages.", path: "/services/technical-seo/" },
              { title: "On-Page SEO", desc: "Optimising every element of your pages for maximum search visibility.", path: "/services/on-page-seo/" },
              { title: "eCommerce SEO", desc: "Scaling Shopify and WooCommerce stores with sustainable organic traffic.", path: "/services/ecommerce-seo/" },
              { title: "Local SEO", desc: "Dominating local search results and Google Business Profile rankings.", path: "/services/local-seo/" },
              { title: "Content Strategy", desc: "Building topical authority through data-driven content clusters.", path: "/services/content-strategy/" },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="card-base p-10 group"
              >
                <div className="text-brand font-display text-4xl mb-8">0{idx + 1}</div>
                <h3 className="text-2xl font-bold mb-4 text-ink">{service.title}</h3>
                <p className="text-muted mb-8 line-clamp-2">{service.desc}</p>
                <Link to={service.path} className="btn-ghost group">
                  Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — HOW I WORK */}
      <section className="py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="text-center mb-24">
            <span className="section-badge">My Process</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">A Process Built for Results</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-border -translate-y-1/2 -z-10"></div>
            {[
              { step: "01", title: "Deep Audit", desc: "Understand your current SEO health, competitors, and opportunities." },
              { step: "02", title: "Custom Strategy", desc: "Build a roadmap tailored to your goals, industry, and budget." },
              { step: "03", title: "Execution", desc: "Hands-on implementation across technical, content, and off-page SEO." },
              { step: "04", title: "Report and Refine", desc: "Monthly reporting and continuous strategy improvement." },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="text-center space-y-6"
              >
                <div className="w-16 h-16 bg-brand text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold border-8 border-white shadow-lg">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-ink">{item.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Link to="/process/" className="btn-ghost mx-auto w-fit group">
              See Full Process <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 6 — TOOLS I USE */}
      <section className="py-20 md:py-24 bg-stone border-y border-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 text-center">
          <span className="section-badge">My Toolkit</span>
          <h2 className="text-3xl font-display font-bold mb-16 text-ink">Industry Leading Tools. Proven Methods.</h2>
          
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "Google Analytics 4", "PageSpeed Insights", "Surfer SEO", "Claude AI", "ChatGPT", "Shopify", "WordPress", "Webflow", "Google Business Profile", "Search Atlas"].map((tool, idx) => (
              <span key={idx} className="px-6 py-3 bg-input-bg border border-border rounded-[8px] text-sm font-bold text-[#444444] hover:border-brand hover:text-brand transition-all cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — TESTIMONIALS */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="text-center mb-24">
            <span className="section-badge">Client Words</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">Results Speak Louder</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { quote: "Working with Mannu transformed our organic channel completely. We went from page 4 to position 1 for our main keyword in 5 months.", author: "Raj Sharma", role: "Founder, AgriGrow India" },
              { quote: "The most data-driven and transparent SEO consultant I have worked with. Our traffic grew 150% in 6 months and has kept growing since.", author: "Priya Mehta", role: "CEO, StyleShop" },
              { quote: "Exceptional technical knowledge combined with clear communication. Highly recommend for any serious eCommerce brand.", author: "Ahmed Al Farsi", role: "Director, Gulf Retail Co." },
            ].map((t, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="p-10 rounded-3xl bg-white border border-border space-y-8 shadow-[0_2px_12px_rgba(0,0,0,0.05)]"
              >
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#F5A623] text-[#F5A623]" />)}
                </div>
                <p className="text-xl font-medium leading-relaxed italic text-muted">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-ink">{t.author}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-light-grey mt-1">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8 — PRICING TEASER */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="text-center mb-24">
            <span className="section-badge">Pricing</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-ink">Transparent Pricing. No Surprises.</h2>
            <p className="text-muted max-w-xl mx-auto">Simple monthly plans designed for businesses serious about organic growth. No long term contracts. Cancel anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { name: "Starter", price: "$299", desc: "For small businesses starting SEO" },
              { name: "Growth", price: "$499", desc: "For scaling eCommerce brands", popular: true },
              { name: "Pro", price: "$999", desc: "For established brands ready to dominate" },
            ].map((plan, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 rounded-3xl border transition-all duration-250 ${plan.popular ? 'bg-white border-brand shadow-xl relative' : 'bg-white border-border'}`}
              >
                {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-widest py-2 px-4 rounded-full">Most Popular</span>}
                <h3 className="text-xl font-bold mb-2 text-ink">{plan.name}</h3>
                <div className="text-4xl font-display font-bold mb-4 text-ink">{plan.price}<span className="text-sm font-sans text-muted font-normal">/month</span></div>
                <p className="text-sm text-muted mb-8">{plan.desc}</p>
                <Link to="/pricing/" className={`w-full block text-center py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-brand text-white hover:bg-brand-dark' : 'bg-stone text-ink hover:bg-border'}`}>
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/pricing/" className="btn-ghost mx-auto w-fit group">
              View Full Pricing <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — LATEST FROM THE BLOG */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
            <div>
              <span className="section-badge">Blog</span>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">SEO Insights Worth Reading</h2>
            </div>
            <Link to="/blog/" className="btn-primary">
              View All Articles
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "How I Took an Agriculture Brand from 0 to 170% Organic Growth", cat: "CASE STUDY", date: "Mar 10 2026", path: "/blog/agriculture-seo/", gradient: "linear-gradient(135deg, #0D3D2A, #1D9E75)" },
              { title: "The Local SEO Checklist Every Small Business Needs in 2026", cat: "SEO TIPS", date: "Feb 24 2026", path: "/blog/local-seo-checklist/", gradient: "linear-gradient(135deg, #0A2A1A, #145E45)" },
              { title: "Why Technical SEO is the Foundation of Every Winning Strategy", cat: "STRATEGY", date: "Feb 10 2026", path: "/blog/technical-seo-foundation/", gradient: "linear-gradient(135deg, #1A3A2A, #2DAF85)" },
            ].map((post, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video w-full rounded-2xl mb-8 overflow-hidden" style={{ background: post.gradient }}>
                  <div className="w-full h-full transition-transform duration-500 group-hover:scale-110"></div>
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-badge-bg px-3 py-1 rounded-full">{post.cat}</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-light-grey">{post.date}</span>
                </div>
                <h3 className="text-2xl font-bold mb-6 group-hover:text-brand transition-colors leading-tight text-ink">{post.title}</h3>
                <Link to={post.path} className="btn-ghost group">
                  Read More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — FAQ */}
      <section className="py-20 md:py-24 bg-stone">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="text-center mb-20">
            <span className="section-badge">FAQ</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-ink">Questions I Get Asked a Lot</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "How long does SEO take to show results?", a: "Typically, you'll start seeing measurable improvements in 3-6 months. SEO is a long-term investment that compounds over time." },
              { q: "Do you work with eCommerce stores?", a: "Yes, I specialize in eCommerce SEO, particularly for Shopify and WooCommerce brands looking to scale organically." },
              { q: "What makes your approach different from other SEO consultants?", a: "I focus on data-driven strategies and technical excellence. No shortcuts, just sustainable growth built on a solid foundation." },
              { q: "Do you offer one-time projects or only monthly retainers?", a: "I offer both. While ongoing retainers drive the best results, I also perform one-time technical audits and strategy roadmaps." },
              { q: "Will I get regular reports and updates?", a: "Absolutely. Transparency is key. You'll receive detailed monthly reports covering rankings, traffic, and actionable insights." },
              { q: "Can you guarantee first page Google rankings?", a: "No ethical SEO can guarantee rankings. However, my proven process consistently delivers top-tier results for my clients." },
            ].map((faq, idx) => (
              <div key={idx} className={`bg-white rounded-2xl border border-border overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-l-[3px] border-l-brand' : ''}`}>
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="font-bold text-ink">{faq.q}</span>
                  <div className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>
                    <Plus size={20} className="text-brand" />
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-muted text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11 — FINAL CTA BANNER */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24">
          <div className="bg-ink rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(45,90,39,0.2),transparent)]"></div>
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-display font-bold max-w-3xl mx-auto leading-tight text-white">
              Ready to Make Google Work for Your Business?
            </h2>
            <p className="text-light-grey text-lg max-w-xl mx-auto">
              Let's build an SEO strategy that drives real, measurable organic growth.
            </p>
            <Link to="/contact/" className="btn-primary flex items-center gap-4 group mx-auto w-fit">
              Start the Conversation <ArrowRight className="transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}
