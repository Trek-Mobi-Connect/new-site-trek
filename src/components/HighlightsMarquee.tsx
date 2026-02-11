"use client";

const HIGHLIGHTS = [
  "50+ Managed Websites",
  "Apps in Multiple Categories",
  "Content in 100+ Countries",
  "Millions of Monthly Users",
];

export default function HighlightsMarquee() {
  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="highlights-marquee-wrapper overflow-hidden">
          <div className="highlights-marquee inline-flex whitespace-nowrap">
            {[0, 1, 2, 3].map((copy) => (
              <div key={copy} className="flex items-center shrink-0">
                {HIGHLIGHTS.map((text, i) => (
                  <div key={`${copy}-${i}`} className="flex items-center shrink-0">
                    <span className="text-[16px] font-medium text-[#A0A0A0] whitespace-nowrap px-4">
                      {text}
                    </span>
                    <span
                      className="inline-block w-[10px] h-[10px] bg-[#08FE08] shrink-0"
                      style={{ transform: "rotate(45deg)" }}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .highlights-marquee-wrapper {
          -webkit-mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
          mask-image: linear-gradient(
            to right,
            transparent 0%,
            black 15%,
            black 85%,
            transparent 100%
          );
        }
        @keyframes highlights-scroll {
          0% { transform: translateX(0) translateZ(0); }
          100% { transform: translateX(-50%) translateZ(0); }
        }
        .highlights-marquee {
          animation: highlights-scroll 30s linear infinite;
          will-change: transform;
        }
      `}</style>
    </section>
  );
}