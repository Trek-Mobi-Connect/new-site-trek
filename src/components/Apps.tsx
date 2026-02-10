"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";
import type { Variants } from "framer-motion";

const EASE_SMOOTH: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const SPRING_SOFT = { stiffness: 40, damping: 25, mass: 1 };

/* ─── Counter animado ─── */
function AnimatedCounter({ target, suffix = "", duration = 2 }: { target: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const increment = target / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}{suffix}
    </span>
  );
}

/* ── Variants tipadas ── */
const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
};

export default function Apps() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  /* ── Mouse parallax suavizado via spring ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, SPRING_SOFT);
  const springY = useSpring(mouseY, SPRING_SOFT);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 14);
      mouseY.set(y * 10);
    },
    [mouseX, mouseY]
  );

  return (
    <section id="apps" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">

        {/* ── Marquee ticker (CSS puro — leve) ── */}
        <div className="mb-6 rounded-full bg-black py-2.5 text-[13px] font-semibold tracking-wide text-[#08FE08] uppercase select-none overflow-hidden whitespace-nowrap">
          <div className="inline-flex gap-8 apps-marquee">
            {[0, 1].map((i) => (
              <span key={i} className="flex items-center gap-8">
                <span>✦ Mobile Apps</span>
                <span>✦ Cross-Platform</span>
                <span>✦ Quality First</span>
                <span>✦ User Focused</span>
                <span>✦ Mobile Apps</span>
                <span>✦ Cross-Platform</span>
                <span>✦ Quality First</span>
                <span>✦ User Focused</span>
              </span>
            ))}
          </div>
        </div>

        <motion.div
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-2xl bg-[#FAFAFA] px-8 py-10 grid gap-10 md:grid-cols-2"
        >
          {/* ── Glow de fundo ── */}
          <div className="pointer-events-none absolute -top-32 -left-32 h-64 w-64 rounded-full bg-[#08FE08]/10 blur-[100px]" />

          {/* ─── Imagens (esquerda) ─── */}
          <motion.div variants={scaleIn} className="relative order-first min-h-[380px]">
            {/* globo verde — parallax mouse via spring */}
            <motion.div
              style={{ x: springX, y: springY, willChange: "transform" }}
              className="absolute inset-0"
            >
              <Image
                src="/app-section-1.png"
                alt=""
                fill
                className="object-contain pointer-events-none select-none -left-10 top-[-40px]"
                sizes="(min-width: 768px) 560px, 100vw"
              />
            </motion.div>

            {/* mockup dos apps — floating via CSS */}
            <div className="relative z-10 apps-float">
              <Image
                src="/app-section-2.png"
                alt="Apps preview"
                width={560}
                height={380}
                className="relative mx-auto mt-6 w-[520px] max-w-full h-auto drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>

          {/* ─── Texto (direita) ─── */}
          <div className="order-last flex flex-col justify-center">
            <motion.h2 variants={fadeUp} className="text-[36px] font-[700] text-black">
              Apps
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-4 text-[18px] font-[500] text-black">
              Beyond our websites, we have developed a wide range of mobile
              applications covering various topics and functionalities.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-4 space-y-4 text-[16px] font-[400] leading-relaxed text-[#1A1A1A]"
            >
              <p>
                Each app is built with the same principles: delivering quality,
                relevance, and a touch of fun. From informative tools to
                entertainment-focused experiences, our apps aim to make users
                lives easier, more informed, and more enjoyable.
              </p>
            </motion.div>

            {/* ── Counters ── */}
            <motion.div variants={fadeUp} className="mt-6 flex gap-8">
              {[
                { value: 10, suffix: "+", label: "Apps Published" },
                { value: 50, suffix: "K+", label: "Downloads" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-[28px] font-[800] text-black leading-none">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="mt-1 text-[13px] font-[500] text-[#666]">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            {/* ── CTA com hover sweep ── */}
            <motion.div variants={fadeUp}>
              <Link
                href="#"
                className="mt-6 inline-flex items-center rounded-full border border-[#08FE08] pl-4 pr-16 h-11 relative group overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#08FE08]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                <span className="relative text-black text-[18px] font-semibold">
                  Read More
                </span>

                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-[#08FE08] grid place-items-center shadow-[0_0_18px_#08FE08] group-hover:shadow-[0_0_28px_#08FE08] group-hover:scale-110 transition-all duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                  >
                    <path
                      d="M7 17L17 7M17 7H8M17 7V16"
                      stroke="#000"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* ── CSS animations globais da seção ── */}
      <style jsx global>{`
        @keyframes apps-float {
          0%, 100% { transform: translateY(0) translateZ(0); }
          50% { transform: translateY(-8px) translateZ(0); }
        }
        .apps-float {
          animation: apps-float 5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
        }
        @keyframes apps-marquee {
          0% { transform: translateX(0) translateZ(0); }
          100% { transform: translateX(-50%) translateZ(0); }
        }
        .apps-marquee {
          animation: apps-marquee 25s linear infinite;
        }
      `}</style>
    </section>
  );
}