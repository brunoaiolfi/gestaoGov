import axios from "axios";
import { getSession } from "next-auth/react";

export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "https://api.exemplo.com", // coloque a URL da sua API aqui
    timeout: 10000, // 10 segundos de timeout, ajuste conforme precisar
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(async (config) => {
    const session = await getSession();

    if (session?.accessToken) { // não possui access token
        config.headers.Authorization = `Bearer ${session.accessToken}`;
    }

    return config;
});