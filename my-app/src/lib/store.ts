import type { GenerationRecord, LandingContent } from "@/types/landing"

// Simple in-memory store for demo/dev. Replace with DB later.
const generations = new Map<string, GenerationRecord>()

export function saveGeneration(idea: string, content: LandingContent): GenerationRecord {
  const id = Math.random().toString(36).slice(2, 10)
  const rec: GenerationRecord = {
    id,
    idea,
    createdAt: new Date().toISOString(),
    content,
  }
  generations.set(id, rec)
  return rec
}

export function getGeneration(id: string) {
  return generations.get(id) || null
}

export function listGenerations(): GenerationRecord[] {
  return Array.from(generations.values()).sort((a, b) => b.createdAt.localeCompare(a.createdAt))
}


