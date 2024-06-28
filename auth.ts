import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import { getUserByEmail } from "./data/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
	session: { strategy: "jwt" },
	providers: [
		Google({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		Github({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		Credentials({
			// @ts-ignore
			async authorize(credentials) {
				if (credentials === null) return null;
				try {
					const user = getUserByEmail(credentials?.email as string);

					if (user) {
						const isMatch = credentials?.password === user.password;
						if (isMatch) {
							return user;
						} else {
							new Error("Wrong credentials");
						}
					} else {
						new Error("User not found");
					}
				} catch (error) {
					console.error(error);
				}
			},
		}),
	],
});
