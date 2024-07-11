<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.expression = 'blank';
		$appState.dialogue =
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.';
		$appState.title = 'Choose Your Adventure !';
		$appState.leftButtonLink = '/';
		$appState.rightButtonLink = '';
	});

	const toolkits = [
		{
			label: 'Gender Equity',
			url: '/toolkits/gender-equity',
			color: '#F7E7DC',
			src: 'gender-equity-toolkit.png',
			alt: 'Gender Equity Toolkit Option'
		},
		{
			label: 'Scratch Basics',
			url: 'http://172.105.48.200:8001/code_game_explore.html',
			color: '#E7F0DC',
			src: 'scratch-basics-toolkit.png',
			alt: 'Scratch Basics Toolkit Option'
		}
	];
</script>

<div class="mx-auto flex flex-col md:flex-row md:translate-y-1/2 gap-8 m-4">
	{#each toolkits as toolkit}
		<a
			on:mouseenter={() => {
				$appState.smile = true;
			}}
			on:mouseleave={() => {
				$appState.smile = false;
			}}
			class="w-80 rounded-xl"
			href={toolkit.url}
		>
			<img
				style="background-color: {toolkit.color};"
				class="rounded-xl shadow-md object-fill hover:scale-120 hover:-translate-y-8 hover:rotate-3 transition-all duration-200"
				src={toolkit.src}
				alt={toolkit.alt}
			/>
			<p class="p-2 m-2 text-center">{toolkit.label}</p>
		</a>
	{/each}
</div>
