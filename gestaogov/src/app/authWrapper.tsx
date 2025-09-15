"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/hooks/useAuth";

export default function AuthWrapper({ children }: { children: React.ReactNode }) {
    const { user } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (user === null) {
            // Usuário não está logado -> vai pro login
            router.replace("/login");
        } else if (user) {
            // Usuário logado -> vai pro dashboard
            router.replace("/dashboard");
        }
        // Se user estiver undefined ou carregando, pode deixar a tela atual
    }, [user, router]);

    // Enquanto decide, pode mostrar nada ou um loading
    return <>{children}</>;
}
