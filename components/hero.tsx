"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

const images = [
  "/hero1.jpg",
  "/hero2.jpg",
  "/hero3.jpg",
];

// Stats for each slide
const stats = [
  { count: "100+", label: "Eco-Projects" },
  { count: "100+", label: "Eco-Projects" },
  { count: "2888+", label: "Lives Impacted" },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentStat = stats[currentIndex];

  return (
    <section className="relative w-full h-screen overflow-hidden flex items-center">
      
      {/* Background Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="Hero background"
            className={`
              absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms]
              ${index === currentIndex ? "opacity-100" : "opacity-0"}
            `}
          />
        ))}
      </div>

      {/* Green Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a9b46]/70 to-[#0a9b46]/30" />

      {/* Text Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-[#9fffc7]">Nurture</span> the environment, nurture lives
          </h1>

          <p className="text-white/90 text-lg md:text-xl mb-10">
            We’re committed to sustainable practices that protect our planet while improving 
            the lives of children in need.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link
              href="/donate-now"
              className="bg-white text-green-600 px-7 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-lg hover:bg-gray-100 transition"
            >
              <Heart size={18} /> Donate Now
            </Link>

            <Link
              href="#what-we-do"
              className="bg-green-600 text-white px-7 py-3 rounded-full font-semibold inline-flex items-center gap-2 shadow-md hover:bg-green-700 transition"
            >
              Learn More <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side Dynamic Stats */}
      <div className="absolute right-6 top-1/3 z-20 space-y-4">

        {/* Card 1 (constant) */}
        <div className="bg-white rounded-xl p-5 shadow-lg w-48">
          <p className="text-green-700 font-bold text-xl">25,000+</p>
          <p className="text-gray-600 text-sm">Trees Planted</p>
        </div>

        {/* Card 2 (changes based on slide) */}
        <div className="bg-white rounded-xl p-5 shadow-lg w-48 transition-all duration-700">
          <p className="text-green-700 font-bold text-xl">{currentStat.count}</p>
          <p className="text-gray-600 text-sm">{currentStat.label}</p>
        </div>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-8 w-full flex justify-center z-20">
        <div className="flex gap-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
