<script>
	import { appState } from '$lib/stores';
	export let entryDialogue = 'entry dialogue.';
	export let exitDialogue = 'exit dialogue';
</script>

<button
	on:mouseenter={() => {
		$appState.dialogue = entryDialogue;
	}}
	on:mouseleave={() => {
		$appState.dialogue = exitDialogue;
	}}
>
</button>
