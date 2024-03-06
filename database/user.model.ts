import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
	name: string;
	number: string;
	Address: string;
	Description: string;
}

const UserSchema = new Schema({
	name: String,
	number: String,
	Address: String,
	Description: String,
});

export const User = models.User || model<IUser>("User", UserSchema);
