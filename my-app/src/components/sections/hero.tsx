import { HeroContent } from "@/types/landing"

export function Hero({ content }: { content: HeroContent }) {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        {content.title}
      </h1>
      <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
        {content.subtitle}
      </p>
    </section>
  )
}


