import { motion } from "motion/react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const ServiceTemplate = ({ title, tagline, whoFor, includes, approach, tools }: any) => (
  <div className="pt-20">
    {/* Hero */}
    <section className="py-32 px-6 bg-stone">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-display font-bold mb-8 text-ink"
        >
          {title}
        </motion.h1>
        <p className="text-secondary text-xl max-w-2xl mx-auto">{tagline}</p>
      </div>
    </section>

    {/* Who this is for */}
    <section className="py-24 px-6 bg-white border-b border-border">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-display font-bold text-ink">Who This Is For</h2>
        <p className="text-secondary text-lg leading-relaxed">{whoFor}</p>
      </div>
    </section>

    {/* What is included */}
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-display font-bold mb-16 text-center text-ink">What's Included</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {includes.map((item: string, idx: number) => (
            <div key={idx} className="flex gap-4 p-6 bg-stone rounded-2xl border border-border">
              <CheckCircle2 className="text-brand shrink-0" />
              <span className="font-medium text-ink">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* My Approach */}
    <section className="py-32 px-6 bg-stone">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl font-display font-bold text-center text-ink">My Approach</h2>
        <p className="text-secondary text-lg leading-relaxed text-center">{approach}</p>
      </div>
    </section>

    {/* Tools Used */}
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-brand mb-12 block">Tools Used For This Service</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool: string, idx: number) => (
            <span key={idx} className="px-6 py-3 bg-stone border border-border rounded-full text-sm font-bold text-secondary">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-32 px-6 text-center bg-white border-t border-border">
      <div className="max-w-3xl mx-auto space-y-8">
        <h2 className="text-4xl font-display font-bold text-ink">Ready to Get Started?</h2>
        <p className="text-secondary text-lg">Let's build a foundation for long-term organic growth.</p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <Link to="/contact/" className="btn-primary flex items-center gap-3 justify-center">
            Get Started with {title} <ArrowRight />
          </Link>
          <Link to="/pricing/" className="btn-ghost">
            View Pricing
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export const TechnicalSEO = () => (
  <ServiceTemplate 
    title="Technical SEO"
    tagline="Fixing the foundation so Google can find, crawl, and rank your pages."
    whoFor="Established brands with complex site architectures, or new sites that want to ensure they are built correctly from day one."
    includes={[
      "Full Crawlability & Indexability Audit",
      "Core Web Vitals & Page Speed Optimization",
      "Structured Data (Schema) Implementation",
      "Site Architecture & Internal Linking Review",
      "XML Sitemap & Robots.txt Optimization",
      "Mobile-Friendliness & Responsive Audit",
      "Broken Link & Redirect Management",
      "Canonicalization & Hreflang Setup"
    ]}
    approach="I dive deep into the technical weeds. My approach is to identify every technical roadblock that might be preventing Google from understanding your site. I provide clear, actionable developer-ready tickets to ensure every fix is implemented correctly."
    tools={["Screaming Frog", "Google Search Console", "PageSpeed Insights", "Ahrefs", "SEMrush", "Chrome DevTools"]}
  />
);

export const OnPageSEO = () => (
  <ServiceTemplate 
    title="On-Page SEO"
    tagline="Optimising every element of your pages for maximum search visibility."
    whoFor="Businesses with great content that isn't ranking as high as it should, or those looking to launch new pages with maximum impact."
    includes={[
      "Keyword Research & Mapping",
      "Title Tag & Meta Description Optimization",
      "Header Tag (H1-H6) Structuring",
      "Content Gap Analysis",
      "Image Alt Text & File Name Optimization",
      "URL Structure Review",
      "Internal Link Optimization",
      "LSI & Semantic Keyword Integration"
    ]}
    approach="On-page SEO is about more than just keywords. It's about relevance and user experience. I ensure every page on your site is perfectly tuned to answer the user's query while signaling its importance to search engines."
    tools={["Surfer SEO", "Ahrefs", "SEMrush", "Google Search Console", "Claude AI"]}
  />
);

export const EcommerceSEO = () => (
  <ServiceTemplate 
    title="eCommerce SEO"
    tagline="Scaling Shopify and WooCommerce stores with sustainable organic traffic."
    whoFor="Online retailers looking to reduce their dependence on paid ads and build a compounding source of revenue through organic search."
    includes={[
      "Category Page Optimization",
      "Product Page SEO Strategy",
      "Faceted Navigation & Filter Optimization",
      "Product Schema Markup",
      "Shopify/WooCommerce Technical Audit",
      "User Review Strategy",
      "Competitor eCommerce Analysis",
      "Conversion Rate Optimization (CRO) Insights"
    ]}
    approach="eCommerce SEO is a different beast. I focus on the pages that drive the most revenue—your category pages. By building topical authority around your product lines, we can capture users at every stage of the buying journey."
    tools={["Shopify", "WooCommerce", "Ahrefs", "SEMrush", "Search Atlas", "Google Analytics 4"]}
  />
);

export const LocalSEO = () => (
  <ServiceTemplate 
    title="Local SEO"
    tagline="Dominating local search results and Google Business Profile rankings."
    whoFor="Local businesses, service providers, and multi-location brands that need to be found by customers in their immediate vicinity."
    includes={[
      "Google Business Profile Optimization",
      "Local Citation Building & Cleanup",
      "Local Keyword Research",
      "Review Management Strategy",
      "Local Content Creation",
      "Map Pack Ranking Strategy",
      "NAP Consistency Audit",
      "Location Page Optimization"
    ]}
    approach="Local SEO is about proximity and trust. I help you dominate the 'Map Pack' and ensure your business is the first one customers see when they search for services in your area. We focus on building local signals that search engines can't ignore."
    tools={["Google Business Profile", "BrightLocal", "Whitespark", "SEMrush Local", "Google Maps"]}
  />
);

export const ContentStrategy = () => (
  <ServiceTemplate 
    title="Content Strategy"
    tagline="Building topical authority through data-driven content clusters."
    whoFor="Brands that want to become the go-to resource in their industry and build long-term trust with their audience through high-quality content."
    includes={[
      "Topical Authority Mapping",
      "Content Cluster Development",
      "Keyword Research & Intent Mapping",
      "Content Brief Creation",
      "Editorial Calendar Management",
      "Content Audit & Pruning",
      "AI-Assisted Content Workflows",
      "Performance Tracking & Refinement"
    ]}
    approach="I don't just suggest 'blogging'. I build content ecosystems. By creating clusters of related content, we signal to Google that you are an expert in your niche. This builds a moat around your rankings that competitors find hard to cross."
    tools={["Surfer SEO", "Claude AI", "ChatGPT", "Ahrefs", "Google Search Console", "MarketMuse"]}
  />
);
