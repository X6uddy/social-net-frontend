import NextAuth from 'next-auth';
import { Auth } from '@/app/lib/next-auth.lib';

const handler = NextAuth(Auth);
export { handler as GET, handler as POST };