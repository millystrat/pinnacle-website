const plans = [
  {
    name: "Starter",
    price: "$299",
    billing: "one-time",
    features: [
      "1-page site",
      "Mobile responsive",
      "Contact form",
      "1 revision",
    ],
    featured: false,
  },
  {
    name: "Growth",
    price: "$699",
    billing: "one-time",
    features: [
      "Up to 5 pages",
      "Custom design",
      "SEO basics",
      "3 revisions",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "$1,499",
    billing: "one-time + $79/mo",
    features: [
      "Full custom site",
      "Ongoing maintenance",
      "Priority support",
      "Unlimited revisions",
    ],
    featured: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6" style={{ background: "var(--pinnacle-bg)" }}>
      <div className="max-w-6xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] uppercase font-semibold mb-3 text-center"
          style={{ color: "var(--pinnacle-cyan)" }}
        >
          Simple Pricing
        </p>
        <h2
          className="text-3xl sm:text-4xl font-black text-center mb-4"
          style={{ color: "var(--pinnacle-text)" }}
        >
          Plans &amp; Pricing
        </h2>
        <p
          className="text-center text-sm mb-16"
          style={{ color: "var(--pinnacle-muted)" }}
        >
          No hidden fees. No surprises. Just great websites.
        </p>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="rounded-xl p-8 border flex flex-col"
              style={{
                background: plan.featured ? "var(--pinnacle-blue)" : "var(--pinnacle-bg-alt)",
                borderColor: plan.featured ? "var(--pinnacle-blue)" : "var(--pinnacle-border)",
                boxShadow: plan.featured ? "0 0 40px rgba(37,99,235,0.35)" : "none",
              }}
            >
              {plan.featured && (
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-4"
                  style={{ color: "var(--pinnacle-cyan)" }}
                >
                  Most Popular
                </p>
              )}
              <h3
                className="text-xl font-black mb-2"
                style={{ color: "#fff" }}
              >
                {plan.name}
              </h3>
              <p className="text-4xl font-black mb-1" style={{ color: "#fff" }}>
                {plan.price}
              </p>
              <p
                className="text-xs mb-8"
                style={{ color: plan.featured ? "rgba(255,255,255,0.6)" : "var(--pinnacle-muted)" }}
              >
                {plan.billing}
              </p>

              <ul className="flex flex-col gap-3 mb-10 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: plan.featured ? "rgba(255,255,255,0.85)" : "var(--pinnacle-muted)" }}>
                    <span style={{ color: "var(--pinnacle-cyan)" }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="mailto:jedonyoung@icloud.com"
                className="block text-center py-3 rounded-lg text-sm font-bold transition-opacity hover:opacity-85"
                style={
                  plan.featured
                    ? { background: "#fff", color: "var(--pinnacle-blue)" }
                    : { background: "var(--pinnacle-blue)", color: "#fff" }
                }
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
