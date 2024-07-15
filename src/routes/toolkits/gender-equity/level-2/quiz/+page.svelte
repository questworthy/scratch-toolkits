<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import Mcq from '$lib/components/MCQ.svelte';

	onMount(() => {
		$appState.dialogue = 'Let’s play a game! 🙃';
		$appState.title = '💡 Quiz Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-1/step-3';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-1/step-4';
	});

	const questions = [
		{
			index: 1,
			label: 'Who comes to your mind when you read the word ‘Farmer’?',
			options: [
				{
					label: 'A belief that men and women should be treated equally.',
					value: 1,
					nudge: 'nudge 1',
					src: '/male-farmer.png'
				},
				{
					label:
						'A belief that certain roles and behaviors are suitable only for men or only for women.',
					value: 2,
					nudge: 'nudge` 2',
					src: '/female-farmer.png'
				}
			],
			correct: 2,
			color: '#DBA979'
		}
	];
</script>

<div class="mx-auto max-w-screen-md prose font-inter m-4 p-4 prose-xl">
	<p>Let’s play a game called <strong>Who comes to mind?</strong></p>
	{#each questions as question}
		<Mcq {question} />
	{/each}
</div>
