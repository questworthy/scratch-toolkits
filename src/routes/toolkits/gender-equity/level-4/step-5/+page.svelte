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

		$appState.dialogue = 'Go ahead and try to build your own Scratch project! 🏗️';
		$appState.title = '🎨 Step 5 : Build your own Scratch project!';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-4/step-4';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-5/step-1';
		$appState.rightButtonLabel = 'Level 5';
	});

	const posts = [
		'It’s Normal to Question: It’s perfectly normal to have questions about your sexual identity. It’s a part of growing up and figuring out who you are.',
		'Be Respectful: Just like we respect people’s choices in other aspects of life, we should also respect their sexual identity. Name-calling or making fun of someone is never okay.',
		'Talk to Someone: If you have questions or feel confused, talk to someone you trust, like a parent, teacher, or school counselor. They can offer support and guidance.'
	];
</script>

<div class="mx-auto max-w-screen-md prose m-4 p-4 prose-xl">
	<p>
		Everyone’s sexual identity is unique, and it’s important to understand and respect each person’s
		feelings and experiences. Here are a few key points to remember:
	</p>

	{#each posts as post}
		<PostIt {post} />
	{/each}

	<p>
		Think of a situation that you may have faced or observed around you on this topic. Think of ways
		in which you can represent it using Scratch so that other people in similar situations may find
		it helpful. You can also use Scratch to build projects to raise awareness around this topic.
		Happy learning! ⭐
	</p>

	<Button label="Create your own scratch project" />
	<Button base={false} label="Remix the project earlier used in this level" />
</div>
