import { notFound } from "next/navigation"
import { getGeneration } from "@/lib/store"
import { FeaturesGrid } from "@/components/sections/features-grid"
import { Pricing } from "@/components/sections/pricing"

export default function SharePage({ params }: { params: { id: string } }) {
  const rec = getGeneration(params.id)
  if (!rec) return notFound()

  const { content } = rec
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 md:py-24">
      <section className="text-center space-y-6">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {content.hero.title}
        </h1>
        <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
          {content.hero.subtitle}
        </p>
      </section>
      <FeaturesGrid features={content.features} />
      <Pricing tiers={content.pricing} />
    </main>
  )
}


