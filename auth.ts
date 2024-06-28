import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import User, { IUser } from "./lib/models/User.model";
import bcrypt from "bcryptjs";

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
					const user: IUser | null = await User.findOne({
						email: credentials?.email as string,
					}).lean();

					if (user) {
						const isMatch = await bcrypt.compare(
							credentials?.password as string,
							user.password
						);

						if (isMatch) {
							return user;
						} else {
							new Error("Wrong credentials");
						}
					} else {
						new Error("Wrong credentials");
					}
				} catch (error) {
					console.error(error);
				}
			},
		}),
	],
});
