import Link from "next/link";
import Image from "next/image";
import { auth } from "@/auth";
import Logout from "./Logout";

import { CircleUserRound } from "lucide-react";

const Navbar = async () => {
	const session = await auth();
	const loggedInUser = session?.user;

	const userName = loggedInUser?.name;

	return (
		<header className="flex items-center h-[80px] justify-between bg-slate-900 text-white px-4 py-2">
			<Link href="/">
				<h1 className="text-2xl">Product App</h1>
			</Link>
			<nav>
				<ul className="flex">
					{userName ? (
						<li className="flex items-center gap-2">
							<Link href="/dashboard">
								{session?.user?.image ? (
									<Image
										src={session?.user?.image}
										alt={session?.user?.name as string}
										width={35}
										height={35}
										className="rounded-full"
									/>
								) : (
									<CircleUserRound size={35} />
								)}
							</Link>
							<span className="mx-1">|</span>
							<Logout />
						</li>
					) : (
						<>
							<li className="mx-2">
								<Link href="/login">Login</Link>
							</li>
							<li className="mx-2">
								<Link href="/register">Register</Link>
							</li>
						</>
					)}
				</ul>
			</nav>
		</header>
	);
};

export default Navbar;
