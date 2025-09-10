import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PricingTier } from "@/types/landing"

export function Pricing({ tiers }: { tiers: PricingTier[] }) {
  return (
    <section className="mt-16 text-center">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {tiers.map((p, i) => (
          <Card key={i}>
            <CardHeader>
              <CardTitle>{p.title}</CardTitle>
              <CardDescription>{p.price}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 text-left">
                {p.features.map((pf, idx) => (
                  <li key={idx}>{pf}</li>
                ))}
              </ul>
              <div className="mt-4 flex justify-center">
                <Button size="lg">Choose {p.title}</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}


