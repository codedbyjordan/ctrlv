<script context="module" lang="ts">
	export const load = async ({ page }) => {
		const pasteId = page.params.id;

		return {
			props: {
				pasteId
			}
		};
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import hljs from 'highlightjs';

	export let pasteId;
	let pasteData;

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
