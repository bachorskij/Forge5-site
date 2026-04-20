import { motion } from "framer-motion";
import { useMemo } from "react";
import fireplace from "@/assets/hero-bg.jpg";
import logo from "@/assets/forge5-logo.png";

interface HeroIntroProps {
  onEnter: () => void;
}

// Smoke plumes drifting from fireplace (right) toward the logo (center-left)
const SMOKE_COUNT = 8;
// Embers floating across the same path with flicker
const EMBER_COUNT = 22;

export function HeroIntro({ onEnter }: HeroIntroProps) {
  const smokes = useMemo(
    () =>
      Array.from({ length: SMOKE_COUNT }, (_, i) => ({
        id: i,
        delay: i * 0.9,
        duration: 9 + Math.random() * 4,
        size: 180 + Math.random() * 140,
        startY: 30 + Math.random() * 40, // % from top, near fireplace mid
        endY: 10 + Math.random() * 30,
      })),
    [],
  );

  const embers = useMemo(
    () =>
      Array.from({ length: EMBER_COUNT }, (_, i) => ({
        id: i,
        delay: Math.random() * 6,
        duration: 4 + Math.random() * 4,
        size: 2 + Math.random() * 4,
        startY: 40 + Math.random() * 35,
        endY: 15 + Math.random() * 35,
        drift: -10 + Math.random() * 20,
      })),
    [],
  );

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] overflow-hidden bg-background"
    >
      {/* Fireplace — right side */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        className="absolute inset-y-0 right-0 w-[55%] sm:w-[50%]"
      >
        <img
          src={fireplace}
          alt="Forge fireplace"
          className="h-full w-full object-cover object-left"
        />
        {/* Vignette blending fireplace into the dark scene */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/30 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/40" />
      </motion.div>

      {/* Smoke plumes — drifting from fireplace toward logo */}
      <div className="pointer-events-none absolute inset-0">
        {smokes.map((s) => (
          <motion.div
            key={`smoke-${s.id}`}
            initial={{ opacity: 0, x: 0, y: 0, scale: 0.6 }}
            animate={{
              opacity: [0, 0.35, 0.25, 0],
              x: ["0vw", "-45vw"],
              y: [`${s.startY}vh`, `${s.endY}vh`],
              scale: [0.6, 1.4, 1.8],
            }}
            transition={{
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              width: s.size,
              height: s.size,
              left: "60%",
              top: 0,
              background:
                "radial-gradient(circle, oklch(0.55 0.02 260 / 0.5) 0%, transparent 70%)",
              filter: "blur(28px)",
            }}
            className="absolute rounded-full"
          />
        ))}
      </div>

      {/* Embers — small glowing dots floating from fireplace toward logo */}
      <div className="pointer-events-none absolute inset-0">
        {embers.map((e) => (
          <motion.div
            key={`ember-${e.id}`}
            initial={{ opacity: 0, x: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0.8, 0],
              x: ["0vw", `${-40 + e.drift}vw`],
              y: [`${e.startY}vh`, `${e.endY}vh`],
            }}
            transition={{
              duration: e.duration,
              delay: e.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
            style={{
              width: e.size,
              height: e.size,
              left: "62%",
              top: 0,
              background: "oklch(0.78 0.22 50)",
              boxShadow:
                "0 0 6px oklch(0.78 0.22 50), 0 0 12px oklch(0.65 0.2 45 / 0.8)",
            }}
            className="absolute rounded-full ember-flicker"
          />
        ))}
      </div>

      {/* Logo — center-left, clickable */}
      <div className="absolute inset-0 flex items-center">
        <div className="ml-[6%] sm:ml-[10%] flex flex-col items-center">
          <motion.button
            type="button"
            onClick={onEnter}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group relative cursor-pointer"
            aria-label="Enter Forge5 Designs"
          >
            <motion.div
              animate={{
                opacity: [0.5, 0.9, 0.5],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 -z-10 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, oklch(0.75 0.18 75 / 0.5) 0%, transparent 65%)",
              }}
            />
            <img
              src={logo}
              alt="Forge5 Designs"
              className="h-48 w-auto sm:h-72 lg:h-96 transition-all group-hover:drop-shadow-[0_0_30px_oklch(0.75_0.18_75/0.7)]"
              style={{
                filter:
                  "drop-shadow(0 0 18px oklch(0.75 0.18 75 / 0.45)) drop-shadow(0 0 40px oklch(0.65 0.2 45 / 0.3))",
              }}
            />
          </motion.button>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 0.6, y: 0 }}
            transition={{ duration: 1, delay: 2.2 }}
            className="mt-8 font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground"
          >
            Click to Enter
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}
