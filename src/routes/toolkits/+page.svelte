<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.pattern = '';
		$appState.expression = 'blank';
		$appState.dialogue =
			"Welcome to Scratch Toolkit. Place your mouse over each image & I'll tell you what it is about.";
		$appState.title = '🧭 Choose Your Adventure !';
		$appState.leftButtonLink = '/';
		$appState.rightButtonLink = '';
	});

	const toolkits = [
		{
			label: 'Scratch Basics',
			url: 'http://172.105.48.200:8001/home.html',
			color: '#E7F0DC',
			text: '#5B2715',
			src: 'scratch-basics-toolkit.png',
			alt: 'Scratch Basics Toolkit Option'
		},
		{
			label: 'Gender Equity',
			url: '/toolkits/gender-equity',
			color: '#F7E7DC',
			text: '#1C471F',
			src: 'gender-equity-toolkit.png',
			alt: 'Gender Equity Toolkit Option'
		}
	];
</script>

<div class="mx-auto flex flex-col justify-center items-center md:flex-row gap-8 m-4">
	{#each toolkits as toolkit}
		<a
			on:mouseenter={() => {
				$appState.expression = 'smile';
			}}
			on:mouseleave={() => {
				$appState.expression = 'blank';
			}}
			class="w-80 rounded-xl no-underline"
			href={toolkit.url}
		>
			<img
				style="background-color: {toolkit.color};"
				class="rounded-xl shadow-md object-fill hover:scale-120 hover:-translate-y-4 hover:rotate-3 transition-all duration-200"
				src={toolkit.src}
				alt={toolkit.alt}
			/>
			<p class="p-2 m-2 font-bold text-center text-2xl">
				{toolkit.label}
			</p>
		</a>
	{/each}
</div>
