"use client"

import Link from "next/link"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function PaymentPage() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text)
    setCopiedText(label)
    setTimeout(() => setCopiedText(null), 2000)
  }

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
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-balance">Payment Methods</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* UPI Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">UPI Payment</h2>

            {/* UPI QR Placeholder */}
            <div className="bg-secondary rounded-lg p-6 mb-6 flex items-center justify-center h-56">
              <img src="/qrcode.png" alt="UPI QR Code" className="w-48 h-48 object-contain" />
            </div>

            {/* UPI ID */}
            <div className="space-y-2">
              <p className="text-sm text-gray-600 font-semibold">UPI ID</p>
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value="kayafoundation@upi"
                  readOnly
                  className="flex-1 px-4 py-2 border border-secondary-dark rounded-md bg-gray-50"
                />
                <button
                  onClick={() => copyToClipboard("kayafoundation@upi", "UPI ID")}
                  className="px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition flex items-center gap-1"
                >
                  {copiedText === "UPI ID" ? <Check size={18} /> : <Copy size={18} />}
                </button>
              </div>
            </div>
          </div>

          {/* Bank Transfer Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Bank Transfer</h2>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 font-semibold mb-1">Account Holder</p>
                <p className="text-gray-700">KAYA Foundation</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 font-semibold mb-1">Bank Name</p>
                <p className="text-gray-700">State Bank of India</p>
              </div>

              <div>
                <p className="text-sm text-gray-600 font-semibold mb-1">Account Number</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value="1234567890123456"
                    readOnly
                    className="flex-1 px-4 py-2 border border-secondary-dark rounded-md bg-gray-50"
                  />
                  <button
                    onClick={() => copyToClipboard("1234567890123456", "Account Number")}
                    className="px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition flex items-center gap-1"
                  >
                    {copiedText === "Account Number" ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-600 font-semibold mb-1">IFSC Code</p>
                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value="SBIN0001234"
                    readOnly
                    className="flex-1 px-4 py-2 border border-secondary-dark rounded-md bg-gray-50"
                  />
                  <button
                    onClick={() => copyToClipboard("SBIN0001234", "IFSC Code")}
                    className="px-3 py-2 bg-primary text-white rounded-md hover:bg-primary-dark transition flex items-center gap-1"
                  >
                    {copiedText === "IFSC Code" ? <Check size={18} /> : <Copy size={18} />}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for Assistance */}
        <div className="bg-primary text-white rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
          <p className="mb-4">
            If you have any questions about donation methods or need assistance, please contact us:
          </p>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <span className="font-semibold">Phone:</span>
              <a href="tel:+918800123456" className="hover:text-gray-100 transition">
                +91 8800 123 456
              </a>
            </p>
            <p className="flex items-center gap-2">
              <span className="font-semibold">Email:</span>
              <a href="mailto:info@kayafoundation.org" className="hover:text-gray-100 transition">
                info@kayafoundation.org
              </a>
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center">
          <Link
            href="/donate-now"
            className="px-6 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition"
          >
            Back
          </Link>
          <a
            href="https://wa.me/918800123456?text=I%20want%20to%20donate%20to%20KAYA%20Foundation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 transition"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </main>
  )
}
