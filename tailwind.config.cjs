module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			fontFamily: {
				'dm-mono': ['DM Mono', 'monospace']
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
