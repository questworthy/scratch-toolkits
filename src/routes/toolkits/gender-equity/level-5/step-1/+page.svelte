<script>
	import Button from '$lib/components/Button.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.dialogue = 'Wohoo, you made it here! ✨';
		$appState.title = '🍿 Step 1 : Story Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-5/step-2';
		$appState.rightButtonLabel = 'Next';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>Welcome to the final level of the gender equity toolkit. 🥁🥁🥁</p>
	<p>
		Note: It is recommended that you go through this level after going through the first four
		levels.
	</p>

	<p>
		Gender stereotypes, sexual identities, gender identities, gender roles- there are so many
		concepts and seemingly complicated terms! 😅
	</p>

	<p>
		So what can you DO to bring a change around you? In this Scratch game, you will go through many
		situations that highlight social problems. You will be needed to make decisions in them.
	</p>

	<Button
		label="Scratch Game"
		entryDialogue="Go on and click the button to explore the scratch game or check out what Scratch is."
		exitDialogue="What are you thinking ?"
	/>
	<Button base={false} label="Download" />
</div>
