"use client";
import Image from "next/image";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você configurará o envio do formulário depois
    console.log("Form submitted:", formData);
  };

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Conteúdo esquerdo - Informações de contato */}
          <div className="flex flex-col gap-4">
            <h1 className="text-[48px] font-bold leading-tight text-black">
              Get in Touch
            </h1>

            <p className="text-[20px] font-medium text-[#404040]">
              We welcome suggestions, feedback, or any inquiries about our work.
            </p>

            {/* E-mail */}
            <div className="flex items-center gap-3 mt-2">
              <Image
                src="/icon-mail.png"
                alt="Email"
                width={32}
                height={32}
                className="w-8 h-8"
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
            </div>

            {/* Redes sociais */}
            <div className="flex flex-col gap-3 mt-4">
              <p className="text-[18px] font-normal leading-6 text-[#404040]">
                You can also connect with us through our social media channels.
              </p>

              {/* Instagram */}
              <div className="flex items-center gap-3">
                <Image
                  src="/icon-insta.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8"
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
                  width={32}
                  height={32}
                  className="w-8 h-8"
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
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <a
                  href="https://facebook.com/trekmobi"
                  target="_blank"
                  className="text-[18px] font-medium leading-6 text-[#1A1A1A] hover:text-[#08FE08] transition"
                >
                  facebook.com/trekmobi
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de contato (direita) */}
          <div className="bg-black p-8 flex flex-col gap-8">
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

            {/* Botão Enviar */}
            <button
              onClick={handleSubmit}
              className="bg-[#08FE08] border border-[#08FE08] px-5 py-2 rounded-full text-[20px] font-semibold text-black shadow-[0_8px_16px_rgba(8,254,8,0.4)] hover:scale-105 transition"
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}