<script>
	import Nav from '$lib/components/Nav.svelte';
	import Lily from '$lib/components/Lily.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.expression = 'blank';
	});
</script>

<Nav />

<div
	class="m-2 flex flex-col md:gap-4 md:flex-row-reverse justify-center items-end md:translate-y-1/2"
>
	<div class="p-4">
		<Lily expression={$appState.expression} />
	</div>
	<div class="prose">
		<p class="text-6xl m-0">Build games & stories with Scratch</p>
		<p class="text-2xl text-stone-400 font-bold">
			Share your creations, inspire others, and develop computational thinking through Scratch.
		</p>
		<a href="/toolkits">
			<button
				on:mouseenter={() => {
					$appState.expression = 'smile';
				}}
				on:mouseleave={() => {
					$appState.expression = 'blank';
				}}
				class="p-4 my-2 md:my-4 rounded-xl text-3xl font-semibold bg-[#C9D990] hover:bg-[#fedf70] text-[#1C471F] hover:text-[#4a401b] shadow-md active:scale-90 active:translate-y-2 transition-all duration-200"
			>
				Get Started
			</button>
		</a>
	</div>
</div>
