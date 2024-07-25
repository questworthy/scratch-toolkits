<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import Question from '$lib/components/Question.svelte';
	import Paper from '$lib/components/Paper.svelte';

	onMount(() => {
		$appState.pattern = '/patterns/quiz.svg';
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
					nudge: 'nudge 1'
				},
				{
					label: 'False',
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
			label: 'What does gender mean? ',
			options: [
				{
					label: 'What clothes you wear.',
					nudge: 'nudge 1'
				},
				{
					label: 'How you feel inside.',
					nudge: 'nudge` 2'
				},
				{
					label: 'Where you live.',
					nudge: 'nudge` 2'
				},
				{
					label: 'How tall you are ?',
					nudge: 'nudge` 2'
				}
			],
			answer: 0,
			details: 'In India, the ratio of male to female teachers is 57.85% male : 42.15% female.',
			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		},
		{
			index: 3,
			label: 'Which one of these statements is TRUE regarding ‘gender’',
			options: [
				{
					label: 'It is a numerical concept',
					nudge: 'nudge 1'
				},
				{
					label: 'It is biologically determined',
					nudge: 'nudge` 2'
				},
				{
					label: 'It is the same as the sex of the person',
					nudge: 'nudge` 2'
				},
				{
					label:
						'It is a social construct (Note: Social construct is an idea that has been created and accepted by the people in a society) ',
					nudge: 'nudge` 2'
				}
			],
			answer: 0,
			details:
				'In medical schools, the percentage ratio of female to male doctors is 50.5 female to 49.5 male. However, after medical schools, the number of women working as doctors reduces. The ratio of men to women working as doctors is 64% male : 36% female.',
			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		}
	];
</script>

<Paper title="Quiz">
	<p>Let’s play a game called <strong>Who comes to mind?</strong></p>
	{#each questions as question}
		<Question {question} />
	{/each}
</Paper>
