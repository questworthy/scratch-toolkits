<script>
	import ImageSelection from '$lib/components/ImageSelection.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.dialogue = 'Let’s play a game! 🙃';
		$appState.title = '💡 Quiz Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-2/step-3';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-2/step-4';
	});

	const questions = [
		{
			index: 1,
			label: 'Who comes to your mind when you read the word ‘Farmer’?',
			options: [
				{
					src: '/male-farmer.png',
					alt: 'A belief that men and women should be treated equally.',
					nudge: 'nudge 1'
				},
				{
					src: '/female-farmer.png',
					alt: 'A belief that certain roles and behaviors are suitable only for men or only for women.',
					nudge: 'nudge` 2'
				}
			],
			answer: 0,
			detail:
				'In India, over 85% of rural women are engaged in agriculture, yet they are not recognised as farmers.',
			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		},
		{
			index: 2,
			label: 'Who comes to your mind when you read the word ‘Teacher’?',
			options: [
				{
					src: '/male-teacher.png',
					alt: '',
					nudge: 'nudge 1'
				},
				{
					src: '/female-teacher.png',
					alt: '',
					nudge: 'nudge 2'
				}
			],
			answer: 0,
			detail: 'In India, the ratio of male to female teachers is 57.85% male : 42.15% female.',
			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		},
		{
			index: 3,
			label: 'Who comes to your mind when you read the word ‘Doctor’?',
			options: [
				{
					src: '/male-doctor.png',
					alt: '',
					nudge: 'nudge 1'
				},
				{
					src: '/female-doctor.png',
					alt: '',
					nudge: 'nudge 2'
				}
			],
			answer: 0,
			detail:
				'In medical schools, the percentage ratio of female to male doctors is 50.5 female to 49.5 male. However, after medical schools, the number of women working as doctors reduces. The ratio of men to women working as doctors is 64% male : 36% female.',

			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		}
	];
</script>

<div class="mx-auto max-w-screen-md prose font-inter m-4 p-4 prose-xl">
	<p>Let’s play a game called <strong>Who comes to mind?</strong></p>
	{#each questions as question}
		<ImageSelection {question} />
	{/each}
</div>
