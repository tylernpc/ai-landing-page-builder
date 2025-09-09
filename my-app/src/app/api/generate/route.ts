import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json().catch(() => ({}));
  const ideaRaw = typeof body?.idea === "string" ? body.idea : "";
  const idea = ideaRaw.trim();

  const topic = idea || "your product";

  return Response.json({
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
  });
}


