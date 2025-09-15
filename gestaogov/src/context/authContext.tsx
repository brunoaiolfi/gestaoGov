"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";
import { api } from "../infra/api";

interface User {
    id: string;
    nome: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, senha: string) => Promise<void>;
    logout: () => void;
    carregarUsuarioLogado: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    async function login(email: string, senha: string) {
        try {
            const response = await api.post("/auth", { email, senha });
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
                // Após salvar token, carregar dados do usuário
                await carregarUsuarioLogado();
            } else {
                throw new Error("Token não recebido");
            }
        } catch (error) {
            throw error; // repassa erro para tratamento externo
        }
    }

    function logout() {
        localStorage.removeItem("token");
        setUser(null);
    }

    async function carregarUsuarioLogado() {
        const token = localStorage.getItem("token");
        if (!token) {
            setUser(null);
            return;
        }

        try {
            // Supondo que você tenha um endpoint que retorna o usuário logado
            const response = await api.get("/me", {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(response.data);
        } catch {
            setUser(null);
            localStorage.removeItem("token"); // token inválido, limpa
        }
    }

    // Carrega o usuário ao montar o provider (ex: ao recarregar a página)
    useEffect(() => {
        carregarUsuarioLogado();
    }, []);

    return (
        <AuthContext.Provider value={{ user, login, logout, carregarUsuarioLogado }}>
            {children}
        </AuthContext.Provider>
    );
}
