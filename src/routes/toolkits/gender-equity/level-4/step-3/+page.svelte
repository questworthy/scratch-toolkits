<script>
	import Paper from '$lib/components/Paper.svelte';
	import PostIt from '$lib/components/PostIt.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.pattern = '/patterns/step-3.svg';
		$appState.dialogue = 'Think Hard! 💭';
		$appState.title = '🚿 Step 3 : Think Again !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-4/step-2';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-4/quiz';
	});

	const posts = [
		'How can you support someone who feels different about their gender or who they like?',
		'Why do you think someone would be scared to tell others about their gender?',
		'How can you teach others to respect all genders and who they like?',
		'Do you think society is becoming more accepting of different sexual orientations? Why or why not?',
		'What do you know about different sexual orientations like being gay, lesbian, bisexual, or asexual? How do you feel about your own sexual orientation? Do you feel comfortable with it?'
	];
</script>

<Paper title="Share your opinions">
	<p>Read the questions and share your opinions with your friends.</p>
	{#each posts as post}
		<PostIt {post} />
	{/each}
</Paper>
