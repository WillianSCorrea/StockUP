'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Input from '../../components/UI/Input'
import Button from '../../components/UI/Button'

export default function LoginPage() {
  const router = useRouter()
  const handle = (e: React.FormEvent) => {
    e.preventDefault()
    router.push('/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg)]">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-2xl font-semibold text-center mb-6 text-primary">Login</h1>
        <form onSubmit={handle} className="flex flex-col gap-4">
          <Input type="email" placeholder="Email" required />
          <Input type="password" placeholder="Senha" required />
          <Button type="submit">Entrar</Button>
        </form>
      </div>
    </div>
  )
}
