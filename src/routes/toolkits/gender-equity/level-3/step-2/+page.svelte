<script>
	import Paper from '$lib/components/Paper.svelte';
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.pattern = '/patterns/step-2.svg';
		$appState.dialogue =
			'Do you understand the concept of gender roles and would you challenge them?';
		$appState.title = '💭 Step 2 : Think !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-3/step-1';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-3/step-3';
	});
</script>

<Paper title="Sex != Gender">
	<p>
		The terms sex and gender are often used interchangeably, inaccurately combining two very
		different concepts. Let us look into their definitions once more:
	</p>

	<ol>
		<li>
			<strong>Sex</strong> : When a baby is born, doctors usually say whether they are a boy, girl or
			the third gender based on how their private parts look like.
		</li>

		<li>
			<strong>Gender</strong>: Gender is about how you feel inside, how you act with others, and how
			your body looks. It's what society says makes you a girl, boy, man, or woman.
		</li>
	</ol>

	<p>
		Gender roles are rules about how people should act and what they should wear or how they should
		behave. They also decide what jobs are okay for boys or girls, and how power works in society.
		These rules are everywhere, like in schools, communities and other systems.
	</p>
</Paper>
