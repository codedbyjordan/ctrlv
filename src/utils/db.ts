import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const username = process.env['DB_UNAME'];
const password = process.env['DB_PASSWORD'];

export const database = {
	connectionString: `mongodb+srv://${username}:${password}@ctrlv.tp1ux.mongodb.net/ctrlv?retryWrites=true&w=majority`,

	connect: async function () {
		await mongoose.connect(this.connectionString);
	},
	disconnect: async () => {
		await mongoose.disconnect();
	}
};
