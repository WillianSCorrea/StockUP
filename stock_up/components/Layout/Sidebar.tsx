import Link from "next/link";
import { LayoutDashboard, Package, ArrowDownUp,Truck, Users, Settings } from "lucide-react";


const menu = [
{ label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
{ label: "Produtos", href: "/produtos", icon: Package },
{ label: "Entradas / Saídas", href: "/movimentacoes", icon: ArrowDownUp },
{ label: "Usuários", href: "/usuarios", icon: Users },
{ label: "Configurações", href: "/configuracoes", icon: Settings },
{ label: "Fornecedores", href: "/fornecedores", icon: Truck }
];


export function Sidebar() {
return (
<aside className="w-64 bg-slate-900 text-slate-100 flex flex-col">
<div className="h-16 flex items-center px-6 font-bold text-lg text-blue-400">
StockUp
</div>


<nav className="flex-1 px-4 space-y-1">
{menu.map((item) => (
<Link
key={item.label}
href={item.href}
className="flex items-center gap-3 px-4 py-2 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-white transition"
>
<item.icon size={18} />
<span className="text-sm">{item.label}</span>
</Link>
))}
</nav>
</aside>
);
}