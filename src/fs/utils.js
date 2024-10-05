import { copyFile, mkdir, readdir, stat } from 'node:fs/promises';
import { join } from 'node:path';

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

export const copyDirectory = async (src, dest) => {
	const entities = await readdir(src);
	await mkdir(dest);

	for (const entity of entities) {
		const entitySourcePath = join(src, entity);
		const stats = await stat(entitySourcePath)

		if (stats.isFile()) {
			const entityDestPath = join(dest, entity);
			await copyFile(entitySourcePath, entityDestPath)
		} else if (stats.isDirectory()) {
			await copyDirectory(join(src, entity), join(dest, entity));
		}
	}
}