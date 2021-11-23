import { Paste } from '../../models/Paste';
import { database } from '../../utils/db';

export const post = async ({ body }) => {
	await database.connect();
	const newPaste = await Paste.create({ code: body.code, language: 'auto' });
	await database.disconnect();

	return {
		body: {
			id: newPaste.id
		}
	};
};
