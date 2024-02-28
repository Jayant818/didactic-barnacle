"use server";

import { User } from "@/database/user.model";
import { connectToDB } from "../mongoose";

export async function getAllUser() {
	try {
		await connectToDB();

		const users = await User.find({});

		return users;
	} catch (error) {
		console.log("Error aa gaya bhai log", error);
		throw error;
	}
}

interface CreateUserParams {
	name: string;
	number: string;
	email: string;
	Address: string;
	Description: string;
}

export async function createUser(userData: CreateUserParams) {
	try {
		// connect to DB is mandatory
		connectToDB();

		const user = await User.create(userData);

		return user;
	} catch (error) {
		console.log(error);
		throw error;
	}
}
