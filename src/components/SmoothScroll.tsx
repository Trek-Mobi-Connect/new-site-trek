"use client";
import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

/*
  npm install lenis
*/

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<any>(null);

  /* ── Progress bar ── */
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    let raf: number;

    async function init() {
      const Lenis = (await import("lenis")).default;

      const lenis = new Lenis({
        /* ── Modo nativo: usa scrollTo ao invés de transform no body ── */
        /* Isso evita repaint de toda a página a cada frame */
        duration: 0.8,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
        touchMultiplier: 1.2,
        infinite: false,
        /* Não aplica transform — usa scroll nativo suavizado */
        autoResize: true,
      });

      lenisRef.current = lenis;

      function onFrame(time: number) {
        lenis.raf(time);
        raf = requestAnimationFrame(onFrame);
      }

      raf = requestAnimationFrame(onFrame);
    }

    init();

    return () => {
      cancelAnimationFrame(raf);
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <>
      {/* ── Progress bar fixa no topo ── */}
      <motion.div
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-[#08FE08] z-[9999] will-change-transform"
      />

      {/* ── Glow da progress bar ── */}
      <motion.div
        style={{ scaleX: smoothProgress, transformOrigin: "0%" }}
        className="fixed top-0 left-0 right-0 h-[6px] bg-[#08FE08]/40 blur-[4px] z-[9998] will-change-transform"
      />

      {children}
    </>
  );
}