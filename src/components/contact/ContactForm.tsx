"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
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

export default function ContactForm() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white py-20">
      <motion.div
        ref={sectionRef}
        variants={container}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="mx-auto max-w-6xl px-4"
      >
        <div className="grid gap-16 md:grid-cols-2">
          {/* Conteúdo esquerdo - Informações de contato */}
          <div className="flex flex-col gap-4">
            <motion.h1
              variants={fadeUp}
              className="text-[48px] font-bold leading-tight text-black"
            >
              Get in Touch
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[20px] font-medium text-[#404040]"
            >
              We welcome suggestions, feedback, or any inquiries about our work.
            </motion.p>

            {/* E-mail */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mt-2">
              <Image
                src="/icon-mail.png"
                alt="Email"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <p className="text-[18px] font-normal leading-6 text-[#1A1A1A]">
                Email:{" "}
                <a
                  href="mailto:contact@trek.mobi"
                  className="underline hover:text-[#08FE08] transition"
                >
                  contact@trek.mobi
                </a>
              </p>
            </motion.div>

            {/* Redes sociais */}
            <motion.div variants={fadeUp} className="flex flex-col gap-3 mt-4">
              <p className="text-[18px] font-normal leading-6 text-[#404040]">
                You can also connect with us through our social media channels.
              </p>

              {/* Instagram */}
              <div className="flex items-center gap-3">
                <Image
                  src="/icon-insta.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <a
                  href="https://instagram.com/trekmobi"
                  target="_blank"
                  className="text-[18px] font-medium leading-6 text-[#1A1A1A] hover:text-[#08FE08] transition"
                >
                  @trekmobi
                </a>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-3">
                <Image
                  src="/icon-linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <a
                  href="https://linkedin.com/company/trekmobi"
                  target="_blank"
                  className="text-[18px] font-medium leading-6 text-[#1A1A1A] hover:text-[#08FE08] transition"
                >
                  linkedin.com/trekmobi
                </a>
              </div>

              {/* Facebook */}
              <div className="flex items-center gap-3">
                <Image
                  src="/icon-facebook.png"
                  alt="Facebook"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                />
                <a
                  href="https://facebook.com/trekmobi"
                  target="_blank"
                  className="text-[18px] font-medium leading-6 text-[#1A1A1A] hover:text-[#08FE08] transition"
                >
                  facebook.com/trekmobi
                </a>
              </div>
            </motion.div>
          </div>

          {/* Formulário de contato (direita) */}
          <motion.div
            variants={fadeUp}
            className="bg-black rounded-2xl p-8 flex flex-col gap-8"
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Campo Nome */}
              <div className="border-b border-[#F5F5F5] py-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent text-[16px] font-medium text-[#F5F5F5] placeholder-[#F5F5F5] outline-none"
                  required
                />
              </div>

              {/* Campo E-mail */}
              <div className="border-b border-[#F5F5F5] py-5">
                <input
                  type="email"
                  placeholder="Your best e-mail"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent text-[16px] font-medium text-[#F5F5F5] placeholder-[#F5F5F5] outline-none"
                  required
                />
              </div>

              {/* Campo Mensagem */}
              <div className="border-b border-[#F5F5F5] py-5">
                <textarea
                  placeholder="Type your message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={3}
                  className="w-full bg-transparent text-[16px] font-medium text-[#F5F5F5] placeholder-[#F5F5F5] outline-none resize-none"
                  required
                />
              </div>
            </form>

            {/* Botão Enviar com hover sweep */}
            <button
              onClick={handleSubmit}
              className="relative overflow-hidden bg-[#08FE08] border border-[#08FE08] px-5 py-2 rounded-full text-[20px] font-semibold text-black shadow-[0_8px_16px_rgba(8,254,8,0.4)] hover:shadow-[0_0_28px_#08FE08] hover:scale-105 transition-all duration-300 group"
            >
              <span className="absolute inset-0 bg-white/15 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full" />
              <span className="relative">Send Message</span>
            </button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}