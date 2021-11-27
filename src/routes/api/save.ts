import { Paste } from '$lib/models/Paste';
import { connectToDb } from '$utils/db';

export const post = async ({ body }) => {
	await connectToDb();
	const newPaste = await Paste.create({ code: body.code, language: body.language });

	return {
		body: {
			id: newPaste.id
		}
	};
};
