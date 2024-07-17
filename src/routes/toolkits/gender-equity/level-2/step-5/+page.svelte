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

		$appState.dialogue = 'Go ahead and try to build your own Scratch project!';
		$appState.title = '🎨 Step 5 : Build your own Scratch project!';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-2/step-4';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-3/step-1';
		$appState.rightButtonLabel = 'Level 3';
	});
</script>

<div class="mx-auto max-w-screen-md prose m-4 p-4 prose-xl">
	<p>It is our responsibility to identify these stereotypes and break them :</p>
	<ol>
		<li>
			<strong>Learn and Unlearn</strong> : Be aware of stereotypes & question them.
		</li>
		<li>
			<strong> Support Each Other </strong> : Encourage everyone to pursue their passions.
		</li>
		<li>
			<strong> Use technology as a tool </strong> : Build scratch projects to share your experiences
			or show the changes you hope to see.
		</li>
	</ol>

	<p>So, let’s unmask these myths and build a more equal work world! 🌟😊</p>

	<Button label="Create your own scratch project" />
	<Button base={false} label="Remix the project earlier used in this level" />
</div>
