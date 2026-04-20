import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import creaseKingsImg from "@/assets/portfolio/crease-kings.png";
import triCityImg from "@/assets/portfolio/tri-city.png";
import kovalforgeImg from "@/assets/portfolio/kovalforge.png";
import droidwaveImg from "@/assets/portfolio/droidwave.png";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — Forge5 Designs" },
      { name: "description", content: "Brand identity work forged for contractors, tradespeople, and bold businesses. See what we build." },
      { property: "og:title", content: "Portfolio — Forge5 Designs" },
      { property: "og:description", content: "Brand identity work forged for contractors, tradespeople, and bold businesses. See what we build." },
    ],
  }),
  component: PortfolioPage,
});

const projects = [
  {
    title: "Crease Kings",
    industry: "Sports / Hockey",
    deliverables: "Logo, Brand Identity",
    description: "A hockey goalie brand that needed to hit as hard as the players it represents. Bold mark, crowned mask, zero subtlety. Built to own the crease.",
    image: creaseKingsImg,
    bgColor: "oklch(0.20 0.02 260)",
  },
  {
    title: "Tri-City Contracting",
    industry: "General Contracting",
    deliverables: "Logo, Brand Identity",
    description: "A multi-city contractor needed a mark as solid as the buildings they put up. Integrated building silhouettes in the letterforms. Clean, strong, unmistakable.",
    image: triCityImg,
    bgColor: "oklch(0.95 0.01 90)",
  },
  {
    title: "Kovalforge",
    industry: "Gaming / Esports",
    deliverables: "Logo, Brand Identity",
    description: "Old-world craft meets modern edge. Gold, fire, and a shield emblem that feels earned. This identity wasn't designed — it was forged.",
    image: kovalforgeImg,
    bgColor: "oklch(0.12 0.01 80)",
  },
  {
    title: "DroidWave",
    industry: "Tech / Streaming",
    deliverables: "Logo, Brand Identity",
    description: "A tech streaming platform that needed to stand out in a sea of generic. Circuit-board textures, electric green glow, and an android mark you don't forget.",
    image: droidwaveImg,
    bgColor: "oklch(0.12 0.05 140)",
  },
];

function PortfolioPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">Portfolio</p>
          <h1 className="mt-2 text-4xl font-extrabold text-foreground sm:text-5xl">
            Brands we've built. <span className="text-primary">Results they've earned.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Every project starts with understanding the business. Every deliverable is built to win attention and hold it.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="border-t border-border/50 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 sm:grid-cols-2">
            {projects.map((p) => (
              <div
                key={p.title}
                className="glow-hover group overflow-hidden rounded-sm border border-border/50 bg-card transition-all hover:border-primary/30"
              >
                <div
                  className="flex h-64 items-center justify-center overflow-hidden p-6"
                  style={{ backgroundColor: p.bgColor }}
                >
                  <img
                    src={p.image}
                    alt={`${p.title} — brand identity by Forge5 Designs`}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2">
                    <span className="rounded-sm bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">{p.industry}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-foreground/70">Deliverables:</span> {p.deliverables}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Ready to build yours?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your brand is the first thing people see. Make it count.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button variant="forge" size="lg">Start Your Project</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
