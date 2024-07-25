<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';

	import genderVideo from '$lib/assets/videos/gender.mp4';
	import genderCaption from '$lib/assets/videos/gender.vtt';
	import transgenderVideo from '$lib/assets/videos/transgenders.mp4';
	import Paper from '$lib/components/Paper.svelte';

	let online = false;
	onMount(() => {
		online = window.navigator.onLine;
		$appState.pattern = '/patterns/step-4.svg';
		$appState.dialogue = 'Video time! 🍿';
		$appState.title = '✨ Step 4 : Get Inspired !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-4/quiz';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-4/step-5';
	});
</script>

<Paper title="Transgenders">
	<p>Here’s a quick video on gender.</p>

	{#if online}
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/PzGauky20tc?si=eBUYWjO4aFucERJI"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	{:else}
		<video class="rounded-xl" id="video" controls preload="metadata">
			<source src={genderVideo} type="video/mp4" />
			<track label="English" kind="captions" srclang="en" src={genderCaption} default />
		</video>
	{/if}

	<p>
		Transgenders are often stereotyped as sex workers or beggars. This video shatters some commonly
		held myths.
	</p>

	{#if online}
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/xtuRw25r9xQ?si=kn_RcKYGJuYSBQnN"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	{:else}
		<video class="rounded-xl" id="video" controls preload="metadata">
			<source src={transgenderVideo} type="video/mp4" />
		</video>
	{/if}
</Paper>
