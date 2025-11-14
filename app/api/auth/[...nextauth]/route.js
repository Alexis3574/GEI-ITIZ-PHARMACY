import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';

const handler = NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Usuario y Contraseña',
      credentials: {
        usuario: { label: 'Usuario', type: 'text' },
        password: { label: 'Contraseña', type: 'password' },
      },
      async authorize(credentials) {
        const user = await prisma.usuarios.findUnique({
          where: { usuario: credentials.usuario },
        });

        if (!user || !user.password) {
          throw new Error('Usuario o contraseña incorrectos');
        }

        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) {
          throw new Error('Usuario o contraseña incorrectos');
        }

        return {
          id: user.id,
          name: user.nombre || user.usuario,
          rol: user.rol,
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.id = user.id;      
      token.rol = user.rol;
    }
    return token;
  },
  async session({ session, token }) {
    if (token) {
      session.user.id = token.id; 
      session.user.rol = token.rol;
    }
    return session;
  },
},

});

export { handler as GET, handler as POST };
