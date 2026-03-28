import { Zap, MapPin, DollarSign, Smartphone } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Turnaround",
    description: "Sites delivered in days, not months. We move fast so you can get online quickly.",
  },
  {
    icon: MapPin,
    title: "Built for Local Businesses",
    description: "We understand what local clients need — clear, trustworthy, and easy to navigate.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Professional quality without the agency price tag. Real value for real businesses.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Every site looks and works great on phones, tablets, and desktops.",
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 px-6" style={{ background: "var(--pinnacle-bg-alt)" }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] uppercase font-semibold mb-3 text-center"
          style={{ color: "var(--pinnacle-cyan)" }}
        >
          Why Choose Us
        </p>
        <h2
          className="text-3xl sm:text-4xl font-black text-center mb-16"
          style={{ color: "var(--pinnacle-text)" }}
        >
          The Pinnacle Difference
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex flex-col items-start">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-5"
                style={{ background: "rgba(6,182,212,0.12)" }}
              >
                <Icon size={22} style={{ color: "var(--pinnacle-cyan)" }} />
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ color: "var(--pinnacle-text)" }}
              >
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--pinnacle-muted)" }}>
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
