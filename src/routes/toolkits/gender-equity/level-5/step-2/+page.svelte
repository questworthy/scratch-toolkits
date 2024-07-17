<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.dialogue = 'what do you think about equity and equality? 💬';
		$appState.title = '💭 Step 2 : Think !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-5/step-1';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-5/step-3';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>What truly is the meaning of <strong>Equity</strong>?</p>

	<p>
		There are two words that sound very similar to each other <strong>Equity</strong> and
		<strong>Equality</strong> ? Can you tell the difference?
	</p>

	<img class="rounded-xl h-80" src="/equality-equity.png" alt="" />

	<ul>
		<li>
			<p>
				<strong> Equality </strong>
				means each individual or group of people is given the same resources or opportunities.
			</p>
		</li>
		<li>
			<p>
				<strong>Equity</strong> recognizes that each person has different circumstances and provides
				the exact resources and opportunities needed to reach an equal outcome.
			</p>
		</li>
	</ul>

	<p>
		This concept applies to almost every sphere of life and not just around gender. Gender equity
		leads to actual gender equality!
	</p>
</div>
