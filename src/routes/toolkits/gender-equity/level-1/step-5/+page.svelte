<script>
	import { onMount } from 'svelte';
	import { appState } from '$lib/stores';
	import Button from '$lib/components/Button.svelte';
	import Paper from '$lib/components/Paper.svelte';

	let online = false;
	let hidden = false;

	onMount(() => {
		online = window.navigator.onLine;
		setTimeout(() => {
			hidden = true;
		}, 1000);

		$appState.pattern = '/patterns/step-5.svg';
		$appState.dialogue = 'Go ahead and try to build your own Scratch project!';
		$appState.title = '🎨 Step 5 : Make a Game !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-1/step-4';
		$appState.rightButtonLabel = 'Level 2';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-2/step-1';
	});
</script>

<Paper title="Make Something">
	<p>
		🍄 You can create your own project or remix any existing projects available on the internet,
		including the one that you just saw in step 1. So, “Stop not till the goal is reached” Well that
		was Swami Vivekanada but it could be you too! 😉 Go on Imagine, Program, Share with Scratch.
	</p>

	<p>Now, it' your turn to create !</p>

	<Button label="Create your own scratch project" />
	<Button base={false} label="Remix the project : A Day in Rani's Life" />
</Paper>
