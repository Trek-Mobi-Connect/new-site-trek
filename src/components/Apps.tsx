"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Apps() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apps" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div ref={ref} className="rounded-2xl bg-[#FAFAFA] px-8 py-10 grid gap-10 md:grid-cols-2">
          {/* Imagens (esquerda) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative order-first min-h-[380px]"
          >
            {/* globo verde de fundo */}
            <Image
              src="/app-section-1.png"
              alt=""
              fill
              className="object-contain pointer-events-none select-none -left-10 top-[-40px]"
              sizes="(min-width: 768px) 560px, 100vw"
            />

            {/* mockup dos apps */}
            <Image
              src="/app-section-2.png"
              alt="Apps preview"
              width={560}
              height={380}
              className="relative z-10 mx-auto mt-6 w-[520px] max-w-full h-auto"
              priority
            />
          </motion.div>

          {/* Texto (direita) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="order-last"
          >
            <h2 className="text-[36px] font-[700] text-black">Apps</h2>

            <p className="mt-4 text-[18px] font-[500] text-black">
              Beyond our websites, we have developed a wide range of mobile applications covering various topics and functionalities.
            </p>

            <div className="mt-4 space-y-4 text-[16px] font-[400] leading-relaxed text-[#1A1A1A]">
              <p>
                Each app is built with the same principles: delivering quality, relevance, and a touch of fun. From informative tools to
                entertainment-focused experiences, our apps aim to make users' lives easier, more informed, and more enjoyable.
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
        </div>
      </div>
    </section>
  );
}