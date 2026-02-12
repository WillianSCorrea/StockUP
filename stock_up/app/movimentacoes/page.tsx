import {
  ArrowUpRight,
  ArrowDownLeft,
  Repeat,
  TrendingUp,
} from "lucide-react";

import { KpiCard } from "../../components/UI/KpiCard";
import { InsightCard } from "../../components/UI/InsightCard";
import { MovementTable } from "../../components/UI/MovementTable";

export default function MovementsPage() {
  return (
    <div className="space-y-8">
      {/* KPI CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Entradas Hoje"
          value={23}
          description="produtos recebidos"
          icon={<ArrowUpRight />}
          variant="success"
        />

        <KpiCard
          title="Saídas Hoje"
          value={18}
          description="produtos expedidos"
          icon={<ArrowDownLeft />}
          variant="info"
        />

        <KpiCard
          title="Movimentações no Mês"
          value={342}
          description="entradas e saídas"
          icon={<Repeat />}
          variant="warning"
        />

        <KpiCard
          title="Produto Mais Movimentado"
          value="Cimento X"
          description="últimos 7 dias"
          icon={<TrendingUp />}
          variant="success"
        />
      </section>

      {/* INSIGHTS */}
      <InsightCard
        insights={[
          {
            id: 1,
            type: "info",
            message:
              "Pico de saídas detectado hoje entre 10h e 12h.",
          },
          {
            id: 2,
            type: "warning",
            message:
              "Produto 'Areia Média' teve 4 saídas consecutivas hoje.",
          },
          {
            id: 3,
            type: "danger",
            message:
              "Saídas frequentes podem levar 'Cimento X' ao nível crítico.",
          },
        ]}
      />

      {/* TABELA DE MOVIMENTAÇÕES */}
      <MovementTable
        items={[
          {
            id: 1,
            product: "Cimento X",
            type: "SAIDA",
            quantity: 5,
            date: "2025-01-16",
          },
          {
            id: 2,
            product: "Tinta Azul Premium",
            type: "ENTRADA",
            quantity: 30,
            date: "2025-01-16",
          },
          {
            id: 3,
            product: "Areia Média",
            type: "SAIDA",
            quantity: 10,
            date: "2025-01-15",
          },
        ]}
      />
    </div>
  );
}
