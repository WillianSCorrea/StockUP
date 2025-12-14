import React from 'react'
import Layout from '../../components/Layout/Layout'
import Table from '../../components/UI/Table'
import Link from 'next/link'
import Button from '../../components/UI/Button'

export default function ProdutosPage() {
  const produtos = [
    { id: 1, nome: 'Cabo HDMI', quantidade: 50 },
    { id: 2, nome: 'Monitor', quantidade: 12 },
    { id: 3, nome: 'Teclado', quantidade: 30 },
  ]

  const rows = produtos.map(p => [
    p.id,
    p.nome,
    p.quantidade,
    <div className="flex gap-2">
      <Link href={'/produtos/novo'} className="text-sm text-primary">Editar</Link>
      <button className="text-sm text-red-500">Excluir</button>
    </div>
  ])

  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Produtos</h2>
        <Link href="/produtos/novo"><Button>+ Novo Produto</Button></Link>
      </div>

      <Table 
        columns={['ID','Nome','Quantidade','Ações']}
        data={rows}
      />
    </Layout>
  )
}
