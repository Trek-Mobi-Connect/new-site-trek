"use client";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useRef, useCallback } from "react";
import type { Variants } from "framer-motion";

const EASE_SMOOTH: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];
const SPRING_SOFT = { stiffness: 40, damping: 25, mass: 1 };

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

const lineGrow: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, delay: 0.3, ease: "easeOut" },
  },
};

export default function Websites() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const rawScrollY = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const smoothScrollY = useSpring(rawScrollY, SPRING_SOFT);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, SPRING_SOFT);
  const springY = useSpring(mouseY, SPRING_SOFT);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      mouseX.set(x * 16);
      mouseY.set(y * 12);
    },
    [mouseX, mouseY]
  );

  return (
    <section id="websites" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <motion.div
          ref={sectionRef}
          onMouseMove={handleMouseMove}
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative overflow-hidden rounded-2xl bg-[#FAFAFA] px-8 py-10 grid gap-10 md:grid-cols-2"
        >
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-[#08FE08]/8 blur-[90px]" />

          <div className="order-2 md:order-1 flex flex-col justify-center">
            <motion.div variants={fadeUp} className="relative flex items-center gap-3">
              <motion.span
                variants={lineGrow}
                style={{ originX: 0 }}
                className="hidden md:block h-[3px] w-10 rounded-full bg-[#08FE08]"
              />
              <h2 className="text-[36px] font-[700] text-black">Websites</h2>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-[18px] font-[500] text-black"
            >
              We manage over 50 websites, all developed, maintained, and operated
              entirely by our team.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-4 space-y-4 text-[16px] font-[400] leading-relaxed text-[#1A1A1A]"
            >
              <p>
                Our content reaches more than 100 countries and millions of users
                every month. We focus on producing high-quality, viral, and
                engaging articles that resonate with audiences worldwide.
              </p>
              <p>
                At Trek Mobi, monetization is fair and transparent. We ensure ads
                do not compromise navigation speed or user experience, keeping our
                platforms honest, fluid, and accessible to everyone.
              </p>
            </motion.div>

            <motion.div variants={fadeUp}>
              <Link
                href="#"
                className="mt-6 inline-flex items-center rounded-full border border-[#08FE08] pl-4 pr-16 h-11 relative group overflow-hidden"
              >
                <span className="absolute inset-0 bg-[#08FE08]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

                <span className="relative text-black text-[18px] font-semibold">
                  Read More
                </span>

                <span className="absolute right-0 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-[#08FE08] grid place-items-center shadow-[0_0_18px_#08FE08] group-hover:shadow-[0_0_30px_#08FE08] transition-shadow duration-300">
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

          <motion.div
            variants={scaleIn}
            className="relative order-1 md:order-2"
          >
            <motion.div
              style={{ y: smoothScrollY, x: springX, willChange: "transform" }}
            >
              <Image
                src="/website-section-1.png"
                alt=""
                width={520}
                height={420}
                className="absolute right-0 top-0 w-[520px] h-auto pointer-events-none select-none"
                priority
              />
            </motion.div>

            <div className="relative z-10 websites-float">
              <Image
                src="/website-section-2.png"
                alt="Websites preview"
                width={560}
                height={380}
                className="mx-auto w-[560px] h-auto drop-shadow-2xl"
                priority
              />
            </div>

            <style jsx>{`
              @keyframes websites-float {
                0%, 100% { transform: translateY(0) translateZ(0); }
                50% { transform: translateY(-8px) translateZ(0); }
              }
              .websites-float {
                animation: websites-float 5s cubic-bezier(0.37, 0, 0.63, 1) infinite;
              }
            `}</style>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}