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

      {/* Projects Section */}
      <section className="flex-1 px-6 py-16 w-full mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Projects</h1>
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start justify-center">
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
                  width={800}
                  height={800}
                  className="rounded-lg shadow-lg max-w-full max-h-[90vh]"
                />
                <button
                  className="absolute top-2 right-2 text-white text-3xl font-bold"
                  onClick={closeModal}
                >
                  &times;
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-gray-500 mt-10">
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
