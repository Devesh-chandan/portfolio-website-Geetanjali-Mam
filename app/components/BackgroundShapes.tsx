"use client";
import React from "react";
import { motion } from "framer-motion";

const BackgroundShapes = () => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Top Left Blob */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-20 -left-20 w-96 h-96 bg-brand-blue/10 blur-[100px] rounded-full"
      />

      {/* Right Accent Blob */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [0, -40, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 -right-20 w-[500px] h-[500px] bg-blue-400/5 blur-[120px] rounded-full"
      />

      {/* Bottom Left Grid Texture (Subtle) */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[length:40px_40px] opacity-[0.03] animate-pulse" />
    </div>
  );
};

export default BackgroundShapes;