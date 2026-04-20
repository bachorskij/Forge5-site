import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { HeroIntro } from "@/components/HeroIntro";
import logoCinematic from "@/assets/forge5-logo-cinematic.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Forge5 Designs — Brand Identity for the Trades" },
      { name: "description", content: "Brand identity and digital design forged for contractors, tradespeople, and blue-collar businesses in London, Ontario." },
      { property: "og:title", content: "Forge5 Designs — Brand Identity for the Trades" },
      { property: "og:description", content: "Brand identity and digital design forged for contractors, tradespeople, and blue-collar businesses in London, Ontario." },
    ],
  }),
  component: Index,
});

const services = [
  {
    icon: "🔨",
    title: "Brand Identity",
    description: "Logo, colors, type, and a brand guide that puts you on the same level as the big outfits — because your work already is.",
  },
  {
    icon: "🚛",
    title: "Vehicle Wraps & Signage",
    description: "Your truck is your best salesperson. We make sure it looks the part — sharp, clean, and impossible to ignore.",
  },
  {
    icon: "📱",
    title: "Digital Presence",
    description: "A solid website, dialed-in social templates, and business cards people actually keep. The foundation of getting found and getting hired.",
  },
];

const testimonials = [
  {
    quote: "Forge5 built us a brand that matches the quality of our work. Three new clients mentioned the truck wrap in the first month.",
    name: "Mike Tran",
    role: "Owner, Tran Electric",
  },
  {
    quote: "I used to hand out plain white cards. Now clients hold onto them. Best money I've spent on this business.",
    name: "Sarah Chen",
    role: "Chen Plumbing & HVAC",
  },
  {
    quote: "No fluff, no jargon. Just a brand that works as hard as I do. That's exactly what I needed.",
    name: "Dave Kowalski",
    role: "Kowalski Concrete",
  },
];

function Index() {
  const [hasEntered, setHasEntered] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!hasEntered && <HeroIntro key="intro" onEnter={() => setHasEntered(true)} />}
      </AnimatePresence>

      <PageTransition>
      {/* Hero */}
      <section className="noise-bg relative flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0">
          <motion.img
            src={logoCinematic}
            alt="Forge5 Designs"
            className="h-full w-full object-cover"
            width={1920}
            height={1080}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={hasEntered ? { opacity: 0.18, scale: 1 } : { opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/70" />
        </div>
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
          <motion.div
            className="max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
          >
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={hasEntered ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-primary"
            >
              London, Ontario
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-7xl"
            >
              You built the business.{" "}
              <span className="text-primary">We'll forge the brand.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-6 max-w-xl text-lg text-muted-foreground"
            >
              Most design studios don't know a job site from a Figma file. We do. Brand identity and digital design built for contractors, tradespeople, and blue-collar entrepreneurs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={hasEntered ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button variant="forge" size="lg">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="forgeOutline" size="lg">
                  See the Work
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">What We Build</p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            The tools your brand needs to win work.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
                className="glow-hover group rounded-sm border border-border/50 bg-card p-6 transition-all hover:border-primary/30"
              >
                <span className="text-3xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services">
              <Button variant="forgeOutline">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <section className="border-y border-border/50 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">From the Field</p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">
            Don't take our word for it. Take theirs.
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-sm border border-border/50 bg-card p-6">
                <p className="text-sm italic leading-relaxed text-muted-foreground">"{t.quote}"</p>
                <div className="mt-4 border-t border-border/50 pt-4">
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="noise-bg relative overflow-hidden py-20 sm:py-28">
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Your competition has a brand. Do you?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Get a free brand audit. No pitch, no pressure — just an honest look at where you stand and what it would take to sharpen up.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button variant="forge" size="lg">
                Get Your Free Brand Audit
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
    </>
  );
}
