<script>
	import Button from '$lib/components/Button.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.dialogue = 'Welcome to Level 4 of this toolkit! ✨';
		$appState.title = '🍿 Step 1 : Story Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-4/step-2';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>Hi there! Congratulations on making it to Level 4 of this toolkit. 🎊</p>
	<p>
		You explored various stereotypes around males and females, and also learned about the concept of
		gender, but did you know that there is more to gender identity than being male or female? People
		can identify themselves in different ways.
	</p>
	<p>
		Gender identity is about how individuals see themselves and what they call themselves. It can be
		the same or different from the sex they were given at birth.
	</p>
	<p>
		Whereas, sexuality is about how you feel and express yourself in love and relationships- like
		who you have a love relationship with and who you want to be close with when you grow up.
	</p>

	<p>While sexual identity and gender identity are separate, they can influence each other.</p>

	<img src="/genderbread.png" alt="" />

	<p>
		In this level, the Scratch game will help you build an understanding around these concepts. Play
		the game to learn more! 🎲
	</p>
	<Button
		label="Scratch Game"
		entryDialogue="Go on and click the button to explore the scratch game or check out what Scratch is."
		exitDialogue="What are you thinking ?"
	/>
	<Button base={false} label="Download" />
</div>
