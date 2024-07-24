<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import Mcq from '$lib/components/MCQ.svelte';
	import Question from '$lib/components/Question.svelte';

	onMount(() => {
		$appState.dialogue = 'Can you get the perfect score ?';
		$appState.title = '💡 Quiz Time !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-1/step-3';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-1/step-4';
	});

	const questions = [
		{
			index: 1,
			label: 'What is a gender stereotype?',
			options: [
				{
					label: 'A belief that men and women should be treated equally.',
					nudge: 'nudge 1'
				},
				{
					label:
						'A belief that certain roles and behaviors are suitable only for men or only for women.',
					nudge: 'nudge` 2'
				},
				{ label: 'A type of music', nudge: 'nudge 3' },
				{ label: 'A law about gender equality', nudge: 'nudge 4' }
			],
			answer: 2,
			detail: 'You are close. But there is a difference between equality and equity. ',
			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		},
		{
			index: 2,
			label: 'Which of these is not a gender stereotype?',
			options: [
				{
					label: 'Boys are better at sports than girls.',
					value: 1,
					nudge: 'nudge 1'
				},
				{
					label: 'Girls are better at cooking than boys.',
					value: 2,
					nudge: 'nudge` 2'
				},
				{ label: 'Both boys and girls can become doctors.', value: 3, nudge: 'nudge 3' },
				{ label: 'Only men should be engineers.', value: 4, nudge: 'nudge 4' }
			],
			answer: 3,
			detail: 'You are close. But there is a difference between equality and equity. ',
			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		},
		{
			index: 3,
			label: 'What can schools do to reduce gender stereotypes?',
			options: [
				{
					label: 'Separate boys and girls in all activities.',
					value: 1,
					nudge: 'nudge 1'
				},
				{
					label: 'Encourage all students to explore a variety of subjects and careers.',
					value: 2,
					nudge: 'nudge` 2'
				},
				{ label: 'Promote only traditional gender roles.', value: 3, nudge: 'nudge 3' },
				{ label: 'Teach boys and girls different subjects.', value: 4, nudge: 'nudge 4' }
			],
			answer: 2,
			detail: 'You are close. But there is a difference between equality and equity. ',
			correctDialogue: 'Dialogue for correct selection.',
			incorrectDialogue: 'Dialogue for correct selection.'
		}
	];
</script>

<div class="mx-auto max-w-screen-md prose font-inter m-4 p-4 prose-xl">
	{#each questions as question}
		<Question {question} />
	{/each}
</div>
