<script lang="ts">
	import { codeStore } from '../stores/codeStore';
	import autosize from 'autosize';
	import { onMount } from 'svelte';

	let editor: HTMLTextAreaElement;
	let editorCode: string = '';

	$: {
		codeStore.set(editorCode);
	}
	onMount(() => {
		autosize(editor);
		editor.focus();
	});
</script>

<textarea
	bind:value={editorCode}
	bind:this={editor}
	class="bg-transparent outline-none resize-none w-full"
/>
