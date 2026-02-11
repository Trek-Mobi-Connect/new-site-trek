"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";

const EASE_SMOOTH: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

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

const HIGHLIGHTS = [
  "50+ Managed Websites",
  "Apps in Multiple Categories",
  "Content in 100+ Countries",
  "Millions of Monthly Users",
];

export default function Apps() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="apps" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">

        {/* ── Marquee com fade nas bordas (CSS mask) ── */}
        <div className="highlights-marquee-wrapper mb-10 py-6 overflow-hidden select-none">
          <div className="highlights-marquee inline-flex">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-6 shrink-0 pr-6">
                {HIGHLIGHTS.map((text, i) => (
                  <div key={`${copy}-${i}`} className="flex items-center gap-6 shrink-0">
                    <span className="text-[16px] font-medium text-[#A0A0A0] whitespace-nowrap">
                      {text}
                    </span>
                    <span
                      className="inline-block w-[10px] h-[10px] bg-[#08FE08] shrink-0"
                      style={{ transform: "rotate(45deg)" }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <motion.div
          ref={sectionRef}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="rounded-2xl bg-[#FAFAFA] px-8 py-10 grid gap-10 md:grid-cols-2"
        >
          {/* ─── Imagens (esquerda) ─── */}
          <motion.div variants={fadeUp} className="relative order-first min-h-[280px] md:min-h-[380px]">
            <Image
              src="/app-section-1.png"
              alt=""
              fill
              className="object-contain pointer-events-none select-none"
              sizes="(min-width: 768px) 560px, 100vw"
            />

            <Image
              src="/app-section-2.webp"
              alt="Apps preview"
              width={560}
              height={380}
              className="relative z-10 mx-auto mt-16 md:mt-6 w-[520px] max-w-full h-auto"
              priority
            />
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

                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-[#08FE08] grid place-items-center shadow-[0_0_18px_#08FE08] group-hover:shadow-[0_0_28px_#08FE08] transition-shadow duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
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

      <style jsx global>{`
        .highlights-marquee-wrapper {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }
        @keyframes highlights-scroll {
          0% { transform: translateX(0) translateZ(0); }
          100% { transform: translateX(-50%) translateZ(0); }
        }
        .highlights-marquee {
          animation: highlights-scroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}