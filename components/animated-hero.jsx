"use client"

import { useEffect, useState } from "react"
import { BookOpen, FileText, GraduationCap, Search } from "lucide-react"
import { motion } from "framer-motion"

export function AnimatedHero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative h-64 md:h-80 w-full max-w-3xl mx-auto">
      {/* Background circle */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary/10"
        initial={{ scale: 0.8, x: "-50%", y: "-50%", opacity: 0 }}
        animate={{ scale: 1, x: "-50%", y: "-50%", opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />

      {/* Logo in center */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="flex items-center justify-center p-4 bg-primary rounded-full shadow-lg">
          <BookOpen className="h-12 w-12 text-primary-foreground" />
        </div>
        <motion.div
          className="text-center mt-4 text-2xl md:text-3xl font-bold"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          SnuSpace
        </motion.div>
      </motion.div>

      {/* Floating icons */}
      <motion.div
        className="absolute top-1/4 left-1/4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3, ease: "easeInOut" }}
        >
          <div className="p-3 bg-background shadow-md rounded-full">
            <FileText className="h-6 w-6 text-primary" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-1/3"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "easeInOut", delay: 0.5 }}
        >
          <div className="p-3 bg-background shadow-md rounded-full">
            <GraduationCap className="h-6 w-6 text-primary" />
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.5 }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 3.5, ease: "easeInOut", delay: 1 }}
        >
          <div className="p-3 bg-background shadow-md rounded-full">
            <Search className="h-6 w-6 text-primary" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
