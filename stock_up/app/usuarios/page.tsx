import {
  Users,
  ShieldCheck,
  UserCog,
  UserX,
} from "lucide-react";

import { KpiCard } from "../../components/UI/KpiCard"
import { InsightCard } from "../../components/UI/InsightCard"
import { UsersTable } from  "../../components/UI/UsersTable"

export default function UsersPage() {
  return (
    <div className="space-y-8">
      {/* KPI CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Usuários Totais"
          value={14}
          description="ativos no sistema"
          icon={<Users />}
          variant="info"
        />

        <KpiCard
          title="Administradores"
          value={3}
          description="acesso total"
          icon={<ShieldCheck />}
          variant="success"
        />

        <KpiCard
          title="Operadores"
          value={9}
          description="movimentações permitidas"
          icon={<UserCog />}
          variant="warning"
        />

        <KpiCard
          title="Usuários Inativos"
          value={2}
          description="sem login recente"
          icon={<UserX />}
          variant="danger"
        />
      </section>

      {/* INSIGHTS */}
      <InsightCard
        insights={[
          {
            id: 1,
            type: "warning",
            message:
              "Usuário 'Carlos Lima' está inativo há mais de 60 dias.",
          },
          {
            id: 2,
            type: "info",
            message:
              "9 usuários possuem permissão para entradas e saídas.",
          },
          {
            id: 3,
            type: "danger",
            message:
              "Usuário com role ADMIN sem autenticação reforçada.",
          },
        ]}
      />

      {/* TABELA */}
      <UsersTable
        items={[
          {
            id: 1,
            name: "Ana Souza",
            email: "ana@empresa.com",
            role: "ADMIN",
            lastAccess: "2025-01-14",
            status: "ATIVO",
          },
          {
            id: 2,
            name: "Carlos Lima",
            email: "carlos@empresa.com",
            role: "OPERADOR",
            lastAccess: "2024-11-12",
            status: "INATIVO",
          },
          {
            id: 3,
            name: "Mariana Alves",
            email: "mariana@empresa.com",
            role: "GERENTE",
            lastAccess: "2025-01-15",
            status: "ATIVO",
          },
        ]}
      />
    </div>
  );
}
