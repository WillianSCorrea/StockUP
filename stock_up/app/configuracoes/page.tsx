import {
  Settings,
  ShieldAlert,
  Users,
  SlidersHorizontal,
} from "lucide-react";

import { KpiCard } from "../../components/UI/KpiCard";
import { InsightCard } from "../../components/UI/InsightCard";
import { SettingsCard } from "../../components/UI/SettingsCard";

export default function SettingsPage() {
  return (
    <div className="space-y-8">
      {/* KPI CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <KpiCard
          title="Configurações Ativas"
          value={12}
          description="parâmetros definidos"
          icon={<Settings />}
          variant="info"
        />

        <KpiCard
          title="Alertas de Segurança"
          value={2}
          description="itens pendentes"
          icon={<ShieldAlert />}
          variant="danger"
        />

        <KpiCard
          title="Perfis de Usuário"
          value={3}
          description="ADMIN, GERENTE, OPERADOR"
          icon={<Users />}
          variant="success"
        />

        <KpiCard
          title="Regras de Estoque"
          value={5}
          description="mínimos e alertas"
          icon={<SlidersHorizontal />}
          variant="warning"
        />
      </section>

      {/* INSIGHTS */}
      <InsightCard
        insights={[
          {
            id: 1,
            type: "danger",
            message:
              "Autenticação em dois fatores não está habilitada.",
          },
          {
            id: 2,
            type: "warning",
            message:
              "Limite mínimo de estoque não definido para todos os produtos.",
          },
          {
            id: 3,
            type: "info",
            message:
              "Políticas de acesso estão ativas para todos os usuários.",
          },
        ]}
      />

      {/* CONFIGURAÇÕES */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SettingsCard
          title="Segurança"
          description="Autenticação, tokens e políticas"
          items={[
            "JWT ativo",
            "Expiração de token: 24h",
            "2FA desativado",
          ]}
        />

        <SettingsCard
          title="Estoque"
          description="Regras e limites operacionais"
          items={[
            "Estoque mínimo por produto",
            "Alertas automáticos",
            "Controle de entradas e saídas",
          ]}
        />

        <SettingsCard
          title="Usuários"
          description="Papéis e permissões"
          items={[
            "Admin: acesso total",
            "Gerente: relatórios e estoque",
            "Operador: movimentações",
          ]}
        />

        <SettingsCard
          title="Sistema"
          description="Preferências gerais"
          items={[
            "Idioma: Português (BR)",
            "Fuso horário: GMT-3",
            "Modo claro ativo",
          ]}
        />
      </section>
    </div>
  );
}
