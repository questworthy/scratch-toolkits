<script>
	import Button from '$lib/components/Button.svelte';
	import Paper from '$lib/components/Paper.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	let online = false;

	onMount(() => {
		online = window.navigator.onLine;
		$appState.pattern = '/patterns/step-1.svg';
		$appState.dialogue = 'Hi there!';
		$appState.title = '🍿 Step 1 : Story Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-1/step-2';
	});
</script>

<Paper title={"A Day in Rani's Life."}>
	<p>Hey learners! 👋</p>
	<p>
		Are you excited to take the first step in your journey towards learning about gender, equity,
		and access? Let us first look at a story (built entirely using the Scratch software).
	</p>
	<p>
		Please download the scratch story <b>"A Day in Rani's Life"</b> from below and open it in the scratch
		app.
	</p>
	{#if online}
		<Button
			label="Open"
			entryDialogue="Go on and click the button to explore the scratch project or check out what Scratch is."
			exitDialogue="What are you waiting for ..."
		/>
	{:else}
		<Button
			base={false}
			entryDialogue="Go on and click the button to explore the scratch project or check out what Scratch is."
			exitDialogue="What are you waiting for ..."
			label="Download"
		/>
	{/if}
</Paper>
