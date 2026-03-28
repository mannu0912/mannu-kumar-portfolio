import { motion } from "motion/react";
import { ArrowRight, Mail, Linkedin, MapPin, CheckCircle2 } from "lucide-react";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_ggamtvm",
        "template_2jzgxak",
        formRef.current,
        "QLJ1lR3j7DjKdqFNK"
      )
      .then(() => {
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("EmailJS ERROR:", error);
        alert(error.text || "Something went wrong");
      });
  };

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
            Let's Talk About Your SEO Goals
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-32 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20">

          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-display font-bold text-ink">
                Ready to grow your organic traffic?
              </h2>
              <p className="text-secondary text-lg leading-relaxed">
                Whether you need a full SEO strategy, a technical audit, or ongoing monthly support — let's talk about what will move the needle for your business.
              </p>
            </div>

            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-badge-bg text-brand text-xs font-bold rounded-full">
                <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span>
                Currently Accepting New Clients
              </div>
              <p className="text-sm font-bold text-secondary italic">
                I respond within 24 hours
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {[
                { icon: <Mail className="text-brand" />, title: "Email", value: "mannudhiman6@gmail.com" },
                { icon: <Linkedin className="text-brand" />, title: "LinkedIn", value: "linkedin.com/in/mannukumar" },
                { icon: <MapPin className="text-brand" />, title: "Time Zone", value: "IST (Available for USA & Canada calls)" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-6 bg-stone rounded-2xl border border-border">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-secondary mb-1">
                      {item.title}
                    </div>
                    <div className="font-bold text-ink">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE (FORM) */}
          <div className="w-full md:w-1/2">
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center p-12 bg-badge-bg rounded-[40px] border border-border space-y-6"
              >
                <div className="w-20 h-20 bg-brand text-white rounded-full flex items-center justify-center">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="text-3xl font-display font-bold text-ink">Message Sent!</h3>
                <p className="text-secondary">
                  Thanks for reaching out! I will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="text-brand font-bold underline"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form 
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 bg-stone p-10 md:p-12 rounded-[40px] border border-border shadow-sm"
              >

                {/* Hidden tracking */}
                <input type="hidden" name="form_type" value="Contact Page" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">
                      Full Name
                    </label>
                    <input type="text" name="name" required className="form-input w-full" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">
                      Email Address
                    </label>
                    <input type="email" name="email" required className="form-input w-full" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">
                    Website URL
                  </label>
                  <input type="url" name="website" required className="form-input w-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">
                      Service Interested In
                    </label>
                    <select name="service" className="form-input w-full appearance-none">
                      <option>Technical SEO</option>
                      <option>On-Page SEO</option>
                      <option>eCommerce SEO</option>
                      <option>Local SEO</option>
                      <option>Content Strategy</option>
                      <option>Full SEO Audit</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">
                      Monthly Budget Range
                    </label>
                    <select name="budget" className="form-input w-full appearance-none">
                      <option>Under $500</option>
                      <option>$500 to $1000</option>
                      <option>$1000 to $2000</option>
                      <option>$2000+</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">
                    Tell me about your project
                  </label>
                  <textarea name="message" rows={4} required className="form-input w-full resize-none"></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-secondary ml-1">
                    How did you find me
                  </label>
                  <select name="source" className="form-input w-full appearance-none">
                    <option>Google</option>
                    <option>LinkedIn</option>
                    <option>Referral</option>
                    <option>Other</option>
                  </select>
                </div>

                <button type="submit" className="btn-primary w-full py-5 text-lg flex items-center justify-center gap-3">
                  Send Message <ArrowRight />
                </button>
              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}