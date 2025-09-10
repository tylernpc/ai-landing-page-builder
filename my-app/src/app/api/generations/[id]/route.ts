import { NextRequest } from "next/server"
import { getGeneration } from "@/lib/store"

export async function GET(
  _req: NextRequest,
  { params }: { params: { id: string } }
) {
  const rec = getGeneration(params.id)
  if (!rec) return Response.json({ error: "Not found" }, { status: 404 })
  return Response.json(rec)
}


