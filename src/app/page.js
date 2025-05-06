"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

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
    <main className="flex flex-col h-screen overflow-hidden bg-primary transition-colors duration-300">
      {/* Header */}
      <header className="h-[60px] shadow-sm sticky top-0 z-50 bg-primary">
        <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <ul className="flex space-x-4 lg:space-x-8">
            {["/", "/about", "/services", "/projects", "/contact"].map(
              (path, i) => (
                <li key={i}>
                  <Link href={path} className="transition-colors">
                    {path === "/"
                      ? "Home"
                      : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
                  </Link>
                </li>
              )
            )}
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
      <section className="relative flex-1 flex items-center justify-center overflow-hidden">
        <div className="relative h-[calc(100vh-120px)] w-full flex items-center justify-center bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat px-6 lg:px-20">
          {/* Text Section */}
          <div className="text-center lg:text-left text-white max-w-3xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
              Hi, I&apos;m Malik Zohaib
            </h1>
            <p className="text-lg lg:text-2xl mb-8 mr-44">
              A professional Graphic Designer, Front-end developer (React JS &
              Next JS), Shopify developer & Digital Marketer.
            </p>
            <Link
              href="/projects"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              View My Work
            </Link>
            <div className="flex space-x-4 text-3xl pt-5 ml-3.5">
              <a
                href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
                aria-label="Email"
              >
                <Icon icon="mdi:email" />
              </a>
              <a
                href="https://github.com/zohaib-180"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Icon icon="mdi:github" />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Icon icon="mdi:linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-gray-500 text-sm w-full h-[60px]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
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
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
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
