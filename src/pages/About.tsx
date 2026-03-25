import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { SEO } from "../components/SEO";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function About() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Mannu Dhiman",
    "jobTitle": "SEO Specialist",
    "description": "SEO consultant with 7+ years of experience helping eCommerce brands across the globe."
  };

  return (
    <div className="pt-20">
      <SEO 
        title="About Mannu Dhiman" 
        description="Learn more about Mannu Dhiman, an SEO specialist with over 7 years of experience in driving organic growth for eCommerce brands."
        schema={personSchema}
      />
      {/* Hero */}
      <section className="py-32 px-6 bg-stone">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-bold mb-8 text-ink"
          >
            The SEO Specialist Behind the Strategy
          </motion.h1>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-20">
          <div className="w-full md:w-[45%] relative group">
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-brand rounded-2xl -z-10 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-x-2 group-hover:translate-y-2"></div>
            <div className="aspect-[340/420] w-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-[20px] overflow-hidden flex items-center justify-center transition-transform duration-500 group-hover:scale-[1.02]">
              <span className="text-light-grey font-bold uppercase tracking-widest text-xs">Add Your Photo Here</span>
            </div>
          </div>

          <div className="w-full md:w-[55%] space-y-6 text-muted leading-relaxed text-lg">
            <p>
              I started my journey in digital marketing back in 2017, quickly realizing that organic search was the most powerful way to build a sustainable business. I've always been fascinated by how search engines work and how we can align business goals with user intent.
            </p>
            <p>
              Over the years, I've specialized in eCommerce SEO, helping Shopify and WooCommerce brands navigate the complexities of technical site architecture, content strategy, and topical authority. My approach is data-first—I don't believe in guesswork.
            </p>
            <p>
              I've had the privilege of working with brands across the USA, Canada, UAE, and India, bringing a global perspective to local and international SEO challenges. Whether it's a local business or a global enterprise, the goal remains the same: sustainable growth.
            </p>
            <p>
              I value transparency and long-term thinking. SEO isn't about quick hacks; it's about building a foundation that continues to deliver value long after the initial implementation. I work closely with my clients to ensure they understand the "why" behind every strategy.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-32 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-20 text-center text-ink">My Journey</h2>
          <div className="space-y-12">
            {[
              { year: "2017", title: "Started SEO career with first agency role", desc: "Learned the fundamentals of search and digital marketing." },
              { year: "2019", title: "Specialised in eCommerce SEO and Shopify stores", desc: "Focused on scaling online retailers through organic search." },
              { year: "2021", title: "Joined Core for Good Solutions as Organic Search Specialist", desc: "Led complex SEO strategies for high-growth startups." },
              { year: "2023", title: "Expanded client base to USA, Canada, UAE and Europe", desc: "Began consulting for international brands on a freelance basis." },
              { year: "2026", title: "50+ brands helped, 170% average traffic growth achieved", desc: "Continuing to drive results as an independent SEO consultant." },
            ].map((m, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                className="flex flex-col md:flex-row gap-8 md:items-center border-b border-border pb-12 last:border-0"
              >
                <div className="text-4xl font-display font-bold text-brand w-32">{m.year}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-ink">{m.title}</h3>
                  <p className="text-muted">{m.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-display font-bold mb-20 text-ink">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { cat: "Technical SEO Tools", tools: ["Screaming Frog", "Search Console", "PageSpeed Insights"] },
              { cat: "Content Tools", tools: ["Surfer SEO", "Claude AI", "ChatGPT", "Jasper"] },
              { cat: "Analytics Tools", tools: ["GA4", "Ahrefs", "SEMrush", "Hotjar"] },
              { cat: "CMS Platforms", tools: ["Shopify", "WordPress", "Webflow", "Magento"] },
              { cat: "AI Tools", tools: ["Midjourney", "Perplexity", "Custom GPTs"] },
            ].map((s, idx) => (
              <div key={idx} className="space-y-6">
                <h4 className="font-bold text-brand uppercase tracking-widest text-xs">{s.cat}</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {s.tools.map((t, i) => (
                    <span key={i} className="px-4 py-2 bg-stone border border-border rounded-lg text-sm font-medium text-[#444444] hover:border-brand hover:text-brand transition-all cursor-default">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { title: "Transparency", desc: "Clear reporting and honest communication at every step." },
              { title: "Data-First", desc: "Every decision is backed by solid data and thorough analysis." },
              { title: "Long-Term Thinking", desc: "Building strategies that compound and last for years." },
              { title: "No Shortcuts", desc: "Sustainable white-hat SEO that search engines love." },
            ].map((v, idx) => (
              <div key={idx} className="card-base p-10 space-y-4">
                <h3 className="text-xl font-bold text-ink">{v.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-white">
        <Link to="/contact/" className="btn-primary flex items-center gap-4 group mx-auto w-fit">
          Let's Work Together <ArrowRight className="transition-transform group-hover:translate-x-2" />
        </Link>
      </section>
    </div>
  );
}
