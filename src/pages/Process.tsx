import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, MessageSquare, Calendar, BarChart3, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Process() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      step: "Step 1",
      title: "Discovery and Audit",
      time: "Week 1 to 2",
      icon: <Search className="text-brand" />,
      desc: "We start with a deep dive into your business, goals, and current SEO health. I perform a comprehensive technical, on-page, and competitor audit to identify the low-hanging fruit and long-term opportunities."
    },
    {
      step: "Step 2",
      title: "Strategy and Roadmap",
      time: "Week 2 to 3",
      icon: <Calendar className="text-brand" />,
      desc: "Based on the audit findings, I build a custom 6-12 month SEO roadmap. This isn't a generic plan—it's a prioritized list of actions designed to move the needle for your specific business and budget."
    },
    {
      step: "Step 3",
      title: "Implementation",
      time: "Month 1 to 3",
      icon: <CheckCircle2 className="text-brand" />,
      desc: "This is where the work happens. I handle the heavy lifting across technical fixes, content creation, and on-page optimization. We focus on the high-impact tasks first to start building momentum."
    },
    {
      step: "Step 4",
      title: "Reporting and Refinement",
      time: "Ongoing monthly",
      icon: <BarChart3 className="text-brand" />,
      desc: "SEO is never 'done'. Every month, I provide detailed reports on our progress and refine the strategy based on real-world data. We continuously look for new opportunities to scale your organic growth."
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
            How I Work — A Transparent SEO Process
          </motion.h1>
          <p className="text-secondary text-xl max-w-2xl mx-auto">
            No secrets, no magic. Just a proven, data-driven framework for sustainable organic growth.
          </p>
        </div>
      </section>

      {/* Detailed Process */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto space-y-24">
          {steps.map((s, idx) => (
            <motion.div 
              key={idx}
              {...fadeInUp}
              className="flex flex-col md:flex-row gap-12 md:items-center"
            >
              <div className="w-full md:w-1/3 space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-brand font-bold uppercase tracking-widest text-sm">{s.step}</span>
                  <span className="w-12 h-px bg-brand/20"></span>
                  <span className="text-secondary text-sm font-bold">{s.time}</span>
                </div>
                <h2 className="text-3xl font-display font-bold text-ink">{s.title}</h2>
              </div>
              <div className="w-full md:w-2/3 p-10 bg-stone rounded-3xl border border-border flex gap-8">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shrink-0 shadow-sm">
                  {s.icon}
                </div>
                <p className="text-secondary text-lg leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What to Expect Timeline */}
      <section className="py-32 px-6 bg-stone">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-20 text-center text-ink">What to Expect</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { label: "Month 1", title: "Foundation", desc: "Technical fixes, keyword mapping, and initial content optimization." },
              { label: "Month 3", title: "Momentum", desc: "Initial ranking improvements and growth in organic impressions." },
              { label: "Month 6", title: "Growth", desc: "Significant traffic growth and first-page rankings for target keywords." },
              { label: "Month 12", title: "Dominance", desc: "Top-tier rankings, high topical authority, and compounding ROI." },
            ].map((m, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-border space-y-4">
                <div className="text-brand font-bold text-sm">{m.label}</div>
                <h3 className="text-xl font-bold text-ink">{m.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="w-20 h-20 bg-stone rounded-2xl flex items-center justify-center mx-auto mb-8">
            <MessageSquare className="text-brand" size={32} />
          </div>
          <h2 className="text-4xl font-display font-bold text-ink">Communication & Reporting</h2>
          <p className="text-secondary text-lg leading-relaxed">
            I believe in total transparency. You'll receive a detailed report every month covering rankings, traffic, conversions, and exactly what work was performed. We'll also have a monthly strategy call to discuss progress and adjust the roadmap as needed. I'm always available via email for any urgent questions.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-stone">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-16 text-center text-ink">Working Together FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "How often will we communicate?", a: "We'll have a formal strategy call once a month, but I'm available via email throughout the week for any questions or updates." },
              { q: "Do I need to provide the content?", a: "I can either provide the content through my network of specialized writers or work with your internal team to optimize their output." },
              { q: "What access do you need?", a: "I'll typically need access to your Google Search Console, Google Analytics, and your CMS (Shopify, WordPress, etc.) to implement changes." },
              { q: "Can I cancel at any time?", a: "Yes. I don't believe in locking clients into long-term contracts. If you're not seeing the value, you can cancel with 30 days' notice." },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-border overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 flex items-center justify-between text-left hover:bg-stone transition-colors"
                >
                  <span className="font-bold text-ink">{faq.q}</span>
                  <div className={`transition-transform duration-300 ${openFaq === idx ? 'rotate-45' : ''}`}>
                    <Plus size={20} className="text-brand" />
                  </div>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-secondary text-sm leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6 text-center">
        <Link to="/contact/" className="btn-primary px-12 py-6 text-lg group">
          Start With a Discovery Call <ArrowRight className="transition-transform group-hover:translate-x-2" />
        </Link>
      </section>
    </div>
  );
}

function Plus({ size, className }: { size: number, className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="12" y1="5" x2="12" y2="19"></line>
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
}
