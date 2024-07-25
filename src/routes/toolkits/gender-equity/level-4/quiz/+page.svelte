<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import Question from '$lib/components/Question.svelte';
	import Paper from '$lib/components/Paper.svelte';

	onMount(() => {
		$appState.pattern = '/patterns/quiz.svg';
		$appState.dialogue = 'Ready for the challenge for this level? 🤩';
		$appState.title = '💡 Quiz Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-4/step-3';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-4/step-4';
	});

	const questions = [
		{
			index: 1,
			label: 'Some people may not feel like they are completely a boy or a girl.',
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
			answer: 1,
			detail: '',
			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		},
		{
			index: 2,
			label:
				'Which term describes someone who feels their gender identity doesn’t match the body they were born with?',
			options: [
				{
					label: 'Non-Binary',
					nudge: 'nudge 1'
				},
				{
					label: 'Transgender',
					nudge: 'nudge` 2'
				},
				{
					label: 'Bisexual',
					nudge: 'nudge` 3'
				},
				{
					label: 'Asexual',
					nudge: 'nudge` 4'
				}
			],
			answer: 2,
			detail: '',
			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		},
		{
			index: 3,
			label: 'What does "sexual identity" refer to?',
			options: [
				{
					label: 'The subjects someone likes in school',
					nudge: 'nudge 1'
				},
				{
					label: 'The activities someone enjoys',
					nudge: 'nudge 2'
				},
				{
					label: 'Who someone is romantically and physically attracted to',
					nudge: 'nudge 3'
				},
				{
					label: 'The type of food someone prefers',
					nudge: 'nudge 4'
				}
			],
			answer: 3,
			detail: '',
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
