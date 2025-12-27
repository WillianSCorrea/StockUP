import { KpiCard } from "../../components/UI/KpiCard";
import { InsightCard } from "../../components/UI/InsightCard";
import { StockTable } from "../../components/UI/StockTable";
import { Bot, Sparkles } from "lucide-react";
// import { Button } from "../../components/UI/Button";
import { AlertTriangle, Package, ArrowDownUp, ArrowUpRight } from "lucide-react";


export default function DashboardPage() {
return (
  
<div className="space-y-8">
   <div className="fixed bottom-6 right-6 w-80 rounded-2xl bg-white shadow-xl border border-slate-200 overflow-hidden">
      
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 bg-slate-900 text-white">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-slate-800">
          <Bot className="w-5 h-5 text-sky-400" />
        </div>

        <div className="flex flex-col leading-tight">
          <span className="text-sm font-semibold">
            Assistente StockUp
          </span>
          <span className="text-xs text-slate-300">
            Insights inteligentes de estoque
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="px-4 py-4 space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-sky-100">
            <Sparkles className="w-4 h-4 text-sky-600" />
          </div>

          <div className="text-sm text-slate-600 leading-relaxed">
            Olá! 👋  
            Em breve poderei te ajudar com:
            <ul className="list-disc ml-4 mt-1 text-xs text-slate-500">
              <li>Alertas de estoque crítico</li>
              <li>Produtos parados</li>
              <li>Sugestões de reposição</li>
            </ul>
          </div>
        </div>

        {/* Placeholder integração n8n */}
        <div className="mt-3 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-3 text-center">
          <p className="text-xs text-slate-500">
            Integração com IA (n8n) será conectada aqui
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-slate-200 bg-slate-50">
        <button
          // variant="secondary"
          // size="sm"
          className="w-full cursor-not-allowed opacity-70"
        >
          Chat em breve 🚀
        </button>
      </div>
    </div>
{/* KPI CARDS */}
<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
<KpiCard
title="Estoque Crítico"
value={8}
description="produtos abaixo do mínimo"
icon={<AlertTriangle />}
variant="danger"
/>
<KpiCard
title="Produtos Parados"
value={12}
description="sem saída há 30+ dias"
icon={<Package />}
variant="warning"
/>
<KpiCard
title="Entradas Hoje"
value={23}
icon={<ArrowUpRight />}
variant="success"
/>
<KpiCard
title="Saídas Hoje"
value={18}
icon={<ArrowDownUp />}
variant="info"
/>
</section>


{/* INSIGHTS */}
<InsightCard
insights={[
{ id: 1, type: "danger", message: "Produto 'Cimento X' pode acabar em 5 dias." },
{ id: 2, type: "warning", message: "Produto 'Parafuso A' sem saída há 42 dias." },
{ id: 3, type: "info", message: "Sugestão: reabastecer 'Tinta Azul' com fornecedor Y." },
]}
/>


{/* TABELA */}
<StockTable
items={[
{ id: 1, name: "Cimento X", current: 5, minimum: 20, status: "CRITICO" },
{ id: 2, name: "Parafuso A", current: 40, minimum: 30, status: "ATENCAO" },
{ id: 3, name: "Tinta Azul", current: 120, minimum: 50, status: "OK" },
]}
/>
</div>
);
}