<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import Mcq from '$lib/components/MCQ.svelte';

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
					label: 'A belief that men and women should be treated equally.',
					value: 0,
					nudge: 'nudge 1',
					src: '/male-farmer.png'
				},
				{
					label:
						'A belief that certain roles and behaviors are suitable only for men or only for women.',
					value: 0,
					nudge: 'nudge` 2',
					src: '/female-farmer.png'
				}
			],
			correct: 0,
			color: '#DBA979',
			details:
				'In India, over 85% of rural women are engaged in agriculture, yet they are not recognised as farmers.'
		},
		{
			index: 2,
			label: 'Who comes to your mind when you read the word ‘Teacher’?',
			options: [
				{
					label: '',
					value: 1,
					nudge: 'nudge 1',
					src: '/male-teacher.png'
				},
				{
					label: '',
					value: 2,
					nudge: 'nudge` 2',
					src: '/female-teacher.png'
				}
			],
			correct: 0,
			color: '#DBA979',
			details: 'In India, the ratio of male to female teachers is 57.85% male : 42.15% female.'
		},
		{
			index: 3,
			label: 'Who comes to your mind when you read the word ‘Doctor’?',
			options: [
				{
					label: '',
					value: 1,
					nudge: 'nudge 1',
					src: '/male-doctor.png'
				},
				{
					label: '',
					value: 2,
					nudge: 'nudge` 2',
					src: '/female-doctor.png'
				}
			],
			correct: 0,
			color: '#DBA979',
			details:
				'In medical schools, the percentage ratio of female to male doctors is 50.5 female to 49.5 male. However, after medical schools, the number of women working as doctors reduces. The ratio of men to women working as doctors is 64% male : 36% female.'
		}
	];
</script>

<div class="mx-auto max-w-screen-md prose font-inter m-4 p-4 prose-xl">
	<p>Let’s play a game called <strong>Who comes to mind?</strong></p>
	{#each questions as question}
		<Mcq {question} />
	{/each}
</div>
