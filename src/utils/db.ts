import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const username = process.env['DB_UNAME'];
const password = process.env['DB_PASSWORD'];

let cachedDb = null;

const connectionString = `mongodb+srv://${username}:${password}@ctrlv.tp1ux.mongodb.net/ctrlv?retryWrites=true&w=majority`;

export const connectToDb = async () => {
	if (cachedDb) return cachedDb;

	const db = await mongoose.connect(connectionString);
	cachedDb = db;

	return db;
};
