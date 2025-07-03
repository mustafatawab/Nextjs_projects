// For this to work, you need to add these environment variables:
// GOOGLE_CLIENT_ID - Get from Google Cloud Console
// GOOGLE_CLIENT_SECRET - Get from Google Cloud Console
// NEXTAUTH_SECRET - Generate a random string for session encryption
// NEXTAUTH_URL - Your website URL (in development, use http://localhost:3000)

import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  pages: {
    signIn: "/sign-in",
  },
  callbacks: {
    async session({ session }) {
      return session
    },
  },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
