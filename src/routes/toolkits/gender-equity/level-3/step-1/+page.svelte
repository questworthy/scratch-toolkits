<script>
	import Button from '$lib/components/Button.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.dialogue = 'Hello learners! ✨';
		$appState.title = '🍿 Step 1 : Story Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-3/step-2';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>
		Hola learners! Welcome back to this unique journey of exploring concepts around gender equity
		through the fun interface of Scratch software.
	</p>
	<p>
		In Level 1 and Level 2 of this toolkit, you learned the impact of gender stereotypes at school,
		at your home, and you even saw how these stereotypes continue to play a strong role throughout
		our lives and at workplaces.
	</p>

	<p>
		In this level, you will learn about the terms ‘sex’ and ‘gender’. You must be wondering what do
		they even mean and what is the difference! 🤔
	</p>

	<p>Well, play this quick Scratch program to understand this concept well.</p>
	<Button
		label="Open"
		entryDialogue="Go on and click the button to explore the scratch game or check out what Scratch is."
		exitDialogue="What are you thinking ?"
	/>
	<Button base={false} label="Download" />
</div>
