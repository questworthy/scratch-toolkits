<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import SvelteMarkdown from 'svelte-markdown';

	onMount(() => {
		$appState.dialogue = 'Do you know someone around you who has broken a gender stereotype?';
		$appState.title = 'Step 3';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-1/step-2';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-1/quiz';
	});
</script>

<div class="max-w-screen-sm mx-auto">
	<SvelteMarkdown
		source={`
Here is a video about a woman who challenged some stereotypes and rose above them. Meet Ms. Sujata Ramdorai  in the video ‘Sujata Ramdorai and her tale of numbers!’ 🚀
`}
	/>
	<iframe
		width="560"
		height="315"
		src="https://www.youtube.com/embed/--LI0ZRsglg?si=q7IEMfL6e--_pr2D"
		title="YouTube video player"
		frameborder="0"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
		referrerpolicy="strict-origin-when-cross-origin"
		allowfullscreen
	></iframe>
</div>
