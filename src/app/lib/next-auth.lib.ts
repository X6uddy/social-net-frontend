import { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { $fetch } from '@/$api/api.fetch';
import { IUser } from '@/types/user.types';
import toast from 'react-hot-toast/headless';

export const nextAuthOptions: AuthOptions = {
	providers: [
		Credentials({
			credentials: {
				username: {
					type: 'text',
				},
				email: {
					type: 'text',
				},
				password: { type: 'password' },
			},
			async authorize(credentials) {
				if (!credentials?.email || !credentials.password) return null

				if (credentials.username) {
					try {
						const data = await $fetch.post<{
							user: IUser
							jwt: string
						}>(`/auth/local/register?populate[avatar]=*`, credentials)

						console.log(data)
						return {
							id: data.user.id.toString(),
							email: data.user.email,
							avatar: data.user.avatar?.url,
							username: data.user.username,
							jwt: data.jwt,
						} as User
					} catch (e) {
						return Promise.reject({
							message: 'Register error, not valid data!',
						})
					}
				}

				try {
					const data = await $fetch.post<{
						user: IUser
						jwt: string
					}>(`/auth/local?populate[avatar]=*`, {
						identifier: credentials.email,
						password: credentials.password,
					})
					console.log(`${data.user.email} - ${data.user.username} is logged in`);
					return {
						id: data.user.id.toString(),
						email: data.user.email,
						avatar: data.user.avatar?.url,
						username: data.user.username,
						jwt: data.jwt,
					} as User
				} catch (e) {
					return Promise.reject({
						message: 'Login error, not valid data!',
					})
				}
			},
		}),
	],
	callbacks: {
		jwt({ token, user, account }) {
			return { ...token, ...user }
		},
		session({ session, token, user }) {
			// session.user = token as IUser
			// return session
      return session
		},
	},
};