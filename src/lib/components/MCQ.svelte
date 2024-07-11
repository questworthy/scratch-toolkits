<script>
	import { fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { appState } from '$lib/stores';

	export let question = {
		index: 0,
		label: 'Question',
		options: [
			{ label: 'ten', value: 1, nudge: 'nudge 1' },
			{ label: 'twenty', value: 2, nudge: 'nudge 2' },
			{ label: 'thirty', value: 3, nudge: 'nudge 3' }
		],
		correct: 2,
		color: '#DBA979'
	};

	let showAnswer = false;
	let selected = question.options[1];
</script>

<div class="flex justify-center items-center">
	<span class="m-2 p-2 text-4xl font-contrail">{question.index}</span>
	<div class="h-2 w-full bg-ed-400" style="background-color:{question.color};"></div>
</div>

<fieldset class="flex flex-col font-inter">
	<legend class="m-2 p-2">{question.label}</legend>
	{#each question.options as option}
		<label
			on:mouseenter={() => {
				$appState.dialogue = 'Are you sure ?';
			}}
			class="m-2 p-2 border-b cursor-pointer"
		>
			<input class="m-1" type="radio" bind:group={selected} name="amount" value={option} />
			{option.label}
		</label>
	{/each}
</fieldset>

<div class="flex justify-start items-center">
	{#if !showAnswer}
		<button
			in:fly={{ x: -100, duration: 400, delay: 300, easing: backOut }}
			out:fly={{ x: 100, duration: 400, easing: backOut }}
			disabled={showAnswer}
			on:click|once={() => {
				showAnswer = true;
			}}
			class="p-2 my-8 rounded-xl shadow border active:translate-y-2 active:scale-95 transition-all duration-200"
			>Check Answer</button
		>
	{/if}

	{#if showAnswer}
		<p
			class="p-2 my-8"
			in:fly={{ x: -100, duration: 400, delay: 400, easing: backOut }}
			out:fly={{ x: 100, duration: 400, easing: backOut }}
		>
			Result :
			{#if selected.value === question.correct}
				✅ Correct.
			{:else}
				❌ Incorrect.{/if}
		</p>
	{/if}
</div>
