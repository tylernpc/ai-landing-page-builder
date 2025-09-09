"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

function IdeaForm() {
  const [idea, setIdea] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | {
    hero: { title: string; subtitle: string };
    features: { title: string; description: string }[];
    pricing: { title: string; price: string; features: string[] }[];
  }>(null);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!idea.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <form onSubmit={handleGenerate} className="flex items-center gap-3">
        <Input
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          placeholder="Describe your product idea…"
        />
        <Button type="submit" size="lg" disabled={loading}>
          {loading ? "Generating…" : "Generate"}
        </Button>
      </form>

      {result && (
        <div className="mt-10 space-y-10">
          <section className="text-center space-y-2">
            <h2 className="text-3xl font-semibold">{result.hero.title}</h2>
            <p className="text-muted-foreground">{result.hero.subtitle}</p>
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            {result.features.map((f, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{f.title}</CardTitle>
                  <CardDescription>{f.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </section>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {result.pricing.map((p, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{p.title}</CardTitle>
                  <CardDescription>{p.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    {p.features.map((pf, idx) => (
                      <li key={idx}>{pf}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </section>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <main className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
        {/* Hero */}
        <section className="text-center space-y-6">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            AI-Powered Landing Page Builder
          </h1>
          <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
            Type your product idea. We’ll generate a hero, features, and pricing in seconds.
          </p>
          <IdeaForm />
        </section>

        {/* Placeholder preview sections (will be replaced by generated content) */}
        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Fast</CardTitle>
              <CardDescription>Generate complete sections instantly.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-24 rounded-md border bg-secondary" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Flexible</CardTitle>
              <CardDescription>Customize text, layout, and visuals.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-24 rounded-md border bg-secondary" />
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Production-ready</CardTitle>
              <CardDescription>Uses Next.js App Router and shadcn UI.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-24 rounded-md border bg-secondary" />
            </CardContent>
          </Card>
        </section>

        {/* Pricing CTA */}
        <section className="mt-16 text-center">
          <Card className="mx-auto max-w-3xl">
            <CardHeader>
              <CardTitle>Simple pricing</CardTitle>
              <CardDescription>Free to try. Upgrade for unlimited generations.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center gap-4">
                <Button size="lg">Start Free</Button>
                <Button size="lg" variant="outline">See Pricing</Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
