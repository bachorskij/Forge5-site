import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Forge5 Designs" },
      { name: "description", content: "Get a free brand audit or start your project. Forge5 Designs — brand identity forged for the trades." },
      { property: "og:title", content: "Contact — Forge5 Designs" },
      { property: "og:description", content: "Get a free brand audit or start your project. No pitch, no pressure." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageTransition>
      {/* Hero */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">Contact</p>
          <h1 className="mt-2 text-4xl font-extrabold text-foreground sm:text-5xl">
            Let's get to work.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
            Fill this out. I'll get back to you within 24 hours. No sales pitch — just a straight conversation about what your business needs.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="border-t border-border/50 bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-sm border border-primary/30 bg-primary/5 p-8 text-center">
                  <span className="text-4xl">🔥</span>
                  <h2 className="mt-4 text-2xl font-extrabold text-foreground">Message received.</h2>
                  <p className="mt-2 text-muted-foreground">
                    I'll look it over and get back to you within 24 hours. Talk soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-6"
                >
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="w-full rounded-sm border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Mike Tran"
                      />
                    </div>
                    <div>
                      <label htmlFor="business" className="mb-2 block text-sm font-medium text-foreground">Business Name</label>
                      <input
                        type="text"
                        id="business"
                        className="w-full rounded-sm border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Tran Electric"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="trade" className="mb-2 block text-sm font-medium text-foreground">Trade / Industry</label>
                    <input
                      type="text"
                      id="trade"
                      className="w-full rounded-sm border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Electrical, Plumbing, Landscaping, etc."
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full rounded-sm border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="mike@tranelectric.ca"
                    />
                  </div>

                  <div>
                    <label htmlFor="needs" className="mb-2 block text-sm font-medium text-foreground">What do you need?</label>
                    <textarea
                      id="needs"
                      rows={4}
                      className="w-full rounded-sm border border-border bg-input px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Logo, truck wrap, website — or not sure yet. Tell me about your business and where you want to take it."
                    />
                  </div>

                  <Button type="submit" variant="forge" size="lg" className="w-full sm:w-auto">
                    Send It
                  </Button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Email</h3>
                  <a href="mailto:hello@forge5designs.com" className="mt-1 block text-foreground transition-colors hover:text-primary">
                    hello@forge5designs.com
                  </a>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Location</h3>
                  <p className="mt-1 text-foreground">London, Ontario</p>
                  <p className="text-sm text-muted-foreground">Serving southwestern Ontario & remote clients across Canada</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-primary">Response Time</h3>
                  <p className="mt-1 text-foreground">Within 24 hours</p>
                  <p className="text-sm text-muted-foreground">Usually faster</p>
                </div>
                <div className="rounded-sm border border-border/50 bg-card p-6">
                  <h3 className="font-bold text-foreground">Free Brand Audit</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Not sure where you stand? Drop "brand audit" in your message. I'll review what you've got and give you an honest assessment — no strings, no invoice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
