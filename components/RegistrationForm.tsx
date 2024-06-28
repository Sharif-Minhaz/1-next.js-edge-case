"use client";

import { FormEvent } from "react";

import { useRouter } from "next/navigation";

export default function RegistrationForm() {
	const router = useRouter();

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		try {
			const formData = new FormData(e.currentTarget);
			const name = formData.get("name");
			const email = formData.get("email");
			const password = formData.get("password");

			const response = await fetch("/api/register", {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ name, email, password }),
			});

			if (response.status === 201) {
				router.push("/");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form className="mt-4 w-full" onSubmit={handleSubmit}>
			{/* {error && <div className="text-red-500 text-center">{error}</div>} */}
			<div className="flex flex-col">
				<label className="mb-1.5" htmlFor="name">
					Full name
				</label>
				<input
					className="border border-gray-200 rounded px-2 py-2 mb-3"
					name="name"
					id="name"
				/>
			</div>
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
					Register
				</button>
			</div>
		</form>
	);
}
