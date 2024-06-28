import { NextResponse } from "next/server";
import { createUser } from "@/lib/db/queries/user";
import { dbConnect } from "@/lib/db/mongo";
import bcrypt from "bcryptjs";

export const POST = async (request: Request) => {
	try {
		const { name, email, password } = await request.json();

		await dbConnect();

		const hashedPassword = await bcrypt.hash(password, 5);

		const newUser = {
			name,
			password: hashedPassword,
			email,
		};

		await createUser(newUser);
	} catch (err: any) {
		return new NextResponse(err.message, {
			status: 500,
		});
	}

	return new NextResponse("User has been created successfully", { status: 201 });
};
