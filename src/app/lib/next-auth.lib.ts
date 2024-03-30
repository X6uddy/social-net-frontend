import { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { $fetch } from '@/$api/api.fetch';
import { IUser } from '@/types/user.types';

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

						console.log(data);
						return {
							id: data.user.id.toString(),
							email: data.user.email,
							image: data.user.avatar?.url,
							name: data.user.username,
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
						image: data.user.avatar?.url,
						name: data.user.username,
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
			console.log('jwt tok', token);
			console.log('jwt user', user);
			console.log('jwt account', account);
			return { ...token, ...user }
		},
		session({ session, token, user }) {
			// session.user = 
			console.log('session session', session)
			console.log('session token', token)
			console.log('session user', user)
			return session
		},
	},
};