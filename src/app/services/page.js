// app/services/page.tsx
"use client";

import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    title: "Graphic Design",
    description:
      "Creative designs for branding, social media, and marketing materials.",
    icon: "mdi:palette",
  },
  {
    title: "Web Development",
    description:
      "Responsive and modern websites using HTML, CSS, JavaScript, React & Next js.",
    icon: "mdi:code-tags",
  },
  {
    title: "Shopify Setup",
    description: "Professional Shopify store setup and customization.",
    icon: "simple-icons:shopify",
  },
  {
    title: "Digital Marketing",
    description:
      "social media campaigns, and paid advertising to grow your brand online.",
    icon: "mdi:bullhorn-outline",
  },
];

export default function ServicesPage() {
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

      {/* Services Section */}
      <div className="mt-10 px-20">
        <h1 className="text-4xl font-bold text-center mb-10">My Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-blue-200 p-6 rounded-2xl shadow hover:shadow-lg transition cursor-pointer"
            >
              <Icon
                icon={service.icon}
                className="text-indigo-600 w-8 h-8 mb-4"
              />
              <h2 className="text-xl text-black font-semibold mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] text-gray-500 text-sm w-full absolute bottom-0 left-0">
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
