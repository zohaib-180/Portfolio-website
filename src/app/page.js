"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
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
    <main className="flex flex-col min-h-screen bg-primary   transition-colors duration-300">
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

      {/* Hero Section */}
      <section className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Hi, I&apos;m Malik Zohaib
            </h1>
            <p className="text-lg md:text-xl mb-8">
              A professional Graphic Designer, web developer (React JS & Next
              JS), Shopify developer & Digital Marketer.
            </p>
            <Link
              href="/projects"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              View My Work
            </Link>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              height={500}
              width={500}
              src="/profile-pic.jpeg" // Replace with your actual image
              alt="Malik Zohaib"
              className="w-full  max-w-sm mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" mt-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} . All rights reserved.</p>
          <div className="mt-2 md:mt-0 flex space-x-4">
            <a
              href="mailto:your-email@example.com"
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
