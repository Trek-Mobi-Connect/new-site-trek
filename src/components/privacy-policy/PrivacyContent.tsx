"use client";
import Image from "next/image";

export default function PrivacyContent() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-start justify-between gap-16">
          {/* Conteúdo texto (esquerda) */}
          <div className="flex flex-col gap-8 max-w-[624px]">
            {/* Header */}
            <div className="flex flex-col gap-3">
              <h1 className="text-[48px] font-bold leading-tight text-black">
                Privacy Policy
              </h1>
              <p className="text-[14px] font-normal text-[#404040]">
                Effective Date: [Insert Date]
              </p>
              <p className="text-[18px] font-medium leading-6 text-[#404040]">
                At Trek Mobi, we respect your privacy and are committed to
                protecting your personal information. This Privacy Policy
                applies to all of our websites, mobile applications, and
                services, regardless of how you access them.
              </p>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Item 1 */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] font-normal text-[#1A1A1A]">
                1. Information We Collect
              </h2>
              <ul className="list-disc pl-7 text-[18px] font-normal leading-6 text-[#404040] space-y-2">
                <li>
                  Personal Information: Name, email address, and other contact
                  details when voluntarily provided by you (e.g., newsletter
                  sign-ups, contact forms).
                </li>
                <li>
                  Non-Personal Information: Device type, browser type, IP
                  address, operating system, language preference, and browsing
                  behavior.
                </li>
                <li>
                  Cookies & Tracking Technologies: We use cookies and similar
                  tools to improve user experience, analyze traffic, and serve
                  relevant ads.
                </li>
              </ul>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Item 2 */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] font-normal text-[#1A1A1A]">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-7 text-[18px] font-normal leading-6 text-[#404040] space-y-2">
                <li>To provide, maintain, and improve our websites and apps.</li>
                <li>To deliver personalized content and advertisements.</li>
                <li>To respond to your inquiries, comments, or feedback.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Item 3 */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] font-normal text-[#1A1A1A]">
                3. Advertising and Third-Party Services
              </h2>
              <p className="text-[18px] font-normal leading-6 text-[#404040]">
                Our websites and apps may display ads from third-party networks
                such as Google AdSense. These partners may use cookies or
                similar tracking tools to deliver targeted advertising. You can
                opt out of personalized ads through your device or browser
                settings.
              </p>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Item 4 */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] font-normal text-[#1A1A1A]">
                4. Data Protection and Security
              </h2>
              <p className="text-[18px] font-normal leading-6 text-[#404040]">
                We implement reasonable security measures to protect your
                information from unauthorized access, alteration, disclosure, or
                destruction.
              </p>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Item 5 */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] font-normal text-[#1A1A1A]">
                5. User Rights
              </h2>
              <p className="text-[18px] font-normal leading-6 text-[#404040]">
                Depending on your location, you may have the right to access,
                update, delete, or restrict the processing of your personal
                data. To exercise these rights, contact us at privacy@trek.mobi.
              </p>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Item 6 */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] font-normal text-[#1A1A1A]">
                6. Children's Privacy
              </h2>
              <p className="text-[18px] font-normal leading-6 text-[#404040]">
                Our services are not directed to children under the age of 13
                (or under 16 in certain jurisdictions), and we do not knowingly
                collect their personal information.
              </p>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Item 7 */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] font-normal text-[#1A1A1A]">
                7. Changes to This Policy
              </h2>
              <p className="text-[18px] font-normal leading-6 text-[#404040]">
                We may update this Privacy Policy from time to time. The updated
                version will be posted on this page with the revised effective
                date.
              </p>
            </div>

            <hr className="border-t border-gray-300" />

            {/* Item 8 */}
            <div className="flex flex-col gap-3">
              <h2 className="text-[24px] font-normal text-[#1A1A1A]">
                8. Contact Us
              </h2>
              <p className="text-[18px] font-normal leading-6 text-[#404040]">
                If you have any questions about this Privacy Policy or our
                practices, please contact us at:
              </p>
              <a
                href="mailto:privacy@trek.mobi"
                className="text-[18px] font-normal leading-6 text-[#338BFF] underline hover:opacity-80 transition"
              >
                privacy@trek.mobi
              </a>
              <p className="text-[18px] font-normal leading-6 text-[#404040]">
                — Trek Mobi
              </p>
            </div>
          </div>

          {/* Ilustração (direita) */}
          <div className="relative w-[620px] h-[419px] shrink-0">
            <Image
              src="/privacy-policy.png"
              alt="Privacy Policy Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}