<script>
	import PostIt from '$lib/components/PostIt.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.pattern = '/patterns/step-3.svg';
		$appState.dialogue = 'What are your thoughts on these? 💭';
		$appState.title = '🚿 Step 3 : Think Again !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-5/step-2';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-5/quiz';
	});

	const posts = [
		'How is gender shown in the advertisements/ popular media, especially around education, careers, and sports? Do you think these platforms affect the thinking of society?',
		'If you see someone being left out because of their gender, how can you make sure everyone gets a turn and feels included in games and activities at school?',
		'What can you do to make sure chores and responsibilities at home are shared equally between all genders?',
		'What is one stereotype that you would want to change for yourself?'
	];
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>Read the questions and share your opinions with your friends.</p>
	{#each posts as post}
		<PostIt {post} />
	{/each}
</div>
