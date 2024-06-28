import { logout } from "@/actions/auth";

export default function Logout() {
	return (
		<form action={logout}>
			<button
				type="submit"
				value="logout"
				className="bg-red-500 transition-colors active:scale-95 hover:bg-red-400 text-white px-5 py-2 mt-5 mb-3 rounded"
			>
				Logout
			</button>
		</form>
	);
}
