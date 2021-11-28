<script context="module" lang="ts">
	export const load = async ({ page, fetch }) => {
		const pasteId = page.params.id;
		const res = await fetch(`/api/${pasteId}`);

		const pasteData = await res.json();
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
	<pre
		class="w-full"><code class="bg-transparent {`language-${pasteData.language}`}">{pasteData.code}</code></pre>
{/if}
