
export enum StatusMes {
  Concluido = "Concluído",
  EmAndamento = "Em Andamento",
  Pendente = "Pendente",
}

interface StatusBadgeProps {
  status: StatusMes;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  let classes = "";
  switch (status) {
    case StatusMes.Concluido:
      classes = "bg-green-200 text-green-800";
      break;
    case StatusMes.EmAndamento:
      classes = "bg-yellow-200 text-yellow-800";
      break;
    case StatusMes.Pendente:
      classes = "bg-gray-200 text-gray-800";
      break;
    default:
      classes = "";
  }
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${classes}`}>
      {status}
    </span>
  );
}