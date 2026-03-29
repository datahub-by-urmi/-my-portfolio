"use client"

import Link from "next/link"
import { motion } from "framer-motion"

interface ProjectDetailsProps {
  id: number
  title: string
  image: string
  description: string
  link: string
}

export const ProjectDetails = ({ id, title, image, link }: ProjectDetailsProps) => {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className="group block">
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="relative h-[480px] w-full min-w-[320px] md:min-w-[360px] lg:min-w-[420px] overflow-hidden bg-[#1a1a1a] flex flex-col border border-white/5"
      >
        {/* Top 75% Image Area */}
        <div className="relative h-[70%] w-full overflow-hidden bg-[#f0f0f0] flex items-center justify-center p-4">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
            draggable={false}
          />
        </div>

        {/* Bottom 25% Content Area */}
        <div className="flex h-[25%] flex-col justify-between p-6">
          <div>
            <h3 className="text-3xl font-bold leading-tight text-white group-hover:underline decoration-4 underline-offset-4 decoration-primary">
              {title}
            </h3>
            <div className="h-1 w-12 bg-primary mt-2 rounded-full" />
          </div>

          <div className="flex items-center justify-between">
            <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-gray-400 group-hover:text-primary transition-colors">
              View on GitHub
            </p>
            <span className="text-2xl text-primary transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </div>
        </div>
      </motion.article>
    </Link>
  )
}
