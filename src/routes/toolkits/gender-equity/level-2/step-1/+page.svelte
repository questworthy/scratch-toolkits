<script>
	import Button from '$lib/components/Button.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.dialogue =
			'Gender stereotypes are common rules which can be right or wrong  about what men and women are like and how they should behave.';
		$appState.title = '🍿 Step 1 : Story Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-2/step-2';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>
		Hello and welcome to Level 2 of the Gender Equity Toolkit! In the previous level, you saw that
		gender stereotypes play a significant role in shaping young minds within schools and households.
		By now you understand how to identify gender stereotypes.
	</p>
	<p>
		In this level, you will explore the role gender stereotypes continue to play as we grow older in
		life. This scratch game will take you through some of these concepts while you navigate your way
		through some fun yet challenging mazes! 👾
	</p>
	<Button
		label="Open"
		entryDialogue="Go on and click the button to explore the scratch game or check out what Scratch is."
		exitDialogue="What are you thinking ?"
	/>
	<Button base={false} label="Download" />
</div>
