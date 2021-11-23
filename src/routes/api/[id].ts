import { Paste } from '../../models/Paste';
import { database } from '../../utils/db';

export const get = async ({ params }) => {
	await database.connect();
	const paste = await Paste.findById(params.id);
	await database.disconnect();

	return {
		body: {
			code: paste.code,
			language: paste.language
		}
	};
};
