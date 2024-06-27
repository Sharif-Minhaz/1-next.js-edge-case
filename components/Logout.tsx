import { logout } from "@/actions/auth";

export default function Logout() {
	return (
		<form action={logout}>
			<button
				type="submit"
				value="logout"
				className="bg-red-500 text-white px-4 py-1 my-3 rounded"
			>
				Logout
			</button>
		</form>
	);
}
