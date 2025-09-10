"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import type { LandingContent } from "@/types/landing"
import { toast } from "sonner"

export function IdeaForm() {
  const [idea, setIdea] = useState("")
  const [loading, setLoading] = useState(false)
  const [result, setResult] = useState<null | LandingContent>(null)

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault()
    if (!idea.trim()) return
    setLoading(true)
    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idea }),
      })
      if (!res.ok) throw new Error("Failed to generate")
      const data = (await res.json()) as LandingContent
      setResult(data)
      toast.success("Generated draft landing page")
    } catch (err) {
      console.error(err)
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
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
  )
}


