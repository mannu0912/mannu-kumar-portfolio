import { motion } from "motion/react";
import { ArrowRight, Check, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      price: isYearly ? 239 : 299,
      desc: "For small businesses starting SEO",
      features: [
        "Basic SEO Audit",
        "On-Page Optimisation up to 10 pages",
        "Monthly Reporting",
        "Email Support",
        "1 Blog Post per month",
        "Google Search Console Setup"
      ]
    },
    {
      name: "Growth",
      price: isYearly ? 399 : 499,
      desc: "For scaling eCommerce brands",
      popular: true,
      features: [
        "Full Technical SEO Audit",
        "On-Page Optimisation up to 30 pages",
        "Bi-Weekly Reporting",
        "Priority Email and Phone Support",
        "4 Blog Posts per month",
        "Link Building 5 links per month",
        "Google Business Profile Optimisation",
        "Competitor Monitoring"
      ]
    },
    {
      name: "Pro",
      price: isYearly ? 799 : 999,
      desc: "For established brands ready to dominate",
      features: [
        "Advanced SEO Strategy and Roadmap",
        "Unlimited On-Page Optimisation",
        "Weekly Reporting and Strategy Calls",
        "Dedicated Account Manager",
        "8 Blog Posts per month",
        "Link Building 15 links per month",
        "Full Competitor Analysis",
        "CRO Recommendations",
        "Priority Slack Access"
      ]
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
            Simple Transparent Pricing
          </motion.h1>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-0 border-b border-border mb-12">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-8 py-3 text-sm font-semibold transition-all border-b-2 -mb-px ${!isYearly
                ? 'border-brand text-brand'
                : 'border-transparent text-muted hover:text-ink'}`}>
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-8 py-3 text-sm font-semibold transition-all border-b-2 -mb-px ${isYearly
                ? 'border-brand text-brand'
                : 'border-transparent text-muted hover:text-ink'}`}>
              Yearly
              {isYearly && (
                <span className="ml-2 text-xs bg-badge-bg text-brand px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              )}
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <motion.div 
                key={idx}
                {...fadeInUp}
                transition={{ delay: idx * 0.1 }}
                className={`p-10 rounded-[40px] border flex flex-col transition-all duration-250 ${plan.popular ? 'border-brand shadow-2xl relative z-10 bg-white' : 'border-border bg-stone'}`}
              >
                {plan.popular && <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand text-white text-[10px] font-bold uppercase tracking-widest py-2.5 px-6 rounded-full">Most Popular</span>}
                
                <div className="mb-10">
                  <h3 className="text-2xl font-display font-bold mb-2 text-ink">{plan.name}</h3>
                  <p className="text-muted text-sm">{plan.desc}</p>
                </div>

                <div className="mb-10">
                  <div className="text-5xl font-display font-bold text-ink">${plan.price}<span className="text-sm font-sans text-muted font-normal">/month</span></div>
                  {isYearly && <div className="text-xs text-brand font-bold mt-2">Billed annually</div>}
                </div>

                <ul className="space-y-4 mb-12 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted">
                      <Check size={18} className="text-brand shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link to="/contact/" className={`w-full py-5 rounded-2xl font-bold text-center transition-all ${plan.popular ? 'bg-brand text-white hover:bg-brand-dark' : 'bg-white border border-border hover:border-brand hover:text-brand text-ink'}`}>
                  Choose {plan.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-display font-bold mb-16 text-center text-ink">Pricing FAQ</h2>
          <div className="space-y-4">
            {[
              { q: "Are there any long-term contracts?", a: "No. All my plans are month-to-month. You can cancel at any time with 30 days' notice." },
              { q: "What payment methods do you accept?", a: "I accept all major credit cards, PayPal, and direct bank transfers." },
              { q: "Can I upgrade or downgrade my plan?", a: "Yes, you can change your plan at any time. The changes will take effect from the next billing cycle." },
              { q: "Do you offer refunds?", a: "Due to the nature of SEO work, I don't offer refunds for work already performed, but you can cancel future billing at any time." },
              { q: "Is there a setup fee?", a: "No. There are no hidden setup fees. Your first month's payment covers the initial audit and strategy setup." },
            ].map((faq, idx) => (
              <div key={idx} className={`bg-stone rounded-2xl border border-border overflow-hidden transition-all duration-300 ${openFaq === idx ? 'border-l-[3px] border-l-brand' : ''}`}>
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

      {/* CTA */}
      <section className="py-32 px-6 text-center bg-stone">
        <Link to="/contact/" className="btn-primary flex items-center gap-4 group mx-auto w-fit">
          Book a Free Discovery Call <ArrowRight className="transition-transform group-hover:translate-x-2" />
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
