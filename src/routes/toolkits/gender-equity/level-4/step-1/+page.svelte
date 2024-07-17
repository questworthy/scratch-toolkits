<script>
	import Button from '$lib/components/Button.svelte';
	import Lily from '$lib/components/Lily.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.dialogue = 'Welcome to Level 4 of this toolkit! ✨';
		$appState.title = '🍿 Step 1 : Story Time !';
		$appState.rightButtonLabel = 'Next';
		$appState.leftButtonLink = '/toolkits/gender-equity';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-4/step-2';
	});
</script>

<div class="max-w-screen-md mx-auto prose-xl">
	<p>Hi there! Congratulations on making it to Level 4 of this toolkit. 🎊</p>
	<p>
		You explored various stereotypes around males and females, and also learned about the concept of
		gender, but did you know that there is more to gender identity than being male or female? People
		can identify themselves in different ways.
	</p>

	<div class="flex">
		<img class="w-60 object-cover" src="/genderbread.png" alt="" />
		<ul>
			<li>
				Identity: This is how someone feels inside about whether they are a boy, a girl, both,
				neither, or something else.
			</li>
			<li>
				Expression: This is how someone shows their gender on the outside, like through clothes,
				hairstyles, and the way they act.
			</li>
			<li>
				Biological Sex: This is about the body parts someone is born with, like being born with a
				penis or a vulva, and how their body makes hormones.
			</li>
			<li>
				Attraction: This is about who someone likes or loves, whether it's boys, girls, both, or
				neither.
			</li>
		</ul>
	</div>

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
