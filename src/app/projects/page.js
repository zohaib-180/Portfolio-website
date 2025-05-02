"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const projects = [
  {
    name: "Portfolio Website",
    description: "A personal portfolio built with Next.js and Tailwind CSS.",
  },
  {
    name: "E-commerce Store",
    description:
      "An online store with shopping cart, product pages, and Stripe payment integration.",
  },
  {
    name: "Blog Platform",
    description:
      "A markdown-based blog with dynamic routing and SEO-friendly structure.",
  },
];

export default function Projects() {
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
      <header className=" shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="bg-primary hover:bg-primary/80">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-600">
                About
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-blue-600">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600">
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setIsDark(!isDark)}
            className="border px-3 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-transparent transition cursor-pointer"
          >
            {!isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </header>

      {/* Projects Section */}
      <section className="flex-1 px-6 py-16 w-full mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center">
          <Image
            width={500}
            height={500}
            src="/Project-1.JPG"
            alt="Project-1"
            className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
          <Image
            width={500}
            height={500}
            src="/Project-2.JPG"
            alt="Project-2"
            className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
          <Image
            width={500}
            height={500}
            src="/Project-3.JPG"
            alt="Project-3"
            className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} . All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <a
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              className="hover:text-white"
            >
              Email
            </a>
            <a
              href="https://github.com/zohaib-180"
              target="_blank"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              className="hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
