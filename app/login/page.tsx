import LoginForm from "@/components/LoginForm";
import SocialLogin from "@/components/SocialLogin";
import Link from "next/link";

export default async function LoginPage() {
	return (
		<main className="flex items-center flex-col mx-auto justify-center mt-4 w-[346px]">
			<h2 className="text-center text-2xl mb-3">Hey, time to sign in</h2>
			<LoginForm />
			<div className="border-b border-gray-200 w-full mt-5" />
			<SocialLogin />
			<p className="text-center text-sm mt-4">
				Don&apos;t have any account?{" "}
				<Link href="/register" className="hover:underline text-blue-400">
					Register now.
				</Link>
			</p>
		</main>
	);
}
