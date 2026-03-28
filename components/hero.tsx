"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.12,
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex items-center justify-center text-center overflow-hidden"
      style={{ minHeight: "90vh" }}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 60% 50%, rgba(37,99,235,0.18) 0%, transparent 70%), radial-gradient(ellipse at 20% 80%, rgba(6,182,212,0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-32">
        <motion.p
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-xs tracking-[0.3em] uppercase font-semibold mb-6"
          style={{ color: "var(--pinnacle-cyan)" }}
        >
          Professional Web Design &amp; Development
        </motion.p>

        <motion.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="font-black leading-tight mb-6"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            color: "var(--pinnacle-text)",
          }}
        >
          Websites That Work{" "}
          <span
            style={{
              background: "linear-gradient(90deg, var(--pinnacle-blue), var(--pinnacle-cyan))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            As Hard As You Do
          </span>
        </motion.h1>

        <motion.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-lg leading-relaxed mb-10 mx-auto max-w-2xl"
          style={{ color: "var(--pinnacle-muted)" }}
        >
          Pinnacle Web Service builds professional, modern websites for local businesses —
          fast, affordable, and built to grow.
        </motion.p>

        <motion.div
          custom={3}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="mailto:jedonyoung@icloud.com"
            className="px-8 py-4 text-base font-bold rounded-lg transition-opacity hover:opacity-85"
            style={{
              background: "linear-gradient(90deg, var(--pinnacle-blue), var(--pinnacle-cyan))",
              color: "#fff",
            }}
          >
            Get a Free Quote →
          </a>
          <a
            href="#pricing"
            className="px-8 py-4 text-base font-semibold rounded-lg border transition-opacity hover:opacity-70"
            style={{ color: "var(--pinnacle-text)", borderColor: "var(--pinnacle-border)" }}
          >
            View Pricing
          </a>
        </motion.div>
      </div>
    </section>
  );
}
