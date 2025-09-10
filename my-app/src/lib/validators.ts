import { z } from "zod"

export const generateSchema = z.object({
  idea: z.string().min(1, "Idea is required").max(400)
})

export type GenerateInput = z.infer<typeof generateSchema>


