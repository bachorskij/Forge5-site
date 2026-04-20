import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Forge5 Designs" },
      { name: "description", content: "A one-person design studio in London, Ontario. Brand identity forged for tradespeople and blue-collar businesses." },
      { property: "og:title", content: "About — Forge5 Designs" },
      { property: "og:description", content: "A one-person design studio in London, Ontario. Brand identity forged for tradespeople and blue-collar businesses." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">About</p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold text-foreground sm:text-5xl">
            I build brands for people who <span className="text-primary">build things.</span>
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="border-t border-border/50 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Photo placeholder */}
            <div className="flex aspect-[4/3] items-center justify-center rounded-sm bg-card">
              <div className="text-center">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-sm bg-primary">
                  <span className="font-heading text-4xl font-extrabold text-primary-foreground">F5</span>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">Forge5 Designs</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl">Here's the problem.</h2>
              <div className="mt-6 space-y-4 text-muted-foreground">
                <p>
                  Contractors, electricians, plumbers, landscapers, concrete crews — they pour everything into their craft. The work speaks for itself. But the brand? Clip-art logo from Fiverr. Plain white business cards. A Facebook page with a blurry profile photo.
                </p>
                <p>
                  Meanwhile, the competitor down the road has a wrapped truck, a clean website, and a brand that looks like a company twice its size. Guess who gets the call first.
                </p>
                <p>
                  That's why Forge5 exists. I started this studio because the trades deserve better than what the design industry gives them. Most agencies don't understand your world. They'll charge you for a mood board and call it strategy. I'll build you a brand that actually works — on a truck, on a job site, on a business card handed to a GC.
                </p>
                <p>
                  No jargon. No committees. One designer who knows the industry and builds brands that hit as hard as your work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">How this shop runs.</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Straight talk",
                description: "Plain English. Clear quotes. You'll never wonder what you're paying for or what happens next.",
              },
              {
                title: "Built for the field",
                description: "Your brand has to work on a truck at 60 km/h, on a dusty job site sign, and on a 2-inch business card. I design for all of it.",
              },
              {
                title: "One point of contact",
                description: "No account managers. No junior designers. You talk directly to the person building your brand. Every time.",
              },
              {
                title: "Fast turnaround",
                description: "Most projects ship in 2–4 weeks. You've got a business to run — I'm not going to hold you up.",
              },
              {
                title: "Fair, fixed pricing",
                description: "You get a number upfront. No scope creep, no surprise invoices. The price is the price.",
              },
              {
                title: "Results over aesthetics",
                description: "A good-looking logo means nothing if it doesn't help you win work. Every decision is built around getting you hired.",
              },
            ].map((v) => (
              <div key={v.title} className="rounded-sm border border-border/50 bg-card p-6">
                <h3 className="text-lg font-bold text-foreground">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="text-3xl font-extrabold text-foreground sm:text-4xl">
            Let's build something solid.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Your brand is the foundation. I'll make sure it's built right.
          </p>
          <div className="mt-8">
            <Link to="/contact">
              <Button variant="forge" size="lg">Get in Touch</Button>
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
