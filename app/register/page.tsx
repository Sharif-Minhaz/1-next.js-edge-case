import RegistrationForm from "@/components/RegistrationForm";
import SocialLogin from "@/components/SocialLogin";
import Link from "next/link";

export default function RegisterPage() {
	return (
		<div className="w-[346px] mx-auto">
			<h1 className="text-2xl text-center mt-4">Registration Form</h1>
			<RegistrationForm />
			<div className="border-b border-gray-200 w-full mt-5" />
			<SocialLogin />
			<p className="text-center text-sm mt-4">
				Already have an account?{" "}
				<Link href="/" className="hover:underline text-blue-400">
					Login now.
				</Link>
			</p>
		</div>
	);
}
