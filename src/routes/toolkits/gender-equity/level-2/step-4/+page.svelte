<script>
	import { appState } from '$lib/stores';
	import { onMount } from 'svelte';
	import video from '$lib/assets/videos/padman.mp4';
	import caption from '$lib/assets/videos/padman.vtt';
	import Paper from '$lib/components/Paper.svelte';

	let online = false;
	onMount(() => {
		online = window.navigator.onLine;
		$appState.pattern = '/patterns/step-4.svg';
		$appState.dialogue = 'Do you know someone around you who has broken a gender stereotype?';
		$appState.title = '✨ Step 4 : Get Inspired !';
		$appState.leftButtonLink = '/toolkits/gender-equity/level-2/quiz';
		$appState.rightButtonLink = '/toolkits/gender-equity/level-2/step-5';
	});
</script>

<Paper title="Meet Padman">
	{#if online}
		<iframe
			width="560"
			height="315"
			src="https://www.youtube.com/embed/8pnp-mu_800?si=bti68v5Ud2qx85MX"
			title="YouTube video player"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			referrerpolicy="strict-origin-when-cross-origin"
			allowfullscreen
		></iframe>
	{:else}
		<video autoplay class="rounded-xl" id="video" controls preload="metadata">
			<source src={video} type="video/mp4" />
			<track label="English" kind="captions" srclang="en" src={caption} default />
		</video>
	{/if}

	<p>
		As we celebrate women breaking stereotypes, let us now look at a man who fought against all odds
		for the betterment of women’s lives. Watch the inspiring journeys and words of advice from of a
		man who has changed menstrual hygiene for women the ‘Padman’ Arunachalam Muruganantham. With
		much effort and shattering of stereotypes, he made low-cost sanitary napkins for women in rural
		areas.
	</p>
</Paper>
