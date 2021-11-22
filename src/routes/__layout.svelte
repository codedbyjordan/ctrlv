<script>
	import Menu from '../components/Menu.svelte';
	import '../global.css';
	import { codeStore } from '../stores/codeStore';

	let lines = 0;

	codeStore.subscribe((code) => {
		lines = code.split('\n').length;
	});
</script>

<div class="bg-[#141414] w-full h-screen flex pt-4">
	<Menu />

	<div class="text-[#404040] text-center pl-4 pr-4">
		{#each Array(lines) as _, i}
			<p>{i + 1}</p>
		{/each}
	</div>
	<slot />
</div>
