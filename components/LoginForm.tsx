"use client";

import { loginWithCredentials } from "@/actions/auth";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function LoginForm() {
	const router = useRouter();
	const [error, setError] = useState("");

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const formData = new FormData(e.currentTarget);

			const response = await loginWithCredentials(formData);

			if (!!response.error) {
				setError(response.error?.message);
			} else {
				router.push("/products");
			}
		} catch (error) {
			console.error(error);
			setError("Check your credentials");
		}
	};

	return (
		<form className="mt-4 w-full" onSubmit={handleSubmit}>
			{error && <div className="text-red-500 text-center">{error}</div>}
			<div className="flex flex-col">
				<label className="mb-1.5" htmlFor="email">
					Email address
				</label>
				<input
					className="border w-full border-gray-200 rounded px-2 py-2 mb-3"
					type="email"
					name="email"
					id="email"
					required
				/>
			</div>
			<div className="flex flex-col">
				<label className="mb-1.5" htmlFor="password">
					Password
				</label>
				<input
					className="border w-full border-gray-200 rounded px-2 py-2 mb-3"
					type="password"
					name="password"
					id="password"
					required
				/>
			</div>
			<div className="flex justify-center mt-2">
				<button
					type="submit"
					className="text-white bg-green-500 px-4 py-2.5 rounded-md active:scale-95 transition-all"
				>
					Credential Login
				</button>
			</div>
		</form>
	);
}
