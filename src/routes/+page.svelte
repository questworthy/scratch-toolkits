<script>
	import Nav from '$lib/components/Nav.svelte';
	import Lily from '$lib/components/Lily.svelte';
	import Btn from '$lib/components/Btn.svelte';
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
	<div class="max-w-sm">
		<p class="text-6xl m-0">Scratch Your Coding Itch !</p>
		<p class="text-2xl text-stone-400 font-bold">
			Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur
			cupidatat.
		</p>
		<a
			href="/toolkits"
			on:mouseenter={() => {
				$appState.expression = 'smile';
			}}
			on:mouseleave={() => {
				$appState.expression = 'blank';
			}}
		>
			<Btn>Get Started !</Btn>
		</a>
	</div>
</div>

<svg class="fixed top-0 -z-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
	><path
		fill="#333333"
		fill-opacity="1"
		d="M0,160L40,181.3C80,203,160,245,240,245.3C320,245,400,203,480,165.3C560,128,640,96,720,90.7C800,85,880,107,960,133.3C1040,160,1120,192,1200,213.3C1280,235,1360,245,1400,250.7L1440,256L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
	></path></svg
>
