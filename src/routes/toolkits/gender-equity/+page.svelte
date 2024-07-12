<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	const levels = [
		`level 1 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
		`level 2 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
		`level 3 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
		`level 4 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`,
		`level 5 : Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.`
	];

	onMount(() => {
		$appState.expression = 'blank';
		$appState.title = '⚡ Level Up !';
		$appState.leftButtonLink = '/toolkits';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-1/step-1';
		$appState.dialogue = levels[latestSelected - 1];
	});
	$: latestSelected = $appState.lastLevel;
</script>

<div class="flex flex-wrap justify-center items-center">
	{#each levels as level, index}
		<div>
			<div
				role="presentation"
				on:click={() => {
					latestSelected = index + 1;
					$appState.lastLevel = latestSelected;
					$appState.expression = 'blank';
					$appState.dialogue = level;
					$appState.rightButtonLink = '/toolkits/gender-equity/level-' + (index + 1) + '/step-1';
				}}
				class=" {latestSelected == index + 1 &&
					'border-stone-600'} cursor-pointer no-underline m-4 p-4 flex flex-col gap-4 border-[#F7DED0] border-4 rounded-xl bg-[#F7DED0] transition-all duration-200 text-center"
			>
				<p class="text-6xl m-0">
					{index + 1}
				</p>
				<div class="flex">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="0"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-star fill-amber-400"
						><polygon
							points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
						/></svg
					>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="0"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-star fill-slate-400"
						><polygon
							points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
						/></svg
					>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="0"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide lucide-star fill-slate-400"
						><polygon
							points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
						/></svg
					>
				</div>
			</div>
		</div>
	{/each}
</div>
