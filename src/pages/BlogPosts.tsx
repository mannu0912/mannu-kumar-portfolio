import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, Linkedin, Twitter, Link as LinkIcon, ArrowUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const BlogPostTemplate = ({ title, cat, date, readTime, children, relatedPosts }: any) => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 px-6 bg-stone">
        <div className="max-w-4xl mx-auto space-y-8">
          <Link to="/blog/" className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:text-brand transition-colors">
            <ArrowLeft size={16} /> Back to Blog
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand bg-badge-bg px-3 py-1 rounded-full">{cat}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{date}</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary">{readTime}</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-display font-bold leading-tight text-ink">{title}</h1>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 -mt-10">
        <div className="max-w-4xl mx-auto aspect-[21/9] bg-gradient-to-br from-stone to-border rounded-[32px] overflow-hidden flex items-center justify-center">
          <span className="text-secondary/40 font-bold uppercase tracking-widest text-xs">Featured Image Placeholder</span>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
          {/* Main Content */}
          <div className="w-full lg:w-2/3 space-y-12">
            {/* Social Share */}
            <div className="flex items-center gap-4 pb-8 border-b border-border">
              <span className="text-xs font-bold uppercase tracking-widest text-secondary">Share:</span>
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-brand hover:text-brand transition-all"><Linkedin size={18} /></button>
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-brand hover:text-brand transition-all"><Twitter size={18} /></button>
              <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-brand hover:text-brand transition-all"><LinkIcon size={18} /></button>
            </div>

            <article className="prose prose-lg max-w-none text-secondary leading-relaxed space-y-8">
              {children}
            </article>

            {/* CTA */}
            <div className="p-12 bg-stone rounded-[40px] border border-border text-center space-y-6">
              <h3 className="text-3xl font-display font-bold text-ink">Want Similar Results?</h3>
              <p className="text-secondary">Let's build an SEO strategy that drives real, measurable organic growth for your brand.</p>
              <Link to="/contact/" className="btn-primary px-10 py-5 group">
                Start the Conversation <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:block w-1/3 space-y-12 sticky top-32 h-fit">
            <div className="p-8 bg-stone rounded-3xl border border-border space-y-6">
              <h4 className="font-bold text-ink">In This Article</h4>
              <nav className="space-y-4 text-sm text-secondary">
                <a href="#challenge" className="block hover:text-brand transition-colors">The Challenge</a>
                <a href="#audit" className="block hover:text-brand transition-colors">The SEO Audit Findings</a>
                <a href="#strategy" className="block hover:text-brand transition-colors">The Strategy</a>
                <a href="#results" className="block hover:text-brand transition-colors">Results After 12 Months</a>
                <a href="#takeaways" className="block hover:text-brand transition-colors">Key Takeaways</a>
              </nav>
            </div>

            <div className="p-8 bg-white rounded-3xl border border-border space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-stone rounded-full flex items-center justify-center font-bold text-xs text-secondary">MK</div>
                <div>
                  <div className="font-bold text-ink">Mannu Kumar</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-secondary">SEO Specialist</div>
                </div>
              </div>
              <p className="text-sm text-secondary leading-relaxed">I help eCommerce brands rank higher and grow faster with SEO that actually works.</p>
              <Link to="/about/" className="inline-flex items-center gap-2 text-xs font-bold text-brand hover:underline">View Profile <ArrowRight size={12} /></Link>
            </div>

            <div className="p-8 bg-brand text-white rounded-3xl space-y-6 shadow-xl">
              <h4 className="font-bold">Work With Me</h4>
              <p className="text-sm text-white/80 leading-relaxed">Ready to scale your organic traffic? Book a free discovery call today.</p>
              <Link to="/contact/" className="block w-full py-4 bg-white text-brand rounded-xl font-bold text-center text-sm hover:bg-stone transition-all">Book a Call</Link>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-32 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-16 text-center text-ink">You Might Also Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {relatedPosts.map((post: any, idx: number) => {
              const gradients = [
                "linear-gradient(135deg, #0D3D2A, #1D9E75)",
                "linear-gradient(135deg, #0A2A1A, #145E45)",
                "linear-gradient(135deg, #1A3A2A, #2DAF85)"
              ];
              const gradient = gradients[idx % gradients.length];
              
              return (
                <Link key={idx} to={post.path} className="group">
                  <div className="aspect-video w-full rounded-2xl mb-8 overflow-hidden" style={{ background: gradient }}>
                    <div className="w-full h-full transition-transform duration-500 group-hover:scale-110"></div>
                  </div>
                  <h3 className="text-2xl font-bold group-hover:text-brand transition-colors text-ink">{post.title}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-10 right-10 w-14 h-14 bg-brand text-white rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 z-50 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export const AgricultureSEO = () => (
  <BlogPostTemplate 
    title="How I Took an Agriculture Brand from 0 to 170% Organic Growth"
    cat="CASE STUDY"
    date="Mar 10 2026"
    readTime="8 min read"
    relatedPosts={[
      { title: "The Local SEO Checklist Every Small Business Needs in 2026", path: "/blog/local-seo-checklist/" },
      { title: "Why Technical SEO is the Foundation of Every Winning Strategy", path: "/blog/technical-seo-foundation/" }
    ]}
  >
    <div id="challenge" className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-ink">The Challenge</h2>
      <p>The client was a legacy agriculture brand transitioning to a direct-to-consumer model on Shopify. Despite having high-quality products, they had zero organic presence and were entirely dependent on expensive paid ads. Their site suffered from severe technical issues that prevented search engines from indexing their most valuable pages.</p>
    </div>
    <div id="audit" className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-ink">The SEO Audit Findings</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>200+ broken links and 404 errors across the site.</li>
        <li>No meta tags on 60% of product and category pages.</li>
        <li>Zero schema markup, missing out on rich snippets.</li>
        <li>Page speed score of 28 on mobile devices.</li>
        <li>No informational content to capture top-of-funnel traffic.</li>
        <li>Duplicate category pages causing keyword cannibalization.</li>
      </ul>
    </div>
    <div id="strategy" className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-ink">The Strategy</h2>
      <p>We implemented a three-pillar strategy focused on building a long-term organic moat.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-stone rounded-2xl border border-border">
          <h4 className="font-bold mb-2 text-ink">Technical Foundation</h4>
          <p className="text-sm">Fixed all crawl errors and optimized site speed to pass Core Web Vitals.</p>
        </div>
        <div className="p-6 bg-stone rounded-2xl border border-border">
          <h4 className="font-bold mb-2 text-ink">Content Clusters</h4>
          <p className="text-sm">Built informational guides around agriculture best practices to build authority.</p>
        </div>
        <div className="p-6 bg-stone rounded-2xl border border-border">
          <h4 className="font-bold mb-2 text-ink">Link Building</h4>
          <p className="text-sm">Earned high-quality backlinks from industry publications and niche blogs.</p>
        </div>
      </div>
    </div>
    <div id="results" className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-ink">Results After 12 Months</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-8 bg-badge-bg rounded-2xl border border-brand/10 text-center">
          <div className="text-4xl font-display font-bold text-brand">170%</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-secondary mt-2">Organic Traffic</div>
        </div>
        <div className="p-8 bg-badge-bg rounded-2xl border border-brand/10 text-center">
          <div className="text-4xl font-display font-bold text-brand">Top 3</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-secondary mt-2">Rankings</div>
        </div>
        <div className="p-8 bg-badge-bg rounded-2xl border border-brand/10 text-center">
          <div className="text-4xl font-display font-bold text-brand">4x</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-secondary mt-2">Organic Revenue</div>
        </div>
        <div className="p-8 bg-badge-bg rounded-2xl border border-brand/10 text-center">
          <div className="text-4xl font-display font-bold text-brand">85%</div>
          <div className="text-[10px] font-bold uppercase tracking-widest text-secondary mt-2">Reduction in Paid Ads</div>
        </div>
      </div>
    </div>
  </BlogPostTemplate>
);

export const LocalSEOChecklist = () => (
  <BlogPostTemplate 
    title="The Local SEO Checklist Every Small Business Needs in 2026"
    cat="SEO TIPS"
    date="Feb 24 2026"
    readTime="6 min read"
    relatedPosts={[
      { title: "How I Took an Agriculture Brand from 0 to 170% Organic Growth", path: "/blog/agriculture-seo/" },
      { title: "Why Technical SEO is the Foundation of Every Winning Strategy", path: "/blog/technical-seo-foundation/" }
    ]}
  >
    <div className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-ink">Why Local SEO Matters in 2026</h2>
      <p>Local search is more competitive than ever. With Google's AI-driven search results, being in the 'Map Pack' is often the difference between a thriving business and one that's invisible to local customers.</p>
    </div>
    <div className="space-y-8">
      <h2 className="text-3xl font-display font-bold text-ink">The Complete Local SEO Checklist</h2>
      <div className="space-y-8">
        <div className="space-y-4">
          <h4 className="font-bold text-brand">Google Business Profile</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Claim and verify your profile.</li>
            <li>Complete every section of the profile.</li>
            <li>Add high-quality photos and videos.</li>
            <li>Post regular updates and offers.</li>
            <li>Respond to all reviews (positive and negative).</li>
            <li>Set up messaging and Q&A.</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="font-bold text-brand">On-Page Local SEO</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Optimize title tags with city/region names.</li>
            <li>Embed a Google Map on your contact page.</li>
            <li>Add Local Business Schema markup.</li>
            <li>Create location-specific landing pages.</li>
            <li>Include your NAP (Name, Address, Phone) in the footer.</li>
          </ul>
        </div>
      </div>
    </div>
  </BlogPostTemplate>
);

export const TechnicalSEOFoundation = () => (
  <BlogPostTemplate 
    title="Why Technical SEO is the Foundation of Every Winning Strategy"
    cat="STRATEGY"
    date="Feb 10 2026"
    readTime="7 min read"
    relatedPosts={[
      { title: "How I Took an Agriculture Brand from 0 to 170% Organic Growth", path: "/blog/agriculture-seo/" },
      { title: "The Local SEO Checklist Every Small Business Needs in 2026", path: "/blog/local-seo-checklist/" }
    ]}
  >
    <div className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-ink">What is Technical SEO and Why It Matters</h2>
      <p>Technical SEO is the process of optimizing your website for the crawling and indexing phase. It's the foundation upon which all other SEO efforts are built. If your site isn't technically sound, even the best content in the world won't rank.</p>
    </div>
    <div className="space-y-8">
      <h2 className="text-3xl font-display font-bold text-ink">The 6 Core Technical SEO Pillars</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Crawlability", desc: "Ensuring search engine bots can navigate your site without issues." },
          { title: "Indexability", desc: "Making sure your pages are eligible to be included in search results." },
          { title: "Page Speed", desc: "Optimizing load times to improve user experience and rankings." },
          { title: "Mobile Friendliness", desc: "Ensuring your site works perfectly on all screen sizes." },
          { title: "Structured Data", desc: "Helping search engines understand your content through schema." },
          { title: "Site Architecture", desc: "Organizing your content in a logical, hierarchical way." },
        ].map((p, i) => (
          <div key={i} className="p-6 bg-stone rounded-2xl border border-border">
            <h4 className="font-bold mb-2 text-ink">{p.title}</h4>
            <p className="text-sm text-secondary">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </BlogPostTemplate>
);

export const AISEOContent = () => (
  <BlogPostTemplate 
    title="How to Use AI Tools to Scale Your SEO Content Production"
    cat="SEO TIPS"
    date="Jan 28 2026"
    readTime="5 min read"
    relatedPosts={[
      { title: "Why Technical SEO is the Foundation of Every Winning Strategy", path: "/blog/technical-seo-foundation/" },
      { title: "eCommerce SEO — How to Optimise Category Pages for Maximum Traffic", path: "/blog/ecommerce-category-pages/" }
    ]}
  >
    <div className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-ink">AI is Changing SEO Content But Not How You Think</h2>
      <p>AI isn't about replacing writers; it's about augmenting them. In 2026, the brands winning at SEO are those that use AI to handle the repetitive tasks while keeping a human in the loop for quality and expertise.</p>
    </div>
    <div className="space-y-8">
      <h2 className="text-3xl font-display font-bold text-ink">The AI SEO Content Workflow</h2>
      <ol className="list-decimal pl-6 space-y-4">
        <li><strong className="text-ink">Keyword research:</strong> Use AI to identify clusters and intent.</li>
        <li><strong className="text-ink">Content brief:</strong> Generate detailed briefs with AI assistance.</li>
        <li><strong className="text-ink">First draft:</strong> Use AI to build the initial structure and draft.</li>
        <li><strong className="text-ink">Human editing:</strong> The most critical step—adding expertise and voice.</li>
        <li><strong className="text-ink">On-page optimisation:</strong> Tuning the content for search engines.</li>
        <li><strong className="text-ink">Publish and monitor:</strong> Tracking performance and refining.</li>
      </ol>
    </div>
  </BlogPostTemplate>
);

export const EcommerceCategoryPages = () => (
  <BlogPostTemplate 
    title="eCommerce SEO: How to Optimise Category Pages for Maximum Traffic"
    cat="TECHNICAL SEO"
    date="Jan 15 2026"
    readTime="6 min read"
    relatedPosts={[
      { title: "How to Use AI Tools to Scale Your SEO Content Production", path: "/blog/ai-seo-content/" },
      { title: "Link Building in 2026 — What Still Works and What to Avoid", path: "/blog/link-building-2026/" }
    ]}
  >
    <div className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-ink">Why Category Pages Are Your Most Valuable Pages</h2>
      <p>For eCommerce brands, category pages often have the highest potential for organic revenue. They capture users searching for broad product terms, making them the ultimate traffic drivers.</p>
    </div>
    <div className="space-y-8">
      <h2 className="text-3xl font-display font-bold text-ink">8 Category Page Optimisation Techniques</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Optimized H1 tags with target keywords.</li>
        <li>Unique, high-quality category descriptions.</li>
        <li>Faceted navigation optimization (avoiding duplicate content).</li>
        <li>Internal linking to subcategories and top products.</li>
        <li>Product grid optimization with clear titles and images.</li>
        <li>Implementing Breadcrumb schema.</li>
        <li>Optimizing for mobile users.</li>
        <li>Adding FAQ sections to capture long-tail queries.</li>
      </ul>
    </div>
  </BlogPostTemplate>
);

export const LinkBuilding2026 = () => (
  <BlogPostTemplate 
    title="Link Building in 2026: What Still Works and What to Avoid"
    cat="STRATEGY"
    date="Jan 5 2026"
    readTime="7 min read"
    relatedPosts={[
      { title: "eCommerce SEO — How to Optimise Category Pages for Maximum Traffic", path: "/blog/ecommerce-category-pages/" },
      { title: "Why Technical SEO is the Foundation of Every Winning Strategy", path: "/blog/technical-seo-foundation/" }
    ]}
  >
    <div className="space-y-6">
      <h2 className="text-3xl font-display font-bold text-ink">The State of Link Building in 2026</h2>
      <p>Quality over quantity has never been more true. Google's algorithms are now incredibly sophisticated at identifying and devaluing low-quality or manipulative links. Today, link building is about building relationships and creating value.</p>
    </div>
    <div className="space-y-8">
      <h2 className="text-3xl font-display font-bold text-ink">Link Building Strategies That Still Work</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Digital PR", desc: "Earning links from major news outlets through data-driven stories." },
          { title: "Guest Posting", desc: "Writing high-quality content for reputable niche publications." },
          { title: "Resource Pages", desc: "Getting listed on curated lists of valuable industry resources." },
          { title: "Broken Link Building", desc: "Helping webmasters fix broken links by suggesting your content." },
          { title: "Linkable Assets", desc: "Creating tools or research that people naturally want to link to." },
        ].map((s, i) => (
          <div key={i} className="p-6 bg-stone rounded-2xl border border-border">
            <h4 className="font-bold mb-2 text-ink">{s.title}</h4>
            <p className="text-sm text-secondary">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </BlogPostTemplate>
);
