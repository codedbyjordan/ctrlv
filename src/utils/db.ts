import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(
	`mongodb+srv://${process.env.DB_UNAME}:${process.env.DB_PASSWORD}@ctrlv.tp1ux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`
);
