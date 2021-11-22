<script>
	import Menu from '../components/Menu.svelte';
	import '../global.css';
	import { codeStore } from '../stores/codeStore';

	let lines = 0;

	codeStore.subscribe((code) => {
		lines = code.split('\n').length;
	});
</script>

<svelt:head />
<div class="bg-[#141414] w-full min-h-screen flex pt-4 text-white">
	<Menu />

	<div class="pt-2 pl-4 flex w-10/12">
		<div class="text-[#404040] text-center pr-4">
			{#each Array(lines) as _, i}
				<p>{i + 1}</p>
			{/each}
		</div>
		<slot />
	</div>
</div>
