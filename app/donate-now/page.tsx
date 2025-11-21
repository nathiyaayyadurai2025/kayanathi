"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function DonateNowPage() {
  const [isReadyForNext, setIsReadyForNext] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-6">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/" className="text-gray-100 hover:text-white transition">
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 md:py-16">
        {/* Banner Image */}
        <div className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-lg mb-12">
          <img
            src="/hero1.jpg"
            alt="Support KAYA Foundation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-balance">Support KAYA Foundation</h1>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-6 mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Your donation directly transforms the lives of underprivileged children, families, and communities across
            rural India. Every contribution, no matter the size, makes a tangible difference in providing education,
            healthcare, and food assistance to those who need it most.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            When you donate to KAYA Foundation, you're not just giving money—you're investing in hope, opportunity, and
            sustainable development. You're helping children attend school, families access medical care, and
            communities build a better future for themselves. We ensure every rupee is used responsibly and
            transparently to maximize impact.
          </p>

          <p className="text-lg text-gray-700 leading-relaxed">
            Join thousands of donors who have chosen to make a difference. Your generosity creates ripples of change
            that will inspire generations to come. Together, we can transform lives and build a more equitable society.
          </p>
        </div>

        {/* Next Button */}
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition"
          >
            Back
          </Link>
          <Link
            href="/donate-now/payment"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary-dark transition"
          >
            Continue to Payment
            <ChevronRight size={20} />
          </Link>
        </div>
      </div>
    </main>
  )
}
