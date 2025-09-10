export type HeroContent = {
  title: string
  subtitle: string
  imageUrl?: string
}

export type FeatureItem = {
  title: string
  description: string
}

export type PricingTier = {
  title: string
  price: string
  features: string[]
}

export type LandingContent = {
  hero: HeroContent
  features: FeatureItem[]
  pricing: PricingTier[]
}

export type GenerationRecord = {
  id: string
  idea: string
  createdAt: string
  content: LandingContent
}

