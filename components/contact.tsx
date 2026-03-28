export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 text-center"
      style={{ background: "var(--pinnacle-bg)" }}
    >
      <div className="max-w-2xl mx-auto">
        <p
          className="text-xs tracking-[0.3em] uppercase font-semibold mb-3"
          style={{ color: "var(--pinnacle-cyan)" }}
        >
          Get In Touch
        </p>
        <h2
          className="text-3xl sm:text-4xl font-black mb-4"
          style={{ color: "var(--pinnacle-text)" }}
        >
          Ready to Get Started?
        </h2>
        <p
          className="text-base leading-relaxed mb-10"
          style={{ color: "var(--pinnacle-muted)" }}
        >
          Reach out and we&apos;ll get back to you within 24 hours.
        </p>

        <a
          href="mailto:jedonyoung@icloud.com"
          className="inline-block px-10 py-4 text-base font-bold rounded-lg mb-6 transition-opacity hover:opacity-85"
          style={{
            background: "linear-gradient(90deg, var(--pinnacle-blue), var(--pinnacle-cyan))",
            color: "#fff",
          }}
        >
          Email Us →
        </a>

        <p className="text-sm" style={{ color: "var(--pinnacle-muted)" }}>
          jedonyoung@icloud.com
        </p>
      </div>
    </section>
  );
}
