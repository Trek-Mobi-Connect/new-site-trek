"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Websites() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="websites" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div ref={ref} className="rounded-2xl bg-[#FAFAFA] px-8 py-10 grid gap-10 md:grid-cols-2">
          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="order-2 md:order-1"
          >
            <h2 className="text-[36px] font-[700] text-black">Websites</h2>

            <p className="mt-4 text-[18px] font-[500] text-black">
              We manage over 50 websites, all developed, maintained, and operated entirely by our team.
            </p>

            <div className="mt-4 space-y-4 text-[16px] font-[400] leading-relaxed text-[#1A1A1A]">
              <p>
                Our content reaches more than 100 countries and millions of users every month. We focus on
                producing high-quality, viral, and engaging articles that resonate with audiences worldwide.
              </p>
              <p>
                At Trek Mobi, monetization is fair and transparent. We ensure ads do not compromise navigation
                speed or user experience, keeping our platforms honest, fluid, and accessible to everyone.
              </p>
            </div>

            <Link
              href="#"
              className="mt-6 inline-flex items-center rounded-full border border-[#08FE08] pl-4 pr-16 h-11 relative group"
            >
              <span className="text-black text-[18px] font-semibold">Read More</span>
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-[#08FE08] grid place-items-center shadow-[0_0_18px_#08FE08] group-hover:scale-105 transition">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Imagens */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="relative order-1 md:order-2"
          >
            <motion.div style={{ y }}>
              <Image
                src="/website-section-1.png"
                alt=""
                width={520}
                height={420}
                className="absolute right-0 top-0 w-[520px] h-auto pointer-events-none select-none"
                priority
              />
            </motion.div>
            <Image
              src="/website-section-2.png"
              alt="Websites preview"
              width={560}
              height={380}
              className="relative z-10 mx-auto w-[560px] h-auto"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}