"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { signIn } from "next-auth/react";

const schema = z.object({
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter ao menos 6 caracteres"),
});

type LoginFormInputs = z.infer<typeof schema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(schema),
  });

  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(data: LoginFormInputs) {
    setError(null);
    setLoading(true);

    try {
      await signIn("credentials", {
        email: data.email,
        password: data.senha,
        callbackUrl: "/dashboard"
      })
    } catch (err: any) {
      setError("Email/Senha inválidos!");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Gestão gov</h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register("email")}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
                }`}
              placeholder="seuemail@exemplo.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Senha</label>
            <input
              type="password"
              {...register("senha")}
              className={`mt-1 w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${errors.senha ? "border-red-500" : "border-gray-300"
                }`}
              placeholder="••••••••"
            />
            {errors.senha && (
              <p className="text-red-600 text-sm mt-1">{errors.senha.message}</p>
            )}
          </div>

          {error && <p className="text-red-600 text-sm">{error}</p>}

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={loading}
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Não tem uma conta?{" "}
          <a href="/register" className="text-blue-600 hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
}
