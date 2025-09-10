import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IdeaForm } from "@/components/idea/idea-form";

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
