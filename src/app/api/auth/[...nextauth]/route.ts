import NextAuth from "next-auth/next";
import Auth0Provider from "next-auth/providers/auth0";

if (
  !process.env.AUTH0_CLIENT_ID ||
  !process.env.AUTH0_CLIENT_SECRET ||
  !process.env.AUTH0_ISSUER_BASE_URL
) {
  throw new Error("Missing one or more environment variables for Auth0");
}

const handler = NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID,
      clientSecret: process.env.AUTH0_CLIENT_SECRET,
      issuer: process.env.AUTH0_ISSUER_BASE_URL,
    }),
  ],
});

export { handler as GET, handler as POST };
