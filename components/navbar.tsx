"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Heart } from "lucide-react";

interface NavbarProps {
  scrollY: number;
}

export default function Navbar({ scrollY }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = scrollY > 50;

  return (
   <nav
  className={`font-sans fixed top-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-white text-black shadow-lg"
      : "bg-gradient-to-r from-[#0BA145] to-[#0A7E38] text-white"
  }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="KAYA NGO Logo"
    className="h-16 w-16 rounded-full object-cover"
  />

  {/* Title + Tagline stacked like image */}
  <div className="flex flex-col leading-tight">
  <span className={`text-xl font-heading font-bold tracking-wide ${isScrolled ? "text-black" : "text-white"}`}>
  KAYA Foundation
</span>

 <span className="block text-sm font-sans opacity-90 -mt-1">
  Together, we make the Earth greener
</span>
</div>
</Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#home"
              className={`transition ${
                isScrolled ? "hover:text-green-700" : "hover:text-green-200"
              }`}
            >
              Home
            </Link>

            <Link
              href="#about"
              className={`transition ${
                isScrolled ? "hover:text-green-700" : "hover:text-green-200"
              }`}
            >
              About
            </Link>

            <Link
              href="#what-we-do"
              className={`transition ${
                isScrolled ? "hover:text-green-700" : "hover:text-green-200"
              }`}
            >
              What We Do
            </Link>

            {/* 🔥 Donate (NO DROPDOWN) */}
            <Link
              href="#donate"
              className={`transition ${
                isScrolled ? "hover:text-green-700" : "hover:text-green-200"
              }`}
            >
              Donate
            </Link>

            <Link
              href="#contact"
              className={`transition ${
                isScrolled ? "hover:text-green-700" : "hover:text-green-200"
              }`}
            >
              Contact
            </Link>

            {/* Donate Now Button */}
            <Link
              href="/donate-now"
              className={`px-7 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg transition
                ${
                  isScrolled
                    ? "bg-green-600 text-white hover:bg-green-700"
                    : "bg-white text-green-700 hover:bg-gray-100"
                }`}
            >
              <Heart size={18} />
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-black" : "text-white"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>
    </nav>
  );
}
