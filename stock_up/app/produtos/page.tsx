import {
  Package,
  AlertTriangle,
  Layers,
  PauseCircle,
} from "lucide-react";

import { KpiCard } from "../../components/UI/KpiCard";
import { InsightCard } from "../../components/UI/InsightCard";
import { StockTable } from "../../components/UI/StockTable";

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      {/* KPI CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Total de Produtos"
          value={124}
          description="produtos cadastrados"
          icon={<Package />}
          variant="info"
        />

        <KpiCard
          title="Estoque Crítico"
          value={9}
          description="abaixo do mínimo"
          icon={<AlertTriangle />}
          variant="danger"
        />

        <KpiCard
          title="Produtos Parados"
          value={17}
          description="sem saída há 30+ dias"
          icon={<PauseCircle />}
          variant="warning"
        />

        <KpiCard
          title="Categorias"
          value={6}
          description="ativas no sistema"
          icon={<Layers />}
          variant="success"
        />
      </section>

      {/* INSIGHTS */}
      <InsightCard
        insights={[
          {
            id: 1,
            type: "danger",
            message:
              "3 produtos entraram em nível crítico nas últimas 24h.",
          },
          {
            id: 2,
            type: "warning",
            message:
              "Produto 'Parafuso Aço 8mm' está parado há 45 dias.",
          },
          {
            id: 3,
            type: "info",
            message:
              "Sugestão: revisar estoque mínimo da categoria 'Tintas'.",
          },
        ]}
      />

      {/* TABELA DE PRODUTOS */}
      <StockTable
        items={[
          {
            id: 1,
            name: "Cimento X",
            current: 5,
            minimum: 20,
            status: "CRITICO",
          },
          {
            id: 2,
            name: "Parafuso Aço 8mm",
            current: 40,
            minimum: 30,
            status: "ATENCAO",
          },
          {
            id: 3,
            name: "Tinta Azul Premium",
            current: 120,
            minimum: 50,
            status: "OK",
          },
          {
            id: 4,
            name: "Areia Média",
            current: 15,
            minimum: 25,
            status: "CRITICO",
          },
        ]}
      />
    </div>
  );
}
