import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-DvrL36R1.js";
import { l as logo, A as AnimatePresence, L as Link, B as Button } from "./router-cmB6lsK2.js";
import { m as motion, P as PageTransition } from "./PageTransition-C_Rzy0KH.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const fireplace = "/assets/hero-bg-C0qkUAfF.jpg";
const SMOKE_COUNT = 8;
const EMBER_COUNT = 22;
function HeroIntro({ onEnter }) {
  const smokes = reactExports.useMemo(
    () => Array.from({ length: SMOKE_COUNT }, (_, i) => ({
      id: i,
      delay: i * 0.9,
      duration: 9 + Math.random() * 4,
      size: 180 + Math.random() * 140,
      startY: 30 + Math.random() * 40,
      // % from top, near fireplace mid
      endY: 10 + Math.random() * 30
    })),
    []
  );
  const embers = reactExports.useMemo(
    () => Array.from({ length: EMBER_COUNT }, (_, i) => ({
      id: i,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 4,
      size: 2 + Math.random() * 4,
      startY: 40 + Math.random() * 35,
      endY: 15 + Math.random() * 35,
      drift: -10 + Math.random() * 20
    })),
    []
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.8, ease: "easeInOut" },
      className: "fixed inset-0 z-[100] overflow-hidden bg-background",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 1.05 },
            animate: { opacity: 1, scale: 1 },
            transition: { duration: 1.6, ease: "easeOut" },
            className: "absolute inset-y-0 right-0 w-[55%] sm:w-[50%]",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: fireplace,
                  alt: "Forge fireplace",
                  className: "h-full w-full object-cover object-left"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-l from-transparent via-background/30 to-background" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/40" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0", children: smokes.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 0, y: 0, scale: 0.6 },
            animate: {
              opacity: [0, 0.35, 0.25, 0],
              x: ["0vw", "-45vw"],
              y: [`${s.startY}vh`, `${s.endY}vh`],
              scale: [0.6, 1.4, 1.8]
            },
            transition: {
              duration: s.duration,
              delay: s.delay,
              repeat: Infinity,
              ease: "easeOut"
            },
            style: {
              width: s.size,
              height: s.size,
              left: "60%",
              top: 0,
              background: "radial-gradient(circle, oklch(0.55 0.02 260 / 0.5) 0%, transparent 70%)",
              filter: "blur(28px)"
            },
            className: "absolute rounded-full"
          },
          `smoke-${s.id}`
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0", children: embers.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 0, y: 0 },
            animate: {
              opacity: [0, 1, 0.8, 0],
              x: ["0vw", `${-40 + e.drift}vw`],
              y: [`${e.startY}vh`, `${e.endY}vh`]
            },
            transition: {
              duration: e.duration,
              delay: e.delay,
              repeat: Infinity,
              ease: "easeOut"
            },
            style: {
              width: e.size,
              height: e.size,
              left: "62%",
              top: 0,
              background: "oklch(0.78 0.22 50)",
              boxShadow: "0 0 6px oklch(0.78 0.22 50), 0 0 12px oklch(0.65 0.2 45 / 0.8)"
            },
            className: "absolute rounded-full ember-flicker"
          },
          `ember-${e.id}`
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-[6%] sm:ml-[10%] flex flex-col items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.button,
            {
              type: "button",
              onClick: onEnter,
              initial: { opacity: 0, scale: 0.85 },
              animate: {
                opacity: 1,
                scale: 1
              },
              transition: { duration: 1.2, delay: 0.4, ease: "easeOut" },
              whileHover: { scale: 1.04 },
              whileTap: { scale: 0.97 },
              className: "group relative cursor-pointer",
              "aria-label": "Enter Forge5 Designs",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    animate: {
                      opacity: [0.5, 0.9, 0.5],
                      scale: [1, 1.08, 1]
                    },
                    transition: {
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    },
                    className: "absolute inset-0 -z-10 rounded-full blur-3xl",
                    style: {
                      background: "radial-gradient(circle, oklch(0.75 0.18 75 / 0.5) 0%, transparent 65%)"
                    }
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "img",
                  {
                    src: logo,
                    alt: "Forge5 Designs",
                    className: "h-48 w-auto sm:h-72 lg:h-96 transition-all group-hover:drop-shadow-[0_0_30px_oklch(0.75_0.18_75/0.7)]",
                    style: {
                      filter: "drop-shadow(0 0 18px oklch(0.75 0.18 75 / 0.45)) drop-shadow(0 0 40px oklch(0.65 0.2 45 / 0.3))"
                    }
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.p,
            {
              initial: { opacity: 0, y: 8 },
              animate: { opacity: 0.6, y: 0 },
              transition: { duration: 1, delay: 2.2 },
              className: "mt-8 font-heading text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground",
              children: "Click to Enter"
            }
          )
        ] }) })
      ]
    }
  );
}
const logoCinematic = "/assets/forge5-logo-cinematic-CHjvmKYL.png";
const services = [{
  icon: "🔨",
  title: "Brand Identity",
  description: "Logo, colors, type, and a brand guide that puts you on the same level as the big outfits — because your work already is."
}, {
  icon: "🚛",
  title: "Vehicle Wraps & Signage",
  description: "Your truck is your best salesperson. We make sure it looks the part — sharp, clean, and impossible to ignore."
}, {
  icon: "📱",
  title: "Digital Presence",
  description: "A solid website, dialed-in social templates, and business cards people actually keep. The foundation of getting found and getting hired."
}];
const testimonials = [{
  quote: "Forge5 built us a brand that matches the quality of our work. Three new clients mentioned the truck wrap in the first month.",
  name: "Mike Tran",
  role: "Owner, Tran Electric"
}, {
  quote: "I used to hand out plain white cards. Now clients hold onto them. Best money I've spent on this business.",
  name: "Sarah Chen",
  role: "Chen Plumbing & HVAC"
}, {
  quote: "No fluff, no jargon. Just a brand that works as hard as I do. That's exactly what I needed.",
  name: "Dave Kowalski",
  role: "Kowalski Concrete"
}];
function Index() {
  const [hasEntered, setHasEntered] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: !hasEntered && /* @__PURE__ */ jsxRuntimeExports.jsx(HeroIntro, { onEnter: () => setHasEntered(true) }, "intro") }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "noise-bg relative flex min-h-[90vh] items-center overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.img, { src: logoCinematic, alt: "Forge5 Designs", className: "h-full w-full object-cover", width: 1920, height: 1080, initial: {
            opacity: 0,
            scale: 1.1
          }, animate: hasEntered ? {
            opacity: 0.18,
            scale: 1
          } : {
            opacity: 0,
            scale: 1.1
          }, transition: {
            duration: 1.4,
            ease: "easeOut"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/70" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { className: "max-w-2xl", initial: {
          opacity: 0,
          y: 20
        }, animate: hasEntered ? {
          opacity: 1,
          y: 0
        } : {
          opacity: 0,
          y: 20
        }, transition: {
          duration: 0.9,
          delay: 0.4,
          ease: "easeOut"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
            opacity: 0,
            x: -20
          }, animate: hasEntered ? {
            opacity: 1,
            x: 0
          } : {
            opacity: 0,
            x: -20
          }, transition: {
            duration: 0.7,
            delay: 0.5
          }, className: "mb-4 font-heading text-sm font-bold uppercase tracking-widest text-primary", children: "London, Ontario" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: {
            opacity: 0,
            y: 30
          }, animate: hasEntered ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 30
          }, transition: {
            duration: 1,
            delay: 0.7,
            ease: "easeOut"
          }, className: "text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-7xl", children: [
            "You built the business.",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "We'll forge the brand." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
            opacity: 0,
            y: 20
          }, animate: hasEntered ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 20
          }, transition: {
            duration: 0.8,
            delay: 1.1
          }, className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Most design studios don't know a job site from a Figma file. We do. Brand identity and digital design built for contractors, tradespeople, and blue-collar entrepreneurs." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 20
          }, animate: hasEntered ? {
            opacity: 1,
            y: 0
          } : {
            opacity: 0,
            y: 20
          }, transition: {
            duration: 0.8,
            delay: 1.4
          }, className: "mt-8 flex flex-wrap gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "forge", size: "lg", children: "Start Your Project" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portfolio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "forgeOutline", size: "lg", children: "See the Work" }) })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading text-sm font-bold uppercase tracking-widest text-primary", children: "What We Build" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-extrabold text-foreground sm:text-4xl", children: "The tools your brand needs to win work." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: services.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glow-hover group rounded-sm border border-border/50 bg-card p-6 transition-all hover:border-primary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl", children: s.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-lg font-bold text-foreground", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.description })
        ] }, s.title)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/services", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "forgeOutline", children: "View All Services" }) }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-y border-border/50 bg-surface py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading text-sm font-bold uppercase tracking-widest text-primary", children: "From the Field" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-extrabold text-foreground sm:text-4xl", children: "Don't take our word for it. Take theirs." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: testimonials.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-border/50 bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm italic leading-relaxed text-muted-foreground", children: [
            '"',
            t.quote,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 border-t border-border/50 pt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: t.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.role })
          ] })
        ] }, t.name)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "noise-bg relative overflow-hidden py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold text-foreground sm:text-4xl", children: "Your competition has a brand. Do you?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Get a free brand audit. No pitch, no pressure — just an honest look at where you stand and what it would take to sharpen up." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "forge", size: "lg", children: "Get Your Free Brand Audit" }) }) })
      ] }) })
    ] })
  ] });
}
export {
  Index as component
};
