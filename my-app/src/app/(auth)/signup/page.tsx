"use client"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    alert(`Stub signup for ${email}`)
  }

  return (
    <main className="mx-auto w-full max-w-md px-6 py-16 md:py-24">
      <h1 className="mb-6 text-3xl font-semibold">Sign up</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" className="w-full">Create account</Button>
      </form>
    </main>
  )
}


