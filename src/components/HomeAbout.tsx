"use client";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  useSpring,
} from "framer-motion";
import { useRef, useCallback } from "react";
import type { Variants } from "framer-motion";

const EASE_SMOOTH: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.15 } },
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
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: EASE_SMOOTH },
  },
};

const lineGrow: Variants = {
  hidden: { scaleY: 0 },
  visible: {
    scaleY: 1,
    transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
  },
};

export default function About() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  /* ── Parallax na imagem acompanhando o mouse ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const imgX = useSpring(useTransform(mouseX, [-500, 500], [-14, 14]), {
    stiffness: 70,
    damping: 20,
  });
  const imgY = useSpring(useTransform(mouseY, [-500, 500], [-10, 10]), {
    stiffness: 70,
    damping: 20,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [mouseX, mouseY]
  );

  return (
    <section
      id="about"
      className="bg-white pt-8 md:pt-16"
      onMouseMove={handleMouseMove}
    >
      <motion.div
        ref={sectionRef}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-6xl px-4 py-12 md:py-20 grid gap-8 md:gap-12 md:grid-cols-2"
      >
        {/* ─── Imagem com parallax + glow ─── */}
        <motion.div
          variants={scaleIn}
          className="relative flex items-center justify-center md:order-1"
        >
          {/* Glow atrás da imagem */}
          <div className="pointer-events-none absolute inset-0 m-auto h-[60%] w-[60%] rounded-full bg-[#08FE08]/6 blur-[70px]" />

          <motion.div style={{ x: imgX, y: imgY }}>
            <Image
              src="/about-us.svg"
              alt="About Trek Mobi"
              width={720}
              height={560}
              className="relative z-10 w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.06)]"
            />
          </motion.div>
        </motion.div>

        {/* ─── Texto com staggered reveal ─── */}
        <div className="ml-8 md:ml-0 md:order-2 flex flex-col justify-center">
          {/* Título com linha decorativa animada */}
          <motion.div variants={fadeUp} className="relative flex items-center gap-3">
            <motion.span
              variants={lineGrow}
              style={{ originY: 0 }}
              className="hidden md:block h-10 w-[3px] rounded-full bg-[#08FE08]"
            />
            <h2 className="text-[28px] md:text-[36px] font-[700] text-black">
              About Us
            </h2>
          </motion.div>

          <motion.h3
            variants={fadeUp}
            className="mt-3 text-[14px] md:text-[18px] font-[600] text-black leading-relaxed"
          >
            Trek Mobi is a digital media company founded with the mission to
            share engaging and relevant content across the globe.
          </motion.h3>

          <motion.div
            variants={fadeUp}
            className="mt-4 md:mt-5 space-y-3 md:space-y-4 text-[12px] md:text-[16px] font-normal leading-relaxed text-[#1A1A1A]"
          >
            <p>
              We started our journey creating websites that deliver information,
              technology news, and curiosity-driven content to diverse audiences.
              Over time, our expertise expanded to developing mobile applications
              for multiple niches — always with the same core philosophy: to
              provide quality, relevant, and enjoyable experiences.
            </p>
            <p>
              Today, Trek Mobi reaches millions of users in more than 100
              countries, delivering trustworthy content and entertainment while
              keeping user experience at the heart of everything we do.
            </p>
          </motion.div>

          {/* ── CTA com hover sweep + glow ── */}
          <motion.div variants={fadeUp}>
            <Link
              href="#"
              className="mt-6 md:mt-8 inline-flex items-center rounded-full border border-[#08FE08] pl-3 md:pl-4 pr-12 md:pr-16 h-10 md:h-12 relative group overflow-hidden"
            >
              {/* Hover sweep */}
              <span className="absolute inset-0 bg-[#08FE08]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

              <span className="relative text-black font-medium text-[14px] md:text-[16px]">
                Read More
              </span>

              <span className="absolute right-0 top-1/2 -translate-y-1/2 mr-0.5 h-10 w-10 md:h-12 md:w-12 rounded-full bg-[#08FE08] grid place-items-center shadow-[0_0_24px_#08FE08] group-hover:shadow-[0_0_34px_#08FE08] group-hover:scale-110 transition-all duration-300">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="md:w-[18px] md:h-[18px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
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
    </section>
  );
}