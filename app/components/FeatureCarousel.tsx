"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";

const features = [
  {
    title: "Reduce Transaction Costs",
    description:
      "Cut payment processing fees by up to 60% with our optimized routing algorithms and direct bank integrations.",
    benefits: [
      "Lower processing fees",
      "Real-time cost analytics",
      "Automated fee optimization",
      "Multi-currency support",
    ],
    image: "/placeholder.svg?height=400&width=600",
    // icon: "💰",
  },
  {
    title: "Accelerate Time-to-Market",
    description:
      "Launch financial products 10x faster with our pre-built APIs and compliance-ready infrastructure.",
    benefits: [
      "Pre-built financial APIs",
      "Regulatory compliance included",
      "Rapid deployment tools",
      "24/7 technical support",
    ],
    image: "/placeholder.svg?height=400&width=600",
    // icon: "🚀",
  },
  {
    title: "Enhanced Security & Compliance",
    description:
      "Bank-grade security with automated compliance monitoring across all major financial regulations.",
    benefits: [
      "256-bit encryption",
      "SOC 2 Type II certified",
      "Automated KYC/AML",
      "Real-time fraud detection",
    ],
    image: "/placeholder.svg?height=400&width=600",
    // icon: "🛡️",
  },
];

export default function FeatureCarousel() {
  const [width, setWidth] = useState(0);
  const [selectedFeature, setSelectedFeature] = useState<number | null>(null);
  const carousel = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const controls = useAnimation();

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);

  return (
    <div className="py-20  bg-gradient-to-b from-background to-secondary/20">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">
          Why Choose AmanEx
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Transform your financial operations with our comprehensive suite of
          benefits designed for modern businesses.
        </p>

        <motion.div ref={carousel} className="cursor-grab overflow-hidden ">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            animate={controls}
            style={{ x }}
            // onDragEnd={handleDragEnd}
            className="flex"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="min-w-[400px] h-[600px] p-6 m-4 bg-background rounded-3xl shadow-lg flex flex-col hover-lift transition-all duration-300 ease-in-out border-2 border-transparent hover:border-primary/10 cursor-pointer"
                onClick={() =>
                  setSelectedFeature(selectedFeature === index ? null : index)
                }
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative h-48 mb-6 rounded-2xl overflow-hidden">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full p-3">
                    <span className="text-2xl">{feature.icon}</span>
                  </div> */}
                </div>

                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-1">
                    {feature.description}
                  </p>

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: selectedFeature === index ? "auto" : 0,
                      opacity: selectedFeature === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-border">
                      <h4 className="font-semibold text-foreground mb-2">
                        Key Benefits:
                      </h4>
                      <ul className="space-y-1">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li
                            key={benefitIndex}
                            className="text-sm text-muted-foreground flex items-center"
                          >
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>

                  <div className="mt-4 pt-4">
                    <span className="text-primary hover:underline text-sm font-medium">
                      {selectedFeature === index ? "Show less" : "Learn more"} →
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
