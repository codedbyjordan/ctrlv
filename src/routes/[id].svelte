<script context="module" lang="ts">
	import { getPaste } from '../utils/firebase';

	export const load = async ({ page }) => {
		const pasteId = page.params.id;
		let pasteData = '';

		// only run on client
		if (typeof window !== 'undefined') {
			pasteData = await getPaste(pasteId);
		}

		return {
			props: {
				pasteId,
				pasteData
			}
		};
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import hljs from 'highlight.js';

	export let pasteId;
	export let pasteData;

	onMount(() => {
		hljs.highlightAll();
	});
</script>

<svelte:head>
	<title>Paste ID {pasteId} - ctrl+v</title>
	<link rel="stylesheet" href="/styles/github-dark.css" />
</svelte:head>

{#if pasteData}
	<pre class="w-full"><code class="bg-transparent">{pasteData.code}</code></pre>
{/if}
