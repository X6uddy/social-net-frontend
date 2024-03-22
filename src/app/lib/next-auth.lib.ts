import { IAuthFormState } from "@/components/screens/auth/auth.types";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const AuthOptions = {
  providers: [
    Credentials({
        name: 'Credentials',
        credentials: {
          email: {type: 'text'},
          password: {type: 'password'},
        },
        async authorize(credentials) {
            const { email, password } = credentials as IAuthFormState;
    
            const { user } = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
            );
            const data = await response.json();
    
            if (!user) {
              const { userCreate } = await grafbase.request(CreateUserByemail, {
                email,
                passwordHash: await hash(password, 12),
              })
    
              return {
                id: userCreate.id,
                email,
              }
            }
    
            const isValid = await compare(password, user.passwordHash)
    
            if (!isValid) {
              throw new Error('Wrong credentials. Try again.')
            }
    
            return user
        },
      }),
  ],
  database: process.env.NEXT_PUBLIC_DATABASE_URL,
  session: {
    jwt: true,
  },
  callbacks: {
    session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;
      return Promise.resolve(session);
    },
    jwt: async (token, user, account) => {
      const isSignIn = user ? true : false;
      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${account.provider}/callback?access_token=${account?.accessToken}`
        );
        const data = await response.json();
        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return Promise.resolve(token);
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, AuthOptions);

export default Auth;