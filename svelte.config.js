import preprocess from 'svelte-preprocess';
import vercel from '@sveltejs/adapter-vercel';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: vercel(),
		vite: {
			resolve: {
				alias: {
					$utils: path.resolve('./src/utils'),
					$stores: path.resolve('./src/stores')
				}
			}
		}
	},
	vite: {
		optimizeDeps: {
			include: ['highlight.js/lib/core']
		}
	}
};

export default config;
