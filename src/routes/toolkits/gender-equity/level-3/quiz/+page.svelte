<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import Mcq from '$lib/components/MCQ.svelte';

	onMount(() => {
		$appState.dialogue = 'Time for a quick challenge! 🤩';
		$appState.title = '💡 Quiz Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-3/step-3';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-3/step-4';
	});

	const questions = [
		{
			index: 1,
			label:
				'Boys and girls have different body parts that help doctors decide their sex when they are born.',
			options: [
				{
					label: 'True.',
					value: 1,
					nudge: 'nudge 1',
					src: ''
				},
				{
					label: 'False',
					value: 0,
					nudge: 'nudge` 2',
					src: ''
				}
			],
			correct: 0,
			color: '#DBA979',
			details:
				'In India, over 85% of rural women are engaged in agriculture, yet they are not recognised as farmers.'
		},
		{
			index: 2,
			label: 'What does gender mean? ',
			options: [
				{
					label: 'What clothes you wear.',
					value: 1,
					nudge: 'nudge 1',
					src: ''
				},
				{
					label: 'How you feel inside.',
					value: 2,
					nudge: 'nudge` 2',
					src: ''
				},
				{
					label: 'Where you live.',
					value: 3,
					nudge: 'nudge` 2',
					src: ''
				},
				{
					label: 'How tall you are ?',
					value: 4,
					nudge: 'nudge` 2',
					src: ''
				}
			],
			correct: 0,
			color: '#DBA979',
			details: 'In India, the ratio of male to female teachers is 57.85% male : 42.15% female.'
		},
		{
			index: 3,
			label: 'Which one of these statements is TRUE regarding ‘gender’',
			options: [
				{
					label: 'It is a numerical concept',
					value: 1,
					nudge: 'nudge 1'
				},
				{
					label: 'It is biologically determined',
					value: 2,
					nudge: 'nudge` 2'
				},
				{
					label: 'It is the same as the sex of the person',
					value: 3,
					nudge: 'nudge` 2'
				},
				{
					label:
						'It is a social construct (Note: Social construct is an idea that has been created and accepted by the people in a society) ',
					value: 4,
					nudge: 'nudge` 2'
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
