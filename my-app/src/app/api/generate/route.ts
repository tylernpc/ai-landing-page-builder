import { NextRequest } from "next/server";
import { generateSchema } from "@/lib/validators";
import type { LandingContent } from "@/types/landing";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const parsed = generateSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: parsed.error.flatten() }, { status: 400 });
  }
  const idea = parsed.data.idea.trim();
  const topic = idea || "your product";

  const payload: LandingContent = {
    hero: {
      title: `Launch ${topic} faster with AI-built pages`,
      subtitle: `Describe ${topic} and get a conversion-ready landing page in seconds.`,
    },
    features: [
      {
        title: "Instant sections",
        description: "Generate hero, features, and pricing with one click.",
      },
      {
        title: "On-brand design",
        description: "Beautiful shadcn components you can customize easily.",
      },
      {
        title: "Production-ready",
        description: "Next.js App Router and best practices out of the box.",
      },
    ],
    pricing: [
      {
        title: "Free",
        price: "$0",
        features: ["3 generations", "Basic sections", "Community support"],
      },
      {
        title: "Pro",
        price: "$19/mo",
        features: ["Unlimited generations", "Export to code", "Custom styles"],
      },
      {
        title: "Team",
        price: "$49/mo",
        features: ["Collaboration", "Brand presets", "Priority support"],
      },
    ],
  };

  return Response.json(payload);
}


