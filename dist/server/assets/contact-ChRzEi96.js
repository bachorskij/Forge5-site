import { r as reactExports, T as jsxRuntimeExports } from "./worker-entry-DvrL36R1.js";
import { B as Button } from "./router-cmB6lsK2.js";
import { P as PageTransition } from "./PageTransition-C_Rzy0KH.js";
import "node:events";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function ContactPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PageTransition, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-heading text-sm font-bold uppercase tracking-widest text-primary", children: "Contact" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-4xl font-extrabold text-foreground sm:text-5xl", children: "Let's get to work." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-lg text-muted-foreground", children: "Fill this out. I'll get back to you within 24 hours. No sales pitch — just a straight conversation about what your business needs." })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "border-t border-border/50 bg-surface py-20 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-3", children: submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-primary/30 bg-primary/5 p-8 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl", children: "🔥" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-2xl font-extrabold text-foreground", children: "Message received." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground", children: "I'll look it over and get back to you within 24 hours. Talk soon." })
      ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
        e.preventDefault();
        setSubmitted(true);
      }, className: "space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "name", className: "mb-2 block text-sm font-medium text-foreground", children: "Your Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", id: "name", required: true, className: "w-full rounded-sm border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", placeholder: "Mike Tran" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "business", className: "mb-2 block text-sm font-medium text-foreground", children: "Business Name" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", id: "business", className: "w-full rounded-sm border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", placeholder: "Tran Electric" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "trade", className: "mb-2 block text-sm font-medium text-foreground", children: "Trade / Industry" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "text", id: "trade", className: "w-full rounded-sm border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", placeholder: "Electrical, Plumbing, Landscaping, etc." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "email", className: "mb-2 block text-sm font-medium text-foreground", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "email", id: "email", required: true, className: "w-full rounded-sm border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", placeholder: "mike@tranelectric.ca" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { htmlFor: "needs", className: "mb-2 block text-sm font-medium text-foreground", children: "What do you need?" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "needs", rows: 4, className: "w-full rounded-sm border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary", placeholder: "Logo, truck wrap, website — or not sure yet. Tell me about your business and where you want to take it." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", variant: "forge", size: "lg", className: "w-full sm:w-auto", children: "Send It" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:hello@forge5designs.com", className: "mt-1 block text-foreground transition-colors hover:text-primary", children: "hello@forge5designs.com" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: "Location" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-foreground", children: "London, Ontario" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Serving southwestern Ontario & remote clients across Canada" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-bold uppercase tracking-wider text-primary", children: "Response Time" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-foreground", children: "Within 24 hours" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Usually faster" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-sm border border-border/50 bg-card p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-foreground", children: "Free Brand Audit" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: `Not sure where you stand? Drop "brand audit" in your message. I'll review what you've got and give you an honest assessment — no strings, no invoice.` })
        ] })
      ] }) })
    ] }) }) })
  ] });
}
export {
  ContactPage as component
};
