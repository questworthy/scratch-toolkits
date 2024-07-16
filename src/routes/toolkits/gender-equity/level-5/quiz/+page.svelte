<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import Mcq from '$lib/components/MCQ.svelte';

	onMount(() => {
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
					value: 1,
					nudge: 'nudge 1',
					src: ''
				},
				{
					label: 'Tell them to accept it',
					value: 2,
					nudge: 'nudge` 2',
					src: ''
				},
				{
					label: 'Speak up and support them',
					value: 3,
					nudge: 'nudge` 2',
					src: ''
				},
				{
					label: 'Agree with the stereotype',
					value: 4,
					nudge: 'nudge` 2',
					src: ''
				}
			],
			correct: 3,
			color: '#DBA979',
			details: ''
		},
		{
			index: 2,
			label: 'Why is it important to challenge gender stereotypes?',
			options: [
				{
					label: 'To make sure everyone has the same opportunities',
					value: 1,
					nudge: 'nudge 1',
					src: ''
				},
				{
					label: 'To keep traditional roles the same',
					value: 2,
					nudge: 'nudge` 2',
					src: ''
				},
				{
					label: 'To create more gender-specific jobs',
					value: 3,
					nudge: 'nudge` 3',
					src: ''
				},
				{
					label: 'To limit job choices for men and women',
					value: 4,
					nudge: 'nudge` 4',
					src: ''
				}
			],
			correct: 1,
			color: '#DBA979',
			details: ''
		},
		{
			index: 3,
			label: 'What should you do if you have questions about your own sexual or gender identity?',
			options: [
				{
					label: 'Keep it to yourself',
					value: 1,
					nudge: 'nudge 1'
				},
				{
					label: 'Talk to a trusted adult like a parent, teacher, or counselor',
					value: 2,
					nudge: 'nudge 2'
				},
				{
					label: 'Ignore your feelings',
					value: 3,
					nudge: 'nudge 3'
				},
				{
					label: 'Make fun of others to feel better',
					value: 4,
					nudge: 'nudge 4'
				}
			],
			correct: 2,
			color: '#DBA979',
			details: ''
		}
	];
</script>

<div class="mx-auto max-w-screen-md prose font-inter m-4 p-4 prose-xl">
	<p>Let’s play a game called <strong>Who comes to mind?</strong></p>
	{#each questions as question}
		<Mcq {question} />
	{/each}
</div>
