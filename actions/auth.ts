"use server";

import { signIn, signOut } from "@/auth";

export async function loginWithSocial(formData: FormData) {
	const action = formData.get("action");

	await signIn(action as string, { redirectTo: "/home" });
}

export async function logout() {
	await signOut({ redirectTo: "/" });
}

export async function loginWithCredentials(formData: FormData) {
	try {
		const response = await signIn("credentials", {
			email: formData.get("email"),
			password: formData.get("password"),
			redirect: false,
		});

		return response;
	} catch (error: any) {
		throw new Error(error.message);
	}
}
