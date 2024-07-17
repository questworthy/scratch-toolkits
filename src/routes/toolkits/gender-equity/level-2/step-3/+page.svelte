<script>
	import PostIt from '$lib/components/PostIt.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.dialogue = 'Give it a thought! 💭';
		$appState.title = '🚿 Step 3 : Think Again !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-2/step-2';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-2/quiz';
	});

	const posts = [
		'Have you ever heard or observed any expectations about certain jobs for men and women?',
		'Do you think the roles that males and females have in society affect what they have to study, and which job they should have?',
		'Do boys and girls have the same opportunity for education and jobs because of financial issues in the family?',
		"Do you think parents' expectations and support play a role in deciding what to study?"
	];
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>Read the questions and share your opinions with your friends.</p>

	{#each posts as post}
		<PostIt {post} />
	{/each}
</div>
