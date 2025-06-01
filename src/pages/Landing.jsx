import React from "react";
import { motion } from "framer-motion";

export default function BlogLandingPage() {
  return (
    <div className="min-h-screen w-screen  text-[#4A4947] font-sans pt-4">


      {/* Hero Section */}
      <section className="flex justify-around px-32 py-20">
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Dive Into Words That Matter
          </h2>
          <p className="text-lg text-[#93793d]">
            Explore thoughtful articles, inspiring stories, and practical guides on lifestyle, tech, and creativity.
          </p>
          <a
            href="#blogs"
            className="inline-block bg-white text-[#4A4947] font-semibold px-6 py-3 rounded-full border border-[#4A4947]/30 shadow-md hover:bg-[#F5F5F5] hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out
"
          >
            Explore Blogs
          </a>
        </motion.div>

        <motion.img
          src="../src/assets/group.png"
          alt="Blog Hero"
          className="md:w-1/4 mb-8 md:mb-0 h-64 w-32"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </section>

      {/* Features */}
      <section id="about" className="px-8 py-20 bg-[#3E3D3B]">
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "Fresh Content",
              desc: "Updated regularly with unique articles that spark curiosity.",
              icon: "📝",
            },
            {
              title: "Easy to Read",
              desc: "Clean layouts, simple language, and smooth navigation.",
              icon: "📖",
            },
            {
              title: "Diverse Topics",
              desc: "From productivity hacks to tech trends, we cover it all.",
              icon: "🌍",
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="p-6 bg-[#4A4947] rounded-xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#cda74e]">{feature.title}</h3>
              <p className="text-sm mt-2 text-[#f0eddd]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
