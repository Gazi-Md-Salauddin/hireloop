import Link from "next/link";
import {
  LogoFacebook,
  LogoLinkedin,
  LogoGithub,
} from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo & Description */}
        <section>
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-600 text-white font-bold">
              H
            </div>

            <div>
              <h2 className="text-xl font-bold">
                Hire<span className="text-violet-500">Loop</span>
              </h2>

              <p className="text-xs text-gray-400">
                AI Hiring Platform
              </p>
            </div>
          </Link>

          <p className="mt-6 max-w-sm leading-8 text-gray-400">
            The AI-native career platform. Built for people who
            take their work seriously.
          </p>

          {/* Social Icons */}
          <div className="mt-10 flex items-center gap-4">
            <Link
              href="#"
              className="rounded-xl bg-white/5 p-3 transition hover:bg-violet-600"
            >
              <LogoFacebook width={22} height={22} />
            </Link>

            <Link
              href="#"
              className="rounded-xl bg-violet-600 p-3 transition hover:bg-violet-500"
            >
              <LogoGithub width={22} height={22} />
            </Link>

            <Link
              href="#"
              className="rounded-xl bg-white/5 p-3 transition hover:bg-violet-600"
            >
              <LogoLinkedin width={22} height={22} />
            </Link>
          </div>
        </section>

        {/* Product */}
        <section>
          <h3 className="mb-6 text-lg font-semibold text-violet-500">
            Product
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">
            <Link href="/jobs" className="hover:text-white">
              Job Discovery
            </Link>

            <Link href="/ai-tools" className="hover:text-white">
              Worker AI
            </Link>

            <Link href="/companies" className="hover:text-white">
              Companies
            </Link>

            <Link href="/salary" className="hover:text-white">
              Salary Data
            </Link>
          </div>
        </section>

        {/* Navigation */}
        <section>
          <h3 className="mb-6 text-lg font-semibold text-violet-500">
            Navigations
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">
            <Link href="/help-center" className="hover:text-white">
              Help Center
            </Link>

            <Link href="/career-library" className="hover:text-white">
              Career Library
            </Link>

            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </section>

        {/* Resources */}
        <section>
          <h3 className="mb-6 text-lg font-semibold text-violet-500">
            Resources
          </h3>

          <div className="flex flex-col gap-4 text-gray-400">
            <Link href="/brand-guideline" className="hover:text-white">
              Brand Guideline
            </Link>

            <Link href="/newsroom" className="hover:text-white">
              Newsroom
            </Link>

            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
          </div>
        </section>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-gray-500 md:flex-row">

          <p>
            Copyright © 2026 HireLoop. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <Link href="/terms" className="hover:text-white">
              Terms & Policy
            </Link>

            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer