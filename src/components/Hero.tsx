"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  useInView,
  easeOut,
} from "framer-motion";
import { useRef, useEffect, useState, useCallback } from "react";

/* ─── Counter animado ─── */
function AnimatedCounter({
  target,
  suffix = "",
  duration = 2,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

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
      {count}
      {suffix}
    </span>
  );
}

/* ─── Partículas flutuantes ao redor do globo ─── */
function FloatingDots() {
  const dots = [
    { size: 6, x: "10%", y: "20%", delay: 0, duration: 5 },
    { size: 4, x: "85%", y: "15%", delay: 1.2, duration: 4.5 },
    { size: 5, x: "75%", y: "75%", delay: 0.8, duration: 5.5 },
    { size: 3, x: "15%", y: "80%", delay: 2, duration: 4 },
    { size: 4, x: "50%", y: "5%", delay: 0.5, duration: 6 },
    { size: 5, x: "90%", y: "50%", delay: 1.5, duration: 5 },
    { size: 3, x: "5%", y: "50%", delay: 0.3, duration: 4.8 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0">
      {dots.map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#08FE08]"
          style={{
            width: dot.size,
            height: dot.size,
            left: dot.x,
            top: dot.y,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 0.7, 0.4, 0.7, 0],
            scale: [0.5, 1, 0.8, 1, 0.5],
            y: [0, -15, 5, -10, 0],
          }}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* ── Parallax do globo acompanhando o mouse ── */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const globeX = useSpring(useTransform(mouseX, [-600, 600], [-18, 18]), {
    stiffness: 60,
    damping: 18,
  });
  const globeY = useSpring(useTransform(mouseY, [-400, 400], [-14, 14]), {
    stiffness: 60,
    damping: 18,
  });
  const globeRotate = useSpring(useTransform(mouseX, [-600, 600], [-4, 4]), {
    stiffness: 60,
    damping: 18,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left - rect.width / 2);
      mouseY.set(e.clientY - rect.top - rect.height / 2);
    },
    [mouseX, mouseY]
  );

  /* ── Stagger variants ── */
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: easeOut },
    },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: easeOut },
    },
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative bg-white text-black overflow-hidden"
    >
      {/* ── Gradient de fundo animado ── */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        animate={{
          background: [
            "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(8,254,8,0.06) 0%, transparent 70%)",
            "radial-gradient(ellipse 70% 60% at 45% 5%, rgba(8,254,8,0.09) 0%, transparent 70%)",
            "radial-gradient(ellipse 60% 50% at 55% 0%, rgba(8,254,8,0.06) 0%, transparent 70%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative mx-auto max-w-6xl px-4 pt-8 md:pt-16 pb-12 md:pb-20 text-center"
      >
        {/* ─── Globo com parallax + floating + partículas ─── */}
        <motion.div variants={scaleIn} className="relative inline-block">
          {/* Glow atrás do globo */}
          <div className="pointer-events-none absolute inset-0 m-auto h-[200px] w-[200px] md:h-[280px] md:w-[280px] rounded-full bg-[#08FE08]/8 blur-[80px]" />

          <FloatingDots />

          <motion.div
            style={{ x: globeX, y: globeY, rotate: globeRotate }}
            animate={{ y: [0, -10, 0] }}
            transition={{
              y: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <Image
              src="/banner-hero.svg"
              alt="Globe illustration"
              width={472}
              height={325}
              priority
              className="relative z-10 mx-auto h-auto w-[280px] md:w-[472px] max-w-full drop-shadow-[0_20px_40px_rgba(8,254,8,0.12)]"
            />
          </motion.div>
        </motion.div>

        {/* ─── Título com reveal ─── */}
        <motion.h1
          variants={fadeUp}
          className="mt-6 md:mt-8 font-[700] text-[32px] md:text-[48px] leading-[1.2] md:leading-tight px-4 md:px-0"
        >
          Connecting the World Through{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Content</span>

          </span>{" "}
          and{" "}
          <span className="relative inline-block">
            <span className="relative z-10">Technology</span>
            <motion.span
              className="absolute bottom-1 left-0 h-3 w-full bg-[#08FE08]/25 -z-0 rounded-sm"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.3, ease: "easeOut" }}
              style={{ originX: 0 }}
            />
          </span>
        </motion.h1>

        {/* ─── Subtítulo ─── */}
        <motion.p
          variants={fadeUp}
          className="mt-4 md:mt-4 text-[16px] md:text-[18px] font-normal text-black/70 max-w-[340px] md:max-w-3xl mx-auto leading-relaxed"
        >
          We create websites and apps that inspire, inform, and entertain
          millions of people in over 100 countries.
        </motion.p>

        {/* ─── CTAs com hover effects ─── */}
        <motion.div
          variants={fadeUp}
          className="mt-8 md:mt-10 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-4"
        >
          {/* Botão primário com glow pulsante */}
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="relative"
          >
            {/* Glow pulse atrás do botão */}
            <motion.div
              className="absolute inset-0 rounded-full bg-[#08FE08]/40 blur-xl"
              animate={{ opacity: [0.4, 0.7, 0.4], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <Button className="relative h-12 md:h-11 rounded-full px-10 md:px-6 bg-[#08FE08] text-black hover:bg-[#08FE08] text-[16px] md:text-[18px] font-semibold shadow-[0_0_20px_rgba(8,254,8,0.3)] hover:shadow-[0_0_30px_rgba(8,254,8,0.5)] transition-shadow duration-300">
              Learn More
            </Button>
          </motion.div>

          {/* Botão secundário */}
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="outline"
              className="h-12 md:h-11 rounded-full px-10 md:px-6 border-black/20 text-black hover:bg-black/5 hover:border-black/40 text-[16px] md:text-[14px] font-semibold transition-all duration-300"
            >
              Explore Our Apps
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}