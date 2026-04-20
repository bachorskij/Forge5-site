import { T as jsxRuntimeExports } from "./worker-entry-DvrL36R1.js";
import { L as Link, B as Button } from "./router-cmB6lsK2.js";
import { P as PageTransition } from "./PageTransition-C_Rzy0KH.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const allServices = [{
  icon: "🔨",
  title: "Complete Brand Identity",
  description: "Your logo, colors, type, and a brand guide — everything dialed-in so you show up like you mean business. Because you do.",
  includes: ["Custom logo design", "Color palette & typography", "Brand guidelines document", "File package (print + digital)"],
  starting: "Starting at $1,500"
}, {
  icon: "🚛",
  title: "Vehicle Wraps & Signage",
  description: "Every truck, van, and job site is a billboard you already own. We make sure it's working for you, not against you.",
  includes: ["Full or partial wrap design", "Job site signage & banners", "Trailer & equipment graphics", "Print-ready files for your wrap shop"],
  starting: "Starting at $800"
}, {
  icon: "📱",
  title: "Digital Presence",
  description: "A clean website, a sharp Google listing, and social templates that don't look like everyone else's. The foundation of getting found online.",
  includes: ["Simple responsive website", "Google Business Profile setup", "Social media templates", "Email signature design"],
  starting: "Starting at $1,200"
}, {
  icon: "🖨️",
  title: "Print Collateral",
  description: "Solid, professional materials that make an impression at every meeting, every estimate, and every door you knock on.",
  includes: ["Business cards", "Letterhead & envelopes", "Estimate & invoice templates", "Door hangers & flyers"],
  starting: "Starting at $400"
}];
function ServicesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading text-sm font-bold uppercase tracking-widest text-primary", children: "Services" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-2 text-4xl font-extrabold text-foreground sm:text-5xl", children: [
        "What your brand needs.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Nothing it doesn't." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-muted-foreground", children: "No bloated packages. No design jargon. Practical, sharp branding tools built for how tradespeople actually run their businesses." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/50 bg-surface py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-8 lg:grid-cols-2", children: allServices.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "glow-hover rounded-sm border border-border/50 bg-card p-8 transition-all hover:border-primary/30", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: s.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-foreground", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: s.includes.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "✓" }),
          " ",
          item
        ] }, item)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-heading text-lg font-bold text-primary", children: s.starting })
      ] })
    ] }) }, s.title)) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading text-sm font-bold uppercase tracking-widest text-primary", children: "The Blueprint" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 text-3xl font-extrabold text-foreground sm:text-4xl", children: "Four steps. No runaround." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4", children: [{
        step: "01",
        title: "Discovery",
        desc: "We talk. Your business, your customers, what sets you apart. No questionnaires — a real conversation."
      }, {
        step: "02",
        title: "Concept",
        desc: "I build 2–3 directions based on what I learn. Grounded in your industry, sharpened for your market."
      }, {
        step: "03",
        title: "Refine",
        desc: "You pick a direction. We dial it in until it's exactly right. No endless revision loops."
      }, {
        step: "04",
        title: "Deliver",
        desc: "You get every file, a brand guide, and everything you need to hit the ground running. Day one."
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-heading text-4xl font-extrabold text-primary/30", children: s.step }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-lg font-bold text-foreground", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: s.desc })
      ] }, s.step)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/50 bg-surface py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl px-4 text-center sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl font-extrabold text-foreground sm:text-4xl", children: "Not sure where to start?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "That's fine. Tell me about your business and I'll tell you what makes sense. No commitment, no sales pitch." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "forge", size: "lg", children: "Book a Free Consultation" }) }) })
    ] }) })
  ] });
}
export {
  ServicesPage as component
};
