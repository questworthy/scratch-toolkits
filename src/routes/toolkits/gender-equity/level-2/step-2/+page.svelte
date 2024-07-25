<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.pattern = '/patterns/step-2.svg';
		$appState.dialogue = 'Learn more about gender stereotypes! 📖';
		$appState.title = '💭 Step 2 : Think !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-2/step-1';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-2/step-3';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>
		Think of gender stereotypes at work as invisible rules. They tell us which jobs are “for boys”
		or “for girls.” But guess what? These rules don’t always fit! Boys can be nurses, and girls can
		be engineers. Let’s challenge these ideas.
	</p>
	<p>Why Do They Matter at Work?</p>
	<ol>
		<li>
			Job Expectations: When we think of certain jobs as “for boys” or “for girls,” it affects how
			we treat people in those roles. For example, if we assume only women can be nurses, male
			nurses might face bias.
		</li>
		<li>
			Breaking Barriers: Some jobs are still divided by gender. We need to break these barriers.
			Everyone should have an equal opportunity to pursue any career they want.
		</li>
	</ol>

	<p>💭 Did you know ?</p>
	<div class="flex md:flex-row flex-col gap-4">
		<div class="bg-sky-200 border-2 border-sky-400 p-2 rounded-xl">
			<p class="text-center">
				The original jeans were designed as durable workwear for labourers, especially miners since
				the sturdy fabric was ideal for tough working conditions. Jeans are now seen as a symbol of
				Western influence. In many Indian households this has led to protest against jeans,
				especially for women and girls.
			</p>
		</div>

		<div class="bg-red-200 border-2 border-red-400 p-2 rounded-xl">
			<p class="text-center">
				High heels were invented by Persian soldiers and adopted by elite European men around 1600.
				A century later, they had become women’s fashion.
			</p>
		</div>
	</div>
</div>
