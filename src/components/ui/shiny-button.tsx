"use client";

import { cn } from "@/lib/utils";
import { motion, type MotionProps } from "motion/react";
import React from "react";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop" as const,
    repeatDelay: 1,
    type: "spring" as const,
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring" as const,
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} satisfies MotionProps;

interface ShinyButtonProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps>,
    MotionProps {
  children: React.ReactNode;
  className?: string;
}

export const ShinyButton = React.forwardRef<
  HTMLButtonElement,
  ShinyButtonProps
>(({ children, className, ...props }, ref) => {
  return (
    <motion.button
      ref={ref}
      className={cn(
        "min-w-fit inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm",
        "ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:pointer-events-none disabled:opacity-50",
        "gap-2 border-0 outline-0",
        "transform transition-transform ease-in-out active:scale-95 active:-translate-y-[-0.015rem]",
        "group/button",
        "bg-[#5865F2] hover:bg-[#4752c4]",
        "dark:bg-gradient-to-bl dark:from-[#0E1C33] dark:to-[#1a2f4a] dark:hover:bg-gradient-to-bl dark:hover:from-[#132642] dark:hover:to-[#1f3555]",
        "text-white font-medium",
        "px-4 md:px-6 py-2 md:py-3",
        "relative overflow-hidden group cursor-pointer",
        className,
      )}
      {...animationProps}
      {...props}
    >
      <div className="absolute inset-0  opacity-0 group-hover:opacity-10 transition-opacity duration-300 ease-in-out" />
      
      <span
        className="relative block size-full text-xs md:text-sm uppercase tracking-wide text-white dark:text-white z-10"
        style={{
          maskImage:
            "linear-gradient(-75deg, white calc(var(--x) + 20%), transparent calc(var(--x) + 30%), white calc(var(--x) + 100%))",
        }}
      >
        {children}
      </span>
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          WebkitMask:
            "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box exclude,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          backgroundImage:
            "linear-gradient(-75deg, rgba(255,255,255,0.1) calc(var(--x) + 20%), rgba(255,255,255,0.5) calc(var(--x) + 25%), rgba(255,255,255,0.1) calc(var(--x) + 100%))",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] p-px"
      />
    </motion.button>
  );
});

ShinyButton.displayName = "ShinyButton";