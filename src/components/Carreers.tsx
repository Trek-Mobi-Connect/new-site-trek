"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useRef, useCallback } from "react";
import type { Variants } from "framer-motion";

const EASE_SMOOTH: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const SPRING_SOFT = { stiffness: 40, damping: 25, mass: 1 };

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

/* ── Imagens entram de direções diferentes (diferencial desta seção) ── */
const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.7, ease: EASE_SMOOTH },
  },
};

const slideFromBottom: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, delay: 0.15, ease: EASE_SMOOTH },
  },
};

const bgFadeIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: EASE_SMOOTH },
  },
};

export default function Careers() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  /* ── Mouse tilt para área de imagens ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const tiltX = useSpring(mouseX, SPRING_SOFT);
  const tiltY = useSpring(mouseY, SPRING_SOFT);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 8);
      mouseY.set(y * 6);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  return (
    <section id="careers" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-20">
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
                {/* Highlight que aparece com delay */}
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

            {/* ── CTA com hover sweep (mesmo padrão) ── */}
            <motion.div variants={fadeUp} className="pt-3">
              <Link
                href="#"
                className="inline-flex items-center rounded-full border border-[#08FE08] h-[40px] relative group overflow-hidden"
              >
                {/* Hover sweep */}
                <span className="absolute inset-0 bg-[#08FE08]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                <span className="relative px-5 text-black text-[20px] font-semibold">
                  Read More
                </span>

                <span className="h-[40px] w-[40px] rounded-full bg-[#08FE08] grid place-items-center shadow-[0_8px_16px_rgba(8,254,8,0.4)] group-hover:shadow-[0_0_28px_#08FE08] group-hover:scale-110 transition-all duration-300 -ml-2">
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

          {/* ─── Imagens (direita) — com tilt no mouse + entradas diferentes ─── */}
          <motion.div
            variants={fadeUp}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full h-[400px] order-1 md:order-2"
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

            {/* Imagem vertical (direita) — entra da direita */}
            <motion.div
              variants={slideFromRight}
              style={{ x: tiltX, y: tiltY, willChange: "transform" }}
              className="absolute right-0 top-0 w-[45%] h-[100%] rounded-[32px] overflow-hidden z-10"
            >
              <Image
                src="/carrers-2.svg"
                alt="Team collaboration"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Imagem horizontal (esquerda/baixo) — entra de baixo */}
            <motion.div
              variants={slideFromBottom}
              style={{
                x: tiltX,
                y: tiltY,
                willChange: "transform",
              }}
              className="absolute left-0 bottom-0 w-[52%] h-[45%] rounded-[32px] overflow-hidden z-10"
            >
              <Image
                src="/carrers-1.svg"
                alt="Team meeting"
                fill
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}