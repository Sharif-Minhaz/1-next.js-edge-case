import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Logout from "@/components/Logout";

export default async function Home() {
	const session = await auth();

	if (!session?.user) return redirect("/");

	return (
		<div className="flex items-center text-center flex-col mt-4">
			<h1 className="mb-1">{session.user?.email}</h1>
			<h1 className="mb-2">{session.user?.name}</h1>
			<Image
				className="rounded-full"
				src={session.user?.image as string}
				width={72}
				height={72}
				alt=""
			/>
			<Logout />
		</div>
	);
}
