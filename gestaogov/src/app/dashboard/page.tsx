// pages/DashboardFinanceiro.jsx

import { HeaderDashboard } from "@/components/headerDashboard/headerDashboard";
import { Sidebar } from "@/components/sidebar/sidebar";
import { TabelaGastosMensais } from "@/components/tabelaGastosMensais/tabelaGastosMensais";

export default function DashboardFinanceiro() {
  const meses = [
    {
      nome: "Janeiro",
      parcela: "R$ 10.000,00",
      previstos: "R$ 9.500,00",
      realizados: "R$ 8.200,00",
      saldo: "R$ 1.800,00",
      status: "Concluído",
    },
    {
      nome: "Fevereiro",
      parcela: "R$ 10.000,00",
      previstos: "R$ 9.800,00",
      realizados: "R$ 9.300,00",
      saldo: "R$ 700,00",
      status: "Concluído",
    },
    {
      nome: "Março",
      parcela: "R$ 10.000,00",
      previstos: "R$ 10.200,00",
      realizados: "R$ 7.800,00",
      saldo: "R$ 2.200,00",
      status: "Em Andamento",
    },
    {
      nome: "Abril",
      parcela: "R$ 10.000,00",
      previstos: "R$ 9.600,00",
      realizados: "-",
      saldo: "-",
      status: "Pendente",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <HeaderDashboard />
        <TabelaGastosMensais meses={meses} />
      </main>
    </div>
  );
}
