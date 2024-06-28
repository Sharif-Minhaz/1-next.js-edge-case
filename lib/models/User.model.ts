import { Schema, models, model } from "mongoose";

export interface IUser {
	name: string;
	email: string;
	password: string;
}

const userSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const User = models.User || model("User", userSchema);

export default User;
