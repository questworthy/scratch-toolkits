<script>
	import { appState } from '$lib/stores';

	export let question = {
		index: 1,
		label: 'Question ...',
		options: [
			{ label: 'Option 1', nudge: 'Nudge 1' },
			{ label: 'Option 2', nudge: 'Nudge 2' },
			{ label: 'Option 3', nudge: 'Nudge 3' }
		],
		answer: 2,
		detail:
			'Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.',
		correctDialogue: 'Dialogue for correct selection.',
		incorrectDialogue: 'Dialogue for correct selection.'
	};

	let showAnswer = false;
	let result = false;
	let selected = -1; // 0 means all answers are correct
</script>

<div>
	<div class="flex items-center">
		<span class="p-2 text-4xl font-contrail">{question.index}</span>
		<div class="h-2 w-full bg-[#DBA979]"></div>
	</div>

	<p class="font-bold">Q. {question.label}</p>
	<div class="flex flex-col bg-gray-50 shadow-inner">
		{#each question.options as option, index}
			<button
				disabled={showAnswer}
				on:click={() => {
					selected = index + 1;
				}}
				class="{index + 1 == selected
					? 'bg-stone-200'
					: !showAnswer &&
						'hover:bg-amber-200'} text-start p-2 border-b border-black transition-all duration-100"
				>{option.label}</button
			>
		{/each}
	</div>

	<div class="h-40 py-4 flex flex-col justify-evenly items-start">
		{#if !showAnswer}
			<button
				class="p-2 m-4 rounded-xl border shadow bg-white active:translate-y-1 active:scale-95 transition-all duration-100"
				on:click|once={() => {
					showAnswer = true;
					result = selected == question.answer; // true means correct, false means incorrect
					$appState.dialogue = result ? question.correctDialogue : question.incorrectDialogue;
				}}>Check Answer</button
			>
		{:else}
			<p>
				Result :
				{#if question.answer === 0}
					🎉 Hmm.. Interesting ! {question.detail}
				{:else if selected === question.answer}
					✅ Correct.
					{question.detail}
				{:else}
					❌ Incorrect.
					{#if selected == -1}
						No options were selected.
					{:else}
						{question.detail}
					{/if}
				{/if}
			</p>
		{/if}
	</div>
</div>
