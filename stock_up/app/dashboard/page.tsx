import React from 'react'
import Layout from '../../components/Layout/Layout'
import Card from '../../components/UI/Card'

export default function DashboardPage() {
  return (
    <Layout>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">Dashboard</h2>
      </div>
      <div className="grid grid-cols-3 gap-6">
        <Card title="Total de Produtos" value="120" />
        <Card title="Entradas do Mês" value="32" />
        <Card title="Saídas do Mês" value="28" />
      </div>
    </Layout>
  )
}
