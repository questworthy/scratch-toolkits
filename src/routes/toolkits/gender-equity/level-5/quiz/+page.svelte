<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import Question from '$lib/components/Question.svelte';
	import Paper from '$lib/components/Paper.svelte';

	onMount(() => {
		$appState.pattern = '/patterns/quiz.svg';
		$appState.dialogue = 'One last challenge for you!';
		$appState.title = '💡 Quiz Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-5/step-3';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-5/step-4';
	});

	const questions = [
		{
			index: 1,
			label:
				'What should you do if you see someone being treated unfairly because of a gender stereotype?',
			options: [
				{
					label: 'Ignore it',
					nudge: 'nudge 1'
				},
				{
					label: 'Tell them to accept it',
					nudge: 'nudge` 2'
				},
				{
					label: 'Speak up and support them',
					nudge: 'nudge` 2'
				},
				{
					label: 'Agree with the stereotype',
					nudge: 'nudge` 2'
				}
			],
			answer: 3,
			detail: '',
			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		},
		{
			index: 2,
			label: 'Why is it important to challenge gender stereotypes?',
			options: [
				{
					label: 'To make sure everyone has the same opportunities',
					nudge: 'nudge 1'
				},
				{
					label: 'To keep traditional roles the same',
					nudge: 'nudge` 2'
				},
				{
					label: 'To create more gender-specific jobs',
					nudge: 'nudge` 3'
				},
				{
					label: 'To limit job choices for men and women',
					nudge: 'nudge` 4'
				}
			],
			answer: 1,
			detail: '',
			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		},
		{
			index: 3,
			label: 'What should you do if you have questions about your own sexual or gender identity?',
			options: [
				{
					label: 'Keep it to yourself',
					nudge: 'nudge 1'
				},
				{
					label: 'Talk to a trusted adult like a parent, teacher, or counselor',
					nudge: 'nudge 2'
				},
				{
					label: 'Ignore your feelings',
					nudge: 'nudge 3'
				},
				{
					label: 'Make fun of others to feel better',
					nudge: 'nudge 4'
				}
			],
			answer: 2,
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
