<script>
	import { appState } from '$lib/stores';
	export let base = true;
	export let label = 'Submit';
	export let entryDialogue = 'entry dialogue.';
	export let exitDialogue = 'exit dialogue';
</script>

<button
	class="{base
		? 'border-[#52225E] hover:border-[#5B2715] text-[#52225E] hover:text-[#5B2715]'
		: 'border-[#52225E] hover:border-[#1C471F] text-[#52225E] hover:text-[#1C471F]'} mx-2 my-4 px-4 py-2 relative border-2 group rounded-2xl"
	on:mouseenter={() => {
		$appState.dialogue = entryDialogue;
	}}
	on:mouseleave={() => {
		$appState.dialogue = exitDialogue;
	}}
>
	<div
		class="{base
			? 'bg-[#F682A5] group-hover:bg-[#F9A474]'
			: 'bg-[#C3B2E7] group-hover:bg-[#C9D990]'} rounded-2xl h-full w-full absolute left-2 top-2 -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-200"
	></div>
	{label}
</button>
