"use client";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="bg-white pt-16 md:pt-20">
      <div className="mx-auto max-w-6xl px-4 py-20 grid gap-12 md:grid-cols-2">
        <div className="flex items-center justify-center">
          <Image src="/about-us.svg" alt="About Trek Mobi" width={720} height={560} className="w-full h-auto" />
        </div>

        <div>
          <h2 className="text-[36px] font-[700] text-black">About Us</h2>
          <h3 className="mt-3 text-[18px] font-[600] text-black">
            Trek Mobi is a digital media company founded with the mission to share engaging and relevant content across the globe.
          </h3>

          <div className="mt-5 space-y-4 text-[16px] font-normal leading-relaxed text-[#1A1A1A]">
            <p>
              We started our journey creating websites that deliver information, technology news, and curiosity-driven content to diverse audiences.
              Over time, our expertise expanded to developing mobile applications for multiple niches — always with the same core philosophy:
              to provide quality, relevant, and enjoyable experiences.
            </p>
            <p>
              Today, Trek Mobi reaches millions of users in more than 100 countries, delivering trustworthy content and entertainment while
              keeping user experience at the heart of everything we do.
            </p>
          </div>

          <Link
            href="#"
            className="mt-8 inline-flex items-center rounded-full border border-[#08FE08] pl-4 pr-16 h-12 relative group"
          >
            <span className="text-black font-medium">Read More</span>
            <span className="absolute right-0 top-1/2 -translate-y-1/2 mr-0.5 h-12 w-12 rounded-full bg-[#08FE08] grid place-items-center shadow-[0_0_24px_#08FE08] group-hover:scale-105 transition">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M7 17L17 7M17 7H8M17 7V16" stroke="#000" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
