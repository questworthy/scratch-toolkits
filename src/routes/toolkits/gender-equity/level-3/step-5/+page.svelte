<script>
	import { onMount } from 'svelte';
	import { appState } from '$lib/stores';
	import Button from '$lib/components/Button.svelte';

	let online = false;
	let hidden = false;

	onMount(() => {
		online = window.navigator.onLine;
		setTimeout(() => {
			hidden = true;
		}, 1000);

		$appState.dialogue = 'Go ahead and try to build your own Scratch project! 🏗️';
		$appState.title = '🎨 Step 5 : Build your own Scratch project!';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-3/step-4';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-4/step-1';
		$appState.rightButtonLabel = 'Level 4';
	});
</script>

<div class="mx-auto max-w-screen-md prose m-4 p-4 prose-xl">
	<p>
		‘Gender’ is a very sensitive issue where normally people believe it is too personal and there
		isn’t much to discuss. It's important to talk about gender issues to raise awareness about
		stereotypes and start breaking them down.
	</p>

	<p>
		As a young person, you can raise awareness by using Scratch. Scratch helps develop thinking and
		problem-solving skills, encourages creativity and collaboration.
	</p>

	<p>Think of technology as a problem solver around you & bring a wave of change! 🌊</p>

	<Button label="Create your own scratch project" />
	<Button base={false} label="Remix the project earlier used in this level" />
</div>
