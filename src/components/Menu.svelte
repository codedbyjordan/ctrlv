<script lang="ts">
	import { dbAdd } from '../utils/firebase';
	import { codeStore } from '../stores/codeStore';

	let disableEditor = true;

	const savePaste = async () => {
		const id: string = await dbAdd(pasteCode);
		window.location.href = `/${id}`;
	};

	let pasteCode: string = '';

	$: pasteCode == '' ? (disableEditor = true) : (disableEditor = false);

	codeStore.subscribe((code) => {
		pasteCode = code;
	});
</script>

<div class="fixed right-6 top-6 p-4 bg-white bg-opacity-10 w-72">
	<div class="flex justify-center">
		<img src="/logo.svg" alt="ctrl+v logo" width="110" />
	</div>
	<!-- Toolbar -->
	<div class=" flex items-center justify-center mt-2">
		<button on:click={savePaste} disabled={disableEditor} class="bx bxs-save bx-md mx-1" />
		<a href="/"><i class="bx bx-code-alt bx-md mx-1" /></a>
	</div>
</div>
