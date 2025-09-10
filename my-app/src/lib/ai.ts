import { openai } from "@ai-sdk/openai"
import { generateText } from "ai"

// Placeholder wrapper. Swap prompt engineering and parsing as needed.
export async function generateLandingText(idea: string) {
  const { text } = await generateText({
    model: openai("gpt-4o-mini"),
    prompt: `Given a product idea, return concise JSON with keys: hero{title,subtitle}, features[title,description]*3, pricing[title,price,features(string[]) ]*3. Idea: ${idea}. Keep titles punchy and subtitles under 140 chars.`,
  })
  return text
}


