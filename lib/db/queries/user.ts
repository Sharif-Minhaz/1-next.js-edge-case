import User, { IUser } from "@/lib/models/User.model";

export async function createUser(user: IUser) {
	try {
		await User.create(user);
	} catch (error: any) {
		throw new Error(error.message);
	}
}
