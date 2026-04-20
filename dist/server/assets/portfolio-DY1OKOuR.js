import { T as jsxRuntimeExports } from "./worker-entry-DvrL36R1.js";
import { L as Link, B as Button } from "./router-cmB6lsK2.js";
import { P as PageTransition } from "./PageTransition-C_Rzy0KH.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const creaseKingsImg = "/assets/crease-kings-CM6sjsQ6.png";
const triCityImg = "/assets/tri-city-D2cXxdPA.png";
const kovalforgeImg = "/assets/kovalforge-ahOjsaLx.png";
const droidwaveImg = "/assets/droidwave-DI8pzLtg.png";
const projects = [{
  title: "Crease Kings",
  industry: "Sports / Hockey",
  deliverables: "Logo, Brand Identity",
  description: "A hockey goalie brand that needed to hit as hard as the players it represents. Bold mark, crowned mask, zero subtlety. Built to own the crease.",
  image: creaseKingsImg,
  bgColor: "oklch(0.20 0.02 260)"
}, {
  title: "Tri-City Contracting",
  industry: "General Contracting",
  deliverables: "Logo, Brand Identity",
  description: "A multi-city contractor needed a mark as solid as the buildings they put up. Integrated building silhouettes in the letterforms. Clean, strong, unmistakable.",
  image: triCityImg,
  bgColor: "oklch(0.95 0.01 90)"
}, {
  title: "Kovalforge",
  industry: "Gaming / Esports",
  deliverables: "Logo, Brand Identity",
  description: "Old-world craft meets modern edge. Gold, fire, and a shield emblem that feels earned. This identity wasn't designed — it was forged.",
  image: kovalforgeImg,
  bgColor: "oklch(0.12 0.01 80)"
}, {
  title: "DroidWave",
  industry: "Tech / Streaming",
  deliverables: "Logo, Brand Identity",
  description: "A tech streaming platform that needed to stand out in a sea of generic. Circuit-board textures, electric green glow, and an android mark you don't forget.",
  image: droidwaveImg,
  bgColor: "oklch(0.12 0.05 140)"
}];
function PortfolioPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading text-sm font-bold uppercase tracking-widest text-primary", children: "Portfolio" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-2 text-4xl font-extrabold text-foreground sm:text-5xl", children: [
        "Brands we've built. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Results they've earned." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-muted-foreground", children: "Every project starts with understanding the business. Every deliverable is built to win attention and hold it." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/50 bg-surface py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 sm:grid-cols-2", children: projects.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "glow-hover group overflow-hidden rounded-sm border border-border/50 bg-card transition-all hover:border-primary/30", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-64 items-center justify-center overflow-hidden p-6", style: {
        backgroundColor: p.bgColor
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: p.image, alt: `${p.title} — brand identity by Forge5 Designs`, className: "max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105", loading: "lazy" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary", children: p.industry }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 text-lg font-bold text-foreground", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: p.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-xs text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground/70", children: "Deliverables:" }),
          " ",
          p.deliverables
        ] })
      ] })
    ] }, p.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 text-center sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold text-foreground sm:text-4xl", children: "Ready to build yours?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "Your brand is the first thing people see. Make it count." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "forge", size: "lg", children: "Start Your Project" }) }) })
    ] }) })
  ] });
}
export {
  PortfolioPage as component
};
