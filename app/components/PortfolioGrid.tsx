"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Digital Wallet Platform",
    description: "Comprehensive mobile wallet solution with multi-currency support",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Payments",
  },
  {
    id: 2,
    title: "Trading Dashboard",
    description: "Real-time trading interface with advanced analytics and charting",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Trading",
  },
  {
    id: 3,
    title: "Lending Platform",
    description: "AI-powered loan origination and management system",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Lending",
  },
  {
    id: 4,
    title: "Compliance Suite",
    description: "Automated KYC/AML compliance and monitoring tools",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Compliance",
  },
  {
    id: 5,
    title: "Investment App",
    description: "User-friendly investment platform with robo-advisory features",
    imageUrl: "/placeholder.svg?height=600&width=800",
    category: "Investment",
  },
  {
    id: 6,
    title: "Banking Core System",
    description: "Modern core banking platform built for digital-first institutions",
    imageUrl: "/placeholder.svg?height=800&width=600",
    category: "Banking",
  },
]

const categories = ["All", ...new Set(projects.map((project) => project.category))]

export default function PortfolioGrid() {
  const [filter, setFilter] = useState("All")

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Our Products</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Innovative fintech solutions designed to transform financial services.
          </p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-background rounded-3xl shadow-lg overflow-hidden hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.imageUrl || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <motion.div
                    className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-white text-center px-4">{project.description}</p>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="text-sm font-medium text-primary mb-1">{project.category}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                  <a
                    href="https://www.flowersandsaints.com.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center"
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
