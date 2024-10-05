import { stat } from 'node:fs/promises';

export const checkExistence = async (path, entity) => {
	try {
		const stats = await stat(path);

		switch (entity) {
			case 'file':
				return stats.isFile();
			case 'directory':
				return stats.isDirectory();
		}
	} catch (error) {
		 return error.code !== 'ENOENT';
	}
}