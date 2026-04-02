import { useMemo } from "react";
import { Link } from "react-router-dom"; // Imported Link for React Router navigation

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

export default function Service() {
  return (
    <section className=" relative py-24 px-6">
      <FloatingParticles />
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl p-12 md:p-16 text-center relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(20,184,166,0.1) 0%, rgba(6,10,13,0) 60%)", border: "1px solid rgba(20,184,166,0.2)" }}>
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-orange-500/5 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10">
            <h2 className="section-title text-4xl md:text-6xl text-white mb-4">
              Ready to Scale Your<br />
              <span className="teal-gradient-text">Digital Growth?</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">
              Explore our comprehensive growth engines including Social Media Marketing, SEO, Web Development, and Brand Identity. Trusted by 100+ brands to drive real-world revenue.
            </p>
            {/* Changed to Link component to route to the Services page */}
            <Link to="/services" className="btn-primary text-base px-10 py-4 inline-block">
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}