"use client";

import { motion } from "framer-motion";

export default function About() {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="w-full bg-background">

      {/* Section 1: Text Left, Image Right */}
      <div className="py-16 md:py-24 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center w-full">

          {/* Text Content */}
          <motion.div
            className="p-10 md:p-16"
            
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              About KAYA Foundation
            </h2>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              Founded with a vision to create lasting change, KAYA Foundation is dedicated to empowering
              underprivileged communities across rural India.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              The New Mercy Life Foundation is a humanitarian charity organization that primarily builds educational institutions for the poor in underprivileged rural areas of South India.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              We work closely with local communities to create sustainable, long-term impact.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            className="relative w-80 h-80 md:w-[480px] md:h-[480px] md:ml-8 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <img
              src="/indian-families-in-rural-community-smiling-togethe.jpg"
              alt="KAYA Foundation community"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </div>
      </div>

      {/* Section 2: Image Left, Text Right */}
      <div className="py-16 md:py-24 w-full bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center w-full">

          {/* Image */}
          <motion.div
            className="relative w-80 h-80 md:w-[480px] md:h-[480px] md:mr-8 mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <img
              src="/healthcare-workers-helping-indian-children-with-nu.jpg"
              alt="KAYA Foundation children"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="p-10 md:p-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission & Vision
            </h2>

            <p className="text-lg text-gray-600 mb-4 leading-relaxed">
              KAYA Foundation aims to provide quality education and basic amenities to underprivileged children, fostering growth and opportunities for a better future.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Through community engagement, sustainable programs, and dedicated volunteers, we strive to create lasting positive impact.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Join us in our mission to empower communities and transform lives across India.
            </p>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
