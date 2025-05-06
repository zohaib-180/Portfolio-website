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
      <header className=" h-[60px] shadow-sm sticky top-0 z-50">
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
              <Link href="/services" className="hover:text-blue-600">
                Services
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
      <section className="relative  flex-1 flex items-center justify-center  overflow-hidden">
        {/* Background Video */}
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/banner.mp4" type="video/mp4" />
        </video> */}

        {/* Content */}
        <div className="relative h-[calc(100vh-120px)]  w-full flex flex-col items-center gap-10 bg-[url('/banner.jpg')] bg-cover bg-center bg-no-repeat p-10">
          {/* Text Section */}
          <div className="h-full text-center md:text-left text-white flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Hi, I&apos;m Malik Zohaib
            </h1>
            <p className="text-lg md:text-xl mr-30 mb-8">
              A professional Graphic Designer, Front-end developer (React JS &
              Next JS), Shopify developer & Digital Marketer.
            </p>
            <div>
              <Link
                href="/projects"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
              >
                View My Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-gray-500 text-sm w-full h-[60px]">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
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
