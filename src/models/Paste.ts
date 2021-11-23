import { Schema, model, Mongoose, Model } from 'mongoose';

const pasteSchema = new Schema({
	code: String,
	language: String
});

export const Paste: Model<any> = model('Paste', pasteSchema);
