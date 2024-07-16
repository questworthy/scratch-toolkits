<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	onMount(() => {
		$appState.dialogue =
			'Do you understand the concept of gender roles and would you challenge them?';
		$appState.title = '💭 Step 2 : Think !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-3/step-1';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-3/step-3';
	});
</script>

<div class="max-w-screen-sm mx-auto prose-xl">
	<p>
		The terms sex and gender are often used interchangeably, inaccurately combining two very
		different concepts. Let us look into their definitions once more:
	</p>

	<ol>
		<li>
			<strong>Gender</strong>: Gender is about how you feel inside (identity), how you show yourself
			to others (social gender), and how your body looks (body). Gender is thus the socio-cultural
			definition of a girl/ boy, man/ woman given by the society.
		</li>
		<li>
			<strong>Sex</strong> : When a baby is born, doctors usually say they are a boy or a girl based
			on how their body looks.
		</li>
	</ol>

	<p>
		Gender roles are rules about how people should act and what they should wear or how they should
		behave. They also decide what jobs are okay for boys or girls, and how power works in society.
		These rules are everywhere, like in schools, communities and other systems.
	</p>
</div>
