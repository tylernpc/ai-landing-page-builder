import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FeatureItem } from "@/types/landing"

export function FeaturesGrid({ features }: { features: FeatureItem[] }) {
  return (
    <section className="mt-16 grid gap-6 md:grid-cols-3">
      {features.map((f, i) => (
        <Card key={i}>
          <CardHeader>
            <CardTitle>{f.title}</CardTitle>
            <CardDescription>{f.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-24 rounded-md border bg-secondary" />
          </CardContent>
        </Card>
      ))}
    </section>
  )
}


