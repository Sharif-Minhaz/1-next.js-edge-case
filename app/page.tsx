import { auth } from "@/auth";
import LoginForm from "../components/LoginForm";
import { redirect } from "next/navigation";

export default async function Home() {
	const session = await auth();

	if (session?.user) return redirect("/home");

	return (
		<main className="flex items-center flex-col justify-center mt-4">
			<h2 className="text-center text-2xl">Hey time to sign in</h2>
			<LoginForm />
		</main>
	);
}
