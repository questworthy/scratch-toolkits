<script>
	import Button from '$lib/components/Button.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	let online = false;

	onMount(() => {
		// online = window.navigator.onLine;

		$appState.dialogue = 'Hi there!';
		$appState.title = '🍿 Step 1 : Story Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-1/step-2';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<SvelteMarkdown
		source={`
Hey learners! 👋

Are you excited to take the first step in your journey towards learning about gender, equity, and access? Let us first look at a story (built entirely using the Scratch software). 
`}
	/>

	{#if online}
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/Jpy55EgMQgY?si=rhV0DR2bbqJHBzp6"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	{:else}
		<p>Please download the scratch story <b>A Day in Rani's Life</b> from below :</p>
		<Button label="Open" />
		<Button base={false} label="Download" />
	{/if}
</div>
