<script lang="ts">
	import { goto } from '$app/navigation';
	import { codeStore } from '$stores/codeStore';
	import { aos } from '@codedbyjordan/aos';
	import { onMount } from 'svelte';
	import { languages } from '$lib/languages';

	let disableEditor = true;
	let selectedLang = '';

	$: console.log(selectedLang);

	let pasteCode: string = '';
	$: pasteCode == '' ? (disableEditor = true) : (disableEditor = false);
	codeStore.subscribe((code) => {
		pasteCode = code;
	});

	const savePaste = async () => {
		const res = await fetch('/api/save', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ code: pasteCode, language: selectedLang })
		});

		const json = await res.json();

		const id = json.id;

		await goto(`/${id}`);
	};

	onMount(() => {
		aos.init();
	});
</script>

<div
	class="fixed right-6 top-6 p-4 bg-white bg-opacity-10 w-96 rounded-md flex items-center justify-between"
	data-aos-animate="fadeInRight"
>
	<div class="flex justify-center">
		<img src="/logo.svg" alt="ctrl+v logo" width="110" />
	</div>
	<!-- Toolbar -->
	<div class="flex items-center justify-center">
		<button on:click={savePaste} disabled={disableEditor} class="bx bxs-save bx-md mx-1" />
		<a href="/"><i class="bx bxs-file-plus bx-md mx-1" /></a>
		<select bind:value={selectedLang} class="text-black">
			{#each languages as language}
				<option value={language.hjsValue}>{language.lang}</option>
			{/each}
		</select>
	</div>
</div>
