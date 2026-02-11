"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Variants } from "framer-motion";

const EASE_SMOOTH: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE_SMOOTH },
  },
};

const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.15, ease: EASE_SMOOTH },
  },
};

const bgFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: EASE_SMOOTH },
  },
};

export default function Careers() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="careers" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.div
          ref={sectionRef}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid gap-16 md:grid-cols-2 items-center"
        >
          {/* ─── Texto (esquerda) ─── */}
          <div className="flex flex-col gap-4 order-2 md:order-1 ml-8 md:ml-0">
            <motion.h2
              variants={fadeUp}
              className="text-[32px] font-bold text-black"
            >
              Careers
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-[20px] font-medium text-[#404040]"
            >
              At Trek Mobi, we are always looking for talented and passionate
              people to join our team.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[18px] font-normal leading-6 text-[#404040]"
            >
              Whether your expertise is in content{" "}
              <span className="relative inline font-bold">
                <span className="relative z-10 underline">
                  creation, technology, design, or marketing,
                </span>
                <motion.span
                  className="absolute bottom-0 left-0 h-[40%] w-full bg-[#08FE08]/15 -z-0 rounded-sm"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
                  style={{ originX: 0 }}
                />
              </span>{" "}
              we offer opportunities to grow and make an impact.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[18px] font-normal leading-6 text-[#404040]"
            >
              Check out our job openings below or send us your portfolio and
              resume.
            </motion.p>

            {/* ── CTA com hover sweep ── */}
            <motion.div variants={fadeUp} className="pt-3">
              <Link
                href="#"
                className="inline-flex items-center rounded-full border border-[#08FE08] h-[40px] relative group overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#08FE08]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                <span className="relative px-5 text-black text-[20px] font-semibold">
                  Read More
                </span>

                <span className="h-[40px] w-[40px] rounded-full bg-[#08FE08] grid place-items-center shadow-[0_8px_16px_rgba(8,254,8,0.4)] group-hover:shadow-[0_0_28px_#08FE08] transition-shadow duration-300 -ml-2">
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

          {/* ─── Imagens (direita) — entradas diferentes + hover CSS ─── */}
          <motion.div
            variants={fadeUp}
            className="relative w-full h-[400px] order-1 md:order-2 careers-images"
          >
            {/* Background decorativo */}
            <motion.div
              variants={bgFadeIn}
              className="absolute left-0 top-0 w-[70%] h-[70%] pointer-events-none"
            >
              <Image
                src="/website-section-1.png"
                alt=""
                fill
                className="object-contain object-left-top"
              />
            </motion.div>

            {/* Imagem vertical (direita) */}
            <motion.div
              variants={slideFromRight}
              className="absolute right-0 top-0 w-[45%] h-[100%] rounded-[32px] overflow-hidden z-10 careers-img-tilt"
            >
              <Image
                src="/carreers-2.png"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Imagem horizontal (esquerda/baixo) */}
            <motion.div
              variants={slideFromBottom}
              className="absolute left-0 bottom-0 w-[52%] h-[45%] rounded-[32px] overflow-hidden z-10 careers-img-tilt"
            >
              <Image
                src="/carreers-1.png"
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Hover tilt via CSS — leve e sem conflito de hydration ── */}
      <style jsx global>{`
        .careers-images:hover .careers-img-tilt {
          transition: transform 0.4s cubic-bezier(0.37, 0, 0.63, 1);
        }
        .careers-images:hover .careers-img-tilt:first-of-type {
          transform: translate(3px, -2px);
        }
        .careers-images:hover .careers-img-tilt:last-of-type {
          transform: translate(-3px, 2px);
        }
        .careers-img-tilt {
          transition: transform 0.5s cubic-bezier(0.37, 0, 0.63, 1);
        }
      `}</style>
    </section>
  );
}