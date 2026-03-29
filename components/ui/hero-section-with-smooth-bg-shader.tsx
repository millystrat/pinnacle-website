"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  title?: string;
  highlightText?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  colors?: string[];
  distortion?: number;
  swirl?: number;
  speed?: number;
  offsetX?: number;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  buttonClassName?: string;
  maxWidth?: string;
  veilOpacity?: string;
  fontFamily?: string;
  fontWeight?: number;
}

export function HeroSection({
  title = "Websites That Work",
  highlightText = "As Hard As You Do",
  description = "Pinnacle Web Service builds professional, modern websites for local businesses — fast, affordable, and built to grow.",
  buttonText = "Get a Free Quote →",
  onButtonClick,
  colors = ["#0A0F1E", "#111827", "#2563EB", "#06B6D4", "#1D4ED8", "#0e7490"],
  distortion = 0.8,
  swirl = 0.6,
  speed = 0.42,
  offsetX = 0.08,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
  buttonClassName = "",
  maxWidth = "max-w-6xl",
  veilOpacity = "bg-black/40",
  fontFamily = "Inter, sans-serif",
  fontWeight = 800,
}: HeroSectionProps) {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const update = () =>
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    }
  };

  return (
    <section
      className={`relative w-full min-h-screen overflow-hidden bg-background flex items-center justify-center ${className}`}
    >
      <div className="fixed inset-0 w-screen h-screen">
        {mounted && (
          <>
            <MeshGradient
              width={dimensions.width}
              height={dimensions.height}
              colors={colors}
              distortion={distortion}
              swirl={swirl}
              grainMixer={0}
              grainOverlay={0}
              speed={speed}
              offsetX={offsetX}
            />
            <div
              className={`absolute inset-0 pointer-events-none ${veilOpacity}`}
            />
          </>
        )}
      </div>

      <div className={`relative z-10 ${maxWidth} mx-auto px-6 w-full`}>
        <div className="text-center">
          <p
            className="text-xs tracking-[0.3em] uppercase font-semibold mb-6"
            style={{ color: "var(--pinnacle-cyan)" }}
          >
            Professional Web Design &amp; Development
          </p>
          <h1
            className={`font-bold text-foreground text-balance text-4xl sm:text-5xl md:text-6xl xl:text-[80px] leading-tight sm:leading-tight md:leading-tight lg:leading-tight xl:leading-[1.1] mb-6 lg:text-7xl ${titleClassName}`}
            style={{ fontFamily, fontWeight }}
          >
            {title}{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, var(--pinnacle-blue), var(--pinnacle-cyan))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {highlightText}
            </span>
          </h1>
          <p
            className={`text-lg sm:text-xl text-pretty max-w-2xl mx-auto leading-relaxed mb-10 px-4 ${descriptionClassName}`}
            style={{ color: "var(--pinnacle-muted)" }}
          >
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:jedonyoung@icloud.com"
              onClick={handleButtonClick}
              className={`px-8 py-4 text-base font-bold rounded-lg transition-opacity hover:opacity-85 ${buttonClassName}`}
              style={{
                background:
                  "linear-gradient(90deg, var(--pinnacle-blue), var(--pinnacle-cyan))",
                color: "#fff",
              }}
            >
              {buttonText}
            </a>
            <a
              href="#pricing"
              className="px-8 py-4 text-base font-semibold rounded-lg border transition-opacity hover:opacity-70"
              style={{
                color: "var(--pinnacle-text)",
                borderColor: "var(--pinnacle-border)",
              }}
            >
              View Pricing
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
