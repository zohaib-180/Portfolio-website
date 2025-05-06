"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

export default function About() {
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-4">
          <ul className="flex space-x-4 lg:space-x-6 text-sm lg:text-base">
            <li>
              <Link
                href="/"
                className="bg-primary hover:bg-primary/80 px-3 py-1 rounded"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="">
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setIsDark(!isDark)}
            className="border px-3 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            {!isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </header>

      {/* About Section */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-12 py-20 lg:py-32 max-w-6xl mx-auto gap-10">
        {/* Image Section */}
        <div className="lg:w-1/2">
          <Image
            height={500}
            width={500}
            src="/profile-pic.jpeg"
            alt="Malik Zohaib"
            className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl font-bold">About</h1>
          <p className="text-lg">
            I’m a passionate developer who enjoys turning complex problems into
            simple, beautiful solutions.
          </p>
          <p className="text-lg">
            I specialize in Graphic Designing, web development (React JS & Next
            JS), Shopify development & Digital Marketing. I love crafting clean
            UI and performant web apps that make a difference.
          </p>
          <p className="text-lg">
            Outside of coding, I enjoy learning new tech, designing side
            projects, and contributing to open-source communities.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-gray-500 text-sm w-full mt-auto">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} . All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex space-x-4 text-2xl">
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              className="hover:text-white"
            >
              <Icon icon="mdi:email" />
            </a>
            <a
              href="https://github.com/zohaib-180"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Icon icon="mdi:github" />
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <Icon icon="mdi:linkedin" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
