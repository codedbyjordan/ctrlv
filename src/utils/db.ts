import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const username: string = process.env['DB_UNAME'];
const password: string = process.env['DB_PASSWORD'];
const connectionUrl: string = process.env['CONNECTION_URL'];
const dbName: string = process.env['DB_NAME'];

let cachedDb = null;

const connectionString = `mongodb+srv://${username}:${password}@${connectionUrl}/${dbName}?retryWrites=true&w=majority`;

export const connectToDb = async () => {
	if (cachedDb) return cachedDb;

	const db = await mongoose.connect(connectionString);
	cachedDb = db;

	return db;
};
