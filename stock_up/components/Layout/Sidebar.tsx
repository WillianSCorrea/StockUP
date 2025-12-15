'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LinkItem = ({ href, children }: { href: string; children: React.ReactNode }) => {
  const path = usePathname()
  const active = path === href
  return (
    <Link href={href} className={'block py-2 px-3 rounded-md text-gray-600 hover:text-primary ' + (active ? 'font-semibold text-primary' : '')}>
      {children}
    </Link>
  )
}

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white shadow-sm h-screen p-6 flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-semibold text-primary">Almox</h1>
        <p className="text-sm text-gray-400 mt-1">Gestão de Almoxarifado</p>
      </div>

      <nav className="flex flex-col gap-1 text-gray-600">
        <LinkItem href="/dashboard">Dashboard</LinkItem>
        <LinkItem href="/produtos">Produtos</LinkItem>
        <LinkItem href="/entradas">Entradas</LinkItem>
        <LinkItem href="/saidas">Saídas</LinkItem>
      </nav>

      <div className="mt-auto text-sm text-gray-400">v0.1 - Frontend</div>
    </aside>
  )
}
