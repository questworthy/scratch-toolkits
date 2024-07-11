<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	onMount(() => {
		$appState.dialogue =
			'Do you know what is a stereotype ?  Gender stereotypes can be limiting and harmful. ';
		$appState.title = 'Step 2';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-1/step-1';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-1/step-3';
	});
</script>

<div class="max-w-screen-sm mx-auto">
	<SvelteMarkdown
		source={`


What is a stereotype? 

Do you remember in Rani’s story how confidently the mother said ‘Strong boys don’t cry’ when Aryan was hurt? Or how Priya casually expressed her thought that maybe subjects like Maths and Science are not meant for girls?

Do you think these statements were made on the basis of any scientific proof OR were they coming purely from societal expectations of how certain things should be?

A stereotype is an over-generalised belief about a particular category of people. It is an expectation that people might have about every person of a particular group.


The most common stereotype that affects us most often is the **gender stereotype**. Gender stereotypes are biased ideas by which males and females are randomly assigned characteristics and roles determined and limited by their gender.

But, remember,


IT IS IMPORTANT TO EDUCATE OURSELVES ABOUT THESE BELIEFS BECAUSE

> WE 

>MAKE

> THE

> SOCIETY
`}
	/>
</div>
