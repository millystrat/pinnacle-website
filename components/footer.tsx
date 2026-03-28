export function Footer() {
  return (
    <footer
      className="py-10 px-6 border-t"
      style={{ background: "var(--pinnacle-bg)", borderColor: "var(--pinnacle-border)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-black text-lg" style={{ color: "var(--pinnacle-text)" }}>
          Pinnacle{" "}
          <span style={{ color: "var(--pinnacle-cyan)" }}>Web Service</span>
        </span>
        <p className="text-xs" style={{ color: "var(--pinnacle-muted)" }} suppressHydrationWarning>
          © {new Date().getFullYear()} Pinnacle Web Service. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
