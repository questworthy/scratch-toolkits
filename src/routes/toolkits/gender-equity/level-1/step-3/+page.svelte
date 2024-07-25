<script>
	import PostIt from '$lib/components/PostIt.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.pattern = '/patterns/step-3.svg';
		$appState.dialogue = 'Give it a thought! 💭';
		$appState.title = '🤔 Step 3 : Think Again !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-1/step-2';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-1/quiz';
	});

	const posts = [
		'What were the most memorable parts of the story for you?',
		'Is there any difference in the way boys and girls are given education in your community? If yes, what do you think is the reason for it? 📕',
		'Do you think any one gender between male and female can be better at science, math, or at using technology? If yes, why do you think so? 🔬',
		'Do you think you yourselves have been influenced by gender biases, differences, or stereotypes (we will discuss its meaning in detail soon)? Think of an instance when you stood up for or against such beliefs and share it with your friends!'
	];
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>
		The Scratch story about Rani and Aryan in Step 1 talked about so many scenarios. Read the
		questions and share your opinions with your friends.
	</p>

	{#each posts as post}
		<PostIt {post} />
	{/each}
</div>
