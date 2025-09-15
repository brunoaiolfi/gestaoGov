import { StatusBadge } from "../statusBadge/statusBadge";

export enum StatusMes {
  Concluido = "Concluído",
  EmAndamento = "Em Andamento",
  Pendente = "Pendente",
}

export type Mes = {
  nome: string;
  parcela: string;
  previstos: string;
  realizados: string | null;
  saldo: string | null;
  status: StatusMes;
}

interface TabelaGastosMensaisProps {
  meses: Mes[];
}

export function TabelaGastosMensais({ meses }: TabelaGastosMensaisProps) {
  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Gastos Mensais - 2025</h3>
      <table className="w-full table-auto text-left">
        <thead>
          <tr className="border-b border-gray-300">
            <th className="py-2 px-4">Mês</th>
            <th className="py-2 px-4">Parcela Recebida</th>
            <th className="py-2 px-4">Gastos Previstos</th>
            <th className="py-2 px-4">Gastos Realizados</th>
            <th className="py-2 px-4">Saldo</th>
            <th className="py-2 px-4">Status</th>
            <th className="py-2 px-4 text-center">Ações</th>
          </tr>
        </thead>
        <tbody>
          {meses.map(({ nome, parcela, previstos, realizados, saldo, status }) => (
            <tr key={nome} className="border-b border-gray-200 hover:bg-gray-50">
              <td className="py-3 px-4">{nome}</td>
              <td className="py-3 px-4">{parcela}</td>
              <td className="py-3 px-4">{previstos}</td>
              <td className="py-3 px-4">{realizados ?? "-"}</td>
              <td className="py-3 px-4">{saldo ?? "-"}</td>
              <td className="py-3 px-4">
                <StatusBadge status={status} />
              </td>
              <td className="py-3 px-4 text-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block h-5 w-5 text-gray-600 hover:text-gray-900"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
