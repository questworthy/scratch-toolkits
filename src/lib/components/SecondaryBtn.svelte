<script>
	import { appState } from '$lib/stores';
</script>

<button
	class="px-4 py-2 relative border-2 border-[#52225E] hover:border-[#5B2715] text-[#52225E] hover:text-[#5B2715] group rounded-2xl"
	on:mouseenter={() => {
		$appState.dialogue =
			'Go on and click the button to explore the scratch project or check out what Scratch is.';
	}}
	on:mouseleave={() => {
		$appState.dialogue = 'What are you waiting for ...';
	}}
>
	<div
		class="rounded-2xl h-full w-full bg-[#F682A5] group-hover:bg-[#F9A474] absolute left-2 top-2 -z-10 group-hover:-translate-x-2 group-hover:-translate-y-2 transition-all duration-200"
	></div>
</button>
