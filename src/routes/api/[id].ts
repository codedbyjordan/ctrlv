import { Paste } from '../../lib/models/Paste';
import { connectToDb } from '$utils/db';

export const get = async ({ params }) => {
	await connectToDb();
	const paste = await Paste.findById(params.id);
	console.log(paste.code.split('\n'));

	return {
		body: {
			code: paste.code,
			language: paste.language
		}
	};
};
