"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { technicalSkills } from "@/data/technical-skills.data"

export const Skills = () => {
  return (
    <section id="skills" className="bg-[#0a0a0a] scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h2 className="mt-6 leading-[0.95] font-semibold text-white text-[42px] sm:text-[72px] md:text-[92px]">
            Data & 
            <br />
            <span className="text-primary">Analytics Expertise</span>
          </h2>

          <p className="mt-10 text-[13px] font-semibold uppercase tracking-[0.18em] text-gray-400 leading-relaxed max-w-2xl">
            Technologies I use to design, build, and ship production-ready systems.
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {technicalSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group flex flex-col items-center gap-4 text-center"
            >
              <div className="h-24 w-24 rounded-2xl bg-[#111111] border border-white/5 flex items-center justify-center p-5 group-hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-2">
                <div className="relative h-full w-full">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain opacity-80 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  />
                </div>
              </div>
              <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
