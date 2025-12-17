'use client'
import React, { useState } from 'react'
import Layout from '../../../components/Layout/Layout'
import Input from '../../../components/UI/Input'
import Button from '../../../components/UI/Button'

export default function NovoProdutoPage() {
  const [nome, setNome] = useState('')
  const [quant, setQuant] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Salvar: ' + nome + ' / ' + quant)
  }

  return (
    <Layout>
      <div className="bg-white p-8 rounded-xl shadow-sm max-w-lg">
        <h2 className="text-2xl font-semibold mb-6 text-primary">Cadastrar / Editar Produto</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input value={nome} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setNome(e.target.value)} placeholder="Nome" required />
          <Input value={quant} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>setQuant(e.target.value)} placeholder="Quantidade" type="number" required />
          <div className="flex gap-3">
            <Button type="submit">Salvar</Button>
            <Button variant="secondary" type="button">Cancelar</Button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
