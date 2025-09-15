interface CardResumoProps {
  title: string;
  value: string;
  icon: string;
  iconColor?: string;
}

function CardResumo({ title, value, icon, iconColor }: CardResumoProps) {
  return (
    <div className="text-center">
      <p className="text-sm font-medium">{title}</p>
      <p className="text-lg font-bold">{value}</p>
      <span
        className={`inline-block mt-1 text-gray-400 ${iconColor ?? ""}`}
        dangerouslySetInnerHTML={{ __html: icon }}
      />
    </div>
  );
}

export function ResumoFinanceiro() {
  return (
    <div className="flex items-center gap-6 text-gray-700">
      <CardResumo title="Total Recebido" value="R$ 120.000" icon="&#x2193;" />
      <CardResumo title="Total Gasto" value="R$ 95.500" icon="&#x2191;" />
      <CardResumo title="Saldo Disponível" value="R$ 24.500" icon="&#x1F4B3;" />
      <CardResumo title="Próximo Vencimento" value="15 dias" icon="&#x23F0;" />
    </div>
  );
}
