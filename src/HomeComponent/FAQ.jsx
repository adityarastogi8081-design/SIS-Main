import { useMemo, useState } from "react";

function FloatingParticles() {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 3 + 1,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${Math.random() * 6 + 6}s`,
        color:
          i % 2 === 0 ? "rgba(4, 170, 165, 0.4)" : "rgba(251, 176, 64, 0.3)",
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            bottom: "-5%",
            background: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
        />
      ))}
    </div>
  );
}

const FAQS = [
  {
    q: "How much does professional digital marketing cost?",
    a: "Digital marketing investment varies based on the scope and specific business goals. We offer flexible, value-based pricing models—from targeted social media management to comprehensive growth engine packages. At Say It Social, we craft custom strategies that align with your budget and scaling requirements."
  },
  {
    q: "Why should I partner with a specialized growth agency?",
    a: "A specialized agency like Say It Social brings high-level platform expertise, creative edge, and advanced data analytics that are difficult to maintain in-house. We stay ahead of algorithm shifts and emerging trends, ensuring your brand remains a leader rather than a follower, ultimately saving you time and maximizing ROI."
  },
  {
    q: "What are the primary benefits of SEO for my brand?",
    a: "SEO (Search Engine Optimization) ensures your business is discoverable when high-intent customers are actively searching for your solutions. It builds long-term authority, drives sustainable organic traffic, and delivers compounding returns without the continuous cost of paid advertising."
  },
  {
    q: "How soon can I expect to see measurable results?",
    a: "Timelines depend on the channel: Paid campaigns (Meta/Google Ads) can generate leads within days. Social media resonance and engagement typically see a shift within 30-60 days, while SEO is a long-term asset that usually shows significant ranking dominance within 3 to 6 months."
  },
  {
    q: "Does Say It Social work with early-stage startups?",
    a: "Absolutely. We partner with businesses at every stage—from disruptive startups looking to find their voice to established enterprises aiming for global dominance. Our strategies are modular and scalable, designed to grow as your revenue grows."
  },
  {
    q: "Which industries do you specialize in?",
    a: "We have a proven track record across 10+ diverse sectors including E-commerce, SaaS, Real Estate, Healthcare, Fashion, and Manufacturing. This cross-industry intelligence allows us to apply winning tactics from one niche to solve unique challenges in another."
  },
  {
    q: "Do you provide integrated web development services?",
    a: "Yes. We are a full-service digital partner. We build high-conversion landing pages, complex e-commerce platforms, and corporate sites—all engineered with SEO-first architecture and premium UX design to ensure your digital storefront actually sells."
  },
];

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="relative py-24 px-6">
      <FloatingParticles />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <div className="tag-chip">Got Questions?</div>
          <h2 className="section-title text-4xl md:text-5xl text-white mt-4">
            Frequently Asked <span className="teal-gradient-text">Questions</span>
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div key={i} className="rounded-2xl border border-white/8 bg-white/3 overflow-hidden card-hover">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-white font-semibold text-sm pr-4">{faq.q}</span>
                <span className={`text-teal-400 text-lg flex-shrink-0 transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
              </button>
              <div className={`faq-content ${openFaq === i ? "open" : ""}`}>
                <div className="px-5 pb-5 text-white/55 text-sm leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}