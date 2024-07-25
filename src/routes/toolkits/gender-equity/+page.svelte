<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	const levels = [
		'Level 1 : Gender Stereotypes & Roles - I',
		'Level 2 : Gender Stereotypes & Roles - II',
		'Level 3 : Explore the Concepts of Sex and Gender',
		'Level 4 : Understand sexuality & gender identities',
		'Level 5 : What can we do ?'
	];

	onMount(() => {
		$appState.expression = 'blank';
		$appState.title = '⚡ Level Up !';
		$appState.leftButtonLink = '/toolkits';
		$appState.rightButtonLink = '';
		$appState.dialogue = levels[latestSelected - 1];
	});
	$: latestSelected = $appState.lastLevel;
</script>

<div class="flex flex-wrap justify-center items-center">
	{#each levels as level, index}
		<a class="no-underline" href={'/toolkits/gender-equity/level-' + (index + 1) + '/step-1'}>
			<div
				role="presentation"
				on:click={() => {
					latestSelected = index + 1;
					$appState.lastLevel = latestSelected;
					$appState.expression = 'blank';
					$appState.dialogue = level;
				}}
				class="no-underline cursor-pointer bg-white hover:border-stone-700 m-4 p-8 border-4 border-stone-200 shadow flex flex-col gap-4 rounded-xl transition-all duration-200 text-center hover:scale-110"
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
		</a>
	{/each}
</div>
