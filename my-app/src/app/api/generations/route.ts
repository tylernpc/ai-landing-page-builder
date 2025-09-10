import { NextRequest } from "next/server"
import { generateSchema } from "@/lib/validators"
import type { LandingContent } from "@/types/landing"
import { saveGeneration, listGenerations } from "@/lib/store"

export async function GET() {
  return Response.json({ items: listGenerations() })
}

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => ({}))
  const parsed = generateSchema.safeParse(body)
  if (!parsed.success) {
    return Response.json({ error: parsed.error.flatten() }, { status: 400 })
  }

  // For now, the landing content is expected in request or re-use last generate response.
  // In a real app, call AI and persist. Here accept optional content in body.
  const content = (body?.content || null) as LandingContent | null
  if (!content) {
    return Response.json({ error: "Missing content to save" }, { status: 400 })
  }

  const rec = saveGeneration(parsed.data.idea, content)
  return Response.json(rec)
}


