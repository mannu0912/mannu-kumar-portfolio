import { motion } from "motion/react";
import { ArrowRight, Search, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "SEO Tips", "Strategy", "Technical", "eCommerce", "Local SEO"];

  const posts = [
    { title: "How I Took an Agriculture Brand from 0 to 170% Organic Growth", cat: "Strategy", date: "Mar 10 2026", path: "/blog/agriculture-seo/" },
    { title: "The Local SEO Checklist Every Small Business Needs in 2026", cat: "Local SEO", date: "Feb 24 2026", path: "/blog/local-seo-checklist/" },
    { title: "Why Technical SEO is the Foundation of Every Winning Strategy", cat: "Technical", date: "Feb 10 2026", path: "/blog/technical-seo-foundation/" },
    { title: "How to Use AI Tools to Scale Your SEO Content Production", cat: "SEO Tips", date: "Jan 28 2026", path: "/blog/ai-seo-content/" },
    { title: "eCommerce SEO — How to Optimise Category Pages for Maximum Traffic", cat: "eCommerce", date: "Jan 15 2026", path: "/blog/ecommerce-category-pages/" },
    { title: "Link Building in 2026 — What Still Works and What to Avoid", cat: "Strategy", date: "Jan 5 2026", path: "/blog/link-building-2026/" },
  ];

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(p => p.cat === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-32 px-6 bg-stone">
        <div className="max-w-7xl mx-auto text-center space-y-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold text-ink"
          >
            SEO Insights Worth Reading
          </motion.h1>
          
          {/* Search & Filter */}
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="relative">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-muted" size={20} />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="form-input pl-16 w-full"
              />
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${activeCategory === cat ? 'bg-brand text-white' : 'bg-white border border-border text-muted hover:border-brand hover:text-brand'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {filteredPosts.map((post, idx) => {
              const gradients = [
                "linear-gradient(135deg, #0D3D2A, #1D9E75)",
                "linear-gradient(135deg, #0A2A1A, #145E45)",
                "linear-gradient(135deg, #1A3A2A, #2DAF85)"
              ];
              const gradient = gradients[idx % gradients.length];
              
              return (
                <motion.div 
                  key={idx}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="group cursor-pointer"
                >
                  <div className="aspect-video w-full rounded-2xl mb-8 overflow-hidden" style={{ background: gradient }}>
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 px-6 bg-stone">
        <div className="max-w-4xl mx-auto bg-brand rounded-[40px] p-12 md:p-20 text-center text-white space-y-8 shadow-xl">
          <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto">
            <Mail size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Get Weekly SEO Tips in Your Inbox</h2>
          <p className="text-white/80 max-w-md mx-auto">Join 2,000+ eCommerce founders and marketers getting my best SEO insights every Tuesday.</p>
          <form className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-6 py-4 rounded-xl bg-white text-ink focus:outline-none"
              required
            />
            <button className="bg-ink text-white px-8 py-4 rounded-xl font-bold hover:bg-ink/80 transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
