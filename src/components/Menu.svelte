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

<div class="fixed right-6 top-6 p-4 bg-white bg-opacity-10 w-72 h-24">
	<div class="font-bold text-center text-xl">ctrl+v</div>
	<!-- Toolbar -->
	<div class=" flex items-center">
		<button on:click={savePaste} disabled={disableEditor} class="bx bxs-save bx-md" />
	</div>
</div>
