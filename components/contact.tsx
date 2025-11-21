"use client";

import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  function handleChange(e: any) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function handleSubmit(e: any) {
    e.preventDefault();
    console.log("Form submitted", formData);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  }

  return (
    <section className="py-12 bg-[#F6FFF7]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-[#E7FFE8]/50 rounded-2xl p-10 shadow-lg border border-[#C8FBD0] relative">
            <div className="absolute -top-5 left-8">
            </div>
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-3">
  <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E7FFE8] border border-[#A6F2B2] text-xl">🍃</span>
  Send Us a Message
</h3>
            <p className="text-gray-700 mb-6">We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-5 shadow-md p-4 bg-white/50 rounded-lg">
                <div>
                  <label className="text-sm font-semibold">Your Name *</label>
                  <input name="name" value={formData.name} onChange={handleChange} className="mt-2 w-full px-4 py-3 rounded-md border border-[#C1E9C5]" placeholder="John Doe" />
                </div>
                <div>
                  <label className="text-sm font-semibold">Your Email *</label>
                  <input name="email" value={formData.email} onChange={handleChange} className="mt-2 w-full px-4 py-3 rounded-md border border-[#C1E9C5]" placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5 shadow-md p-4 bg-white/50 rounded-lg">
                <div>
                  <label className="text-sm font-semibold">Phone Number *</label>
                  <input name="phone" value={formData.phone} onChange={handleChange} className="mt-2 w-full px-4 py-3 rounded-md border border-[#C1E9C5]" placeholder="+91 9944309785" />
                </div>
                <div>
                  <label className="text-sm font-semibold">Subject *</label>
                  <select name="subject" value={formData.subject} onChange={handleChange} className="mt-2 w-full px-4 py-3 rounded-md border border-[#C1E9C5]">
                    <option value="">Select a subject</option>
                    <option>General Inquiry</option>
                    <option>Donation Support</option>
                    <option>Volunteer Request</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold">Your Message *</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} className="mt-2 w-full px-4 py-3 rounded-md border border-[#C1E9C5]" placeholder="How can we help you?"></textarea>
              </div>

              <button type="submit" className="px-6 py-3 bg-green-600 text-white rounded-lg inline-flex items-center gap-2">
                <Send size={18} /> Send Message
              </button>
            </form>
          </div>

          <div className="bg-white rounded-2xl p-10 shadow-lg border border-green-200">
            <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-3">
              <span className="w-12 h-12 flex items-center justify-center rounded-full bg-[#E7FFE8] border border-[#A6F2B2]">🍃</span>
              Get in Touch
            </h3>
            <p className="text-gray-700 mb-6">Feel free to reach out to us with any questions or inquiries. We're here to help and would love to hear from you.</p>

            <div className="space-y-6">
  <div className="flex gap-4 items-start transform transition-transform duration-300 hover:translate-x-2">
    <MapPin className="w-12 h-12 p-3 text-green-600 bg-[#E7FFE8] border-2 border-[#A6F2B2] rounded-full" />
    <div>
      <p className="font-semibold">Our Address</p>
      <p className="text-gray-700">
        New Mercy Life Foundation, Puducherry, Tamil Nadu 605107
      </p>
    </div>
  </div>

  <div className="flex gap-4 items-start transform transition-transform duration-300 hover:translate-x-2">
    <Phone className="w-12 h-12 p-3 text-green-600 bg-[#E7FFE8] border-2 border-[#A6F2B2] rounded-full" />
    <div>
      <p className="font-semibold">Phone Number</p>
      <p className="text-gray-700">+91 9944309785</p>
    </div>
  </div>

  <div className="flex gap-4 items-start transform transition-transform duration-300 hover:translate-x-2">
    <Mail className="p-3 w-12 h-12 text-green-600 bg-[#E7FFE8] rounded-full border-2 border-[#A6F2B2]" />
    <div>
      <p className="font-semibold">Email Address</p>
      <p className="text-gray-700">nmlf63@live.com</p>
    </div>
  </div>

  <div className="flex gap-4 items-start transform transition-transform duration-300 hover:translate-x-2">
    <Clock className="w-12 h-12 p-3 text-green-600 bg-[#E7FFE8] rounded-full border-2 border-[#A6F2B2]" />
    <div>
      <p className="font-semibold">Working Hours</p>
      <p className="text-gray-700">
        Monday - Saturday: 9:00 AM – 6:00 PM
        <br />
        Sunday: Closed
      </p>
    </div>
  </div>
</div>

           <div className="mt-8">
  <p className="font-semibold mb-5">Connect With Us</p>
  <div className="flex gap-5">
    {[Facebook, Instagram, Twitter, Youtube].map((Icon, i) => (
      <div
        key={i}
        className="
          w-10 h-10 bg-[#E7FFE8] border border-[#9BEC9D] 
          rounded-full flex items-center justify-center text-green-700
          transition-transform transition-colors duration-300 ease-in-out
          hover:scale-110 hover:bg-green-500
        "
      >
        <Icon size={18} />
      </div>
    ))}
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
