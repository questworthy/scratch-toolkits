<script>
	import { appState } from '$lib/stores';

	export let question = {
		index: 0,
		label: 'Question',
		options: [
			{ src: '', label: 'ten', value: 1, nudge: 'nudge 1' },
			{ src: '', label: 'twenty', value: 2, nudge: 'nudge 2' },
			{ src: '', label: 'thirty', value: 3, nudge: 'nudge 3' }
		],
		correct: 2,
		color: '#DBA979',
		details: ''
	};

	let showAnswer = false;
	let selected = -1; // 0 means all answers are correct

	export let correctDialogue = 'correct answer dialogue';
	export let incorrectDialogue = 'incorrect answer dialogue';
</script>

<div class="my-16">
	<div class="flex justify-center items-center">
		<span class="m-2 p-2 text-4xl font-contrail">{question.index}</span>
		<div class="h-2 w-full bg-ed-400" style="background-color:{question.color};"></div>
	</div>

	<fieldset class="m-4 flex flex-col">
		<p class="m-0 p-2 text-2xl">
			{question.label}
		</p>
		<div class="my-8 flex">
			{#each question.options as option, index}
				{#if option.src == ''}
					<label
						on:mouseenter={() => {
							$appState.dialogue = 'Are you sure ?';
						}}
						class="{selected.value == index + 1
							? 'bg-[#E7D4B5]'
							: 'bg-[#e3e1d9]'} p-2 border-b-4 border-[#fcfaf4] cursor-pointer flex justify-start items-center hover:bg-[#D8EFD3] transition-all duration-200"
					>
						<input
							disabled={showAnswer}
							class="m-4 scale-150"
							type="radio"
							bind:group={selected}
							name="amount"
							value={option}
						/>
						<img class="m-0" src={option.src} alt={option.label} />
						<p class="m-0 px-4 py-2 leading-tight">
							{option.label}
						</p>
					</label>
				{:else}
					<label
						on:mouseenter={() => {
							$appState.dialogue = 'Are you sure ?';
						}}
						class="{selected.value == index + 1
							? 'bg-[#E7D4B5]'
							: 'bg-[#e3e1d9]'} p-2 border-b-4 border-[#fcfaf4] cursor-pointer hover:bg-[#D8EFD3] transition-all duration-200"
					>
						<img class="m-0 max-h-96" src={option.src} alt={option.label} />
						<input
							disabled={showAnswer}
							class="m-4 scale-150"
							type="radio"
							bind:group={selected}
							name="amount"
							value={option}
						/>
					</label>
				{/if}
			{/each}
		</div>
	</fieldset>

	<div class="m-4 h-16 flex justify-start items-center">
		{#if !showAnswer}
			<button
				disabled={showAnswer}
				on:click|once={() => {
					showAnswer = true;

					$appState.dialogue =
						selected.value === question.correct ? incorrectDialogue : correctDialogue;
				}}
				class="p-2 my-8 rounded-xl shadow border active:translate-y-2 active:scale-95 transition-all duration-200"
				>Check Answer</button
			>
		{/if}

		{#if showAnswer}
			<p class="p-2 my-8">
				Result :
				{#if selected.value === question.correct}
					✅ Correct. {question.details}
				{:else if selected == 0}
					🎉 Well done ! {question.details}
				{:else}
					❌ Incorrect. {question.details}
					{#if selected == -1}
						No options were selected. {question.details}
					{/if}
				{/if}
			</p>
		{/if}
	</div>
</div>
