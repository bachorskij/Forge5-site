import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Forge5 Designs" },
      { name: "description", content: "Brand identity, vehicle wraps, signage, and digital design forged for contractors and tradespeople." },
      { property: "og:title", content: "Services — Forge5 Designs" },
      { property: "og:description", content: "Brand identity, vehicle wraps, signage, and digital design forged for contractors and tradespeople." },
    ],
  }),
  component: ServicesPage,
});

const allServices = [
  {
    icon: "🔨",
    title: "Complete Brand Identity",
    description: "Your logo, colors, type, and a brand guide — everything dialed-in so you show up like you mean business. Because you do.",
    includes: ["Custom logo design", "Color palette & typography", "Brand guidelines document", "File package (print + digital)"],
    starting: "Starting at $1,500",
  },
  {
    icon: "🚛",
    title: "Vehicle Wraps & Signage",
    description: "Every truck, van, and job site is a billboard you already own. We make sure it's working for you, not against you.",
    includes: ["Full or partial wrap design", "Job site signage & banners", "Trailer & equipment graphics", "Print-ready files for your wrap shop"],
    starting: "Starting at $800",
  },
  {
    icon: "📱",
    title: "Digital Presence",
    description: "A clean website, a sharp Google listing, and social templates that don't look like everyone else's. The foundation of getting found online.",
    includes: ["Simple responsive website", "Google Business Profile setup", "Social media templates", "Email signature design"],
    starting: "Starting at $1,200",
  },
  {
    icon: "🖨️",
    title: "Print Collateral",
    description: "Solid, professional materials that make an impression at every meeting, every estimate, and every door you knock on.",
    includes: ["Business cards", "Letterhead & envelopes", "Estimate & invoice templates", "Door hangers & flyers"],
    starting: "Starting at $400",
  },
];

function ServicesPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">Services</p>
          <h1 className="mt-2 text-4xl font-extrabold text-foreground sm:text-5xl">
            What your brand needs.
            <br />
            <span className="text-primary">Nothing it doesn't.</span>
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            No bloated packages. No design jargon. Practical, sharp branding tools built for how tradespeople actually run their businesses.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="border-t border-border/50 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {allServices.map((s) => (
              <div
                key={s.title}
                className="glow-hover rounded-sm border border-border/50 bg-card p-8 transition-all hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <span className="text-4xl">{s.icon}</span>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground">{s.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
                    <ul className="mt-4 space-y-2">
                      {s.includes.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="text-primary">✓</span> {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-6 font-heading text-lg font-bold text-primary">{s.starting}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">The Blueprint</p>
          <h2 className="mt-2 text-3xl font-extrabold text-foreground sm:text-4xl">Four steps. No runaround.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: "01", title: "Discovery", desc: "We talk. Your business, your customers, what sets you apart. No questionnaires — a real conversation." },
              { step: "02", title: "Concept", desc: "I build 2–3 directions based on what I learn. Grounded in your industry, sharpened for your market." },
              { step: "03", title: "Refine", desc: "You pick a direction. We dial it in until it's exactly right. No endless revision loops." },
              { step: "04", title: "Deliver", desc: "You get every file, a brand guide, and everything you need to hit the ground running. Day one." },
            ].map((s) => (
              <div key={s.step}>
                <span className="font-heading text-4xl font-extrabold text-primary/30">{s.step}</span>
                <h3 className="mt-2 text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Not sure where to start?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            That's fine. Tell me about your business and I'll tell you what makes sense. No commitment, no sales pitch.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button variant="forge" size="lg">Book a Free Consultation</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
