// src/app/api/auth/[...nextauth]/route.ts
import { api } from "@/infra/api";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          return {
            id: '1',
            email: 'testes',
            image: 'teste',
            name: 'testes',
            accessToken: 'testestse2'
          }
          const response = await api.post("/auth/login", {
            email: credentials?.email,
            password: credentials?.password
          });

          const user = response.data;

          if (user?.token) {
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              accessToken: user.token // <- ESSENCIAL
            };
          }

          return null;
        } catch (error) {
          console.error("Erro ao autenticar:", error);
          return null;
        }
      }
    })
  ],

  session: {
    strategy: "jwt"
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user?.accessToken) {
        token.accessToken = user.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    }
  },

  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login"
  }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
