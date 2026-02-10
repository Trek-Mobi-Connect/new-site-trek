"use client";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-20">
        {/* Container principal */}
        <div className="grid gap-12 md:grid-cols-3 mb-8">
          {/* Logo e tagline */}
          <div className="flex flex-col items-center gap-5">
            <Image
              src="/logo-trek-vertical.svg"
              alt="Trek Mobi"
              width={140}
              height={84}
              className="w-[140px] h-auto"
            />
            <p className="text-[16px] font-medium leading-6 text-[#F5F5F5] text-center max-w-[240px]">
              Connecting the World Through Content and Technology
            </p>
          </div>

          {/* Social Media */}
          <div className="flex flex-col gap-5 px-2.5 py-5">
            <h3 className="text-[20px] font-bold text-white text-center">
              Social Media
            </h3>

            <Link
              href="https://instagram.com/trekmobi"
              target="_blank"
              className="flex items-center justify-center gap-2.5 hover:opacity-80 transition"
            >
              <Image
                src="/icon-insta.png"
                alt="Instagram"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-[18px] font-medium leading-6">
                @trekmobi
              </span>
            </Link>

            <Link
              href="https://linkedin.com/company/trekmobi"
              target="_blank"
              className="flex items-center justify-center gap-2.5 hover:opacity-80 transition"
            >
              <Image
                src="/icon-linkedin.png"
                alt="LinkedIn"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-[18px] font-medium leading-6">
                linkedin.com/trekmobi
              </span>
            </Link>

            <Link
              href="https://facebook.com/trekmobi"
              target="_blank"
              className="flex items-center justify-center gap-2.5 hover:opacity-80 transition"
            >
              <Image
                src="/icon-facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-[18px] font-medium leading-6">
                facebook.com/trekmobi
              </span>
            </Link>
          </div>

          {/* Categories Menu */}
          <div className="flex flex-col gap-5 px-2.5 py-5 text-center">
            <h3 className="text-[20px] font-bold text-white">Categories</h3>

            <Link
              href="#about"
              className="text-[18px] font-medium leading-6 hover:opacity-80 transition"
            >
              About Us
            </Link>

            <Link
              href="#websites"
              className="text-[18px] font-medium leading-6 hover:opacity-80 transition"
            >
              Our Websites
            </Link>

            <Link
              href="#apps"
              className="text-[18px] font-medium leading-6 hover:opacity-80 transition"
            >
              Our Apps
            </Link>

            <Link
              href="#contact"
              className="text-[18px] font-medium leading-6 hover:opacity-80 transition"
            >
              Contact
            </Link>

            <Link
              href="#careers"
              className="text-[18px] font-medium leading-6 hover:opacity-80 transition"
            >
              Careers
            </Link>

            <Link
              href="/privacy-policy"
              className="text-[18px] font-medium leading-6 hover:opacity-80 transition"
            >
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="w-full h-px bg-white/20 mb-8" />

        {/* Copyright */}
        <p className="text-[18px] font-medium leading-6 text-[#F5F5F5] text-center">
          Copyright © {currentYear} Trek Mobi. All rights reserved.
        </p>
      </div>
    </footer>
  );
}