"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";

// const projects = [
//   {
//     name: "Portfolio Website",
//     description: "A personal portfolio built with Next.js and Tailwind CSS.",
//   },
//   {
//     name: "E-commerce Store",
//     description:
//       "An online store with shopping cart, product pages, and Stripe payment integration.",
//   },
//   {
//     name: "Blog Platform",
//     description:
//       "A markdown-based blog with dynamic routing and SEO-friendly structure.",
//   },
// ];

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
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (src) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);

  const images = ["/Project-1.JPG", "/Project-2.JPG", "/Project-3.JPG"];
  return (
    <main className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="shadow-sm sticky top-0 z-50 transition">
        <nav className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between lg:items-center px-4 lg:px-6 py-4 gap-4 lg:gap-0">
          <ul className="flex flex-wrap justify-center lg:justify-start space-x-4 lg:space-x-6 text-sm lg:text-base">
            <li>
              <Link
                href="/"
                className="bg-primary px-3 py-1 rounded hover:bg-primary/80"
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
            className="border px-3 py-1 rounded text-sm hover:bg-gray-100 dark:hover:bg-transparent transition cursor-pointer"
          >
            {!isDark ? "☀️ Light" : "🌙 Dark"}
          </button>
        </nav>
      </header>

      {/* Projects Section */}
      <section className="flex-1 px-4 lg:px-6 py-16 w-full max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {images.map((src, index) => (
            <Image
              key={index}
              width={500}
              height={500}
              src={src}
              alt={`Project-${index + 1}`}
              className="rounded-lg shadow-md transition-transform duration-300 hover:scale-105 cursor-pointer"
              onClick={() => openModal(src)}
            />
          ))}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center"
            onClick={closeModal}
          >
            <div className="relative">
              <Image
                src={selectedImage}
                alt="Enlarged project"
                width={1000}
                height={1000}
                className="rounded-lg shadow-lg max-w-full max-h-[90vh]"
              />
              <button
                className="absolute top-2 right-2 text-white text-3xl font-bold cursor-pointer"
                onClick={closeModal}
              >
                &times;
              </button>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-gray-500 mt-10">
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
