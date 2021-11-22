<script context="module" lang="ts">
	import { getPaste } from '../utils/firebase';
	import Prism from 'svelte-prism';

	export const load = async ({ page }) => {
		let pasteData = '';

		// only run on client
		if (typeof window !== 'undefined') {
			pasteData = await getPaste(page.params.id);
		}

		return {
			props: {
				pasteData
			}
		};
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	export let pasteId;
	export let pasteData;
</script>

{#if pasteData}
	<Prism language="html">{pasteData.code}</Prism>
{/if}
