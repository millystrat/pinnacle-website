"use client";

import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: "var(--pinnacle-bg)", borderColor: "var(--pinnacle-border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Text logo */}
        <a
          href="#"
          className="font-black text-xl tracking-tight"
          style={{ color: "var(--pinnacle-text)" }}
        >
          Pinnacle{" "}
          <span style={{ color: "var(--pinnacle-cyan)" }}>Web Service</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase transition-opacity hover:opacity-60"
              style={{ color: "var(--pinnacle-text)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:jedonyoung@icloud.com"
            className="px-5 py-2 text-sm font-semibold rounded-md transition-opacity hover:opacity-80"
            style={{ background: "var(--pinnacle-blue)", color: "#fff" }}
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={buttonRef}
          className="md:hidden transition-opacity hover:opacity-70"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          style={{ color: "var(--pinnacle-text)" }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        aria-hidden={!open}
        className="md:hidden border-t px-6 py-4 flex flex-col gap-4"
        style={{ background: "var(--pinnacle-bg)", borderColor: "var(--pinnacle-border)" }}
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => { setOpen(false); buttonRef.current?.focus(); }}
            className="text-sm tracking-widest uppercase transition-opacity hover:opacity-60"
            style={{ color: "var(--pinnacle-text)" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="mailto:jedonyoung@icloud.com"
          onClick={() => { setOpen(false); buttonRef.current?.focus(); }}
          className="px-5 py-2 text-sm font-semibold rounded-md text-center"
          style={{ background: "var(--pinnacle-blue)", color: "#fff" }}
        >
          Get a Quote
        </a>
      </div>
    </nav>
  );
}
