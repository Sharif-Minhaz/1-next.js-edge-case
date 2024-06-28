import { loginWithSocial } from "../actions/auth";

export default function SocialLogin() {
	return (
		<form action={loginWithSocial} className="flex gap-3 mt-4">
			<button
				className="text-white bg-orange-500 px-4 py-2.5 rounded-md active:scale-95 transition-all"
				type="submit"
				name="action"
				value="google"
			>
				Login with google
			</button>
			<button
				className="text-white bg-black px-4 py-2.5 rounded-md active:scale-95 transition-all"
				type="submit"
				name="action"
				value="github"
			>
				Login with github
			</button>
		</form>
	);
}
