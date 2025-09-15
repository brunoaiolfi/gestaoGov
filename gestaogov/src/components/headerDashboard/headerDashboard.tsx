import { ResumoFinanceiro } from "../resumoFinanceiro/resumoFinanceiro";

export function HeaderDashboard() {
    return (
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-2xl font-bold">Dashboard Financeiro 2025</h2>
          <p className="text-gray-500">Gestão de parcelas e previsão de gastos mensais</p>
        </div>
        <ResumoFinanceiro />
      </header>
    );
  }
  