import Link from "next/link"
import { Heart } from "lucide-react"

export default function DonateSection() {
  return (
    <section className="py-16 md:py-24 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">Your Support Creates Impact</h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
            Every donation, no matter the size, directly supports our initiatives and helps us reach more families in
            need. Your generosity transforms lives.
          </p>
        </div>

        {/* Impact Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {[
            { label: "Children Helped", value: "5000+" },
            { label: "Communities Reached", value: "50+" },
            { label: "Schools Supported", value: "25+" },
            { label: "Lives Transformed", value: "10000+" },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-gray-100">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/donate-now"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-md hover:bg-gray-100 transition text-lg"
          >
            <Heart size={24} />
            Donate Now
          </Link>
        </div>
      </div>
    </section>
  )
}
