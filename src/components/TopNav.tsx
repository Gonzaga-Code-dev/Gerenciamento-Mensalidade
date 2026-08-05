"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const TABS = [
  { href: "/", label: "Dashboard" },
  { href: "/pagamentos/novo", label: "Adicionar" },
  { href: "/pagamentos", label: "Listar" },
  { href: "/relatorio", label: "Relatório" },
];

export default function TopNav({ userName }: { userName: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
    router.refresh();
  }

  return (
    <header className="bg-white border-b-4 border-verde-escuro sticky top-0 z-20">
      <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-lg sm:text-xl font-extrabold text-verde-escuro leading-tight">
            Ilê Alaletu Axé Omim Odé Iboalamo
          </p>
          <p className="text-sm text-cinza-escuro/70">Olá, {userName}</p>
        </div>
        <button
          onClick={handleLogout}
          className="btn-grande px-4 rounded-lg border-2 border-cinza-escuro/20 text-base font-semibold hover:bg-cinza-claro"
        >
          Sair
        </button>
      </div>
      <nav className="max-w-5xl mx-auto px-4 pb-3 flex gap-2 overflow-x-auto">
        {TABS.map((tab) => {
          const active = pathname === tab.href;
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`btn-grande shrink-0 px-5 flex items-center justify-center rounded-full text-base font-bold transition-colors ${
                active
                  ? "bg-azul text-white"
                  : "bg-cinza-claro text-cinza-escuro hover:bg-azul/10"
              }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
