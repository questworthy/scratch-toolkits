<script>
	import { onMount } from 'svelte';
	import { appState } from '$lib/stores';
	import Button from '$lib/components/Button.svelte';
	import PostIt from '$lib/components/PostIt.svelte';

	let online = false;
	let hidden = false;

	onMount(() => {
		online = window.navigator.onLine;
		setTimeout(() => {
			hidden = true;
		}, 1000);

		$appState.dialogue = 'We believe that you can bring about a revolution. 👮';
		$appState.title = '🎨 Step 5 : Build your own Scratch project!';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-5/step-4';
		$appState.rightButtonLink = '';
	});

	const posts = [
		'It’s Normal to Question: It’s perfectly normal to have questions about your sexual identity. It’s a part of growing up and figuring out who you are.',
		'Be Respectful: Just like we respect people’s choices in other aspects of life, we should also respect their sexual identity. Name-calling or making fun of someone is never okay.',
		'Talk to Someone: If you have questions or feel confused, talk to someone you trust, like a parent, teacher, or school counselor. They can offer support and guidance.'
	];
</script>

<div class="mx-auto max-w-screen-md prose m-4 p-4 prose-xl">
	<p>
		Here’s your chance to convert the knowledge of this toolkit into wisdom! 💪 Can you identify one
		challenge around you pertaining to gender equity? Think of ways to represent it using Scratch
		and build your own project around it.
	</p>

	<p>Share it with your friends and in your community. 💝</p>

	<Button label="Create your own scratch project" />
	<Button base={false} label="Remix the project earlier used in this level" />
</div>
