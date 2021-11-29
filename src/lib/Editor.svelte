<script lang="ts">
	import { codeStore } from '$stores/codeStore';
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

	const handleEditorKeypress = (event: KeyboardEvent) => {
		if (event.key === 'Tab') {
			event.preventDefault();
			editor.value += '\t';
		}
	};
</script>

<svelte:window on:keydown={handleEditorKeypress} />

<textarea
	bind:value={editorCode}
	bind:this={editor}
	class="bg-transparent outline-none resize-none w-full"
/>
