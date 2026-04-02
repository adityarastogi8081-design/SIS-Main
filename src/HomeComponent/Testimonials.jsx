import { useMemo } from "react";
import StarRating from "./StarRating";

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


const TESTIMONIALS = [
  { name: "Ravi Mehta", role: "Owner, Shiva Optics", text: "Say It Social Digital completely transformed our online presence. Our footfall increased by 40% in just 3 months. Highly recommend their social media team!", rating: 5 },
  { name: "Priya Sharma", role: "Founder, Kalon Ethnic", text: "The brand identity they created for us was stunning. The team understood our vision and delivered beyond expectations. Our online sales doubled!", rating: 5 },
  { name: "Amit Patel", role: "Director, The Function Junction", text: "Their event marketing campaigns are creative and results-driven. We saw record attendance at our events thanks to their digital strategies.", rating: 5 },
  { name: "Sunita Joshi", role: "Manager, Bright Start Foundation", text: "Professional, creative, and highly responsive team. They helped us build trust with parents through strategic content marketing.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 showreel-glow">
      <FloatingParticles />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="tag-chip">Client Stories</div>
          <h2 className="section-title text-4xl md:text-5xl text-white mt-4">
            What Our <span className="teal-gradient-text">Clients Say</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/8 bg-white/3 p-6 card-hover">
              <StarRating rating={t.rating} />
              <p className="text-white/70 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400 font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-white/35 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}