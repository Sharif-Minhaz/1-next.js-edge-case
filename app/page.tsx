import { auth } from "@/auth";
import SocialLogin from "../components/SocialLogin";
import { redirect } from "next/navigation";
import LoginForm from "@/components/LoginForm";

export default async function Home() {
	const session = await auth();

	if (session?.user) return redirect("/home");

	return (
		<main className="flex items-center flex-col justify-center mt-4">
			<h2 className="text-center text-2xl">Hey time to sign in</h2>
			<LoginForm />
			<div className="border-b border-gray-200 w-[335px] mt-5" />
			<SocialLogin />
		</main>
	);
}
