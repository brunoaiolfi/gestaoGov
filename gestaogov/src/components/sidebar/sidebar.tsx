export function Sidebar() {
    return (
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col">
        <h1 className="text-xl font-bold mb-8 flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
          </svg>
          GestãoGov
        </h1>
        <nav className="flex flex-col gap-3">
          <button className="flex items-center gap-3 font-semibold bg-gray-900 text-white py-2 px-4 rounded">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6" />
            </svg>
            Dashboard
          </button>
          <button className="flex items-center gap-3 hover:bg-gray-100 py-2 px-4 rounded transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M9 17v-6h6v6M9 11v-2a3 3 0 016 0v2" />
            </svg>
            Parcelas
          </button>
          <button className="flex items-center gap-3 hover:bg-gray-100 py-2 px-4 rounded transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <circle cx={12} cy={12} r={10} />
              <path d="M12 6v6l4 2" />
            </svg>
            Previsões
          </button>
          <button className="flex items-center gap-3 hover:bg-gray-100 py-2 px-4 rounded transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M9 17v-6h6v6M9 11v-2a3 3 0 016 0v2" />
            </svg>
            Plano de Trabalho
          </button>
          <button className="flex items-center gap-3 hover:bg-gray-100 py-2 px-4 rounded transition mt-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M12 4v16m8-8H4" />
            </svg>
            Configurações
          </button>
        </nav>
      </aside>
    );
  }
  