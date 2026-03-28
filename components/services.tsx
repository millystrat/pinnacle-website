import { Palette, Code2, Wrench } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Custom, mobile-first designs tailored to your brand. Every site looks great on any device.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Fast, modern tech stack built to perform. Clean code that loads quickly and works reliably.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Updates",
    description:
      "Ongoing support so your site stays fresh. We handle updates so you can focus on your business.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-6" style={{ background: "var(--pinnacle-bg-alt)" }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] uppercase font-semibold mb-3 text-center"
          style={{ color: "var(--pinnacle-cyan)" }}
        >
          What We Do
        </p>
        <h2
          className="text-3xl sm:text-4xl font-black text-center mb-16"
          style={{ color: "var(--pinnacle-text)" }}
        >
          Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="rounded-xl p-8 border"
              style={{
                background: "var(--pinnacle-bg)",
                borderColor: "var(--pinnacle-border)",
              }}
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mb-6"
                style={{ background: "rgba(37,99,235,0.15)" }}
              >
                <Icon size={22} style={{ color: "var(--pinnacle-cyan)" }} />
              </div>
              <h3
                className="text-lg font-bold mb-3"
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
