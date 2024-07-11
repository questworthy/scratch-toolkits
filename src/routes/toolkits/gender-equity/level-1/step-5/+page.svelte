<script>
	import SvelteMarkdown from 'svelte-markdown';
	import { onMount } from 'svelte';
	import { appState } from '$lib/stores';

	let online = false;
	let hidden = false;

	onMount(() => {
		online = window.navigator.onLine;
		setTimeout(() => {
			hidden = true;
		}, 1000);

		$appState.dialogue = 'Go ahead and try to build your own Scratch project!';
		$appState.title = 'Step 5';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-1/step-4';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-2/step-1';
	});
</script>

<div class="mx-auto max-w-screen-md prose font-inter m-4 p-4">
	<SvelteMarkdown
		source={` 
Build your own Scratch project!

There is no limit to what ONE INDIVIDUAL can do to become an agent of change. 💪
You can use what resources you have to spread awareness and positivity around you about the issue of gender stereotypes. 

The Scratch software is one fun and smart way to build for a cause. 🍄
You can create your own project or remix any existing projects available on the internet, including the one that you just saw in step 1.

So, “Stop not till the goal is reached” 
Well that was Swami Vivekanada but it could be you too! 😉

Go on Imagine, Program, Share with Scratch.
	`}
	/>
	<button
		on:mouseenter={() => {
			$appState.dialogue =
				'Go on and click the button to explore the scratch project or check out what Scratch is.';
		}}
		on:mouseleave={() => {
			$appState.dialogue = 'What are you waiting for ...';
		}}>Create yor own scratch Project</button
	>
	<button
		on:mouseenter={() => {
			$appState.dialogue =
				'Go on and click the button to explore the scratch project or check out what Scratch is.';
		}}
		on:mouseleave={() => {
			$appState.dialogue = 'What are you waiting for ...';
		}}>Remix the project earlier used in this level.</button
	>
</div>
