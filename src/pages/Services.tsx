import { motion } from "motion/react";
import { ArrowRight, Settings, Search, ShoppingCart, MapPin, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Services() {
  const services = [
    {
      title: "Technical SEO",
      icon: <Settings className="text-brand" size={40} />,
      desc: "Fixing the foundation so Google can find, crawl, and rank your pages. I dive deep into your site's code and architecture to eliminate roadblocks.",
      path: "/services/technical-seo/"
    },
    {
      title: "On-Page SEO",
      icon: <Search className="text-brand" size={40} />,
      desc: "Optimising every element of your pages for maximum search visibility. From meta tags to content structure, I ensure your pages are perfectly tuned.",
      path: "/services/on-page-seo/"
    },
    {
      title: "eCommerce SEO",
      icon: <ShoppingCart className="text-brand" size={40} />,
      desc: "Scaling Shopify and WooCommerce stores with sustainable organic traffic. I focus on category pages and product visibility that drives sales.",
      path: "/services/ecommerce-seo/"
    },
    {
      title: "Local SEO",
      icon: <MapPin className="text-brand" size={40} />,
      desc: "Dominating local search results and Google Business Profile rankings. Get found by customers in your immediate area when they need you most.",
      path: "/services/local-seo/"
    },
    {
      title: "Content Strategy",
      icon: <FileText className="text-brand" size={40} />,
      desc: "Building topical authority through data-driven content clusters. I create roadmaps for content that answers user questions and builds trust.",
      path: "/services/content-strategy/"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-32 px-6 bg-stone">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 text-ink"
          >
            Comprehensive SEO Services Built for Growth
          </motion.h1>
          <p className="text-muted text-xl max-w-2xl mx-auto">
            Every service is built around one goal — sustainable organic growth that compounds over time.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((s, idx) => (
            <motion.div 
              key={idx}
              {...fadeInUp}
              className={`flex flex-col md:flex-row items-center gap-20 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="w-full md:w-1/2 space-y-8">
                <div className="w-20 h-20 bg-stone rounded-2xl flex items-center justify-center border border-border">
                  {s.icon}
                </div>
                <h2 className="text-4xl font-display font-bold text-ink">{s.title}</h2>
                <p className="text-muted text-lg leading-relaxed">{s.desc}</p>
                <Link to={s.path} className="btn-primary flex items-center gap-4 group w-fit">
                  Learn More About {s.title} <ArrowRight className="transition-transform group-hover:translate-x-2" />
                </Link>
              </div>
              <div className="w-full md:w-1/2 aspect-video bg-stone rounded-3xl border border-border flex items-center justify-center">
                <span className="text-light-grey font-bold uppercase tracking-widest text-xs">Service Visualization Placeholder</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-stone text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl font-display font-bold text-ink">Not sure which service you need?</h2>
          <p className="text-muted text-lg">Book a free discovery call and I'll help you identify the biggest opportunities for your brand.</p>
          <Link to="/contact/" className="btn-primary flex items-center gap-4 group mx-auto w-fit">
            Book a Free Discovery Call <ArrowRight className="transition-transform group-hover:translate-x-2" />
          </Link>
        </div>
      </section>
    </div>
  );
}
