<script>
	import Button from '$lib/components/Button.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.dialogue = 'Hi there!';
		$appState.title = '🍿 Step 1 : Story Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-1/step-2';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>Hey learners! 👋</p>
	<p>
		Are you excited to take the first step in your journey towards learning about gender, equity,
		and access? Let us first look at a story (built entirely using the Scratch software).
	</p>
	<p>
		Please download the scratch story <b>"A Day in Rani's Life"</b> from below and open it in the scratch
		app.
	</p>
	<Button
		label="Open"
		entryDialogue="Go on and click the button to explore the scratch project or check out what Scratch is."
		exitDialogue="What are you waiting for ..."
	/>
	<Button
		base={false}
		entryDialogue="Go on and click the button to explore the scratch project or check out what Scratch is."
		exitDialogue="What are you waiting for ..."
		label="Download"
	/>
</div>
