"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button, Card } from "@/components/ui";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        setError(data.error ?? "Não foi possível entrar.");
        setLoading(false);
        return;
      }

      const redirect = searchParams.get("redirect") ?? "/";
      router.push(redirect);
      router.refresh();
    } catch {
      setError("Erro de conexão. Tente novamente.");
      setLoading(false);
    }
  }

  return (
    <Card className="w-full max-w-md">
      <h1 className="text-2xl font-extrabold text-verde-escuro mb-1">
        Ilê Alaletu Axé Omim Odé Iboalamo
      </h1>
      <p className="text-cinza-escuro/70 mb-6">
        Entre para gerenciar as mensalidades do terreiro.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="font-bold">E-mail</span>
          <input
            type="email"
            required
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="btn-grande border-2 border-cinza-escuro/20 rounded-xl px-4 text-lg focus:border-azul outline-none"
            placeholder="seuemail@exemplo.com"
          />
        </label>

        <label className="flex flex-col gap-1">
          <span className="font-bold">Senha</span>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="btn-grande border-2 border-cinza-escuro/20 rounded-xl px-4 text-lg focus:border-azul outline-none"
            placeholder="Sua senha"
          />
        </label>

        {error && (
          <p className="text-red-600 font-semibold" role="alert">
            {error}
          </p>
        )}

        <Button type="submit" disabled={loading} className="w-full mt-2">
          {loading ? "Entrando..." : "ENTRAR"}
        </Button>
      </form>
    </Card>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cinza-claro p-4">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}
