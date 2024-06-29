import { auth } from "@/auth";
import Logout from "@/components/Logout";
import Image from "next/image";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
	const session = await auth();

	if (!session?.user) return redirect("/");
	return (
		<div className="flex items-center text-center flex-col mx-auto shadow-lg mt-4 border p-3 w-[320px] rounded">
			<h1 className="mb-1">{session.user?.name}</h1>
			<h1 className="mb-4">{session.user?.email}</h1>
			{session.user?.image && (
				<Image
					className="rounded-full"
					src={session.user?.image as string}
					width={75}
					height={75}
					alt=""
				/>
			)}
			<div className=" mt-5 mb-3">
				<Logout />
			</div>
		</div>
	);
}
