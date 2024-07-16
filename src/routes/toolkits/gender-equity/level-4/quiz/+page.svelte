<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import Mcq from '$lib/components/MCQ.svelte';

	onMount(() => {
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
					value: 1,
					nudge: 'nudge 1',
					src: ''
				},
				{
					label: 'False',
					value: 2,
					nudge: 'nudge` 2',
					src: ''
				}
			],
			correct: 1,
			color: '#DBA979',
			details: ''
		},
		{
			index: 2,
			label:
				'Which term describes someone who feels their gender identity doesn’t match the body they were born with?',
			options: [
				{
					label: 'Non-Binary',
					value: 1,
					nudge: 'nudge 1',
					src: ''
				},
				{
					label: 'Transgender',
					value: 2,
					nudge: 'nudge` 2',
					src: ''
				},
				{
					label: 'Bisexual',
					value: 3,
					nudge: 'nudge` 3',
					src: ''
				},
				{
					label: 'Asexual',
					value: 4,
					nudge: 'nudge` 4',
					src: ''
				}
			],
			correct: 2,
			color: '#DBA979',
			details: ''
		},
		{
			index: 3,
			label: 'What does "sexual identity" refer to?',
			options: [
				{
					label: 'The subjects someone likes in school',
					value: 1,
					nudge: 'nudge 1'
				},
				{
					label: 'The activities someone enjoys',
					value: 2,
					nudge: 'nudge 2'
				},
				{
					label: 'Who someone is romantically and physically attracted to',
					value: 3,
					nudge: 'nudge 3'
				},
				{
					label: 'The type of food someone prefers',
					value: 4,
					nudge: 'nudge 4'
				}
			],
			correct: 0,
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
