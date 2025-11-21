import Link from "next/link";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Heart,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white">
      {/* ---------------- GIVE US A HAND SECTION ---------------- */}
      <section className="bg-gradient-to-r from-green-700 via-green-500 to-green-400 text-center py-25 px-6">
        <h2 className="text-4xl font-bold mb-4">GIVE US A HAND</h2>
        <p className="text-lg mb-8">
          Support us and change the course of a child's life today!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            href="/donate-now"
            className="flex items-center gap-2 bg-white text-green-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-100 transition"
          >
            <Heart size={20} />
            Donate Now
          </Link>

        <Link
  href="#contact"
  className="flex items-center gap-2 border border-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition"
>
  🤝 Join Our Mission
</Link>
        </div>
      </section>

      {/* ---------------- FOOTER CONTENT ---------------- */}
      <div className="bg-green-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* About */}
           <div>
  <div className="flex items-center gap-3 mb-4">
    {/* LOGO HERE */}
    <img
      src="/logo.png"   // ← replace with your real logo path
      alt="Kaya Foundation Logo"
      className="h-16 w-16 rounded-full object-cover"
    />

    <h3 className="text-xl font-bold">KAYA Foundation</h3>  
  </div>

  <p className="text-gray-200 text-sm leading-relaxed">
    Transforming lives through education, healthcare, and rural
    development initiatives across India.
  </p>
</div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-200">
                <li><a href="#home" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#what-we-do" className="hover:text-white">What We Do</a></li>
                <li><a href="#donate" className="hover:text-white">Donate</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <ul className="space-y-3 text-sm text-gray-200">
                <li className="flex items-start gap-2">
                  <MapPin size={18} />
                  Puducherry, Tamil Nadu, India
                </li>
                <li className="flex items-center gap-2">
                  <Phone size={18} />
                  +91 9876543210
                </li>
                <li className="flex items-center gap-2">
                  <Mail size={18} />
                  info@kayafoundation.org
                </li>
              </ul>
            </div>

            {/* Support Us */}
            <div>
              <h4 className="font-bold mb-4">Support Us</h4>
              <p className="text-gray-200 text-sm mb-4">
                Help us change a child's life today!
              </p>

              <Link
                href="/donate-now"
                className="flex items-center gap-2 bg-white text-green-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              >
                <Heart size={20} />
                Donate Now
              </Link>
            </div>
          </div>

          {/* ---------------- SOCIAL ICONS ---------------- */}
          <div className="mt-12 flex items-center justify-center gap-4">
            <a className="w-10 h-10 bg-white/20 hover:bg-white/30 flex items-center justify-center rounded-full transition">
              <Facebook size={20} />
            </a>
            <a className="w-10 h-10 bg-white/20 hover:bg-white/30 flex items-center justify-center rounded-full transition">
              <Twitter size={20} />
            </a>
            <a className="w-10 h-10 bg-white/20 hover:bg-white/30 flex items-center justify-center rounded-full transition">
              <Linkedin size={20} />
            </a>
            <a className="w-10 h-10 bg-white/20 hover:bg-white/30 flex items-center justify-center rounded-full transition">
              <Instagram size={20} />
            </a>
          </div>

          {/* ---------------- COPYRIGHT ---------------- */}
          <div className="text-center text-sm text-gray-300 mt-12">
            © {currentYear} KAYA Foundation — Transforming lives together.
          </div>
        </div>
      </div>
    </footer>
  );
}
